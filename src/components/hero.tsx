"use client";

import Link from "next/link";

const tags = [
  { label: "Next.js", color: "t-mint" },
  { label: "TypeScript", color: "t-lemon" },
  { label: "Node.js", color: "t-coral" },
  { label: "PostgreSQL", color: "t-sky" },
  { label: "Redis", color: "t-lilac" },
  { label: "AI/RAG", color: "t-peach" },
  { label: "LangChain", color: "t-mint" },
  { label: "AWS Bedrock", color: "t-lemon" },
];

const tagColors: Record<string, string> = {
  "t-mint": "var(--mint)",
  "t-lemon": "var(--lemon)",
  "t-coral": "var(--coral)",
  "t-sky": "var(--sky)",
  "t-lilac": "var(--lilac)",
  "t-peach": "var(--peach)",
};

const commits = [
  { hash: "a3f9e2c", scope: "feat(rag):", msg: "improve retrieval pipeline", time: "2d ago" },
  { hash: "7b12d4a", scope: "fix(finance):", msg: "variance edge cases", time: "4d ago" },
  { hash: "c891ab0", scope: "feat(devpath):", msg: "gemini course gen v2", time: "6d ago" },
  { hash: "f23e110", scope: "chore:", msg: "upgrade langchain to 0.3", time: "1w ago" },
];

const stats = [
  { n: "4+", l: "yrs exp", bar: "var(--mint)" },
  { n: "Full", l: "stack", bar: "var(--lemon)" },
  { n: "AI/ML", l: "focus", bar: "var(--coral)" },
  { n: "M.S.", l: "data sci", bar: "var(--sky)" },
];

const proficiency = [
  { label: "LangChain", pct: 92, col: "var(--mint)" },
  { label: "Next.js", pct: 95, col: "var(--lemon)" },
  { label: "TypeScript", pct: 90, col: "var(--sky)" },
  { label: "PostgreSQL", pct: 85, col: "var(--coral)" },
  { label: "AWS Bedrock", pct: 80, col: "var(--lilac)" },
  { label: "Docker/K8s", pct: 75, col: "var(--peach)" },
];

export function Hero() {
  return (
    <section
      className="relative grid min-h-[520px] grid-cols-1 overflow-hidden border-b lg:grid-cols-[1fr_2.5px_360px]"
      style={{ borderColor: "var(--ink)" }}
    >
      <div
        className="pointer-events-none absolute top-1/2 left-[-1%] z-0 whitespace-nowrap text-[20vw] font-black italic leading-none tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-fraunces), serif", color: "rgba(10,10,9,0.035)", transform: "translateY(-50%)" }}
      >
        MANITEJA
      </div>

      {/* Left */}
      <div
        className="relative z-10 flex flex-col justify-between border-b py-8 px-6 lg:border-b-0 lg:border-r-0 lg:px-8"
        style={{ borderColor: "var(--ink)" }}
      >
        <div>
          <div
            className="mb-5 flex items-center gap-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--dim)" }}
          >
            <div className="h-0.5 w-[22px]" style={{ background: "var(--mint)" }} />
            full-stack engineer — AI · US-based
          </div>

          <h1
            className="animate-fade-up mb-2 text-[clamp(3rem,7vw,5.8rem)] font-black leading-[0.86] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
          >
            <span className="block italic">hi, I&apos;m</span>
            <span
              className="inline-block rounded px-1 py-0.5"
              style={{ background: "var(--lemon)", border: "2.5px solid var(--ink)", fontStyle: "italic" }}
            >
              Maniteja
            </span>
            <span style={{ color: "rgba(10,10,9,0.25)" }}>.</span>
          </h1>

          {/* Code block */}
          <div
            className="animate-fade-up mt-4 rounded border bg-[rgba(10,10,9,0.04)] p-3"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.72rem", lineHeight: 1.9, borderColor: "rgba(10,10,9,0.1)", animationDelay: "0.2s" }}
          >
            <div><span style={{ color: "var(--mint)", fontWeight: 700 }}>const</span> role = <span style={{ color: "var(--sky)" }}>&quot;full-stack engineer&quot;</span></div>
            <div><span style={{ color: "var(--mint)", fontWeight: 700 }}>const</span> focus = <span style={{ color: "var(--sky)" }}>&quot;LLM apps that ship&quot;</span></div>
            <div><span style={{ color: "var(--mint)", fontWeight: 700 }}>const</span> status = <span style={{ color: "var(--coral)" }}>&quot;open_to_new_roles&quot;</span> <span style={{ color: "rgba(10,10,9,0.28)" }}>// US · reloc ok</span></div>
            <div style={{ color: "rgba(10,10,9,0.28)" }}>// semantic search · RAG · AI agents · ecommerce</div>
          </div>

          {/* Hero stats */}
          <div className="animate-fade-up mt-4 flex border-t" style={{ borderColor: "var(--ink)", animationDelay: "0.35s" }}>
            {stats.map((s) => (
              <div key={s.l} className="group relative flex-1 border-r py-3 px-3 transition-colors last:border-r-0 hover:bg-[rgba(10,10,9,0.04)]" style={{ borderColor: "var(--ink)" }}>
                <span className="block text-[1.8rem] font-black leading-none" style={{ fontFamily: "var(--font-fraunces), serif" }}>{s.n}</span>
                <span className="mt-0.5 block text-[0.52rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.07em", color: "var(--dim)" }}>{s.l}</span>
                <div className="absolute bottom-0 left-0 h-0.5" style={{ width: "100%", background: s.bar }} />
              </div>
            ))}
          </div>

          <div className="animate-fade-up mt-4 flex flex-wrap gap-1.5" style={{ animationDelay: "0.45s" }}>
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="tag-hover cursor-default rounded border-2 px-2.5 py-0.5 text-[0.6rem] font-bold transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:shadow-[2px_2px_0_var(--ink)]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  borderColor: "var(--ink)",
                  background: tagColors[tag.color] || "var(--mint)",
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up mt-6 flex items-center gap-4" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.68rem", animationDelay: "0.55s" }}>
          <span className="text-[0.58rem] font-bold uppercase" style={{ letterSpacing: "0.1em", color: "var(--dim)" }}>find me</span>
          <Link href="https://github.com/srimaniteja19" target="_blank" rel="noopener noreferrer" className="rounded border-2 border-[var(--ink)] px-2.5 py-0.5 text-[0.65rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]" style={{ color: "var(--ink)" }}>
            github
          </Link>
          <Link href="https://www.linkedin.com/in/sri-maniteja-chinnam/" target="_blank" rel="noopener noreferrer" className="rounded border-2 border-[var(--ink)] px-2.5 py-0.5 text-[0.65rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]" style={{ color: "var(--ink)" }}>
            linkedin
          </Link>
          <Link href="mailto:srimaniteja.ch@gmail.com" className="rounded border-2 border-[var(--ink)] px-2.5 py-0.5 text-[0.65rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]" style={{ color: "var(--ink)" }}>
            email
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block" style={{ background: "var(--ink)" }} />

      {/* Right panel - terminal, commits, proficiency */}
      <div className="relative z-10 hidden flex-col lg:flex">
        <div className="flex-shrink-0 border-b p-4" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-3 flex items-center gap-1.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.52rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)" }}>
            <span>//</span> terminal
          </div>
          <div className="rounded border bg-[rgba(10,10,9,0.04)] p-2.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.68rem", lineHeight: 1.88, borderColor: "rgba(10,10,9,0.1)" }}>
            <div><span className="font-bold" style={{ color: "var(--mint)" }}>$ </span>whoami</div>
            <div className="pl-3" style={{ color: "#2a9d6e" }}>maniteja — full-stack engineer</div>
            <div><span className="font-bold" style={{ color: "var(--mint)" }}>$ </span>cat stack.json</div>
            <div className="pl-3" style={{ color: "var(--sky)" }}>{`{ next, ts, node, postgres, langchain, bedrock }`}</div>
            <div><span className="font-bold" style={{ color: "var(--mint)" }}>$ </span>git log --oneline -2</div>
            <div className="pl-3" style={{ color: "var(--dim)" }}><span style={{ color: "var(--mint)", fontWeight: 700 }}>a3f9</span> feat(rag): +15% retrieval accuracy</div>
            <div className="pl-3" style={{ color: "var(--dim)" }}><span style={{ color: "var(--mint)", fontWeight: 700 }}>7b12</span> fix(finance): variance explainer</div>
            <div><span className="font-bold" style={{ color: "var(--mint)" }}>$ </span>npm run build<span className="ml-0.5 inline-block h-4 w-2 animate-blink" style={{ background: "var(--lemon)", verticalAlign: "text-bottom" }} /></div>
          </div>
        </div>
        <div className="flex-shrink-0 border-b p-4" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-2 flex items-center justify-between" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.52rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)" }}>
            <span>//</span> recent commits
            <span className="rounded border px-1.5 py-0.5 text-[0.55rem]" style={{ borderColor: "rgba(10,10,9,0.15)" }}>⎇ main</span>
          </div>
          <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.65rem" }}>
            {commits.map((c) => (
              <div key={c.hash} className="grid grid-cols-[auto_1fr_auto] gap-2 border-b py-2" style={{ borderColor: "rgba(10,10,9,0.07)", alignItems: "center" }}>
                <span className="font-bold" style={{ color: "var(--mint)", fontSize: "0.6rem" }}>{c.hash.slice(0, 7)}</span>
                <span><span style={{ color: "var(--dim)" }}>{c.scope}</span> <span className="font-bold" style={{ color: "var(--ink)" }}>{c.msg}</span></span>
                <span className="text-[0.57rem]" style={{ color: "var(--dim)" }}>{c.time.replace(" ago", "")}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 border-b-0 p-4" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.52rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)" }}>
            // proficiency
          </div>
          <div className="space-y-2">
            {proficiency.map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <div className="w-[72px] truncate text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{r.label}</div>
                <div className="flex-1 overflow-hidden rounded border" style={{ height: 6, background: "rgba(10,10,9,0.07)", borderColor: "rgba(10,10,9,0.12)" }}>
                  <div className="h-full" style={{ width: `${r.pct}%`, background: r.col }} />
                </div>
                <div className="w-[26px] text-right text-[0.57rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>{r.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
