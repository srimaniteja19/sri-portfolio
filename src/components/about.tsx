"use client";

import { useContent } from "@/components/content-provider";

export function About() {
  const { about } = useContent();
  const cells = about.cells;
  return (
    <section id="about" className="scroll-mt-24 px-0 md:px-0">
      <div
        className="grid grid-cols-1 border-b sm:grid-cols-2"
        style={{ borderColor: "var(--ink)" }}
      >
        {cells.map((cell) => (
          <div
            key={cell.label}
            className={`border-r p-6 last:border-r-0 sm:border-b-0 ${cell.color ? `about-${cell.color}` : ""}`}
            style={{ borderColor: "var(--ink)" }}
          >
            <div
              className="mb-2 text-[0.58rem] font-bold uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", letterSpacing: "0.12em" }}
            >
              {cell.label}
            </div>
            <h3
              className="mb-2 text-[1.1rem] font-black leading-tight"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
            >
              {cell.title}
            </h3>
            <p
              className="text-[0.76rem] font-light leading-[1.7]"
              style={{ color: "var(--dim)" }}
            >
              {cell.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
