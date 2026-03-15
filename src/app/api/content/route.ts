import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const content = await getContent();
    return NextResponse.json(content);
  } catch (e) {
    console.error("Content API error:", e);
    return NextResponse.json({ error: "Failed to load content." }, { status: 500 });
  }
}
