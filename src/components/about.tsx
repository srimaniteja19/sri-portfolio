"use client";

import { useContent } from "@/components/content-provider";

export function About() {
  const { about } = useContent();
  const cells = about.cells;

  return (
    <section
      id="about"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--bg)",
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
              About
            </h2>
            <p
              className="mt-2 max-w-[65ch] text-[0.95rem]"
              style={{ color: "var(--dim)" }}
            >
              Background, focus areas, and what I enjoy building.
            </p>
          </div>
        </div>

        <div
          className="nb-box grid grid-cols-1 divide-y-[2.5px] md:grid-cols-2 md:divide-x-[2.5px]"
          style={{ borderColor: "var(--ink)" }}
        >
          {cells.map((cell, idx) => (
            <div
              key={cell.label}
              className="flex flex-col justify-between p-6 md:p-8"
              style={{
                background:
                  idx === 0 ? "var(--surface)" : "var(--surface-elevated)",
              }}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className="font-display text-[1.75rem] font-black uppercase leading-none"
                    style={{ color: "var(--ink)" }}
                  >
                    {cell.title}
                  </h3>
                  <span
                    className="border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: idx % 2 === 0 ? "var(--volt)" : "var(--bg)",
                      color: idx % 2 === 0 ? "#111210" : "var(--ink)",
                    }}
                  >
                    {cell.label}
                  </span>
                </div>

                <p
                  className="mt-4 max-w-[62ch] text-[0.95rem] leading-[1.65]"
                  style={{ color: "var(--dim)" }}
                >
                  {cell.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
