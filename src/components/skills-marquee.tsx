const DOMAINS = [
  {
    title: "Frontend & Web",
    summary:
      "Server-first React architectures, streaming UI, and type-safe client state.",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "Server Actions"],
  },
  {
    title: "AI & LLM Systems",
    summary:
      "Production RAG pipelines, hybrid vector/keyword search, reranking, and multi-step agents.",
    items: ["LangChain", "LangGraph", "AWS Bedrock", "OpenRouter", "Google Gemini", "GPT-4o / Claude", "LlamaIndex"],
  },
  {
    title: "Databases & Storage",
    summary:
      "Relational schema design, vector indexing, low-latency caching, and transactional integrity.",
    items: ["PostgreSQL", "Neon Serverless", "Drizzle ORM", "Redis", "Pinecone", "Semantic Indexing"],
  },
  {
    title: "Cloud & Infrastructure",
    summary:
      "Containerized microservices, CI/CD automation, payment webhooks, and observability.",
    items: ["Node.js", "Python", "Docker", "Kubernetes", "AWS", "Vercel", "Stripe Webhooks", "CI/CD"],
  },
];

export function SkillsMarquee() {
  return (
    <div
      className="border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--bg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div
          className="mb-8 flex flex-col items-start justify-between gap-4 border-b-[2.5px] pb-6 md:flex-row md:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92]"
              style={{ color: "var(--ink)" }}
            >
              Skills &amp; Tech Stack
            </h2>
            <p
              className="mt-2.5 max-w-[65ch] text-[0.95rem] leading-[1.6]"
              style={{ color: "var(--dim)" }}
            >
              Technologies used across enterprise systems at Rivian and
              independent full-stack AI products.
            </p>
          </div>
        </div>

        <div
          className="nb-box grid grid-cols-1 divide-y-[2.5px] md:grid-cols-2 md:divide-x-[2.5px] md:divide-y-[2.5px]"
          style={{ borderColor: "var(--ink)" }}
        >
          {DOMAINS.map((d) => (
            <div
              key={d.title}
              className="flex flex-col justify-between p-6"
              style={{ background: "var(--surface-elevated)" }}
            >
              <div>
                <h3
                  className="font-display text-[1.75rem] font-black uppercase leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {d.title}
                </h3>

                <p
                  className="mt-2.5 text-[0.84rem] leading-relaxed"
                  style={{ color: "var(--dim)" }}
                >
                  {d.summary}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t pt-4" style={{ borderColor: "var(--rule)" }}>
                {d.items.map((item) => (
                  <span
                    key={item}
                    className="border-2 px-2.5 py-1 font-data text-[0.68rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--bg)",
                      color: "var(--ink)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
