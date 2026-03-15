const facts = [
  {
    icon: "🧠",
    title: "Thinks in systems",
    text: "Every problem is a distributed system problem. Even lunch.",
  },
  {
    icon: "🚢",
    title: "Ships first, perfects later",
    text: "v1 in production beats v∞ in Figma every single time.",
    accent: "lemon",
  },
  {
    icon: "📍",
    title: "US-based",
    text: "Open to relocation. Anywhere the work is good.",
  },
  {
    icon: "🤝",
    title: "Code + product",
    text: "Knows both the implementation and how it fits the bigger picture.",
    accent: "mint",
  },
  {
    icon: "📚",
    title: "M.S. Data Science",
    text: "Theory meets production every day at work.",
  },
  {
    icon: "⚡",
    title: "Learning by doing",
    text: "DevPath AI, side projects — all built, not just studied.",
    accent: "coral",
  },
];

const accentBg: Record<string, string> = {
  lemon: "var(--lemon)",
  mint: "var(--mint)",
  coral: "var(--coral)",
};

export function FunFacts() {
  return (
    <section className="border-b px-0 md:px-0" style={{ borderColor: "var(--ink)" }}>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ borderColor: "var(--ink)" }}
      >
        {facts.map((f, i) => (
          <div
            key={f.title}
            className="p-6 transition-colors"
            style={{
              background: f.accent ? accentBg[f.accent] : "var(--bg)",
              borderColor: "var(--ink)",
              borderRight: i % 3 !== 2 ? "2px solid var(--ink)" : "none",
              borderBottom: i < 3 ? "2px solid var(--ink)" : "none",
            }}
          >
            <span className="mb-2 block text-[1.5rem]">{f.icon}</span>
            <div
              className="mb-1.5 text-[0.9rem] font-black"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
            >
              {f.title}
            </div>
            <div
              className="text-[0.72rem] font-light leading-[1.6]"
              style={{ color: "var(--dim)" }}
            >
              {f.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
