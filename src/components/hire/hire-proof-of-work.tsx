"use client";

const CASE_STUDIES = [
  {
    tag: "Enterprise RAG / LLM",
    accent: "var(--volt)",
    fg: "#111210",
    title: "10M+ Product Catalog Semantic Search",
    desc: "Architected an end-to-end RAG recommendation pipeline indexing Goodyear's full tire catalog with chunking, vector embeddings, and hybrid reranking on AWS Bedrock and LlamaIndex.",
    metrics: [
      { label: "Ecommerce Conversion", value: "+15% Lift" },
      { label: "P95 Query Latency", value: "< 800ms" },
    ],
  },
  {
    tag: "Multi-Agent Automation",
    accent: "var(--emerald)",
    fg: "#111210",
    title: "LangGraph FP&A Variance Triage",
    desc: "Built a stateful LangGraph agent pipeline that classifies, explains, and routes budget variance reports with human-in-the-loop verification — reducing daily analyst work from 3 hours to 12 minutes.",
    metrics: [
      { label: "Manual Triage Cut", value: "-60%" },
      { label: "Analyst Time Saved", value: "21 hrs / wk" },
    ],
  },
  {
    tag: "Web Performance",
    accent: "var(--signal)",
    fg: "#FFFFFF",
    title: "Next.js Production Bundle Optimization",
    desc: "Audited and refactored a high-traffic Next.js ecommerce storefront with route-level code splitting, server components, and asset pipeline tuning verified via Lighthouse and WebPageTest.",
    metrics: [
      { label: "JS Bundle Size", value: "-40%" },
      { label: "Lighthouse Score", value: "94 / 100" },
    ],
  },
];

export function HireProofOfWork() {
  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.title}
              className="nb-box flex flex-col justify-between"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
              }}
            >
              <div>
                <div
                  className="flex items-center justify-between border-b-[2.5px] px-5 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                  style={{
                    borderColor: "var(--ink)",
                    background: c.accent,
                    color: c.fg,
                  }}
                >
                  <span>{c.tag}</span>
                  <span>Production</span>
                </div>

                <div className="p-6">
                  <h3
                    className="font-display text-[1.75rem] font-black uppercase leading-none"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-3 text-[0.95rem] leading-[1.6]"
                    style={{ color: "var(--dim)" }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-2 divide-x-2 border-t-[2.5px]"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--surface)",
                }}
              >
                {c.metrics.map((m) => (
                  <div key={m.label} className="p-4">
                    <div
                      className="font-data text-[0.6rem] font-bold uppercase"
                      style={{ color: "var(--dim)" }}
                    >
                      {m.label}
                    </div>
                    <div
                      className="mt-1 font-display text-[1.45rem] font-black uppercase leading-none tabular-nums"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
