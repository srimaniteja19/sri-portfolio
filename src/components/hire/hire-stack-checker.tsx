"use client";

import { useState } from "react";

const STACK_TAGS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Java / Spring Boot",
  "PostgreSQL",
  "Neon",
  "Drizzle ORM",
  "Redis",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "AWS Bedrock",
  "OpenAI / GPT-4o",
  "Claude",
  "Google Gemini",
  "RAG",
  "Vector DB",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "CI/CD",
  "REST API",
  "Stripe",
  "Vercel",
  "GraphQL",
  "MongoDB",
];

const MY_STACK = new Set([
  "next.js",
  "react",
  "typescript",
  "node.js",
  "python",
  "java / spring boot",
  "postgresql",
  "neon",
  "drizzle orm",
  "redis",
  "langchain",
  "langgraph",
  "llamaindex",
  "aws bedrock",
  "openai / gpt-4o",
  "claude",
  "google gemini",
  "rag",
  "vector db",
  "docker",
  "kubernetes",
  "tailwind css",
  "ci/cd",
  "rest api",
  "stripe",
  "vercel",
]);

export function HireStackChecker() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["next.js", "typescript", "react", "postgresql", "langchain", "rag"])
  );

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
  const pct =
    selected.size === 0 ? 0 : Math.round((matched.length / selected.size) * 100);
  const activeBlocks = Math.round(pct / 10);

  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="nb-box"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 border-b-2 px-5 py-3 font-data text-[0.68rem] font-bold uppercase"
            style={{
              borderColor: "var(--ink)",
              background: "var(--ink)",
              color: "var(--bg)",
            }}
          >
            <span>Click the technologies your team uses</span>
            <span style={{ color: "var(--volt)" }}>
              {selected.size} Selected
            </span>
          </div>

          <div
            className="flex flex-wrap gap-2 border-b-[2.5px] p-6"
            style={{ borderColor: "var(--ink)" }}
          >
            {STACK_TAGS.map((t) => {
              const key = t.toLowerCase();
              const isSelected = selected.has(key);
              const match = MY_STACK.has(key);
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggle(t)}
                  className="nb-btn cursor-pointer px-3 py-1.5 text-[0.68rem]"
                  style={{
                    background: isSelected
                      ? match
                        ? "var(--volt)"
                        : "var(--signal)"
                      : "var(--bg)",
                    color: isSelected
                      ? match
                        ? "#111210"
                        : "#FFFFFF"
                      : "var(--ink)",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <div
            className="grid grid-cols-1 divide-y-[2.5px] lg:grid-cols-2 lg:divide-x-[2.5px] lg:divide-y-0"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="p-6" style={{ background: "var(--bg)" }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div
                    className="font-data text-[0.64rem] font-bold uppercase"
                    style={{ color: "var(--dim)" }}
                  >
                    Stack Overlap
                  </div>
                  <div
                    className="mt-1 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black leading-none tabular-nums"
                    style={{ color: "var(--ink)" }}
                  >
                    {pct}%
                  </div>
                </div>

                {/* 10-Block Stepped Gauge */}
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="h-5 w-3.5 border"
                      style={{
                        borderColor: "var(--ink)",
                        background:
                          idx < activeBlocks
                            ? "var(--emerald)"
                            : "var(--surface)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <p
                className="mt-3 font-data text-[0.74rem] font-bold uppercase"
                style={{ color: "var(--dim)" }}
              >
                {selected.size === 0
                  ? "Select technologies above to compute compatibility"
                  : pct >= 80
                  ? "Direct production experience across your stack"
                  : pct >= 50
                  ? "Strong core overlap"
                  : "Partial overlap — fast ramp on adjacent tools"}
              </p>
            </div>

            <div className="p-6" style={{ background: "var(--surface)" }}>
              <div className="space-y-3 font-data text-[0.74rem]">
                <div>
                  <span
                    className="font-bold uppercase"
                    style={{ color: "var(--ink)" }}
                  >
                    Shipped in Production ({matched.length}):{" "}
                  </span>
                  <span style={{ color: "var(--dim)" }}>
                    {matched.join(", ") || "None selected"}
                  </span>
                </div>
                {missing.length > 0 && (
                  <div>
                    <span
                      className="font-bold uppercase"
                      style={{ color: "var(--signal)" }}
                    >
                      Adjacent / Ramp-up ({missing.length}):{" "}
                    </span>
                    <span style={{ color: "var(--dim)" }}>
                      {missing.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
