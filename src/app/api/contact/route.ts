import { NextRequest, NextResponse } from "next/server";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = "4cce1a0999ff4b499dbe406b7f535186";

// Map form budget values to Notion select options
const BUDGET_MAP: Record<string, string> = {
  lt2k: "< 2k",
  "2k5k": "2k-5k",
  "5k10k": "5k-15k",
  "10kPlus": "15k+",
  retainer: "15k+",
};

export async function POST(req: NextRequest) {
  if (!NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion API key not configured" },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; budget?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, budget, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const notionBudget = budget ? BUDGET_MAP[budget] : undefined;

  const notionBody: Record<string, unknown> = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [{ text: { content: name } }],
      },
      Email: {
        email: email,
      },
      Source: {
        select: { name: "Website" },
      },
      Stage: {
        select: { name: "Cold Lead" },
      },
      ...(notionBudget && {
        Budget: {
          select: { name: notionBudget },
        },
      }),
      ...(message && {
        Notes: {
          rich_text: [{ text: { content: message } }],
        },
      }),
    },
  };

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(notionBody),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to save to Notion" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
