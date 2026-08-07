"use client";

import React from "react";

export type FilterCategory = "all" | "TypeScript" | "JavaScript" | "live";

interface ProjectFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: {
    all: number;
    ts: number;
    js: number;
    live: number;
  };
}

export function ProjectFilters({
  activeFilter,
  onFilterChange,
  counts,
}: ProjectFiltersProps) {
  const filters: { id: FilterCategory; label: string }[] = [
    { id: "all", label: `All ${counts.all}` },
    { id: "TypeScript", label: `TypeScript (${counts.ts})` },
    { id: "JavaScript", label: `JavaScript (${counts.js})` },
    { id: "live", label: `Live (${counts.live})` },
  ];

  return (
    <div
      role="region"
      aria-label="Project Filters"
      className="flex flex-wrap items-center gap-2"
    >
      {filters.map(({ id, label }) => {
        const isActive = activeFilter === id;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(id)}
            className="cursor-pointer rounded border-2 px-3 py-1.5 text-[0.65rem] font-bold uppercase transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              borderColor: "var(--ink)",
              backgroundColor: isActive ? "var(--ink)" : "var(--bg)",
              color: isActive ? "var(--bg)" : "var(--ink)",
              boxShadow: isActive ? "2px 2px 0 var(--ink)" : "none",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
