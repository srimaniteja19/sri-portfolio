import { NextRequest, NextResponse } from "next/server";

const CONTEXT = `You are an AI assistant embedded in Sri Maniteja Chinnam's portfolio website. Your job is to help recruiters, hiring managers, and collaborators learn about Maniteja quickly and accurately.

KEY FACTS ABOUT MANITEJA:
- Full name: Sri Maniteja Chinnam
- Current role: Software Engineer at Rivian (Aug 2026–present)
- Previous experience: 4+ years across Full-Stack & AI Engineering (2023–2026, including enterprise AI consulting for Goodyear) and backend/cloud Software Engineering (2019–2023)
- Education: M.S. Data Science, University at Buffalo (SUNY); B.Tech Computer Science
- Location: United States (srimaniteja.ch@gmail.com | (716) 923-5404)

TECHNICAL STACK:
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, HTML5 Canvas, Server Actions
- AI/LLM: LangChain, LangGraph, LlamaIndex, AWS Bedrock, OpenRouter, Google Gemini, Claude, GPT-4o, RAG pipelines, semantic vector search, AI agents
- Data & Backend: Node.js, Python, Java 21 / Spring Boot, PostgreSQL, Neon Serverless, Drizzle ORM, Redis, Pinecone
- Infra & Tooling: Docker, Kubernetes, CI/CD, AWS, Vercel, Stripe Webhooks, Better Auth

SHIPPED 2026 PROJECTS & ENTERPRISE IMPACT:
1. Hoard (hoard-ten.vercel.app | github.com/srimaniteja19/Hoard): Contextual bookmark manager & creator studio for articles, videos, repos, and papers with semantic vector search, series roadmaps, Kanban pipeline, PWA offline caching, and a Manifest V3 browser extension (Next.js 16, React 19, Neon Postgres, Drizzle ORM, AI SDK).
2. Refrainly (refrainly.dev | github.com/srimaniteja19/365DayLearning): AI-generated daily learning campaigns up to 730 days, spaced repetition on a 7/30/90/180-day ladder, XP & badges, Field Kit, and Stripe subscriptions (Next.js 16, React 19, Neon Postgres, Drizzle, OpenRouter).
3. Mission: Debt Zero / MyDebtt (my-debtt.vercel.app): Interactive debt payoff accelerator, strategy simulator, and financial analytics PWA.
4. Rate Limiter X (github.com/srimaniteja19/rate-limiter-x): High-performance Redis-backed distributed rate limiter in Java 21 & Spring Boot supporting 5 algorithms with adaptive traffic shaping and 472+ tests.
5. Additional 2026 builds: ReadThenDo (readthendo.vercel.app), RoleWeaver (roleweaver.vercel.app), GenAI Concepts Explainer, DevPath AI, and Dev Job Board.
6. Enterprise Impact: Built production RAG pipeline for 10M+ product catalog on AWS Bedrock (+15% ecommerce conversion, <800ms p95 latency); automated 60% of manual FP&A finance triage with LangGraph agents; cut ecommerce frontend bundle size by 40% (94 Lighthouse score).

Keep answers concise (2-4 sentences max unless asked for detail). Be direct, concrete, and helpful.`;

const MAX_BODY_BYTES = 50_000; // ~50KB to avoid huge payloads

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Request body too large." },
        { status: 413 }
      );
    }
    let body: { type?: string; message?: string; jd?: string };
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }
    const { type, message, jd } = body;
    const allowedTypes = ["chat", "jd-analyze", "jd-pitch"];
    if (!type || !allowedTypes.includes(String(type))) {
      return NextResponse.json(
        { error: "Invalid or missing type. Use: chat, jd-analyze, jd-pitch." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured. Add it to .env.local for AI features." },
        { status: 503 }
      );
    }

    const safeStr = (v: unknown, max: number) =>
      typeof v === "string" ? v.slice(0, max) : "";
    let systemPrompt = CONTEXT;
    let userMessage: string;

    if (type === "chat") {
      userMessage = safeStr(message, 4000) || "Hello, what would you like to know?";
    } else if (type === "jd-analyze") {
      systemPrompt = `${CONTEXT}\n\nAnalyze job descriptions and tell recruiters how well Maniteja matches. Use 3 bullet points. Be specific about matches and gaps.`;
      userMessage = `Analyze this job description and tell me in 3 bullet points how well Maniteja's profile matches it. Be specific about what matches and what gaps exist. JD:\n\n${safeStr(jd ?? message, 1200)}`;
    } else {
      systemPrompt = `${CONTEXT}\n\nWrite short, natural cover letter openings. Sound like a real developer, not a robot. Reference actual experience.`;
      userMessage = `Write a 3-sentence personalized cover letter opening for Maniteja applying to this role. Make it specific to the JD, reference his actual experience, and sound like a real developer. JD:\n\n${safeStr(jd ?? message, 800)}`;
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: {
            maxOutputTokens: 600,
            temperature: 0.6,
          },
        }),
      }
    );

    const data = await res.json();
    const rawText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.error?.message ||
      "Sorry, something went wrong.";
    const text = typeof rawText === "string" ? rawText.slice(0, 4000) : String(rawText);

    return NextResponse.json({ text });
  } catch (e) {
    console.error("LLM API error:", e);
    return NextResponse.json(
      { error: "API error. Check GEMINI_API_KEY or try again later." },
      { status: 500 }
    );
  }
}
