"use client";

import React, { useMemo } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectTimelineProps {
  projects: Project2026[];
  onPinClick: (projectId: string) => void;
  activeProjectId?: string | null;
}

const ACCENT_COLORS: Record<Project2026["accent"], string> = {
  blue: "#2B4CFF",
  coral: "#FF5C4D",
  lime: "#C6F04A",
  sun: "#FFD23F",
};

const ACCENT_TEXT_COLORS: Record<Project2026["accent"], string> = {
  blue: "#FFFFFF",
  coral: "#FFFFFF",
  lime: "#0E0E10",
  sun: "#0E0E10",
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
      // Clamp position safely between 4% and 96%
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
        className="relative min-w-[660px] border-[3px] border-[#0E0E10] bg-[#FFFFFF] p-6 shadow-[7px_7px_0_#0E0E10]"
        style={{ borderRadius: "0" }}
      >
        {/* Header label */}
        <div className="mb-8 flex items-center justify-between border-b-[3px] border-[#0E0E10] pb-3">
          <span
            className="text-xs font-bold uppercase tracking-[0.12em] text-[#0E0E10]"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {"// Release Timeline (Feb — Aug)"}
          </span>
          <span
            className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#0E0E10]/70"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            Click pin to focus card
          </span>
        </div>

        {/* Pins container area */}
        <div className="relative mb-6 h-28">
          {pins.map((pin, idx) => {
            const isTop = idx % 2 === 0;
            const isSelected = activeProjectId === pin.id;
            const accentBg = ACCENT_COLORS[pin.accent];
            const accentText = ACCENT_TEXT_COLORS[pin.accent];

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
                  className={`group relative flex items-center gap-1.5 border-[3px] border-[#0E0E10] px-2.5 py-1 text-xs font-bold uppercase transition-all duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B4CFF] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "scale-105 shadow-[4px_4px_0_#2B4CFF]"
                      : "shadow-[3px_3px_0_#0E0E10] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0E0E10]"
                  }`}
                  style={{
                    backgroundColor: accentBg,
                    color: accentText,
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    letterSpacing: "0.08em",
                    borderRadius: "0",
                  }}
                >
                  <span>{pin.title}</span>
                  {pin.liveUrl && (
                    <span
                      className="border border-[#0E0E10] bg-[#C6F04A] px-1 py-0.2 text-[0.6rem] font-extrabold text-[#0E0E10]"
                      title="Live project"
                    >
                      LIVE
                    </span>
                  )}
                </button>

                {/* Vertical stem line pointing to axis */}
                <div
                  className="w-[3px] bg-[#0E0E10]"
                  style={{
                    height: isTop ? "26px" : "18px",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Timeline main axis track */}
        <div className="relative my-4 h-[6px] w-full border-[2px] border-[#0E0E10] bg-[#0E0E10]">
          {/* Axis pins ticks */}
          {pins.map((pin) => (
            <div
              key={`tick-${pin.id}`}
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 border-[3px] border-[#0E0E10] shadow-[2px_2px_0_#0E0E10]"
              style={{
                left: `${pin.leftPercent}%`,
                backgroundColor: ACCENT_COLORS[pin.accent],
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
              <div className="h-2 w-[2px] bg-[#0E0E10]" />
              <span
                className="mt-1 text-[0.65rem] font-bold text-[#0E0E10]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  letterSpacing: "0.12em",
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
