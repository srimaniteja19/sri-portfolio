"use client";

const COMMITS = [
  {
    hash: "a3f9e2c",
    scope: "feat(rag):",
    msg: "Hybrid semantic search + reranking pipeline",
    t: "2d ago",
  },
  {
    hash: "7b12d4a",
    scope: "feat(gemini):",
    msg: "Streaming study plan generator up to 730 days",
    t: "4d ago",
  },
  {
    hash: "c891ab0",
    scope: "fix(auth):",
    msg: "NextAuth session rotation & Drizzle edge pooling",
    t: "5d ago",
  },
  {
    hash: "f23e110",
    scope: "perf:",
    msg: "Reduce first-load client JS by 38%",
    t: "1w ago",
  },
  {
    hash: "89da4cc",
    scope: "feat(ladder):",
    msg: "Spaced-repetition 7/30/90/180-day recall ladder & Field Kit",
    t: "1w ago",
  },
];

const MODULES = [
  {
    module: "Study Plan Engine",
    role: "AI-generated daily learning campaigns up to 730 days",
    tag: "Shipped",
  },
  {
    module: "Spaced Repetition Ladder",
    role: "Automated 7 / 30 / 90 / 180-day recall reviews",
    tag: "Shipped",
  },
  {
    module: "Field Kit & Notes",
    role: "Bookmark capture, personal study notes & XP progression",
    tag: "Shipped",
  },
  {
    module: "Stripe Billing & Auth",
    role: "NextAuth authentication, Neon Postgres + Drizzle ORM, Stripe",
    tag: "Shipped",
  },
];

export function DevlogSection() {
  return (
    <section
      id="devlog"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div
          className="mb-8 flex flex-col items-start justify-between gap-6 border-b-[2.5px] pb-6 md:flex-row md:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92]"
              style={{ color: "var(--ink)" }}
            >
              Currently Building: Refrainly
            </h2>
            <p
              className="mt-2.5 max-w-[65ch] text-[0.95rem] leading-[1.6]"
              style={{ color: "var(--dim)" }}
            >
              Daily AI learning campaigns built with Next.js 16, React 19, Neon
              Postgres, Drizzle ORM, Stripe, and OpenRouter—featuring 730-day
              study plans and a 7/30/90/180-day spaced repetition ladder.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://refrainly.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn px-4 py-2.5 text-[0.74rem]"
              style={{
                background: "var(--signal)",
                color: "#FFFFFF",
              }}
            >
              <span>Visit refrainly.dev</span>
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
                <path d="M3 9L9 3M9 3H4M9 3V8" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Recent Commits */}
          <div className="nb-box flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between border-b-2 px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>Recent Commits</span>
                <span style={{ color: "var(--volt)" }}>main</span>
              </div>

              <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
                {COMMITS.map((c) => (
                  <div
                    key={c.hash}
                    className="flex items-center justify-between gap-3 px-4 py-3.5"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="border px-1.5 py-0.5 font-data text-[0.6rem] font-bold tabular-nums"
                          style={{
                            borderColor: "var(--ink)",
                            background: "var(--volt)",
                            color: "#111210",
                          }}
                        >
                          {c.hash}
                        </span>
                        <span
                          className="font-data text-[0.68rem] font-bold"
                          style={{ color: "var(--signal)" }}
                        >
                          {c.scope}
                        </span>
                      </div>
                      <p
                        className="mt-1.5 text-[0.84rem] font-medium leading-snug"
                        style={{ color: "var(--ink)" }}
                      >
                        {c.msg}
                      </p>
                    </div>

                    <span
                      className="shrink-0 font-data text-[0.64rem] font-semibold tabular-nums"
                      style={{ color: "var(--dim)" }}
                    >
                      {c.t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Core Features */}
          <div className="nb-box flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between border-b-2 px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>Core Architecture</span>
                <span style={{ color: "var(--emerald)" }}>Live</span>
              </div>

              <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
                {MODULES.map((m) => (
                  <div
                    key={m.module}
                    className="flex items-start justify-between gap-4 px-4 py-3.5"
                  >
                    <div>
                      <div
                        className="font-display text-[1.25rem] font-bold uppercase"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.module}
                      </div>
                      <p
                        className="mt-1 text-[0.84rem]"
                        style={{ color: "var(--dim)" }}
                      >
                        {m.role}
                      </p>
                    </div>
                    <span
                      className="shrink-0 border px-2 py-0.5 font-data text-[0.6rem] font-bold uppercase"
                      style={{
                        borderColor: "var(--ink)",
                        background: "var(--emerald)",
                        color: "#111210",
                      }}
                    >
                      {m.tag}
                    </span>
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
