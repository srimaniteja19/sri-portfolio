"use client";

import React, { forwardRef } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectCardProps {
  project: Project2026;
  isHighlighted?: boolean;
}

const ACCENT_BAR_BG: Record<Project2026["accent"], string> = {
  blue: "#2B4CFF",
  coral: "#FF5C4D",
  lime: "#C6F04A",
  sun: "#FFD23F",
};

const ACCENT_BAR_TEXT: Record<Project2026["accent"], string> = {
  blue: "#FFFFFF",
  coral: "#FFFFFF",
  lime: "#0E0E10",
  sun: "#0E0E10",
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
    const accentText = ACCENT_BAR_TEXT[project.accent];

    return (
      <article
        ref={ref}
        id={`project-card-${project.id}`}
        className={`group flex flex-col justify-between border-[3px] border-[#0E0E10] bg-[#FFFFFF] transition-all duration-200 motion-reduce:transition-none ${
          isHighlighted
            ? "-translate-x-1 -translate-y-1 shadow-[11px_11px_0_#2B4CFF] ring-4 ring-[#2B4CFF]"
            : "shadow-[7px_7px_0_#0E0E10] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0_#0E0E10]"
        }`}
        style={{ borderRadius: "0" }}
      >
        {/* Header Bar */}
        <div
          className="flex items-center justify-between border-b-[3px] border-[#0E0E10] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em]"
          style={{
            backgroundColor: accentBg,
            color: accentText,
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          <span className="truncate">
            {formatDate(project.created)} — {formatDate(project.lastPush)}
          </span>
          <span className="ml-2 shrink-0 border border-[#0E0E10] bg-[#FFFFFF] px-1.5 py-0.5 text-[0.68rem] text-[#0E0E10]">
            {project.size}
          </span>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title & Live Badge */}
          <div className="mb-2 flex flex-wrap items-center gap-2.5">
            <h3
              className="text-2xl font-extrabold uppercase leading-none tracking-tighter text-[#0E0E10]"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {project.title}
            </h3>
            {project.liveUrl && (
              <span
                className="border-[2px] border-[#0E0E10] bg-[#C6F04A] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10] shadow-[2px_2px_0_#0E0E10]"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Live
              </span>
            )}
          </div>

          {/* Repo Slug */}
          <div
            className="mb-4 text-xs font-semibold text-[#0E0E10]/70"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {project.repo}
          </div>

          {/* Blurb */}
          <p
            className="mb-6 flex-1 text-sm leading-relaxed text-[#0E0E10]"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {project.blurb}
          </p>

          {/* Spec Pills Row */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span
              className="border-[2px] border-[#0E0E10] bg-[#E7E2F2] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Lang: {project.language}
            </span>
            <span
              className="border-[2px] border-[#0E0E10] bg-[#E7E2F2] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Created: {project.created}
            </span>
            <span
              className="border-[2px] border-[#0E0E10] bg-[#E7E2F2] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Pushed: {project.lastPush}
            </span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center gap-3 border-t-[3px] border-[#0E0E10] bg-[#E7E2F2]/50 p-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 border-[3px] border-[#0E0E10] bg-[#FFFFFF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0E0E10] shadow-[3px_3px_0_#0E0E10] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0E0E10] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B4CFF] focus-visible:ring-offset-2"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            View Code ↗
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border-[3px] border-[#0E0E10] bg-[#C6F04A] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0E0E10] shadow-[3px_3px_0_#0E0E10] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0E0E10] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B4CFF] focus-visible:ring-offset-2"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Visit Site ↗
            </a>
          )}
        </div>
      </article>
    );
  }
);
