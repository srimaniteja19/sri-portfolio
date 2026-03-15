"use client";

import { useEffect, useRef } from "react";

export function MouseTrail({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        left: ${e.clientX - rect.left + container.scrollLeft}px;
        top: ${e.clientY - rect.top + container.scrollTop}px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(13,13,13,0.08);
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: trailFade 0.5s ease forwards;
      `;
      container.style.position = "relative";
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 500);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="relative">{children}</div>;
}
