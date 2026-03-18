import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = "4cce1a0999ff4b499dbe406b7f535186";
const CRON_SECRET = process.env.CRON_SECRET;
const resend = new Resend(process.env.RESEND_API_KEY);

interface NotionPage {
  id: string;
  properties: {
    Email?: { email: string | null };
    Language?: { select: { name: string } | null };
    Source?: { select: { name: string } | null };
  };
}

/**
 * Fetch all newsletter subscribers from Notion, optionally filtered by language.
 */
async function getSubscribers(language?: string): Promise<string[]> {
  const emails: string[] = [];
  let cursor: string | undefined;

  do {
    const body: Record<string, unknown> = {
      filter: {
        and: [
          {
            property: "Source",
            select: { equals: "Newsletter" },
          },
          ...(language
            ? [{ property: "Language", select: { equals: language } }]
            : []),
        ],
      },
      page_size: 100,
    };

    if (cursor) body.start_cursor = cursor;

    const res = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(`Notion query failed: ${JSON.stringify(err)}`);
    }

    const data = await res.json();
    const pages: NotionPage[] = data.results;

    for (const page of pages) {
      const email = page.properties.Email?.email;
      if (email) emails.push(email);
    }

    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return emails;
}

/**
 * POST /api/newsletter/send
 *
 * Body:
 *   subject      — Email subject line
 *   htmlContent  — Full HTML body of the newsletter
 *   language     — (optional) "fr" | "en" | "es" — targets only this segment.
 *                  Omit to send to ALL subscribers.
 *   previewText  — (optional) Preview text shown in inbox
 *
 * Security:
 *   Requires header  Authorization: Bearer <CRON_SECRET>
 *   Set CRON_SECRET in Vercel environment variables.
 */
export async function POST(req: NextRequest) {
  // --- Auth ---
  if (CRON_SECRET) {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  if (!NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion API key not configured" },
      { status: 500 }
    );
  }

  let body: {
    subject?: string;
    htmlContent?: string;
    language?: string;
    previewText?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { subject, htmlContent, language, previewText } = body;

  if (!subject || !htmlContent) {
    return NextResponse.json(
      { error: "subject and htmlContent are required" },
      { status: 400 }
    );
  }

  // --- Fetch subscribers ---
  let subscribers: string[];
  try {
    subscribers = await getSubscribers(language);
  } catch (err) {
    console.error("Failed to fetch subscribers:", err);
    return NextResponse.json(
      { error: "Failed to fetch subscribers from Notion" },
      { status: 500 }
    );
  }

  if (subscribers.length === 0) {
    return NextResponse.json({
      success: true,
      sent: 0,
      message: "No subscribers found for this segment.",
    });
  }

  // --- Build HTML with optional preview text ---
  const fullHtml = previewText
    ? `<div style="display:none;max-height:0;overflow:hidden;">${previewText}</div>${htmlContent}`
    : htmlContent;

  // --- Send in batches of 50 (Resend batch limit) ---
  const BATCH_SIZE = 50;
  let totalSent = 0;
  const errors: string[] = [];

  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const messages = batch.map((to) => ({
      from: "Matthieu de Villèle <bonjour@matthieudevillele.com>",
      to,
      subject,
      html: fullHtml,
    }));

    try {
      await resend.batch.send(messages);
      totalSent += batch.length;
    } catch (err) {
      console.error(`Batch ${i / BATCH_SIZE + 1} failed:`, err);
      errors.push(`Batch starting at index ${i} failed`);
    }
  }

  return NextResponse.json({
    success: errors.length === 0,
    sent: totalSent,
    total: subscribers.length,
    language: language ?? "all",
    errors: errors.length > 0 ? errors : undefined,
  });
}
