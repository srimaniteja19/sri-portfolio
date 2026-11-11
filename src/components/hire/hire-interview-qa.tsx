"use client";

import { useState } from "react";

const IQ_DATA = [
  {
    tab: 0,
    q: "Tell me about yourself",
    a: "I'm a Software Engineer at Rivian and full-stack AI engineer with 4+ years of production experience and an M.S. in Data Science from the University at Buffalo. Across enterprise work and independent builds like Hoard and Refrainly, I specialize in shipping end-to-end TypeScript/Next.js applications, RAG search pipelines, and distributed backend services.",
  },
  {
    tab: 0,
    q: "What have you shipped recently?",
    a: "In 2026 alone I've shipped 12 repositories and 8 live production apps — most notably Hoard (a contextual bookmark manager & creator studio with semantic vector search, Kanban pipeline, and a Chrome extension) and Refrainly (AI-generated daily learning campaigns up to 730 days with spaced repetition and Stripe billing).",
  },
  {
    tab: 0,
    q: "What's a high-impact system you built in production?",
    a: "For Goodyear's 10M+ tire catalog, I took the problem 'customers can't find the right tire' and shipped a semantic search and personalized ranking system on AWS Bedrock and LlamaIndex in 8 weeks — driving a +15% lift in ecommerce conversion with sub-800ms p95 latency.",
  },
  {
    tab: 0,
    q: "Describe a challenging cross-functional problem",
    a: "When building an automated FP&A variance triage suite with LangGraph, the hardest part wasn't the model — it was earning analyst trust. I added source citations, confidence thresholds, and a human-in-the-loop review step, taking adoption from 0% to automating 60% of daily manual triage.",
  },
  {
    tab: 1,
    q: "How do you architect RAG in production?",
    a: "Semantic chunking with document metadata preserved, hybrid retrieval (dense vector embeddings + BM25 lexical search), and a cross-encoder or LLM reranker before passing top-k context to the generator. I enforce structured outputs with Zod/Pydantic and measure faithfulness and recall continuously.",
  },
  {
    tab: 1,
    q: "Next.js App Router vs SPA — how do you choose?",
    a: "I default to Next.js 16 with React 19 Server Components and Server Actions so data fetching happens close to the database (Neon Postgres / Drizzle) and client JS stays minimal. Interactive islands like canvas tools or drag-and-drop boards hydrate selectively on the client.",
  },
  {
    tab: 1,
    q: "How do you diagnose and fix a slow API?",
    a: "Measure p95/p99 first to isolate DB queries, network I/O, serialization, or LLM token latency. Add composite indexes and inspect EXPLAIN plans in Postgres, cache hot reads in Redis, stream LLM responses incrementally, and verify under load.",
  },
  {
    tab: 1,
    q: "Where has strict TypeScript saved you in production?",
    a: "End-to-end schema enforcement from Drizzle ORM tables through Zod API validators to React props catches contract drift at compile time — especially critical when orchestrating multi-step LLM tool calls and Stripe webhook payloads.",
  },
  {
    tab: 2,
    q: "Design a distributed rate limiter",
    a: "In Rate Limiter X (Java 21, Spring Boot, Redis), I implemented 5 algorithms — Token Bucket, Sliding Window, Fixed Window, Leaky Bucket, and Composite — backed by atomic Redis Lua scripts to guarantee thread safety across nodes at 50k+ req/sec with <2ms p95 latency.",
  },
  {
    tab: 2,
    q: "Design a catalog recommendation & search engine",
    a: "1) Ingest catalog updates into Postgres and generate embeddings asynchronously. 2) Query pipeline: embed user intent -> hybrid vector + keyword retrieval -> business-rule filter (inventory/fitment) -> reranker. 3) Cache frequent queries in Redis and log click-through conversions for evaluation.",
  },
  {
    tab: 3,
    q: "When do you use LangGraph vs linear chains?",
    a: "Linear chains work well for single-pass retrieve-and-summarize tasks. I use LangGraph when the workflow requires cycles, state persistence, conditional branching, tool retries, or human-in-the-loop approval gates.",
  },
  {
    tab: 3,
    q: "How do you evaluate LLM output quality?",
    a: "Offline golden datasets scored for retrieval recall, groundedness, and schema validity, combined with production sampling, latency/cost tracking, and direct user feedback signals (accepted vs edited outputs).",
  },
  {
    tab: 3,
    q: "RAG vs fine-tuning — how do you decide?",
    a: "Start with RAG whenever facts change frequently, access control matters, or you need verifiable citations. Fine-tune only when you need a smaller model to reliably follow a specialized output format or domain style after prompting and retrieval are saturated.",
  },
  {
    tab: 3,
    q: "How do you prevent hallucinations in user-facing AI?",
    a: "Strict retrieval grounding, schema-validated structured outputs (Zod), explicit abstention instructions when context is insufficient, and linking every claim back to its source chunk.",
  },
];

const TABS = ["Background", "Full-Stack", "System Design", "AI & LLM"];

export function HireInterviewQA() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const questions = IQ_DATA.filter((q) => q.tab === tab);
  const current = questions[selected] ?? questions[0];

  const copyAnswer = () => {
    if (!current) return;
    navigator.clipboard?.writeText(current.a);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="nb-box"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          {/* Category Tabs */}
          <div
            className="flex flex-wrap border-b-[2.5px]"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface)",
            }}
          >
            {TABS.map((t, i) => {
              const isActive = i === tab;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTab(i);
                    setSelected(0);
                  }}
                  className="cursor-pointer border-r-2 px-6 py-3.5 font-data text-[0.74rem] font-bold uppercase transition-colors"
                  style={{
                    borderColor: "var(--ink)",
                    background: isActive ? "var(--ink)" : "transparent",
                    color: isActive ? "var(--bg)" : "var(--ink)",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {/* Split Question List & Answer Pane */}
          <div
            className="grid grid-cols-1 divide-y-[2.5px] lg:grid-cols-[360px_1fr] lg:divide-x-[2.5px] lg:divide-y-0"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
              {questions.map((q, i) => {
                const isSelected = selected === i;
                return (
                  <button
                    key={q.q}
                    type="button"
                    onClick={() => setSelected(i)}
                    className="cursor-pointer flex w-full items-center justify-between gap-3 p-4 text-left font-data text-[0.74rem] font-bold leading-snug transition-colors"
                    style={{
                      background: isSelected ? "var(--volt)" : "var(--bg)",
                      color: isSelected ? "#0B0F17" : "var(--ink)",
                    }}
                  >
                    <span>{q.q}</span>
                    <span className="shrink-0 tabular-nums">0{i + 1}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8">
              {current && (
                <>
                  <div>
                    <h3
                      className="font-display text-[1.75rem] font-black uppercase leading-none"
                      style={{ color: "var(--ink)" }}
                    >
                      {current.q}
                    </h3>
                    <p
                      className="mt-4 max-w-[68ch] border-l-[3px] pl-4 text-[0.95rem] leading-[1.65]"
                      style={{
                        borderColor: "var(--signal)",
                        color: "var(--ink)",
                      }}
                    >
                      {current.a}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-end border-t pt-4" style={{ borderColor: "var(--rule)" }}>
                    <button
                      type="button"
                      onClick={copyAnswer}
                      className="nb-btn cursor-pointer px-3.5 py-1.5 text-[0.68rem]"
                      style={{
                        background: copied ? "var(--emerald)" : "var(--surface)",
                        color: "#0B0F17",
                      }}
                    >
                      {copied ? "Copied Answer" : "Copy Answer"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
