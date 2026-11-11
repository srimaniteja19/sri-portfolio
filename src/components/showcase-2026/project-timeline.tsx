"use client";

import React, { useMemo } from "react";
import { Project2026 } from "@/data/projects-2026";

interface ProjectTimelineProps {
  projects: Project2026[];
  onPinClick: (projectId: string) => void;
  activeProjectId?: string | null;
}

const ACCENT_STYLE: Record<
  Project2026["accent"],
  { bg: string; fg: string }
> = {
  blue: { bg: "var(--surface-elevated)", fg: "var(--ink)" },
  coral: { bg: "var(--signal)", fg: "#FFFFFF" },
  lime: { bg: "var(--emerald)", fg: "#111210" },
  sun: { bg: "var(--volt)", fg: "#111210" },
};

const MONTHS = [
  { name: "FEB", date: "2026-02-01" },
  { name: "MAR", date: "2026-03-01" },
  { name: "APR", date: "2026-04-01" },
  { name: "MAY", date: "2026-05-01" },
  { name: "JUN", date: "2026-06-01" },
  { name: "JUL", date: "2026-07-01" },
  { name: "AUG", date: "2026-08-01" },
  { name: "SEP", date: "2026-09-01" },
  { name: "OCT", date: "2026-10-01" },
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
    () => new Date("2026-10-15T23:59:59Z").getTime(),
    []
  );
  const totalDuration = timelineEndMs - timelineStartMs;

  const pins = useMemo(() => {
    const sorted = [...projects].sort((a, b) =>
      a.lastPush.localeCompare(b.lastPush)
    );
    return sorted.map((p, index) => {
      const targetDate = p.id === "Hoard" ? p.lastPush : p.created;
      const createdMs = new Date(`${targetDate}T00:00:00Z`).getTime();
      const rawPercent = ((createdMs - timelineStartMs) / totalDuration) * 100;
      const leftPercent = Math.min(Math.max(rawPercent, 5), 95);
      const tier = index % 3;
      return {
        ...p,
        leftPercent,
        tier,
      };
    });
  }, [projects, timelineStartMs, totalDuration]);

  const monthPositions = useMemo(() => {
    return MONTHS.map((m) => {
      const ms = new Date(`${m.date}T00:00:00Z`).getTime();
      const rawPercent = ((ms - timelineStartMs) / totalDuration) * 100;
      return {
        name: m.name,
        leftPercent: Math.min(Math.max(rawPercent, 3), 97),
      };
    });
  }, [timelineStartMs, totalDuration]);

  return (
    <div className="w-full overflow-x-auto pb-3 pt-1">
      <div
        className="nb-box relative min-w-[780px]"
        style={{
          borderColor: "var(--ink)",
          background: "var(--surface-elevated)",
        }}
      >
        {/* Top Bar */}
        <div
          className="flex items-center justify-between border-b-2 px-5 py-2.5 font-data text-[0.68rem] font-bold uppercase"
          style={{
            borderColor: "var(--ink)",
            background: "var(--ink)",
            color: "var(--bg)",
          }}
        >
          <span>Release Timeline (Feb — Oct 2026)</span>
          <span style={{ color: "var(--volt)" }}>
            Click pin to focus project
          </span>
        </div>

        <div className="p-6">
          {/* Staggered Pins Area */}
          <div className="relative mb-4 h-36">
            {pins.map((pin) => {
              const isSelected = activeProjectId === pin.id;
              const style = ACCENT_STYLE[pin.accent];
              const topPx = pin.tier === 0 ? 0 : pin.tier === 1 ? 42 : 84;
              const stemHeight = 128 - topPx;

              return (
                <div
                  key={pin.id}
                  className="absolute flex flex-col items-center transition-transform duration-150 hover:z-40"
                  style={{
                    left: `${pin.leftPercent}%`,
                    transform: "translateX(-50%)",
                    top: `${topPx}px`,
                    zIndex: isSelected ? 35 : 20 - pin.tier,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onPinClick(pin.id)}
                    aria-label={`Jump to project ${pin.title}`}
                    className={`cursor-pointer flex items-center gap-1.5 border-2 px-2.5 py-1 font-data text-[0.68rem] font-bold uppercase whitespace-nowrap transition-all ${
                      isSelected ? "scale-105" : "hover:-translate-y-0.5"
                    }`}
                    style={{
                      backgroundColor: style.bg,
                      color: style.fg,
                      borderColor: "var(--ink)",
                      boxShadow: isSelected
                        ? "3.5px 3.5px 0px var(--ink)"
                        : "2px 2px 0px var(--ink)",
                    }}
                  >
                    <span>{pin.title}</span>
                    {pin.liveUrl && (
                      <span
                        className="border px-1 text-[0.6rem] font-black"
                        style={{
                          borderColor: "#111210",
                          background: "var(--volt)",
                          color: "#111210",
                        }}
                      >
                        Live
                      </span>
                    )}
                  </button>

                  <div
                    className="w-[2px]"
                    style={{
                      height: `${stemHeight}px`,
                      background: "var(--ink)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Main Axis Track */}
          <div
            className="relative my-2 h-[6px] w-full border"
            style={{
              background: "var(--ink)",
              borderColor: "var(--ink)",
            }}
          >
            {pins.map((pin) => (
              <div
                key={`tick-${pin.id}`}
                className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 border-2"
                style={{
                  left: `${pin.leftPercent}%`,
                  backgroundColor: ACCENT_STYLE[pin.accent].bg,
                  borderColor: "var(--ink)",
                }}
              />
            ))}
          </div>

          {/* Month Labels */}
          <div className="relative mt-3 h-7 w-full">
            {monthPositions.map((m) => (
              <div
                key={m.name}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${m.leftPercent}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className="h-2.5 w-[2px]"
                  style={{ background: "var(--ink)" }}
                />
                <span
                  className="mt-1 font-data text-[0.64rem] font-bold uppercase tabular-nums"
                  style={{ color: "var(--ink)" }}
                >
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
