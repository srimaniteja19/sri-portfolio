const moods = [
  {
    icon: "⚡",
    label: "Full-Stack",
    desc: "Next.js, TypeScript, Node.js — end to end, production-grade, ships on time.",
  },
  {
    icon: "🤖",
    label: "AI / LLM",
    desc: "RAG pipelines, AI agents, semantic search, LangChain, AWS Bedrock, GPT-4o, Claude 3.",
  },
  {
    icon: "☁️",
    label: "Cloud",
    desc: "AWS infrastructure, Docker, Kubernetes, CI/CD — scalable, observable, reliable.",
  },
  {
    icon: "🎨",
    label: "Design",
    desc: "Beautiful, performant UIs people actually enjoy — Tailwind, Framer Motion, accessibility-first.",
  },
  {
    icon: "📊",
    label: "Finance AI",
    desc: "GenAI tools for FP&A workflows — variance explanations, scenario insights, automation.",
  },
];

export function MoodStrip() {
  return (
    <section className="px-5 md:px-9">
      <div
        className="flex gap-0.5 overflow-hidden rounded-2xl border-[2.5px]"
        style={{ borderColor: "var(--ink)", background: "var(--ink)" }}
      >
        {moods.map((m, i) => (
          <div
            key={m.label}
            className="group flex min-w-0 flex-1 flex-col gap-2 p-5 transition-[flex] duration-300 hover:flex-[2.5]"
            style={{
              background:
                i === 0
                  ? "var(--mint)"
                  : i === 1
                    ? "var(--lemon)"
                    : i === 2
                      ? "var(--coral)"
                      : i === 3
                        ? "var(--sky)"
                        : "var(--lilac)",
            }}
          >
            <span className="text-[1.1rem]">{m.icon}</span>
            <span
              className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.6rem] font-bold uppercase tracking-[0.1em]"
              style={{ color: "var(--ink)" }}
            >
              {m.label}
            </span>
            <span
              className="max-h-0 overflow-hidden text-[0.7rem] font-light leading-[1.55] opacity-0 transition-all duration-300 group-hover:max-h-[80px] group-hover:opacity-100"
              style={{ color: "rgba(13,13,13,0.6)" }}
            >
              {m.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
