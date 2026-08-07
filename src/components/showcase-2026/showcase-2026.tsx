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
      id="shipped-so-far"
      className="relative w-full border-b py-12 px-6 md:px-8"
      style={{
        borderColor: "var(--ink)",
        background: "var(--bg)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header & Stat Strip */}
        <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--dim)",
              }}
            >
              <span style={{ color: "var(--mint)" }}>//</span> archive & releases
            </div>
            <h2
              className="text-[2.2rem] font-black italic leading-tight sm:text-[2.8rem]"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                color: "var(--ink)",
              }}
            >
              shipped so far.
            </h2>
            <p
              className="mt-1 text-[0.78rem] font-light leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                color: "var(--dim)",
              }}
            >
              A build journal of projects shipped and actively working in production.
            </p>
          </div>

          {/* Stat Strip — 1 bordered box with internal dividers */}
          <div
            className="w-full rounded border-2 shadow-[3px_3px_0_var(--ink)] md:w-auto"
            style={{
              borderColor: "var(--ink)",
              background: "var(--bg)",
            }}
          >
            <div className="grid grid-cols-2 divide-x-2 divide-y-2 sm:grid-cols-4 sm:divide-y-0" style={{ borderColor: "var(--ink)" }}>
              <div className="p-3 text-center sm:px-4 sm:py-2.5">
                <div
                  className="text-xl font-black"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--ink)",
                  }}
                >
                  {filterCounts.all}
                </div>
                <div
                  className="text-[0.54rem] font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--dim)",
                  }}
                >
                  Projects
                </div>
              </div>

              <div className="p-3 text-center sm:px-4 sm:py-2.5">
                <div
                  className="text-xl font-black"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--mint)",
                  }}
                >
                  {filterCounts.ts}
                </div>
                <div
                  className="text-[0.54rem] font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--dim)",
                  }}
                >
                  TypeScript
                </div>
              </div>

              <div className="p-3 text-center sm:px-4 sm:py-2.5">
                <div
                  className="text-xl font-black"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--coral)",
                  }}
                >
                  5
                </div>
                <div
                  className="text-[0.54rem] font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--dim)",
                  }}
                >
                  Months active
                </div>
              </div>

              <div className="p-3 text-center sm:px-4 sm:py-2.5">
                <div
                  className="text-xl font-black"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--lemon)",
                  }}
                >
                  {filterCounts.live}
                </div>
                <div
                  className="text-[0.54rem] font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--dim)",
                  }}
                >
                  In production
                </div>
              </div>
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
        <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={filterCounts}
          />

          <span
            className="text-[0.62rem] font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--dim)",
            }}
          >
            Showing {filteredProjects.length} of {PROJECTS_2026.length} projects
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
