import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { welcomeEmail } from "@/lib/emails/welcome";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = "4cce1a0999ff4b499dbe406b7f535186";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (!NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion API key not configured" },
      { status: 500 }
    );
  }

  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // 1. Save to Notion
  const notionBody = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [{ text: { content: email } }],
      },
      Email: {
        email: email,
      },
      Source: {
        select: { name: "Newsletter" },
      },
      Stage: {
        select: { name: "Cold Lead" },
      },
    },
  };

  const notionResponse = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(notionBody),
  });

  if (!notionResponse.ok) {
    const error = await notionResponse.json();
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to save to Notion" },
      { status: 500 }
    );
  }

  // 2. Send welcome email via Resend
  const { subject, html } = welcomeEmail({ source: "newsletter" });

  try {
    await resend.emails.send({
      from: "Matthieu de Villèle <onboarding@resend.dev>",
      to: email,
      subject,
      html,
    });
  } catch (emailError) {
    // Email failure is non-blocking — lead is saved in Notion regardless
    console.error("Resend error:", emailError);
  }

  return NextResponse.json({ success: true });
}
