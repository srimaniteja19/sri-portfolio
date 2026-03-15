import { NextRequest, NextResponse } from "next/server";
import { saveContent } from "@/lib/content";
import type { PortfolioContent } from "@/types/portfolio-content";

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice(7) === secret;
  }
  const cookie = req.cookies.get("admin_secret")?.value;
  return cookie === secret;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const result = await saveContent(body as PortfolioContent);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Admin content save error:", e);
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
}
