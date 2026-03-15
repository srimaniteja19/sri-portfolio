import type { PortfolioContent } from "@/types/portfolio-content";
import defaultContent from "@/data/portfolio-content.json";

const CONTENT_KEY = "portfolio-content";

async function getFromKV(): Promise<PortfolioContent | null> {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return null;
  }
  try {
    const { kv } = await import("@vercel/kv");
    const raw = await kv.get<string>(CONTENT_KEY);
    if (typeof raw === "string") {
      return JSON.parse(raw) as PortfolioContent;
    }
    return null;
  } catch {
    return null;
  }
}

function getFromFile(): PortfolioContent {
  return defaultContent as PortfolioContent;
}

async function getFromFileSync(): Promise<PortfolioContent | null> {
  if (typeof process === "undefined" || process.env.NODE_ENV !== "development") return null;
  try {
    const path = await import("path");
    const fs = await import("fs");
    const filePath = path.join(process.cwd(), "src/data/portfolio-content.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as PortfolioContent;
  } catch {
    return null;
  }
}

/** Get portfolio content: from KV if configured, else from file (dev) or bundled JSON. */
export async function getContent(): Promise<PortfolioContent> {
  const fromKV = await getFromKV();
  if (fromKV) return fromKV;
  const fromFile = await getFromFileSync();
  if (fromFile) return fromFile;
  return getFromFile();
}

/** Save portfolio content. Uses KV if configured; otherwise in dev writes to local file. */
export async function saveContent(content: PortfolioContent): Promise<{ ok: boolean; error?: string }> {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import("@vercel/kv");
      await kv.set(CONTENT_KEY, JSON.stringify(content, null, 2));
      return { ok: true };
    } catch (e) {
      console.error("KV save error:", e);
      return { ok: false, error: "Failed to save to database." };
    }
  }
  // Local dev: try writing to file (only works in Node, not on Vercel)
  if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
    try {
      const path = await import("path");
      const fs = await import("fs");
      const filePath = path.join(process.cwd(), "src/data/portfolio-content.json");
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2), "utf-8");
      return { ok: true };
    } catch (e) {
      console.error("File save error:", e);
      return { ok: false, error: "Could not write to file." };
    }
  }
  return {
    ok: false,
    error: "Vercel KV is not configured. Add a KV store in your Vercel project for production edits.",
  };
}
