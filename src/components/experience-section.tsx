const items = [
  {
    date: "2023 – now",
    role: "Full-Stack Engineer",
    meta: "backend + AI/ML",
    desc: "Building AI-powered products. Next.js, TypeScript, LangChain, RAG pipelines, production systems.",
  },
  {
    date: "2019 – 2023",
    role: "Software Engineer",
    meta: "backend + cloud · 4+ yrs",
    desc: "Production backend systems. REST APIs, distributed systems, cloud infrastructure. Full pivot into LLM/AI.",
  },
  {
    date: "2022 – 2023",
    role: "M.S. Data Science",
    meta: "graduate studies",
    desc: "Foundation for current AI/ML and LLM engineering work.",
  },
];

export function ExperienceSection() {
  return (
    <div
      className="grid border-b md:grid-cols-[180px_2.5px_1fr]"
      style={{ borderColor: "var(--ink)" }}
    >
      <div
        className="border-b p-5 md:border-b-0 md:border-r-2"
        style={{ borderColor: "var(--ink)" }}
      >
        <div
          className="text-[2rem] font-black italic leading-[0.95]"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          work
          <br />
          history.
        </div>
        <div
          className="mt-4 space-y-0.5 text-[0.6rem] leading-[1.85]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--dim)",
          }}
        >
          <div>4+ yrs engineering</div>
          <div>2+ yrs AI/ML</div>
          <div>M.S. Data Science</div>
        </div>
      </div>
      <div className="hidden md:block" style={{ background: "var(--ink)" }} />
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.role}
            className="grid border-b py-5 pl-5 pr-5 md:grid-cols-[88px_1fr] md:gap-5 md:pr-6"
            style={{ borderColor: "rgba(10,10,9,0.06)" }}
          >
            <div
              className="mb-1 text-[0.58rem] font-bold md:mb-0 md:pt-0.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--dim)",
              }}
            >
              {item.date}
            </div>
            <div>
              <div
                className="text-[0.95rem] font-black"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {item.role}
              </div>
              <div className="my-2 flex flex-wrap items-center gap-2">
                <span
                  className="rounded border border-[var(--ink)] px-1.5 py-0.5 text-[0.52rem] font-bold uppercase"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  {item.meta}
                </span>
              </div>
              <div
                className="text-[0.72rem] font-light leading-[1.65]"
                style={{ color: "var(--dim)" }}
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
