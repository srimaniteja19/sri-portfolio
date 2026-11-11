"use client";

import Link from "next/link";
import { useContent } from "@/components/content-provider";
import { PROJECTS_2026 } from "@/data/projects-2026";

export function Hero() {
  const content = useContent();
  const h = content.hero;
  const focusItems = h.focusItems;
  const liveDeployments = PROJECTS_2026.filter((p) => p.liveUrl).slice(0, 4);

  return (
    <section
      id="top"
      className="relative border-b-[2.5px]"
      style={{ borderColor: "var(--ink)" }}
    >
      {/* Top Bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 border-b-[2.5px] px-4 py-2 md:px-8"
        style={{
          borderColor: "var(--ink)",
          background: "var(--surface)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-data text-[0.74rem] font-bold uppercase tracking-wider"
            style={{ color: "var(--ink)" }}
          >
            {h.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-3 font-data text-[0.68rem] font-bold uppercase">
          <span style={{ color: "var(--dim)" }}>M.S. Data Science · SUNY Buffalo</span>
          <span
            className="border-2 px-2 py-0.5"
            style={{
              borderColor: "var(--ink)",
              background: "var(--emerald)",
              color: "#111210",
            }}
          >
            4+ Yrs Exp
          </span>
        </div>
      </div>

      {/* Main Split Viewport */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.15fr_2.5px_0.85fr]"
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
                  color: "#111210",
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
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#shipped-so-far"
                className="nb-btn px-5 py-3 text-[0.78rem]"
                style={{
                  background: "var(--signal)",
                  color: "#FFFFFF",
                }}
              >
                <span>View Projects</span>
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
                  color: "#111210",
                }}
              >
                <span>Hire / Fit Brief</span>
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

              <a
                href="https://refrainly.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn px-4 py-3 text-[0.75rem]"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--ink)",
                }}
              >
                <span>Refrainly.dev</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
            </div>

            {/* Core Focus & Stack Box */}
            <div
              className="mt-9 border-[2.5px]"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
                boxShadow: "var(--shadow-hard)",
              }}
            >
              <div
                className="grid grid-cols-1 divide-y-2 sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0"
                style={{ borderColor: "var(--ink)" }}
              >
                <div className="p-4">
                  <div
                    className="font-display text-[1.25rem] font-bold uppercase"
                    style={{ color: "var(--ink)" }}
                  >
                    Full-Stack Engineering
                  </div>
                  <p
                    className="mt-1.5 text-[0.84rem] leading-relaxed"
                    style={{ color: "var(--dim)" }}
                  >
                    Next.js, React, TypeScript, Node.js, PostgreSQL, Drizzle
                    ORM, Redis, Docker &amp; Kubernetes.
                  </p>
                </div>

                <div className="p-4">
                  <div
                    className="font-display text-[1.25rem] font-bold uppercase"
                    style={{ color: "var(--ink)" }}
                  >
                    Applied AI &amp; LLM Systems
                  </div>
                  <p
                    className="mt-1.5 text-[0.84rem] leading-relaxed"
                    style={{ color: "var(--dim)" }}
                  >
                    LangChain, LangGraph, AWS Bedrock, semantic search, RAG
                    pipelines &amp; streaming UX.
                  </p>
                </div>
              </div>

              {/* Core Stack Tags */}
              <div
                className="flex flex-wrap items-center gap-1.5 border-t-2 px-4 py-3"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--surface)",
                }}
              >
                {h.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="border-2 px-2.5 py-0.5 font-data text-[0.68rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--surface-elevated)",
                      color: "var(--ink)",
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Links Bar */}
          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 pt-5"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="font-data text-[0.68rem] font-bold uppercase tracking-wider"
                style={{ color: "var(--dim)" }}
              >
                Find me:
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

        {/* Right Column — Current Focus & Live Projects */}
        <div
          className="flex flex-col justify-between border-t-[2.5px] p-6 lg:border-t-0 lg:p-8"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          {/* Current Focus Box */}
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
              <span>Current Focus</span>
              <span style={{ color: "var(--volt)" }}>Now</span>
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

          {/* Live Projects Quick Access */}
          <div
            className="mt-6 border-[2.5px]"
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
                background: "var(--surface)",
                color: "var(--ink)",
              }}
            >
              <span>Live Projects</span>
              <span className="tabular-nums">2026</span>
            </div>

            <div className="divide-y-2" style={{ borderColor: "var(--ink)" }}>
              {liveDeployments.map((proj) => (
                <a
                  key={proj.id}
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-[var(--volt)]"
                >
                  <div className="min-w-0">
                    <div
                      className="truncate font-display text-[1.25rem] font-extrabold uppercase tracking-tight group-hover:text-[#111210]"
                      style={{ color: "var(--ink)" }}
                    >
                      {proj.title}
                    </div>
                    <div
                      className="truncate font-data text-[0.64rem] font-medium group-hover:text-[#111210]"
                      style={{ color: "var(--dim)" }}
                    >
                      {proj.liveUrl?.replace(/^https?:\/\//, "")}
                    </div>
                  </div>

                  <span
                    className="shrink-0 border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                    style={{
                      borderColor: "var(--ink)",
                      background: "var(--bg)",
                      color: "var(--ink)",
                    }}
                  >
                    Visit
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
