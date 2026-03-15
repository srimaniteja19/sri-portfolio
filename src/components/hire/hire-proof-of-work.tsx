"use client";

const CARDS = [
  { tag: "RAG / LLM", color: "var(--mint)", title: "Built production RAG pipeline for 10M+ product catalog", desc: "Designed semantic search system indexing Goodyear's full tire catalog with chunking, embedding, reranking on AWS Bedrock + LlamaIndex.", metrics: [{ label: "retrieval accuracy", value: "+15% conversion", bar: 88, barColor: "var(--mint)" }, { label: "latency p95", value: "< 800ms", bar: 92, barColor: "var(--sky)" }] },
  { tag: "Full-Stack", color: "var(--lemon)", title: "Cut bundle size 40% on ecommerce frontend", desc: "Audited and refactored Next.js 14 app — code splitting, dynamic imports, image optimization. Measured with Lighthouse + WebPageTest.", metrics: [{ label: "bundle reduction", value: "-40%", bar: 95, barColor: "var(--lemon)" }, { label: "lighthouse score", value: "94 / 100", bar: 94, barColor: "var(--peach)" }] },
  { tag: "AI Automation", color: "var(--coral)", title: "Automated 60% of FP&A manual finance triage", desc: "Built LangGraph agent pipeline that classifies, explains, routes budget variance reports. Replaced 3 hours of daily analyst work with 12-minute run.", metrics: [{ label: "manual work cut", value: "-60%", bar: 85, barColor: "var(--coral)" }, { label: "analyst hours saved/wk", value: "21 hrs", bar: 78, barColor: "var(--lilac)" }] },
];

export function HireProofOfWork() {
  return (
    <div className="grid border-b lg:grid-cols-3" style={{ borderColor: "var(--ink)" }}>
      {CARDS.map((c) => (
        <div key={c.tag} className="group border-r-2 p-5 transition-colors last:border-r-0 hover:bg-[rgba(10,10,9,0.03)]" style={{ borderColor: "var(--ink)" }}>
          <div className="mb-3 flex items-start justify-between">
            <span className="rounded border-2 border-[var(--ink)] px-2.5 py-1 text-[0.54rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", background: c.color }}>{c.tag}</span>
            <span className="text-[0.58rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>verified ✓</span>
          </div>
          <h3 className="mb-2 font-serif text-base font-black leading-tight">{c.title}</h3>
          <p className="mb-4 text-[0.72rem] font-light leading-relaxed" style={{ color: "var(--dim)" }}>{c.desc}</p>
          <div className="flex flex-col gap-2">
            {c.metrics.map((m) => (
              <div key={m.label}>
                <div className="mb-1 flex justify-between text-[0.6rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  <span style={{ color: "var(--dim)" }}>{m.label}</span>
                  <span className="font-bold">{m.value}</span>
                </div>
                <div className="h-1.5 rounded border" style={{ background: "rgba(10,10,9,.07)", borderColor: "rgba(10,10,9,.12)" }}>
                  <div className="h-full rounded" style={{ width: `${m.bar}%`, background: m.barColor }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
