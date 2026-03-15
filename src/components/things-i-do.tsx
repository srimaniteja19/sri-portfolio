const items = [
  "scalable full-stack apps — Next.js, TypeScript, Node.js",
  "LLM-powered products: RAG pipelines, AI agents, semantic search",
  "production backend systems on AWS with Docker + Kubernetes",
  "beautiful, performant UIs that people actually enjoy using",
  "learning by doing — shipping things, breaking things, fixing things",
];

export function ThingsIDo() {
  return (
    <section className="relative overflow-hidden px-5 md:px-9">
      <div
        className="relative rounded-2xl border-[2.5px] p-6 md:p-9"
        style={{ borderColor: "var(--ink)", background: "var(--ink)" }}
      >
        {/* Decorative orbiting rings - v4 */}
        <svg
          className="absolute -right-8 -top-8 h-[200px] w-[200px] opacity-30"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{ transformOrigin: "100px 100px", animation: "spinSlow 20s linear infinite" }}
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="white"
            strokeWidth="1"
            style={{ transformOrigin: "100px 100px", animation: "spinSlowR 14s linear infinite" }}
          />
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="1.5" />
          <circle
            cx="100"
            cy="20"
            r="5"
            fill="white"
            style={{ transformOrigin: "100px 100px", animation: "spinSlow 20s linear infinite" }}
          />
          <circle
            cx="180"
            cy="100"
            r="3.5"
            fill="white"
            style={{ transformOrigin: "100px 100px", animation: "spinSlowR 14s linear infinite" }}
          />
        </svg>

        <div
          className="mb-5 text-[0.6rem] font-bold uppercase tracking-[0.14em]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          what i bring to the table
        </div>
        <h2
          className="mb-8 max-w-[340px] text-[1.4rem] font-black leading-[1.25]"
          style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--bg)" }}
        >
          building things that <em className="italic" style={{ color: "var(--lemon)" }}>matter</em> — at every layer of the stack
        </h2>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b py-2 last:border-0"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2"
                style={{ borderColor: "var(--mint)" }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" stroke="var(--mint)" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2,6 5,9 10,3" />
                </svg>
              </div>
              <span
                className="text-[0.82rem] font-normal"
                style={{ color: "rgba(250,250,247,0.72)" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
