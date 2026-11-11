const TECH_ITEMS = [
  { cat: "Frontend", label: "Next.js 16 & React 19" },
  { cat: "Language", label: "TypeScript" },
  { cat: "AI / LLM", label: "LangChain & LangGraph" },
  { cat: "Cloud AI", label: "AWS Bedrock & OpenRouter" },
  { cat: "Database", label: "PostgreSQL & Drizzle ORM" },
  { cat: "Search", label: "Redis & Vector Indexing" },
  { cat: "Infra", label: "Docker & Kubernetes" },
  { cat: "Role", label: "Software Engineer @ Rivian" },
];

export function ScrollTicker() {
  return (
    <div
      className="flex overflow-hidden border-b-[2.5px] py-2.5"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
        contain: "content",
      }}
    >
      <div
        className="flex w-max items-center"
        style={{
          animation: "tickerScroll 28s linear infinite",
          willChange: "transform",
        }}
      >
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2.5 border-r-2 px-5 whitespace-nowrap"
            style={{ borderColor: "var(--ink)" }}
          >
            <span
              className="border px-1.5 py-0.5 font-data text-[0.6rem] font-bold uppercase"
              style={{
                borderColor: "var(--ink)",
                background: "var(--volt)",
                color: "#111210",
              }}
            >
              {item.cat}
            </span>
            <span
              className="font-data text-[0.74rem] font-bold uppercase tracking-wider"
              style={{ color: "var(--ink)" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
