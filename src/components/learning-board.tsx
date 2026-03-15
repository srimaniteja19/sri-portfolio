"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STICKIES = [
  { text: "Rust\nsystems", color: "#F5E642", x: 30, y: 30, rot: -3 },
  { text: "Kubernetes\n& k8s", color: "#7EEDC4", x: 160, y: 60, rot: 2 },
  { text: "GraphQL\nAPIs", color: "#7EC8F5", x: 290, y: 25, rot: -2 },
  { text: "systems\ndesign", color: "#C4A8FF", x: 420, y: 55, rot: 3 },
  { text: "WebAssembly\nWASM", color: "#FFB876", x: 550, y: 30, rot: -1 },
  { text: "ML ops\npipelines", color: "#F5E642", x: 80, y: 145, rot: 1 },
  { text: "Go\nconcurrency", color: "#7EEDC4", x: 220, y: 160, rot: -2 },
  { text: "real-time\nsystems", color: "#FF8A7A", x: 360, y: 140, rot: 3 },
  { text: "edge\ncomputing", color: "#C4A8FF", x: 490, y: 150, rot: -1 },
  { text: "distributed\nDBs", color: "#FFB876", x: 620, y: 135, rot: 2 },
];

export function LearningBoard() {
  const [pos, setPos] = useState(() =>
    Object.fromEntries(STICKIES.map((s, i) => [`${i}`, { x: s.x, y: s.y, rot: s.rot }]))
  );
  const dragRef = useRef<{ i: number; ox: number; oy: number } | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback((i: number, e: React.MouseEvent) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    dragRef.current = { i, ox: e.clientX - rect.left, oy: e.clientY - rect.top };
    el.style.zIndex = "100";
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current || !boardRef.current) return;
      const { i, ox, oy } = dragRef.current;
      const rect = boardRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width - 110, e.clientX - rect.left - ox));
      const y = Math.max(0, Math.min(rect.height - 70, e.clientY - rect.top - oy));
      setPos((p) => ({ ...p, [i]: { ...p[i], x, y } }));
    };
    const onUp = () => {
      if (dragRef.current) {
        const el = document.querySelector(`[data-sticky="${dragRef.current.i}"]`) as HTMLElement;
        if (el) el.style.zIndex = "";
        dragRef.current = null;
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div
      ref={boardRef}
      className="relative h-[260px] overflow-hidden border-b"
      style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
    >
      {STICKIES.map((s, i) => (
        <div
          key={i}
          data-sticky={i}
          onMouseDown={(e) => onMouseDown(i, e)}
          className="absolute min-h-[70px] w-[110px] cursor-grab select-none p-2.5 transition-all hover:shadow-[4px_4px_0_var(--ink)] active:cursor-grabbing"
          style={{
            left: pos[i]?.x ?? s.x,
            top: pos[i]?.y ?? s.y,
            transform: `rotate(${pos[i]?.rot ?? s.rot}deg)`,
            background: s.color,
            border: "2px solid var(--ink)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.62rem",
            fontWeight: 700,
            lineHeight: 1.5,
            whiteSpace: "pre-line",
          }}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}
