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
      className="flex flex-wrap items-center gap-3"
    >
      {filters.map(({ id, label }) => {
        const isActive = activeFilter === id;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(id)}
            className={`cursor-pointer border-[3px] border-[#0E0E10] px-4 py-2 text-xs font-bold uppercase transition-all duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B4CFF] focus-visible:ring-offset-2 ${
              isActive
                ? "bg-[#2B4CFF] text-[#FFFFFF] shadow-[4px_4px_0_#0E0E10]"
                : "bg-[#FFFFFF] text-[#0E0E10] shadow-[3px_3px_0_#0E0E10] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0E0E10]"
            }`}
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "0.12em",
              borderRadius: "0",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
