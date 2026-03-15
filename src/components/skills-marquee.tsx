const row1 = [
  { cat: "frontend", name: "Next.js", bg: "var(--mint)" },
  { cat: "language", name: "TypeScript", bg: "" },
  { cat: "ai/llm", name: "LangChain", bg: "var(--lemon)" },
  { cat: "backend", name: "Node.js", bg: "" },
  { cat: "database", name: "PostgreSQL", bg: "var(--sky)" },
  { cat: "ai/llm", name: "LangGraph", bg: "" },
  { cat: "cloud", name: "AWS Bedrock", bg: "var(--coral)" },
  { cat: "ai/llm", name: "LlamaIndex", bg: "" },
  { cat: "cache", name: "Redis", bg: "var(--lilac)" },
  { cat: "infra", name: "Docker", bg: "" },
  { cat: "vector db", name: "Pinecone", bg: "var(--peach)" },
  { cat: "language", name: "Python", bg: "" },
];

const row2 = [
  { cat: "frontend", name: "React", bg: "" },
  { cat: "styling", name: "Tailwind", bg: "var(--lemon)" },
  { cat: "infra", name: "Kubernetes", bg: "" },
  { cat: "ai model", name: "GPT-4o", bg: "var(--coral)" },
  { cat: "ai model", name: "Claude 3", bg: "" },
  { cat: "infra", name: "CI/CD", bg: "var(--mint)" },
  { cat: "deploy", name: "Vercel", bg: "" },
  { cat: "cloud", name: "AWS", bg: "var(--sky)" },
  { cat: "framework", name: "Vue.js", bg: "" },
  { cat: "technique", name: "RAG", bg: "var(--lilac)" },
  { cat: "search", name: "Semantic", bg: "" },
  { cat: "ai model", name: "Gemini", bg: "var(--peach)" },
];

function SkillBlock({ cat, name, bg }: { cat: string; name: string; bg: string }) {
  return (
    <div
      className="flex-shrink-0 border-r px-5 py-4 transition-colors hover:bg-[rgba(10,10,9,0.05)]"
      style={{ borderColor: "var(--ink)", background: bg || "var(--bg)", whiteSpace: "nowrap" }}
    >
      <div className="mb-1 text-[0.5rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.1em", color: "var(--dim)" }}>
        {cat}
      </div>
      <div className="text-[0.95rem] font-black italic" style={{ fontFamily: "var(--font-fraunces), serif" }}>
        {name}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <div className="overflow-hidden border-b" style={{ borderColor: "var(--ink)" }}>
      <div className="flex border-b" style={{ borderColor: "var(--ink)" }}>
        <div className="flex w-max" style={{ animation: "scroll 28s linear infinite" }}>
          {[...row1, ...row1].map((s, i) => (
            <SkillBlock key={`r1-${s.name}-${i}`} cat={s.cat} name={s.name} bg={s.bg} />
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex w-max" style={{ animation: "scroll 28s linear infinite reverse" }}>
          {[...row2, ...row2].map((s, i) => (
            <SkillBlock key={`r2-${s.name}-${i}`} cat={s.cat} name={s.name} bg={s.bg} />
          ))}
        </div>
      </div>
    </div>
  );
}
