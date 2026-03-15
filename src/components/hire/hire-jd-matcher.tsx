"use client";

import { useState } from "react";

const MY_SKILLS = ["next.js", "nextjs", "typescript", "node.js", "nodejs", "react", "python", "postgresql", "postgres", "redis", "langchain", "langgraph", "llamaindex", "aws", "bedrock", "rag", "retrieval augmented", "vector", "embedding", "semantic search", "ai agent", "gpt", "openai", "claude", "llm", "docker", "kubernetes", "k8s", "ci/cd", "rest api", "graphql", "tailwind", "vercel", "full stack", "fullstack"];

type MatchResult = { pct: number; text: string; matched: string[] };

export function HireJDMatcher() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [pitch, setPitch] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const analyze = async () => {
    if (!jd.trim()) return;
    setLoading("analyze");
    setResult(null);
    const jdLower = jd.toLowerCase();
    const matched = MY_SKILLS.filter((s) => jdLower.includes(s));
    const pct = Math.min(98, 50 + matched.length * 4);
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "jd-analyze", jd }),
      });
      const data = await res.json();
      const text = data.text || `Matched skills: ${matched.slice(0, 8).join(", ") || "no direct matches"}`;
      setResult({ pct, text, matched });
    } catch {
      setResult({
        pct,
        text: "",
        matched,
      });
    } finally {
      setLoading(null);
    }
  };

  const generatePitch = async () => {
    if (!jd.trim()) return;
    setLoading("pitch");
    setPitch(null);
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "jd-pitch", jd }),
      });
      const data = await res.json();
      setPitch(data.text || "Could not generate. Try again.");
    } catch {
      setPitch("API error. Add GEMINI_API_KEY to .env.local for AI pitch.");
    } finally {
      setLoading(null);
    }
  };

  const clear = () => {
    setJd("");
    setResult(null);
    setPitch(null);
  };

  return (
    <div className="border-b" style={{ borderColor: "var(--ink)" }}>
      <div className="grid border-b-2 lg:grid-cols-2" style={{ borderColor: "var(--ink)" }}>
        <div className="border-r-2" style={{ borderColor: "var(--ink)" }}>
          <div className="border-b-2 px-4 py-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", borderColor: "var(--ink)" }}>// paste job description</div>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="paste the full job description here..."
            className="h-[140px] w-full resize-none border-none bg-transparent p-4 text-[0.68rem] outline-none"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)", lineHeight: 1.7 }}
          />
        </div>
        <div>
          <div className="border-b-2 px-4 py-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", borderColor: "var(--ink)" }}>// match analysis</div>
          <div className="min-h-[140px] p-4 text-[0.74rem] leading-relaxed" style={{ color: "var(--dim)" }}>
            {result ? (
              <>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-serif text-2xl font-black italic" style={{ color: "var(--mint)" }}>{result.pct}%</span>
                  <div className="h-2 flex-1 rounded border" style={{ background: "rgba(10,10,9,.07)", borderColor: "rgba(10,10,9,.12)" }}>
                    <div className="h-full rounded transition-all" style={{ background: "var(--mint)", width: `${result.pct}%` }} />
                  </div>
                </div>
                <div className="text-[0.72rem] leading-relaxed">
                  {result.text.split("\n").map((line, i) => (
                    <span key={i}>{i > 0 && <br />}{line}</span>
                  ))}
                </div>
                <div className="mt-2 text-[0.58rem]" style={{ color: "var(--mint)", fontFamily: "var(--font-jetbrains-mono)" }}>
                  matched: {result.matched.slice(0, 6).join(" · ") || "none"}
                </div>
              </>
            ) : (
              "waiting for job description..."
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap border-b-2" style={{ borderColor: "var(--ink)" }}>
        <button onClick={analyze} disabled={loading !== null} className="rounded-none border-r-2 border-[var(--ink)] bg-[var(--mint)] px-5 py-2.5 text-[0.62rem] font-bold uppercase disabled:opacity-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>analyze match →</button>
        <button onClick={generatePitch} disabled={loading !== null} className="rounded-none border-r-2 border-[var(--ink)] px-5 py-2.5 text-[0.62rem] font-bold uppercase transition hover:bg-[rgba(10,10,9,.04)] disabled:opacity-50" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>generate cover pitch →</button>
        <button onClick={clear} className="rounded-none px-5 py-2.5 text-[0.62rem] font-bold uppercase transition hover:bg-[rgba(10,10,9,.04)]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>clear</button>
        {loading && <span className="ml-auto flex items-center px-4 py-2.5 text-[0.56rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>⟳ {loading}...</span>}
      </div>
      {pitch && (
        <div className="border-b-2 p-4" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-2 text-[0.56rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>// generated pitch — copy and customize</div>
          <div className="border-l-[3px] border-[var(--mint)] pl-4 text-[0.75rem] leading-relaxed">{pitch}</div>
          <button onClick={() => { navigator.clipboard?.writeText(pitch); }} className="mt-2 rounded border-[1.5px] border-[var(--ink)] px-2.5 py-1 text-[0.56rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>copy text</button>
        </div>
      )}
    </div>
  );
}
