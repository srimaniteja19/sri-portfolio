"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Overview" },
  { id: "shipped-so-far", label: "Projects" },
  { id: "devlog", label: "Builds" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function LogbookRail() {
  const [activeId, setActiveId] = useState<string>("top");
  const pctTextRef = useRef<HTMLSpanElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        for (const sec of SECTIONS) {
          if (visibleSections.has(sec.id)) {
            setActiveId((prev) => (prev === sec.id ? prev : sec.id));
            break;
          }
        }
      },
      {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.25],
      }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    let maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    let rafId = 0;
    let lastPct = -1;

    const ro = new ResizeObserver(() => {
      maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
    });
    ro.observe(document.documentElement);

    const updateGauge = () => {
      rafId = 0;
      const pct = Math.min(
        100,
        Math.max(0, Math.round((window.scrollY / maxScroll) * 100))
      );
      if (pct === lastPct) return;
      lastPct = pct;

      if (pctTextRef.current) {
        pctTextRef.current.textContent = `${pct}%`;
      }
      for (let i = 0; i < 10; i++) {
        const cell = stepRefs.current[i];
        if (!cell) continue;
        const filled = pct >= (i + 1) * 10 || (i === 0 && pct > 0);
        cell.style.background = filled ? "var(--signal)" : "var(--faint)";
      }
    };

    const onScroll = () => {
      if (rafId === 0) {
        rafId = requestAnimationFrame(updateGauge);
      }
    };

    updateGauge();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <aside
      aria-label="Page section navigation"
      className="hidden xl:flex xl:w-[190px] xl:shrink-0 xl:flex-col xl:justify-between xl:border-r-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
      }}
    >
      <div className="sticky top-[57px] flex h-[calc(100vh-57px)] flex-col justify-between p-4">
        <div>
          <nav
            aria-label="Section jump links"
            className="flex flex-col gap-1.5"
          >
            {SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="group flex items-center justify-between border-2 px-3 py-1.5 font-data text-[0.68rem] font-bold uppercase transition-colors"
                  style={{
                    borderColor: isActive ? "var(--ink)" : "transparent",
                    background: isActive ? "var(--volt)" : "transparent",
                    color: isActive ? "#111210" : "var(--dim)",
                    boxShadow: isActive ? "2.5px 2.5px 0px var(--ink)" : "none",
                  }}
                >
                  <span className="truncate">{sec.label}</span>
                  {isActive && (
                    <span
                      className="inline-block h-2 w-2 shrink-0"
                      style={{ background: "#111210" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="border-2 p-3"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          <div className="mb-2 flex items-center justify-between font-data text-[0.64rem] font-bold uppercase">
            <span style={{ color: "var(--dim)" }}>Scroll</span>
            <span
              ref={pctTextRef}
              className="tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              0%
            </span>
          </div>
          <div
            className="grid grid-cols-10 gap-0.5 border p-0.5"
            style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="h-2"
                style={{
                  background: "var(--faint)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
