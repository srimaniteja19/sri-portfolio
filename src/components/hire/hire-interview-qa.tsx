"use client";

import { useState } from "react";

const IQ_DATA = [
  { tab: 0, q: "Tell me about yourself", a: "I'm an AI consultant and full-stack engineer with 4+ years building production systems. Currently at RealFlex building LLM-powered ecommerce and finance tools for Goodyear — shipping a RAG-based recommendation engine (+15% conversion) and a GenAI finance suite (-60% manual triage). M.S. Data Science from University at Buffalo." },
  { tab: 0, q: "Why are you leaving your current role?", a: "I've built two major production AI systems at RealFlex and I'm ready for a bigger stage — a team where I can lead AI architecture, work with more data, and go deeper on LLM engineering." },
  { tab: 0, q: "What's your biggest achievement?", a: "The Goodyear RAG pipeline. I took a cold problem — 'customers can't find the right tire' — and shipped a full semantic search + personalized ranking system on AWS Bedrock in 8 weeks. +15% ecommerce conversion on a large-scale retailer." },
  { tab: 0, q: "Describe a challenging project", a: "The GenAI Finance Suite. The hardest part wasn't the AI — it was getting FP&A analysts to trust it. I built explainability layers, human-in-loop review, and shipped incrementally. Went from 0% adoption to replacing 60% of manual triage." },
  { tab: 1, q: "How does RAG work?", a: "Retrieval-Augmented Generation: chunk documents, embed as vectors, store in a vector DB. At query time, embed the question, find k-nearest chunks, pass as context to the LLM. The model generates answers grounded in retrieved docs rather than hallucinating." },
  { tab: 1, q: "Next.js vs React — when do you pick which?", a: "Next.js for anything needing SSR, SSG, API routes, or SEO. React standalone only for pure SPAs. I default to Next.js 14 with App Router for server components and smaller bundles." },
  { tab: 1, q: "How would you optimize a slow API?", a: "Profile first: DB queries, network, compute, or serialization. Add indexes and EXPLAIN for DB. Redis caching for read-heavy. Connection pooling. Queue for compute-heavy. Paginate and compress payloads. Measure with k6 or Artillery." },
  { tab: 1, q: "TypeScript benefits you've seen?", a: "Caught a critical bug where a string product ID was passed to a function expecting numeric — would have corrupted recommendations in prod. Autocomplete in complex LangChain pipelines saves hours." },
  { tab: 2, q: "Design a recommendation system", a: "1) Data: product catalog in PostgreSQL, user events in a stream. 2) Embeddings: chunk products, generate embeddings, store in Pinecone. 3) Retrieval: user query → embed → vector search → top-k. 4) Ranking: ML model or LLM reranker. 5) Serving: API route + Redis cache. 6) Feedback loop for retraining." },
  { tab: 2, q: "Design a real-time chat system", a: "WebSockets for real-time. Messages in PostgreSQL. Redis pub/sub to broadcast across instances. Message queue for delivery guarantees. Shard by room_id for scale." },
  { tab: 3, q: "What's the difference between LangChain and LangGraph?", a: "LangChain is for linear chains. LangGraph is for stateful, cyclical agent workflows where the graph can loop, branch, and maintain state. I use LangGraph for complex agents and LangChain for simpler RAG pipelines." },
  { tab: 3, q: "How do you evaluate LLM output quality?", a: "RAGAS for RAG (faithfulness, relevance, context precision). LLM-as-judge for free-form. Pydantic validation for structured outputs. Production: log samples + human spot-check. A/B test prompts with business metrics." },
  { tab: 3, q: "RAG vs fine-tuning — when to use each?", a: "RAG when knowledge changes frequently or you need citations. Fine-tuning for specific tone/format/domain vocabulary when data is stable. RAG first, always. Fine-tune only after RAG hits a ceiling." },
  { tab: 3, q: "How do you handle LLM hallucinations in prod?", a: "Structured outputs with Pydantic + retry. Retrieval grounding. Confidence scoring with fallback. Human-in-loop for high-stakes. Production logging + anomaly detection." },
];

const TABS = ["behavioral", "technical", "system design", "ai / llm"];

export function HireInterviewQA() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const questions = IQ_DATA.filter((q) => q.tab === tab);
  const current = selected !== null ? questions[selected] : null;

  return (
    <div className="border-b" style={{ borderColor: "var(--ink)" }}>
      <div className="flex overflow-x-auto border-b-2" style={{ borderColor: "var(--ink)" }}>
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => { setTab(i); setSelected(null); }}
            className="whitespace-nowrap border-r-2 border-[var(--ink)] px-5 py-3 text-[0.62rem] font-bold uppercase transition"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", background: i === tab ? "var(--ink)" : "transparent", color: i === tab ? "var(--bg)" : "var(--ink)" }}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-[260px_1fr]" style={{ minHeight: 220 }}>
        <div className="max-h-[280px] overflow-y-auto border-r-2" style={{ borderColor: "var(--ink)" }}>
          {questions.map((q, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="w-full border-b p-4 text-left text-[0.72rem] font-medium leading-snug transition hover:bg-[rgba(10,10,9,0.04)]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "rgba(10,10,9,.07)", background: selected === i ? "rgba(10,10,9,.06)" : "transparent" }}
            >
              {q.q}
            </button>
          ))}
        </div>
        <div className="p-5 text-[0.76rem] leading-relaxed" style={{ color: "var(--dim)" }}>
          {current ? (
            <>
              <div className="mb-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>Q: {current.q}</div>
              <div className="border-l-[3px] border-[var(--mint)] pl-4" style={{ color: "var(--ink)" }}>{current.a}</div>
              <button
                onClick={() => navigator.clipboard?.writeText(current.a)}
                className="mt-3 rounded border-[1.5px] border-[var(--ink)] px-2.5 py-1 text-[0.54rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                copy answer
              </button>
            </>
          ) : (
            "← click a question"
          )}
        </div>
      </div>
    </div>
  );
}
