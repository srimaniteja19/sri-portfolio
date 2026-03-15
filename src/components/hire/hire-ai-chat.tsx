"use client";

import { useCallback, useRef, useState } from "react";

const QUICK_PROMPTS = [
  { label: "LLM experience", msg: "What is Maniteja's experience with LLMs and RAG?" },
  { label: "shipped projects", msg: "What projects has Maniteja shipped to production?" },
  { label: "availability", msg: "Is Maniteja available and what roles is he looking for?" },
  { label: "tech stack", msg: "What is Maniteja's tech stack?" },
  { label: "devpath AI", msg: "Tell me about DevPath AI" },
  { label: "why hire him?", msg: "What makes Maniteja different from other candidates?" },
];

export function HireAIChat() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hey! I'm Maniteja's AI assistant. Ask me anything — my skills, projects, experience, availability, or how I could help your team. 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = useCallback(async (msg: string) => {
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
      const reply = data.text || (data.error ?? "Sorry, something went wrong. Maniteja is an AI consultant with 4+ years experience. Email: srimaniteja.ch@gmail.com");
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "API error — Maniteja is an AI consultant with 4+ years experience, open to new roles. Email: srimaniteja.ch@gmail.com" }]);
    } finally {
      setLoading(false);
      setTimeout(() => scrollRef.current?.scrollTo({ top: 9999 }), 50);
    }
  }, [loading]);

  return (
    <div className="grid border-b lg:grid-cols-[1fr_320px]" style={{ borderColor: "var(--ink)" }}>
      <div className="flex flex-col" style={{ borderRight: "2.5px solid var(--ink)" }}>
        <div ref={scrollRef} className="flex flex-1 flex-col gap-2 overflow-y-auto p-4" style={{ minHeight: 340, maxHeight: 340 }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2 items-start ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-bold"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.55rem",
                  background: m.role === "bot" ? "var(--mint)" : "var(--lemon)",
                  borderColor: "var(--ink)",
                }}
              >
                {m.role === "bot" ? "M" : "R"}
              </div>
              <div
                className="max-w-[85%] rounded-lg border-2 p-2.5 text-[0.75rem] leading-relaxed"
                style={{
                  background: m.role === "bot" ? "var(--mint)" : "var(--ink)",
                  color: m.role === "bot" ? "var(--ink)" : "var(--bg)",
                  borderColor: "var(--ink)",
                  borderRadius: m.role === "bot" ? "10px 10px 10px 2px" : "10px 10px 2px 10px",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 items-start">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-bold" style={{ background: "var(--mint)", borderColor: "var(--ink)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.55rem" }}>M</div>
              <div className="rounded-lg border-2 p-2.5" style={{ background: "var(--mint)", borderColor: "var(--ink)", borderRadius: "10px 10px 10px 2px" }}>
                <span className="inline-flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ink)]" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 border-t-2 p-2" style={{ borderColor: "var(--ink)" }}>
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q.label}
              onClick={() => send(q.msg)}
              disabled={loading}
              className="rounded border-2 border-[var(--ink)] px-2 py-1 text-[0.55rem] font-bold uppercase transition hover:bg-[var(--ink)] hover:text-[var(--bg)] disabled:opacity-50"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {q.label}
            </button>
          ))}
        </div>
        <div className="flex border-t-2" style={{ borderColor: "var(--ink)" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="ask about skills, projects, availability..."
            className="flex-1 border-none bg-transparent px-4 py-2.5 text-[0.72rem] outline-none"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)" }}
          />
          <button
            onClick={() => send(input)}
            disabled={loading}
            className="border-l-2 border-[var(--ink)] bg-[var(--ink)] px-4 py-2.5 text-[var(--bg)] transition hover:opacity-90 disabled:opacity-50"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.62rem", fontWeight: 700 }}
          >
            send →
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div className="text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
          // what i know about maniteja
        </div>
        {[
          { label: "role", value: "AI Consultant @ RealFlex", sub: "Client: Goodyear · 2023–now", color: "var(--mint)" },
          { label: "impact", value: "RAG +15% conversion · -60% triage · -40% bundle", color: "var(--lemon)" },
          { label: "stack", value: "Next.js · TypeScript · LangChain · AWS Bedrock · GPT-4o · Claude 3 · PostgreSQL", color: "var(--sky)" },
          { label: "status", value: "Open to new roles · NYC", color: "var(--coral)" },
        ].map((c) => (
          <div key={c.label} className="rounded border-2 p-2.5" style={{ background: c.color, borderColor: "var(--ink)" }}>
            <div className="mb-1 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(10,10,9,.5)" }}>{c.label}</div>
            <div className="text-[0.74rem] font-bold">{c.value}</div>
            {c.sub && <div className="text-[0.65rem]" style={{ color: "rgba(10,10,9,.55)" }}>{c.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
