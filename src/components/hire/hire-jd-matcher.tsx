"use client";

import { useState } from "react";

const MY_SKILLS = [
  "next.js",
  "nextjs",
  "typescript",
  "node.js",
  "nodejs",
  "react",
  "python",
  "java",
  "spring boot",
  "postgresql",
  "postgres",
  "neon",
  "drizzle",
  "redis",
  "langchain",
  "langgraph",
  "llamaindex",
  "aws",
  "bedrock",
  "rag",
  "retrieval augmented",
  "vector",
  "embedding",
  "semantic search",
  "ai agent",
  "gpt",
  "openai",
  "claude",
  "gemini",
  "llm",
  "docker",
  "kubernetes",
  "k8s",
  "ci/cd",
  "rest api",
  "graphql",
  "tailwind",
  "vercel",
  "stripe",
  "full stack",
  "fullstack",
];

type MatchResult = { pct: number; text: string; matched: string[] };

export function HireJDMatcher() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [pitch, setPitch] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);

  const analyze = async () => {
    if (!jd.trim()) return;
    setLoading("Analyzing JD");
    setResult(null);
    const jdLower = jd.toLowerCase();
    const matched = Array.from(new Set(MY_SKILLS.filter((s) => jdLower.includes(s))));
    const pct = Math.min(98, 52 + matched.length * 4);
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "jd-analyze", jd }),
      });
      const data = await res.json();
      const text =
        data.text ||
        `Matched core skills: ${matched.slice(0, 10).join(", ") || "full-stack & AI engineering"}`;
      setResult({ pct, text, matched });
    } catch {
      setResult({
        pct,
        text: `Matched core skills: ${matched.slice(0, 10).join(", ") || "full-stack & AI engineering"}`,
        matched,
      });
    } finally {
      setLoading(null);
    }
  };

  const generatePitch = async () => {
    if (!jd.trim()) return;
    setLoading("Drafting intro");
    setPitch(null);
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "jd-pitch", jd }),
      });
      const data = await res.json();
      setPitch(data.text || "Could not generate pitch. Try again.");
    } catch {
      setPitch("Add GEMINI_API_KEY to .env.local to generate AI-tailored cover intros.");
    } finally {
      setLoading(null);
    }
  };

  const clear = () => {
    setJd("");
    setResult(null);
    setPitch(null);
  };

  const copyPitch = () => {
    if (!pitch) return;
    navigator.clipboard?.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeBlocks = result ? Math.round(result.pct / 10) : 0;

  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="nb-box" style={{ borderColor: "var(--ink)" }}>
          <div
            className="grid grid-cols-1 divide-y-[2.5px] lg:grid-cols-2 lg:divide-x-[2.5px] lg:divide-y-0"
            style={{ borderColor: "var(--ink)" }}
          >
            {/* Left: JD Input */}
            <div className="flex flex-col" style={{ background: "var(--surface-elevated)" }}>
              <div
                className="flex items-center justify-between border-b-2 px-5 py-3 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>Paste Job Description</span>
                <span style={{ color: "var(--volt)" }}>Input</span>
              </div>
              <textarea
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the job description or required stack here to evaluate overlap..."
                aria-label="Job description input"
                className="min-h-[210px] w-full flex-1 resize-none bg-transparent p-5 font-body text-[0.95rem] leading-[1.6] outline-none"
                style={{ color: "var(--ink)" }}
              />
            </div>

            {/* Right: Match Analysis */}
            <div className="flex flex-col" style={{ background: "var(--bg)" }}>
              <div
                className="flex items-center justify-between border-b-2 px-5 py-3 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              >
                <span>Match Breakdown</span>
                <span className="tabular-nums">
                  {result ? `${result.pct}% Fit` : "Ready"}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                {result ? (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 pb-4" style={{ borderColor: "var(--rule)" }}>
                      <div className="flex items-baseline gap-2.5">
                        <span
                          className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black leading-none tabular-nums"
                          style={{ color: "var(--ink)" }}
                        >
                          {result.pct}%
                        </span>
                        <span
                          className="border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                          style={{
                            borderColor: "var(--ink)",
                            background: "var(--volt)",
                            color: "#111210",
                          }}
                        >
                          Strong Alignment
                        </span>
                      </div>

                      {/* 10-Block Stepped Gauge */}
                      <div className="flex gap-1">
                        {Array.from({ length: 10 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="h-4 w-3 border"
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

                    <div
                      className="mt-4 text-[0.95rem] leading-[1.6]"
                      style={{ color: "var(--ink)" }}
                    >
                      {result.text.split("\n").map((line, i) => (
                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>

                    {result.matched.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t pt-3" style={{ borderColor: "var(--rule)" }}>
                        {result.matched.slice(0, 10).map((skill) => (
                          <span
                            key={skill}
                            className="border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                            style={{
                              borderColor: "var(--ink)",
                              background: "var(--surface-elevated)",
                              color: "var(--ink)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p
                    className="my-auto text-[0.95rem]"
                    style={{ color: "var(--dim)" }}
                  >
                    Paste a job description on the left and click{" "}
                    <strong>Analyze Match</strong> to compute skill overlap and
                    generate a role-specific summary.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div
            className="flex flex-wrap items-center gap-3 border-t-[2.5px] px-5 py-4"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface)",
            }}
          >
            <button
              type="button"
              onClick={analyze}
              disabled={loading !== null}
              className="nb-btn cursor-pointer px-5 py-2.5 text-[0.74rem] disabled:opacity-50"
              style={{
                background: "var(--signal)",
                color: "#FFFFFF",
              }}
            >
              <span>Analyze Match</span>
            </button>

            <button
              type="button"
              onClick={generatePitch}
              disabled={loading !== null}
              className="nb-btn cursor-pointer px-5 py-2.5 text-[0.74rem] disabled:opacity-50"
              style={{
                background: "var(--volt)",
                color: "#111210",
              }}
            >
              <span>Generate Tailored Intro</span>
            </button>

            <button
              type="button"
              onClick={clear}
              className="nb-btn cursor-pointer px-4 py-2.5 text-[0.68rem]"
              style={{
                background: "var(--surface-elevated)",
                color: "var(--ink)",
              }}
            >
              <span>Clear</span>
            </button>

            {loading && (
              <span
                className="ml-auto font-data text-[0.68rem] font-bold uppercase"
                style={{ color: "var(--ink)" }}
              >
                {loading}...
              </span>
            )}
          </div>

          {/* Generated Pitch Panel */}
          {pitch && (
            <div
              className="border-t-[2.5px] p-6"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 pb-3" style={{ borderColor: "var(--ink)" }}>
                <span
                  className="font-display text-[1.25rem] font-extrabold uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  Tailored Introduction
                </span>
                <button
                  type="button"
                  onClick={copyPitch}
                  className="nb-btn cursor-pointer px-3 py-1 text-[0.64rem]"
                  style={{
                    background: copied ? "var(--emerald)" : "var(--bg)",
                    color: "#111210",
                  }}
                >
                  {copied ? "Copied" : "Copy Intro"}
                </button>
              </div>
              <p
                className="mt-4 max-w-[72ch] border-l-[3px] pl-4 text-[0.95rem] leading-[1.6]"
                style={{
                  borderColor: "var(--signal)",
                  color: "var(--ink)",
                }}
              >
                {pitch}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
