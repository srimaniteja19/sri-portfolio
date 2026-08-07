"use client";

import React, { useMemo } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectTimelineProps {
  projects: Project2026[];
  onPinClick: (projectId: string) => void;
  activeProjectId?: string | null;
}

const ACCENT_COLORS: Record<Project2026["accent"], string> = {
  blue: "var(--sky)",
  coral: "var(--coral)",
  lime: "var(--mint)",
  sun: "var(--lemon)",
};

const MONTHS = [
  { name: "FEB", date: "2026-02-01" },
  { name: "MAR", date: "2026-03-01" },
  { name: "APR", date: "2026-04-01" },
  { name: "MAY", date: "2026-05-01" },
  { name: "JUN", date: "2026-06-01" },
  { name: "JUL", date: "2026-07-01" },
  { name: "AUG", date: "2026-08-01" },
];

export function ProjectTimeline({
  projects,
  onPinClick,
  activeProjectId,
}: ProjectTimelineProps) {
  const timelineStartMs = useMemo(
    () => new Date("2026-02-01T00:00:00Z").getTime(),
    []
  );
  const timelineEndMs = useMemo(
    () => new Date("2026-08-31T23:59:59Z").getTime(),
    []
  );
  const totalDuration = timelineEndMs - timelineStartMs;

  const pins = useMemo(() => {
    return projects.map((p) => {
      const createdMs = new Date(`${p.created}T00:00:00Z`).getTime();
      const rawPercent = ((createdMs - timelineStartMs) / totalDuration) * 100;
      const leftPercent = Math.min(Math.max(rawPercent, 4), 96);
      return {
        ...p,
        leftPercent,
      };
    });
  }, [projects, timelineStartMs, totalDuration]);

  const monthPositions = useMemo(() => {
    return MONTHS.map((m) => {
      const ms = new Date(`${m.date}T00:00:00Z`).getTime();
      const rawPercent = ((ms - timelineStartMs) / totalDuration) * 100;
      return {
        name: m.name,
        leftPercent: Math.min(Math.max(rawPercent, 2), 98),
      };
    });
  }, [timelineStartMs, totalDuration]);

  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-thin">
      <div
        className="relative min-w-[660px] rounded border-2 p-6 transition-colors"
        style={{
          borderColor: "var(--ink)",
          background: "var(--bg)",
          boxShadow: "4px 4px 0 var(--ink)",
        }}
      >
        {/* Header label */}
        <div
          className="mb-8 flex items-center justify-between border-b pb-3"
          style={{ borderColor: "var(--ink)" }}
        >
          <span
            className="text-[0.62rem] font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--dim)",
            }}
          >
            {"// Release Timeline (Feb — Aug)"}
          </span>
          <span
            className="text-[0.58rem] font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--dim)",
            }}
          >
            Click pin to focus project
          </span>
        </div>

        {/* Pins container area */}
        <div className="relative mb-6 h-28">
          {pins.map((pin, idx) => {
            const isTop = idx % 2 === 0;
            const isSelected = activeProjectId === pin.id;
            const accentBg = ACCENT_COLORS[pin.accent];

            return (
              <div
                key={pin.id}
                className="absolute flex flex-col items-center transition-transform duration-200 hover:z-30"
                style={{
                  left: `${pin.leftPercent}%`,
                  transform: "translateX(-50%)",
                  top: isTop ? "0px" : "44px",
                  zIndex: isSelected ? 20 : 10,
                }}
              >
                <button
                  type="button"
                  onClick={() => onPinClick(pin.id)}
                  aria-label={`Jump to project ${pin.title}`}
                  className={`group relative flex items-center gap-1.5 rounded border-2 px-2.5 py-1 text-[0.65rem] font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] ${
                    isSelected
                      ? "scale-105 shadow-[3px_3px_0_var(--ink)]"
                      : "hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)]"
                  }`}
                  style={{
                    backgroundColor: accentBg,
                    color: "var(--ink)",
                    borderColor: "var(--ink)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  <span>{pin.title}</span>
                  {pin.liveUrl && (
                    <span
                      className="rounded border px-1 text-[0.52rem] font-black"
                      style={{
                        borderColor: "var(--ink)",
                        background: "var(--lemon)",
                        color: "var(--ink)",
                      }}
                      title="Live project"
                    >
                      LIVE
                    </span>
                  )}
                </button>

                {/* Vertical stem line pointing to axis */}
                <div
                  className="w-[2px]"
                  style={{
                    height: isTop ? "26px" : "18px",
                    background: "var(--ink)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Timeline main axis track */}
        <div
          className="relative my-4 h-[4px] w-full rounded"
          style={{ background: "var(--ink)" }}
        >
          {/* Axis pins ticks */}
          {pins.map((pin) => (
            <div
              key={`tick-${pin.id}`}
              className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
              style={{
                left: `${pin.leftPercent}%`,
                backgroundColor: ACCENT_COLORS[pin.accent],
                borderColor: "var(--ink)",
              }}
            />
          ))}
        </div>

        {/* Month tick marks & labels */}
        <div className="relative mt-2 h-6 w-full">
          {monthPositions.map((m) => (
            <div
              key={m.name}
              className="absolute flex flex-col items-center"
              style={{
                left: `${m.leftPercent}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="h-2 w-[2px]" style={{ background: "var(--ink)" }} />
              <span
                className="mt-1 text-[0.58rem] font-bold"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--dim)",
                }}
              >
                {m.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
