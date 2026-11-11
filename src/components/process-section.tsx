"use client";

import { useContent } from "@/components/content-provider";

export function ProcessSection() {
  const { process } = useContent();
  const steps = process.steps;

  return (
    <section
      id="process"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div
          className="mb-8 flex flex-col items-start justify-between gap-4 border-b-[2.5px] pb-6 sm:flex-row sm:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92]"
              style={{ color: "var(--ink)" }}
            >
              How I Work
            </h2>
            <p
              className="mt-2 max-w-[65ch] text-[0.95rem]"
              style={{ color: "var(--dim)" }}
            >
              From initial problem framing to shipping and iterating in
              production.
            </p>
          </div>
        </div>

        <div
          className="nb-box grid grid-cols-1 divide-y-[2.5px] sm:grid-cols-2 lg:grid-cols-4 lg:divide-x-[2.5px] lg:divide-y-0"
          style={{ borderColor: "var(--ink)" }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="flex flex-col justify-between p-6"
              style={{ background: "var(--surface-elevated)" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b-2 pb-3" style={{ borderColor: "var(--ink)" }}>
                  <h3
                    className="font-display text-[1.75rem] font-black uppercase leading-none"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>
                  <span
                    className="border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase tabular-nums"
                    style={{
                      borderColor: "var(--ink)",
                      background: idx === 2 ? "var(--signal)" : "var(--volt)",
                      color: idx === 2 ? "#FFFFFF" : "#111210",
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <p
                  className="mt-4 text-[0.95rem] leading-[1.6]"
                  style={{ color: "var(--dim)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
