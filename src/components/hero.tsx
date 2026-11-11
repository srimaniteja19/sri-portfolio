"use client";

import Link from "next/link";
import { useContent } from "@/components/content-provider";

const IMPACT_METRICS = [
  { value: "4+ Yrs", label: "Production Engineering", accent: "var(--surface)" },
  { value: "12", label: "2026 Shipped Projects", accent: "var(--volt)" },
  { value: "+15%", label: "RAG Search Conversion", accent: "var(--emerald)" },
  { value: "-60%", label: "Agent Workflow Triage", accent: "var(--surface)" },
];

export function Hero() {
  const content = useContent();
  const h = content.hero;
  const focusItems = h.focusItems;

  return (
    <section
      id="top"
      className="relative border-b-[2.5px]"
      style={{ borderColor: "var(--ink)" }}
    >
      {/* Main Split Viewport */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.5px_0.8fr]"
        style={{ borderColor: "var(--ink)" }}
      >
        {/* Left Column — Primary Identity, Bio & Actions */}
        <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
          <div>
            <h1
              className="font-display text-[clamp(3.3rem,6.8vw,5.75rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]"
              style={{ color: "var(--ink)" }}
            >
              SRI{" "}
              <span
                className="inline-block border-[2.5px] px-2.5 py-0.5"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--volt)",
                  color: "#0B0F17",
                  boxShadow: "4px 4px 0px var(--ink)",
                }}
              >
                {h.name}
              </span>{" "}
              CHINNAM
            </h1>

            <p
              className="mt-6 max-w-[65ch] text-[1.08rem] font-medium leading-[1.6]"
              style={{ color: "var(--ink)" }}
            >
              Software Engineer at <strong>Rivian</strong> and full-stack AI
              engineer with 4+ years of production experience. I build
              end-to-end LLM applications, semantic search &amp; RAG pipelines,
              and scalable web platforms.
            </p>

            {/* Primary Action Controls */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#shipped-so-far"
                className="nb-btn px-5 py-3 text-[0.78rem]"
                style={{
                  background: "var(--signal)",
                  color: "#FFFFFF",
                }}
              >
                <span>Explore Projects</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M7 2V12M7 12L3 8M7 12L11 8" />
                </svg>
              </a>

              <Link
                href="/hire"
                className="nb-btn px-5 py-3 text-[0.78rem]"
                style={{
                  background: "var(--volt)",
                  color: "#0B0F17",
                }}
              >
                <span>Recruiter &amp; Fit Tools</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Direct Links Bar */}
          <div
            className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 pt-5"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="font-data text-[0.68rem] font-bold uppercase tracking-wider"
                style={{ color: "var(--dim)" }}
              >
                Profiles:
              </span>
              <Link
                href={h.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn px-3 py-1 text-[0.68rem]"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--ink)",
                }}
              >
                GitHub
              </Link>
              <Link
                href={h.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn px-3 py-1 text-[0.68rem]"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--ink)",
                }}
              >
                LinkedIn
              </Link>
              <Link
                href={`mailto:${content.contact.email}`}
                className="nb-btn px-3 py-1 text-[0.68rem]"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--ink)",
                }}
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          className="hidden lg:block"
          style={{ background: "var(--ink)" }}
        />

        {/* Right Column — At a Glance & Key Metrics */}
        <div
          className="flex flex-col justify-between border-t-[2.5px] p-6 lg:border-t-0 lg:p-8"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          {/* At a Glance Box */}
          <div
            className="border-[2.5px]"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface-elevated)",
              boxShadow: "var(--shadow-hard)",
            }}
          >
            <div
              className="flex items-center justify-between border-b-2 px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
              style={{
                borderColor: "var(--ink)",
                background: "var(--ink)",
                color: "var(--bg)",
              }}
            >
              <span>At a Glance</span>
              <span style={{ color: "var(--volt)" }}>United States</span>
            </div>

            <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
              {focusItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <span
                    className="font-data text-[0.68rem] font-bold uppercase"
                    style={{ color: "var(--dim)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-data text-[0.74rem] font-bold text-right"
                    style={{ color: "var(--ink)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Production Metrics */}
          <div
            className="mt-6 grid grid-cols-2 divide-x-2 divide-y-2 border-[2.5px]"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface-elevated)",
              boxShadow: "var(--shadow-hard)",
            }}
          >
            {IMPACT_METRICS.map((m) => (
              <div
                key={m.label}
                className="p-4"
                style={{
                  background: m.accent,
                  color:
                    m.accent === "var(--volt)" || m.accent === "var(--emerald)"
                      ? "#0B0F17"
                      : "var(--ink)",
                }}
              >
                <div className="font-display text-[1.75rem] font-black leading-none tabular-nums">
                  {m.value}
                </div>
                <div className="mt-1 font-data text-[0.6rem] font-bold uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
