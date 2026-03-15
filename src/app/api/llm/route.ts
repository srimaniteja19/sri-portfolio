import { NextRequest, NextResponse } from "next/server";

const CONTEXT = `You are an AI assistant embedded in Maniteja's portfolio website. Your job is to help recruiters and hiring managers learn about Maniteja quickly and accurately.

KEY FACTS ABOUT MANITEJA:
- Full name: Maniteja (Sri Maniteja Chaturvedula)
- Current role: AI Consultant at RealFlex, client is Goodyear (2023–present)
- Education: M.S. Data Science, University at Buffalo
- Location: New York, NY. Open to relocation.
- Experience: 4+ years software engineering, 2+ years AI consulting
- Status: ACTIVELY looking for new roles (senior AI/LLM engineer, AI consultant, full-stack)

TECHNICAL STACK:
- Frontend: Next.js 14, TypeScript, React, Tailwind CSS, Vue
- Backend: Node.js, Python, PostgreSQL, Redis, REST APIs
- AI/LLM: LangChain, LangGraph, LlamaIndex, AWS Bedrock, Claude 3, GPT-4o, RAG pipelines, Pinecone, semantic search, AI agents
- Infra: Docker, Kubernetes, CI/CD, AWS, Vercel

KEY PROJECTS & IMPACT:
1. Goodyear Recommendation Engine: LLM-based tire recommendation. +15% ecommerce conversion. Stack: AWS Bedrock, Claude 3, LangChain, PostgreSQL, LlamaIndex.
2. GenAI Finance Suite: Variance explanation for FP&A. -60% manual triage. Stack: GPT-4o, LangGraph, REST APIs.
3. DevPath AI (side project): Self-learning platform with Gemini API + RAG. Stack: Next.js, TypeScript, Gemini.

Keep answers concise (2-4 sentences max unless asked for detail). Be direct and helpful.`;

export async function POST(req: NextRequest) {
  try {
    const { type, message, jd } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured. Add it to .env.local for AI features." },
        { status: 503 }
      );
    }

    let systemPrompt = CONTEXT;
    let userMessage = message;

    if (type === "chat") {
      userMessage = message;
    } else if (type === "jd-analyze") {
      systemPrompt = `${CONTEXT}\n\nAnalyze job descriptions and tell recruiters how well Maniteja matches. Use 3 bullet points. Be specific about matches and gaps.`;
      userMessage = `Analyze this job description and tell me in 3 bullet points how well Maniteja's profile matches it. Be specific about what matches and what gaps exist. JD:\n\n${(jd || message || "").slice(0, 1200)}`;
    } else if (type === "jd-pitch") {
      systemPrompt = `${CONTEXT}\n\nWrite short, natural cover letter openings. Sound like a real developer, not a robot. Reference actual experience.`;
      userMessage = `Write a 3-sentence personalized cover letter opening for Maniteja applying to this role. Make it specific to the JD, reference his actual experience, and sound like a real developer. JD:\n\n${(jd || message || "").slice(0, 800)}`;
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
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.error?.message ||
      "Sorry, something went wrong.";

    return NextResponse.json({ text });
  } catch (e) {
    console.error("LLM API error:", e);
    return NextResponse.json(
      { error: "API error. Check GEMINI_API_KEY or try again later." },
      { status: 500 }
    );
  }
}
