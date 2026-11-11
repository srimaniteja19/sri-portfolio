"use client";

import { useContent } from "@/components/content-provider";

export function ExperienceSection() {
  const { experience, education } = useContent();
  const items = experience.items;

  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--bg)",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-[340px_2.5px_1fr]"
        style={{ borderColor: "var(--ink)" }}
      >
        {/* Left Column: Heading & Education */}
        <div
          className="flex flex-col justify-between border-b-[2.5px] p-6 md:p-8 lg:border-b-0"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.9]"
              style={{ color: "var(--ink)" }}
            >
              Work History &amp; Education
            </h2>
            <p
              className="mt-3 text-[0.95rem] leading-relaxed"
              style={{ color: "var(--dim)" }}
            >
              Enterprise software engineering across EV &amp; energy platforms,
              distributed cloud backends, and production AI/LLM systems.
            </p>
          </div>

          {/* Education Box */}
          {education && education.length > 0 && (
            <div
              className="mt-8 border-2 p-4"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
                boxShadow: "var(--shadow-hard-sm)",
              }}
            >
              <div
                className="border-b pb-2 font-data text-[0.64rem] font-bold uppercase"
                style={{ borderColor: "var(--rule)", color: "var(--dim)" }}
              >
                Academic Degrees
              </div>
              <div className="mt-3 space-y-3.5">
                {education.map((ed) => (
                  <div key={ed.school}>
                    <div
                      className="font-display text-[1.1rem] font-extrabold uppercase leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {ed.degree}
                    </div>
                    <div
                      className="mt-0.5 font-data text-[0.64rem] font-semibold"
                      style={{ color: "var(--dim)" }}
                    >
                      {ed.school} · {ed.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Structural Rule */}
        <div
          className="hidden lg:block"
          style={{ background: "var(--ink)" }}
        />

        {/* Right Chronological Ledger Rows */}
        <div className="divide-y-[2.5px]" style={{ borderColor: "var(--ink)" }}>
          {items.map((item, idx) => {
            const isCurrent = idx === 0;
            return (
              <div
                key={`${item.role}-${item.date}`}
                className="grid grid-cols-1 gap-4 p-6 transition-colors hover:bg-[var(--surface-elevated)] md:grid-cols-[190px_1fr] md:gap-8 md:p-8"
              >
                {/* Date & Status Column */}
                <div>
                  <div
                    className="inline-block border-2 px-2.5 py-1 font-data text-[0.68rem] font-bold uppercase tabular-nums"
                    style={{
                      borderColor: "var(--ink)",
                      background: isCurrent ? "var(--volt)" : "var(--surface)",
                      color: isCurrent ? "#0B0F17" : "var(--ink)",
                    }}
                  >
                    {item.date}
                  </div>
                  {isCurrent && (
                    <div
                      className="mt-2 flex items-center gap-1.5 font-data text-[0.64rem] font-bold uppercase"
                      style={{ color: "var(--signal)" }}
                    >
                      <span
                        className="inline-block h-2 w-2"
                        style={{ background: "var(--signal)" }}
                      />
                      Current Role
                    </div>
                  )}
                </div>

                {/* Role & Scope Column */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="font-display text-[1.75rem] font-black uppercase leading-none"
                      style={{ color: "var(--ink)" }}
                    >
                      {item.role}
                    </h3>
                    <span
                      className="border-2 px-2.5 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                      style={{
                        borderColor: "var(--ink)",
                        background: "var(--surface-elevated)",
                        color: "var(--ink)",
                      }}
                    >
                      {item.meta}
                    </span>
                  </div>

                  <p
                    className="mt-3 max-w-[68ch] text-[0.95rem] leading-[1.65]"
                    style={{ color: "var(--dim)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
