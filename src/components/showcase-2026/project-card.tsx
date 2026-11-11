"use client";

import React, { forwardRef, useState } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectCardProps {
  project: Project2026;
  isHighlighted?: boolean;
  isFeatured?: boolean;
}

const ACCENT_HEADER: Record<
  Project2026["accent"],
  { bg: string; fg: string }
> = {
  blue: {
    bg: "var(--surface)",
    fg: "var(--ink)",
  },
  coral: {
    bg: "var(--signal)",
    fg: "#FFFFFF",
  },
  lime: {
    bg: "var(--emerald)",
    fg: "#111210",
  },
  sun: {
    bg: "var(--volt)",
    fg: "#111210",
  },
};

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${monthNames[mIndex]} ${parseInt(day, 10)}, ${year}`;
}

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  function ProjectCard({ project, isHighlighted, isFeatured }, ref) {
    const [expanded, setExpanded] = useState(false);
    const headerTheme = ACCENT_HEADER[project.accent];
    const hasHighlights = Boolean(project.highlights && project.highlights.length > 0);

    return (
      <article
        ref={ref}
        id={`project-card-${project.id}`}
        className={`nb-box group flex flex-col justify-between transition-all duration-150 ${
          isFeatured ? "md:col-span-2" : ""
        } ${
          isHighlighted
            ? "-translate-x-1 -translate-y-1 ring-4 ring-[var(--signal)]"
            : "hover:-translate-x-0.5 hover:-translate-y-0.5"
        }`}
      >
        {/* Top Date & Size Bar */}
        <div
          className="flex items-center justify-between border-b-[2.5px] px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase tracking-wider tabular-nums"
          style={{
            backgroundColor: headerTheme.bg,
            color: headerTheme.fg,
            borderColor: "var(--ink)",
          }}
        >
          <span className="truncate">
            {formatDate(project.created)} — {formatDate(project.lastPush)}
          </span>
          <div className="ml-2 flex shrink-0 items-center gap-1.5">
            {isFeatured && (
              <span
                className="border px-1.5 py-0.5 text-[0.6rem] font-black"
                style={{
                  borderColor: "#111210",
                  background: "#111210",
                  color: "#D9F938",
                }}
              >
                Featured
              </span>
            )}
            <span
              className="border px-1.5 py-0.5 text-[0.6rem] font-bold"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
                color: "var(--ink)",
              }}
            >
              {project.size}
            </span>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3
              className={`font-display font-black uppercase leading-none tracking-tight ${
                isFeatured ? "text-[1.75rem]" : "text-[1.45rem]"
              }`}
              style={{ color: "var(--ink)" }}
            >
              {project.title}
            </h3>

            {project.liveUrl && (
              <span
                className="border-2 px-2 py-0.5 font-data text-[0.64rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--volt)",
                  color: "#111210",
                }}
              >
                Live
              </span>
            )}
          </div>

          <p
            className="mt-3 flex-1 text-[0.95rem] leading-[1.6]"
            style={{ color: "var(--dim)" }}
          >
            {project.blurb}
          </p>

          {/* Expandable Architecture Drawer */}
          {expanded && project.highlights && (
            <div
              className="mt-4 border-2 p-4"
              style={{
                borderColor: "var(--ink)",
                background: "var(--bg)",
                boxShadow: "var(--shadow-hard-sm)",
              }}
            >
              <div
                className="border-b pb-2 font-data text-[0.64rem] font-bold uppercase"
                style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
              >
                System Architecture &amp; Highlights
              </div>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="mt-1 inline-block h-2 w-2 shrink-0 border"
                      style={{
                        borderColor: "var(--ink)",
                        background: "var(--signal)",
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack & Metadata Row */}
          <div
            className="mt-5 flex flex-wrap items-center gap-1.5 border-t-2 pt-3 font-data text-[0.64rem] font-bold uppercase tabular-nums"
            style={{ borderColor: "var(--rule)" }}
          >
            {project.stack && project.stack.length > 0 ? (
              project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border px-2 py-0.5"
                  style={{
                    borderColor: "var(--ink)",
                    background: "var(--surface)",
                    color: "var(--ink)",
                  }}
                >
                  {tech}
                </span>
              ))
            ) : (
              <span
                className="border px-2 py-0.5"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              >
                {project.language}
              </span>
            )}
          </div>
        </div>

        {/* Action Controls Footer */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 border-t-[2.5px] px-5 py-3.5"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn px-3 py-1.5 text-[0.68rem]"
              style={{
                background: "var(--surface-elevated)",
                color: "var(--ink)",
              }}
            >
              <span>View Code</span>
              <svg
                width="11"
                height="11"
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

            {hasHighlights && (
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((prev) => !prev)}
                className="nb-btn cursor-pointer px-3 py-1.5 text-[0.68rem]"
                style={{
                  background: expanded ? "var(--ink)" : "var(--bg)",
                  color: expanded ? "var(--bg)" : "var(--ink)",
                }}
              >
                <span>{expanded ? "Hide Details" : "Architecture"}</span>
              </button>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn px-4 py-1.5 text-[0.68rem]"
              style={{
                background: isFeatured ? "var(--signal)" : "var(--volt)",
                color: isFeatured ? "#FFFFFF" : "#111210",
              }}
            >
              <span>Visit Site</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <path d="M3 9L9 3M9 3H4M9 3V8" />
              </svg>
            </a>
          )}
        </div>
      </article>
    );
  }
);
