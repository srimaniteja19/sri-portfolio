"use client";

import React from "react";

export type FilterCategory = "all" | "TypeScript" | "JavaScript" | "Java" | "live";

interface ProjectFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: {
    all: number;
    ts: number;
    js: number;
    java: number;
    live: number;
  };
}

export function ProjectFilters({
  activeFilter,
  onFilterChange,
  counts,
}: ProjectFiltersProps) {
  const filters: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All", count: counts.all },
    { id: "live", label: "Live", count: counts.live },
    { id: "TypeScript", label: "TypeScript", count: counts.ts },
    { id: "JavaScript", label: "JavaScript", count: counts.js },
    { id: "Java", label: "Java", count: counts.java },
  ];

  return (
    <div
      role="region"
      aria-label="Project Filters"
      className="flex flex-wrap items-center gap-2"
    >
      {filters.map(({ id, label, count }) => {
        const isActive = activeFilter === id;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(id)}
            className="nb-btn cursor-pointer px-3.5 py-1.5 text-[0.68rem] tabular-nums"
            style={{
              backgroundColor: isActive
                ? "var(--ink)"
                : "var(--surface-elevated)",
              color: isActive ? "var(--bg)" : "var(--ink)",
            }}
          >
            <span>{label}</span>
            <span
              className="border px-1.5 py-0.2 text-[0.6rem]"
              style={{
                borderColor: isActive ? "var(--bg)" : "var(--ink)",
                background: isActive ? "var(--volt)" : "var(--surface)",
                color: "#111210",
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
