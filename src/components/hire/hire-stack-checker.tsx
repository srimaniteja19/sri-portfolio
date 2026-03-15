"use client";

import { useState } from "react";

const STACK_TAGS = ["Next.js", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Redis", "LangChain", "LangGraph", "LlamaIndex", "AWS", "Docker", "Kubernetes", "OpenAI", "Claude", "RAG", "Vector DB", "Tailwind", "CI/CD", "REST API", "GraphQL", "Vercel", "MongoDB", "MySQL"];
const MY_STACK = new Set(["next.js", "typescript", "react", "node.js", "python", "postgresql", "redis", "langchain", "langgraph", "llamaindex", "aws", "docker", "kubernetes", "openai", "claude", "rag", "vector db", "tailwind", "ci/cd", "rest api", "vercel"]);

export function HireStackChecker() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (tag: string) => {
    const key = tag.toLowerCase();
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const matched = [...selected].filter((s) => MY_STACK.has(s));
  const missing = [...selected].filter((s) => !MY_STACK.has(s));
  const pct = selected.size === 0 ? 0 : Math.round((matched.length / selected.size) * 100);

  return (
    <div className="border-b" style={{ borderColor: "var(--ink)" }}>
      <div className="border-b-2 px-5 py-3 text-[0.58rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", borderColor: "var(--ink)" }}>
        // click the technologies your team uses
      </div>
      <div className="flex flex-wrap gap-2 border-b-2 p-4" style={{ borderColor: "var(--ink)" }}>
        {STACK_TAGS.map((t) => {
          const key = t.toLowerCase();
          const isSelected = selected.has(key);
          const match = MY_STACK.has(key);
          return (
            <button
              key={t}
              onClick={() => toggle(t)}
              className="rounded border-2 px-2.5 py-1.5 text-[0.6rem] font-bold transition"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                borderColor: "var(--ink)",
                background: isSelected ? (match ? "var(--mint)" : "var(--coral)") : "transparent",
                color: "var(--ink)",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
      <div className="grid border-b-2 lg:grid-cols-2" style={{ borderColor: "var(--ink)" }}>
        <div className="border-r-2 p-5" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>// match score</div>
          <div className="mb-2 flex items-baseline gap-2">
            <div className="font-serif text-3xl font-black italic" style={{ color: pct >= 80 ? "var(--mint)" : pct >= 50 ? "var(--lemon)" : "var(--coral)" }}>{pct}%</div>
            <div className="text-[0.65rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
              {selected.size === 0 ? "select technologies above" : pct >= 80 ? "strong match! ✓" : pct >= 50 ? "good overlap" : "partial match"}
            </div>
          </div>
          <div className="h-2 rounded border" style={{ background: "rgba(10,10,9,.07)", borderColor: "rgba(10,10,9,.12)" }}>
            <div className="h-full rounded transition-all" style={{ width: `${pct}%`, background: pct >= 80 ? "var(--mint)" : pct >= 50 ? "var(--lemon)" : "var(--coral)" }} />
          </div>
        </div>
        <div className="p-5">
          <div className="mb-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>// matched / missing</div>
          <div className="text-[0.62rem] leading-relaxed" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
            {selected.size === 0 ? "click technologies to see matches" : (
              <>
                <span className="font-bold" style={{ color: "var(--mint)" }}>matched: </span>{matched.join(", ") || "none"}
                <br />
                <span className="font-bold" style={{ color: "var(--coral)" }}>not in stack: </span>{missing.join(", ") || "none"}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
