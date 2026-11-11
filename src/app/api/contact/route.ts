import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE, isPlaceholder } from "@/config/site";

export const runtime = "nodejs";

const NOTION_DATABASE_ID = "4cce1a0999ff4b499dbe406b7f535186";
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_BODY_BYTES = 10_000;

// Limite de débit en mémoire : freine les rafales, pas un dispositif distribué.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n\t]+/g, " ").trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function saveToNotion(lead: Lead): Promise<boolean> {
  const key = process.env.NOTION_API_KEY;
  if (!key) return false;
  const notes = [lead.phone && `Tél : ${lead.phone}`, lead.message].filter(Boolean).join("\n").slice(0, 1900);
  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: lead.name } }] },
          Email: { email: lead.email },
          Source: { select: { name: "Website" } },
          Stage: { select: { name: "Cold Lead" } },
          Notes: { rich_text: [{ text: { content: notes } }] },
        },
      }),
    });
    if (!res.ok) console.error("Notion error", res.status);
    return res.ok;
  } catch (e) {
    console.error("Notion error", e);
    return false;
  }
}

async function notifyOwner(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || SITE.email;
  if (!key || isPlaceholder(to)) return false;
  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: `${SITE.name} <bonjour@matthieudevillele.com>`,
      to,
      replyTo: lead.email,
      subject: `Nouveau message de ${lead.name}`,
      html: `<p><strong>${escapeHtml(lead.name)}</strong> (${escapeHtml(lead.email)}${
        lead.phone ? `, ${escapeHtml(lead.phone)}` : ""
      })</p><p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>`,
    });
    if (error) console.error("Resend error", error.name);
    return !error;
  } catch (e) {
    console.error("Resend error", e);
    return false;
  }
}

type Lead = { name: string; email: string; phone: string; message: string };

export async function POST(req: NextRequest) {
  // Sur Vercel, x-forwarded-for est écrasé par la plateforme : il porte l'IP du client.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  // Corps borné avant analyse, puis forme vérifiée : un `null`, un tableau ou un scalaire est refusé.
  const declared = Number(req.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }
  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "too_large" }, { status: 413 });
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Robots : champ piège rempli ou formulaire envoyé trop vite. Réponse neutre.
  const elapsed = Number(body.elapsed);
  if (clean(body.company, 50) || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return NextResponse.json({ success: true });
  }

  const lead: Lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    message: typeof body.message === "string" ? body.message.trim().slice(0, 3000) : "",
  };

  if (body.consent !== true || !lead.name || !lead.message || !EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const [saved, notified] = await Promise.all([saveToNotion(lead), notifyOwner(lead)]);
  if (!saved && !notified) return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  return NextResponse.json({ success: true });
}
