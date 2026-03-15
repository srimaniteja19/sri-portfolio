"use client";

const commits = [
  { hash: "a3f9e2c", scope: "feat(rag):", msg: "hybrid search + reranking", t: "2d" },
  { hash: "7b12d4a", scope: "feat(gemini):", msg: "streaming course plan gen", t: "4d" },
  { hash: "c891ab0", scope: "fix(auth):", msg: "nextauth session expiry", t: "5d" },
  { hash: "f23e110", scope: "perf:", msg: "reduce first load JS 38%", t: "1w" },
  { hash: "89da4cc", scope: "feat(ui):", msg: "topic card self-check Q&A", t: "1w" },
  { hash: "22f19bc", scope: "chore:", msg: "upgrade to next.js 14.2", t: "2w" },
];

const progress = [
  { name: "course-plan-gen", ext: ".ts", pct: 95, col: "var(--mint)" },
  { name: "interview-prep", ext: ".ts", pct: 82, col: "var(--lemon)" },
  { name: "resume-rag", ext: ".ts", pct: 70, col: "var(--sky)" },
  { name: "progress-tracker", ext: ".tsx", pct: 45, col: "var(--lilac)" },
  { name: "community", ext: ".tsx", pct: 20, col: "var(--coral)" },
];

export function DevlogSection() {
  return (
    <div
      className="grid border-b md:grid-cols-[1fr_2.5px_1fr]"
      style={{ borderColor: "var(--ink)" }}
    >
      <div className="p-5 md:pr-6">
        <div
          className="mb-4 flex items-center gap-2 text-[0.55rem] font-bold uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.12em", color: "var(--dim)" }}
        >
          <span>//</span> dev log
        </div>
        <div className="space-y-1">
          {commits.map((c) => (
            <div
              key={c.hash}
              className="flex gap-2 rounded px-2 py-2 transition-colors hover:bg-[rgba(10,10,9,0.05)]"
            >
              <span className="shrink-0 text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--mint)" }}>
                {c.hash}
              </span>
              <span className="flex-1 text-[0.62rem] leading-[1.4]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                <span style={{ color: "var(--dim)" }}>{c.scope}</span>{" "}
                <span className="font-bold" style={{ color: "var(--ink)" }}>{c.msg}</span>
              </span>
              <span className="shrink-0 text-[0.54rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
                {c.t}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block" style={{ background: "var(--ink)" }} />
      <div className="p-5 md:pl-6">
        <div
          className="mb-4 flex items-center gap-2 text-[0.55rem] font-bold uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.12em", color: "var(--dim)" }}
        >
          <span>//</span> feature progress
        </div>
        <div className="space-y-5">
          {progress.map((p) => (
            <div key={p.name}>
              <div className="mb-1 flex justify-between">
                <span className="text-[0.62rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  {p.name}
                  <span className="font-normal" style={{ color: "var(--dim)" }}>{p.ext}</span>
                </span>
                <span className="text-[0.56rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
                  {p.pct}%
                </span>
              </div>
              <div
                className="h-1.5 overflow-hidden rounded border"
                style={{ background: "rgba(10,10,9,0.07)", borderColor: "rgba(10,10,9,0.12)" }}
              >
                <div className="h-full" style={{ width: `${p.pct}%`, background: p.col }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
