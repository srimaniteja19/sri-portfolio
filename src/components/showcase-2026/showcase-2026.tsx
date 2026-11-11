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
      java: PROJECTS_2026.filter((p) => p.language === "Java").length,
      live: PROJECTS_2026.filter((p) => p.liveUrl).length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    const base =
      activeFilter === "all"
        ? PROJECTS_2026
        : activeFilter === "live"
        ? PROJECTS_2026.filter((p) => p.liveUrl)
        : PROJECTS_2026.filter((p) => p.language === activeFilter);
    return [...base];
  }, [activeFilter]);

  const handlePinClick = (projectId: string) => {
    const isVisible = filteredProjects.some((p) => p.id === projectId);
    if (!isVisible) {
      setActiveFilter("all");
    }

    setTimeout(
      () => {
        const cardEl = cardRefs.current[projectId];
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
          setHighlightedProjectId(projectId);
          setTimeout(() => {
            setHighlightedProjectId(null);
          }, 1800);
        }
      },
      isVisible ? 0 : 60
    );
  };

  return (
    <section
      id="shipped-so-far"
      className="relative w-full scroll-mt-16 border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{
        borderColor: "var(--ink)",
        background: "var(--bg)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading & Summary Strip */}
        <div
          className="mb-10 flex flex-col items-start justify-between gap-6 border-b-[2.5px] pb-8 lg:flex-row lg:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Shipped So Far
            </h2>
            <p
              className="mt-3 max-w-[65ch] text-[0.95rem] leading-[1.6]"
              style={{ color: "var(--dim)" }}
            >
              Projects built and shipped in 2026. Click any pin on the release
              timeline to jump directly to that project.
            </p>
          </div>

          {/* Summary Box */}
          <div
            className="nb-box flex flex-wrap items-center divide-x-2"
            style={{ borderColor: "var(--ink)" }}
          >
            <div className="px-4 py-2.5">
              <span
                className="block font-data text-[0.6rem] font-bold uppercase"
                style={{ color: "var(--dim)" }}
              >
                Projects
              </span>
              <span
                className="font-display text-[1.45rem] font-black leading-none tabular-nums"
                style={{ color: "var(--ink)" }}
              >
                {filterCounts.all}
              </span>
            </div>
            <div
              className="px-4 py-2.5"
              style={{ background: "var(--volt)", color: "#111210" }}
            >
              <span className="block font-data text-[0.6rem] font-bold uppercase">
                In Production
              </span>
              <span className="font-display text-[1.45rem] font-black leading-none tabular-nums">
                {filterCounts.live} Live
              </span>
            </div>
            <div className="px-4 py-2.5">
              <span
                className="block font-data text-[0.6rem] font-bold uppercase"
                style={{ color: "var(--dim)" }}
              >
                Timeline
              </span>
              <span
                className="font-display text-[1.45rem] font-black leading-none tabular-nums"
                style={{ color: "var(--ink)" }}
              >
                Feb — Oct 2026
              </span>
            </div>
          </div>
        </div>

        {/* Release Timeline Centerpiece */}
        <div className="mb-10">
          <ProjectTimeline
            projects={PROJECTS_2026}
            onPinClick={handlePinClick}
            activeProjectId={highlightedProjectId}
          />
        </div>

        {/* Filter Controls */}
        <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={filterCounts}
          />

          <span
            className="border-2 px-3 py-1 font-data text-[0.68rem] font-bold uppercase tracking-wider tabular-nums"
            style={{
              borderColor: "var(--ink)",
              background: "var(--surface)",
              color: "var(--ink)",
            }}
          >
            Showing {filteredProjects.length} of {PROJECTS_2026.length} projects
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
              project={project}
              isFeatured={
                (project.id === "Hoard" || project.id === "365DayLearning") &&
                activeFilter === "all"
              }
              isHighlighted={highlightedProjectId === project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
