"use client";

import React, { forwardRef } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectCardProps {
  project: Project2026;
  isHighlighted?: boolean;
}

const ACCENT_BAR_BG: Record<Project2026["accent"], string> = {
  blue: "var(--sky)",
  coral: "var(--coral)",
  lime: "var(--mint)",
  sun: "var(--lemon)",
};

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${monthNames[mIndex]} ${parseInt(day, 10)}, ${year}`;
}

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  function ProjectCard({ project, isHighlighted }, ref) {
    const accentBg = ACCENT_BAR_BG[project.accent];

    return (
      <article
        ref={ref}
        id={`project-card-${project.id}`}
        className={`group flex flex-col justify-between rounded border-2 transition-all duration-200 ${
          isHighlighted
            ? "-translate-x-1 -translate-y-1 shadow-[5px_5px_0_var(--ink)] ring-2 ring-[var(--ink)]"
            : "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)]"
        }`}
        style={{
          borderColor: "var(--ink)",
          background: "var(--bg)",
        }}
      >
        {/* Header Bar */}
        <div
          className="flex items-center justify-between border-b px-4 py-2.5 text-[0.62rem] font-bold uppercase"
          style={{
            backgroundColor: accentBg,
            color: "var(--ink)",
            borderColor: "var(--ink)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            letterSpacing: "0.08em",
          }}
        >
          <span className="truncate">
            {formatDate(project.created)} — {formatDate(project.lastPush)}
          </span>
          <span
            className="ml-2 shrink-0 rounded border px-1.5 py-0.5 text-[0.55rem]"
            style={{
              borderColor: "var(--ink)",
              background: "var(--bg)",
              color: "var(--ink)",
            }}
          >
            {project.size}
          </span>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title & Live Badge */}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3
              className="text-[1.3rem] font-black leading-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              {project.title}
            </h3>
            {project.liveUrl && (
              <span
                className="rounded border border-[var(--ink)] px-1.5 py-0.5 text-[0.52rem] font-bold uppercase"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  background: "var(--lemon)",
                  color: "var(--ink)",
                }}
              >
                Live
              </span>
            )}
          </div>

          {/* Repo Slug */}
          <div
            className="mb-3 text-[0.62rem] font-bold"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--dim)",
            }}
          >
            // {project.repo}
          </div>

          {/* Blurb */}
          <p
            className="mb-4 flex-1 text-[0.74rem] font-light leading-[1.65]"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              color: "var(--dim)",
            }}
          >
            {project.blurb}
          </p>

          {/* Spec Pills Row */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            <span
              className="rounded border border-[var(--ink)] px-2 py-0.5 text-[0.56rem] font-bold uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(10,10,9,0.04)",
                color: "var(--ink)",
              }}
            >
              {project.language}
            </span>
            <span
              className="rounded border border-[var(--ink)] px-2 py-0.5 text-[0.56rem] font-bold uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(10,10,9,0.04)",
                color: "var(--dim)",
              }}
            >
              Start: {project.created}
            </span>
            <span
              className="rounded border border-[var(--ink)] px-2 py-0.5 text-[0.56rem] font-bold uppercase"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                background: "rgba(10,10,9,0.04)",
                color: "var(--dim)",
              }}
            >
              Push: {project.lastPush}
            </span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div
          className="flex items-center gap-3 border-t p-4"
          style={{
            borderColor: "rgba(10,10,9,0.12)",
            background: "rgba(10,10,9,0.02)",
          }}
        >
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded border-2 px-3 py-1 text-[0.62rem] font-bold uppercase transition hover:bg-[var(--ink)] hover:text-[var(--bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              borderColor: "var(--ink)",
              background: "var(--bg)",
              color: "var(--ink)",
            }}
          >
            View Code ↗
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded border-2 px-3 py-1 text-[0.62rem] font-bold uppercase transition hover:bg-[var(--ink)] hover:text-[var(--bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                borderColor: "var(--ink)",
                background: "var(--mint)",
                color: "var(--ink)",
              }}
            >
              Visit Site ↗
            </a>
          )}
        </div>
      </article>
    );
  }
);
