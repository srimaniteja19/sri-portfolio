export function ActionFigureSection() {
  return (
    <section className="border-b px-4 py-8 md:px-8" style={{ borderColor: "var(--ink)" }}>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[18px] border bg-[rgba(10,10,9,0.02)] p-4 shadow-[4px_4px_0_var(--ink)] md:flex-row md:items-center md:p-6" style={{ borderColor: "var(--ink)" }}>
        <div className="flex-1">
          <div
            className="mb-2 text-[0.58rem] font-bold uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
          >
            // collectible
          </div>
          <h2
            className="mb-3 text-[1.5rem] font-black leading-tight md:text-[1.7rem]"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
          >
            Full‑Stack AI Engineer, IRL edition
          </h2>
          <p
            className="text-[0.8rem] leading-relaxed md:text-[0.82rem]"
            style={{ color: "var(--dim)" }}
          >
            A little action‑figure version of me and my favorite tools. It&apos;s a playful snapshot of how I blend product thinking, full‑stack engineering, and practical AI work.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="inline-flex rounded-[22px] border bg-(--bg) p-2 shadow-[3px_3px_0_var(--ink)]" style={{ borderColor: "var(--ink)" }}>
            <img
              src="/assets/myimgaction.png"
              alt="Action figure style illustration of Srimaniteja as a Full Stack AI Engineer"
              className="h-auto max-h-[320px] w-full max-w-[260px] rounded-[18px] border object-cover"
              style={{ borderColor: "var(--ink)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

