"use client";

import { useContent } from "@/components/content-provider";

const colorBg: Record<string, string> = {
  mint: "var(--mint)",
  lemon: "var(--lemon)",
  coral: "var(--coral)",
  sky: "var(--sky)",
};

export function Projects() {
  const { projects } = useContent();
  return (
    <section id="work" className="scroll-mt-24">
      <div
        className="grid border-b sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr]"
        style={{
          gridTemplateRows: "auto auto",
          borderColor: "var(--ink)",
        }}
      >
        {/* Featured - spans 2 rows */}
        {projects[0] && (
        <a
          href={projects[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border-b border-r-2 p-6 transition-colors hover:bg-[rgba(10,10,9,0.03)] lg:row-span-2"
          style={{
            borderColor: "var(--ink)",
            background: colorBg[projects[0].color],
          }}
        >
          <div
            className="mb-2"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.55rem",
              color: "var(--dim)",
              letterSpacing: "0.06em",
            }}
          >
            // {projects[0].num} — {projects[0].label}
          </div>
          <h3
            className="mb-2 text-[1.3rem] font-black leading-tight"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            {projects[0].name}
          </h3>
          <p
            className="mb-4 text-[0.72rem] font-light leading-[1.65]"
            style={{ color: "var(--dim)" }}
          >
            {projects[0].desc}
          </p>
          <div className="mb-4 flex flex-wrap gap-1">
            {projects[0].tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-[var(--ink)] px-1.5 py-0.5 text-[0.54rem] font-bold"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="mt-4 border-t pt-4"
            style={{ borderColor: "rgba(10,10,9,0.15)" }}
          >
            <div
              className="text-[1.1rem] font-black italic leading-tight"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Live on Vercel
            </div>
            <div
              className="mt-0.5 text-[0.53rem] font-bold uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                letterSpacing: "0.08em",
                color: "var(--dim)",
              }}
            >
              view demo ↗
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "rgba(10,10,9,0.2)" }}
          />
          <span
            className="absolute right-4 top-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.72rem",
            }}
          >
            ↗
          </span>
        </a>
        )}

        {/* Job Tracker */}
        <a
          href="https://mani-job-tracker.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-center border-r border-b p-6 text-center transition-colors hover:bg-[rgba(10,10,9,0.04)]"
          style={{ borderColor: "var(--ink)", background: "var(--ink)" }}
        >
          <div
            className="text-[1.1rem] font-black italic leading-tight"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              color: "var(--lemon)",
            }}
          >
            Job Tracker
          </div>
          <div
            className="mt-1 text-[0.53rem] font-bold uppercase"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            track applications
          </div>
          <span
            className="absolute right-4 top-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.72rem",
              color: "var(--lemon)",
            }}
          >
            ↗
          </span>
        </a>

        {/* DevPath */}
        {projects[1] && (
        <a
          href={projects[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border-b p-6 transition-colors hover:bg-[rgba(10,10,9,0.03)]"
          style={{
            borderColor: "var(--ink)",
            background: colorBg[projects[1].color] || "var(--bg)",
          }}
        >
          <div
            className="mb-2"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.55rem",
              color: "var(--dim)",
              letterSpacing: "0.06em",
            }}
          >
            // {projects[1].num} — {projects[1].label}
          </div>
          <h3
            className="mb-2 text-[1.05rem] font-black leading-tight"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            {projects[1].name}
          </h3>
          <p
            className="mb-4 text-[0.72rem] font-light leading-[1.65]"
            style={{ color: "var(--dim)" }}
          >
            {projects[1].desc}
          </p>
          <div className="mb-3 flex flex-wrap gap-1">
            {projects[1].tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-[var(--ink)] px-1.5 py-0.5 text-[0.54rem] font-bold"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {projects[1].active && (
            <div
              className="flex items-center gap-1.5 text-[0.58rem] font-bold"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "rgba(10,10,9,0.5)",
              }}
            >
              <span
                className="h-1.5 w-1.5 animate-pulse-dot rounded-full"
                style={{ background: "var(--coral)" }}
              />
              actively building
            </div>
          )}
          <span
            className="absolute right-4 top-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.72rem",
            }}
          >
            ↗
          </span>
        </a>
        )}

        {/* More on GitHub */}
        <a
          href="https://github.com/srimaniteja19?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-center border-r p-6 text-center transition-colors hover:brightness-95"
          style={{ borderColor: "var(--ink)", background: "var(--coral)" }}
        >
          <div
            className="text-[1.1rem] font-black italic leading-tight"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            More projects
          </div>
          <div
            className="mt-1 text-[0.53rem] font-bold uppercase"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "0.08em",
              color: "var(--dim)",
            }}
          >
            view on github ↗
          </div>
        </a>
      </div>
    </section>
  );
}
