"use client";

import React, { useState, useMemo, useRef } from "react";
import { PROJECTS_2026 } from "@/data/projects-2026";
import { ProjectTimeline } from "./project-timeline";
import { ProjectFilters, FilterCategory } from "./project-filters";
import { ProjectCard } from "./project-card";

export function Showcase2026() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(null);

  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const filterCounts = useMemo(() => {
    return {
      all: PROJECTS_2026.length,
      ts: PROJECTS_2026.filter((p) => p.language === "TypeScript").length,
      js: PROJECTS_2026.filter((p) => p.language === "JavaScript").length,
      live: PROJECTS_2026.filter((p) => p.liveUrl).length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS_2026;
    if (activeFilter === "live") return PROJECTS_2026.filter((p) => p.liveUrl);
    return PROJECTS_2026.filter((p) => p.language === activeFilter);
  }, [activeFilter]);

  const handlePinClick = (projectId: string) => {
    // If project is filtered out, reset filter to 'all' so card is visible
    const isVisible = filteredProjects.some((p) => p.id === projectId);
    if (!isVisible) {
      setActiveFilter("all");
    }

    setTimeout(() => {
      const cardEl = cardRefs.current[projectId];
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedProjectId(projectId);
        setTimeout(() => {
          setHighlightedProjectId(null);
        }, 1800);
      }
    }, isVisible ? 0 : 50);
  };

  return (
    <section
      id="shipped-2026"
      className="relative w-full border-b-[3px] border-t-[3px] border-[#0E0E10] py-16 text-[#0E0E10]"
      style={{
        backgroundColor: "#E7E2F2",
        backgroundImage: `
          linear-gradient(to right, rgba(14, 14, 16, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(14, 14, 16, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "26px 26px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="mb-2 inline-block border-[3px] border-[#0E0E10] bg-[#FFD23F] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0E0E10] shadow-[3px_3px_0_#0E0E10]"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {"// Shipped & Working"}
            </div>
            <h2
              className="text-4xl font-extrabold uppercase tracking-tighter text-[#0E0E10] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              Shipped So Far
            </h2>
            <p
              className="mt-2 max-w-2xl text-base font-medium text-[#0E0E10]/80 sm:text-lg"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              A focused build journal of projects shipped so far and actively working.
            </p>
          </div>

          {/* Stat Strip — 1 bordered box with internal dividers */}
          <div
            className="w-full border-[3px] border-[#0E0E10] bg-[#FFFFFF] shadow-[6px_6px_0_#0E0E10] md:w-auto"
            style={{ borderRadius: "0" }}
          >
            <div className="grid grid-cols-2 divide-x-[3px] divide-y-[3px] divide-[#0E0E10] sm:grid-cols-4 sm:divide-y-0">
              <div className="p-3 text-center sm:px-5 sm:py-3">
                <div
                  className="text-2xl font-black text-[#0E0E10]"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  7
                </div>
                <div
                  className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  Projects
                </div>
              </div>

              <div className="p-3 text-center sm:px-5 sm:py-3">
                <div
                  className="text-2xl font-black text-[#2B4CFF]"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  6
                </div>
                <div
                  className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  TypeScript
                </div>
              </div>

              <div className="p-3 text-center sm:px-5 sm:py-3">
                <div
                  className="text-2xl font-black text-[#FF5C4D]"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  5
                </div>
                <div
                  className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  Months active
                </div>
              </div>

              <div className="p-3 text-center sm:px-5 sm:py-3">
                <div
                  className="text-2xl font-black text-[#0E0E10]"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  1
                </div>
                <div
                  className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  In production
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Centerpiece */}
        <div className="mb-10">
          <ProjectTimeline
            projects={PROJECTS_2026}
            onPinClick={handlePinClick}
            activeProjectId={highlightedProjectId}
          />
        </div>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={filterCounts}
          />

          <span
            className="text-xs font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            Showing {filteredProjects.length} of {PROJECTS_2026.length} projects
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
              project={project}
              isHighlighted={highlightedProjectId === project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
