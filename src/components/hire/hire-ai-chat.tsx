"use client";

import { useCallback, useRef, useState } from "react";

const QUICK_PROMPTS = [
  { label: "Rivian & Experience", msg: "Tell me about Maniteja's current role at Rivian and background." },
  { label: "LLM & RAG Systems", msg: "What is Maniteja's experience with LLMs, semantic search, and RAG?" },
  { label: "Shipped 2026 Projects", msg: "What projects has Maniteja shipped in 2026 (Hoard, Refrainly, etc.)?" },
  { label: "Tech Stack", msg: "What is Maniteja's full-stack and AI tech stack?" },
  { label: "Hoard & Refrainly", msg: "Tell me about Hoard and Refrainly." },
  { label: "Why Hire Him?", msg: "What makes Maniteja stand out as an engineer?" },
];

const QUICK_FACTS = [
  {
    label: "Current Role",
    value: "Software Engineer @ Rivian",
    sub: "EV & energy platforms · Full-stack & AI",
    accent: "var(--volt)",
  },
  {
    label: "Production Impact",
    value: "+15% RAG conversion · -60% manual triage · -40% bundle",
    sub: "10M+ product catalog search & LangGraph workflows",
    accent: "var(--emerald)",
  },
  {
    label: "2026 Flagship Builds",
    value: "Hoard, Refrainly, Mission: Debt Zero, Rate Limiter X",
    sub: "12 repositories · 8 live deployments",
    accent: "var(--surface)",
  },
  {
    label: "Core Stack",
    value: "Next.js 16 · React 19 · TypeScript · LangChain · Bedrock · Postgres · Redis",
    sub: "M.S. Data Science · University at Buffalo",
    accent: "var(--surface)",
  },
];

export function HireAIChat() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    {
      role: "bot",
      text: "Hi! I'm Maniteja's portfolio assistant. Ask me anything about his work at Rivian, shipped 2026 projects (Hoard, Refrainly, Rate Limiter X), production RAG/LLM architectures, or technical stack.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = useCallback(
    async (msg: string) => {
      if (!msg.trim() || loading) return;
      setMessages((m) => [...m, { role: "user", text: msg }]);
      setInput("");
      setLoading(true);
      try {
        const res = await fetch("/api/llm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "chat", message: msg }),
        });
        const data = await res.json();
        const reply =
          data.text ||
          (data.error ??
            "Sri Maniteja Chinnam is a Software Engineer at Rivian with 4+ years of full-stack & AI experience. Reach him at srimaniteja.ch@gmail.com.");
        setMessages((m) => [...m, { role: "bot", text: reply }]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: "Sri Maniteja Chinnam is a Software Engineer at Rivian with 4+ years of full-stack & AI experience. Email: srimaniteja.ch@gmail.com",
          },
        ]);
      } finally {
        setLoading(false);
        setTimeout(() => scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" }), 50);
      }
    },
    [loading]
  );

  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="nb-box grid grid-cols-1 lg:grid-cols-[1.35fr_2.5px_0.65fr]"
          style={{ borderColor: "var(--ink)" }}
        >
          {/* Left Chat Column */}
          <div className="flex flex-col justify-between" style={{ background: "var(--surface-elevated)" }}>
            {/* Messages Viewport */}
            <div
              ref={scrollRef}
              className="flex flex-col gap-4 overflow-y-auto p-6"
              style={{ minHeight: 360, maxHeight: 400 }}
            >
              {messages.map((m, i) => {
                const isBot = m.role === "bot";
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center border-2 font-data text-[0.68rem] font-bold uppercase"
                      style={{
                        borderColor: "var(--ink)",
                        background: isBot ? "var(--volt)" : "var(--signal)",
                        color: isBot ? "#111210" : "#FFFFFF",
                      }}
                    >
                      {isBot ? "AI" : "YOU"}
                    </div>
                    <div
                      className="max-w-[82%] border-2 p-4 text-[0.95rem] leading-[1.6]"
                      style={{
                        borderColor: "var(--ink)",
                        background: isBot ? "var(--bg)" : "var(--ink)",
                        color: isBot ? "var(--ink)" : "var(--bg)",
                        boxShadow: "2.5px 2.5px 0px var(--ink)",
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center border-2 font-data text-[0.68rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--volt)",
                      color: "#111210",
                    }}
                  >
                    AI
                  </div>
                  <div
                    className="border-2 px-4 py-3 font-data text-[0.68rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--bg)",
                      color: "var(--dim)",
                    }}
                  >
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts Bar */}
            <div
              className="flex flex-wrap gap-2 border-t-2 px-5 py-3.5"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface)",
              }}
            >
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => send(q.msg)}
                  disabled={loading}
                  className="nb-btn cursor-pointer px-3 py-1.5 text-[0.64rem] disabled:opacity-50"
                  style={{
                    background: "var(--surface-elevated)",
                    color: "var(--ink)",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div
              className="flex border-t-[2.5px]"
              style={{
                borderColor: "var(--ink)",
                background: "var(--bg)",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about experience, RAG architecture, Hoard, Refrainly..."
                aria-label="Ask AI portfolio assistant"
                className="flex-1 bg-transparent px-5 py-3.5 font-data text-[0.78rem] outline-none"
                style={{ color: "var(--ink)" }}
              />
              <button
                type="button"
                onClick={() => send(input)}
                disabled={loading}
                className="cursor-pointer flex items-center gap-2 border-l-[2.5px] px-6 py-3.5 font-data text-[0.74rem] font-bold uppercase transition-colors disabled:opacity-50"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--signal)",
                  color: "#FFFFFF",
                }}
              >
                <span>Send</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" />
                </svg>
              </button>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block" style={{ background: "var(--ink)" }} />

          {/* Right Quick Facts Panel */}
          <div
            className="flex flex-col justify-between border-t-[2.5px] p-6 lg:border-t-0"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface)",
            }}
          >
            <div>
              <h3
                className="font-display text-[1.45rem] font-black uppercase leading-none"
                style={{ color: "var(--ink)" }}
              >
                Snapshot
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                {QUICK_FACTS.map((c) => (
                  <div
                    key={c.label}
                    className="border-2 p-3.5"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--surface-elevated)",
                      boxShadow: "var(--shadow-hard-sm)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-data text-[0.6rem] font-bold uppercase"
                        style={{ color: "var(--dim)" }}
                      >
                        {c.label}
                      </span>
                      <span
                        className="h-2.5 w-2.5 border"
                        style={{
                          borderColor: "var(--ink)",
                          background: c.accent,
                        }}
                      />
                    </div>
                    <div
                      className="mt-1.5 font-data text-[0.74rem] font-bold leading-snug"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.value}
                    </div>
                    {c.sub && (
                      <div
                        className="mt-1 text-[0.84rem]"
                        style={{ color: "var(--dim)" }}
                      >
                        {c.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
