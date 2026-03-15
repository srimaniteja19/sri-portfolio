const items = [
  { label: "Next.js", color: "var(--mint)" },
  { label: "TypeScript", color: "var(--lemon)" },
  { label: "Node.js", color: "var(--coral)" },
  { label: "LangChain", color: "var(--sky)" },
  { label: "AWS Bedrock", color: "var(--lilac)" },
  { label: "PostgreSQL", color: "var(--peach)" },
  { label: "GPT-4o", color: "var(--mint)" },
  { label: "Claude 3", color: "var(--lemon)" },
  { label: "RAG", color: "var(--coral)" },
  { label: "Docker", color: "var(--sky)" },
  { label: "Redis", color: "var(--lilac)" },
  { label: "Pinecone", color: "var(--peach)" },
];

export function ScrollTicker() {
  return (
    <div
      className="flex overflow-hidden border-y py-2"
      style={{ borderColor: "var(--ink)", background: "var(--ink)" }}
    >
      <div
        className="flex w-max gap-0"
        style={{ animation: "tickerScroll 20s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={`${item.label}-${i}`} className="flex items-center gap-2 whitespace-nowrap px-4">
            <span className="text-[0.7rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--bg)", letterSpacing: "0.05em" }}>
              <span style={{ color: item.color }}>▸</span> {item.label}
            </span>
            <span className="text-base" style={{ color: "rgba(255,255,255,0.18)" }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
