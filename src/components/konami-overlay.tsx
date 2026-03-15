"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function KonamiOverlay() {
  const [show, setShow] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      const expected = KONAMI[idx.current];
      const match = key === expected || (expected.length === 1 && key.toLowerCase() === expected.toLowerCase());
      if (match) {
        idx.current++;
        if (idx.current === KONAMI.length) {
          idx.current = 0;
          setShow(true);
        }
      } else {
        idx.current = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[8888] flex flex-col items-center justify-center gap-6 bg-[var(--ink)] p-6"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="rounded border-2 p-2"
        style={{ borderColor: "var(--lemon)" }}
      >
        <div className="grid grid-cols-10 gap-1">
          {["✦", "★", "◆", "▲", "●"].flatMap((s, i) =>
            Array.from({ length: 16 }, (_, j) => (
              <span
                key={`${i}-${j}`}
                className="text-lg"
                style={{
                  color: ["var(--lemon)", "var(--mint)", "var(--coral)", "var(--sky)", "var(--lilac)", "var(--peach)"][(i + j) % 6],
                }}
              >
                {s}
              </span>
            ))
          )}
        </div>
      </div>
      <div
        className="text-center text-3xl font-black italic"
        style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--lemon)" }}
      >
        you found it. 🎉
      </div>
      <div
        className="text-center text-sm"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(255,255,255,0.4)" }}
      >
        ↑↑↓↓←→←→BA — classic.
        <br />
        here&apos;s your easter egg. maniteja approves.
      </div>
      <button
        onClick={() => setShow(false)}
        className="rounded border-2 border-[var(--lemon)] bg-transparent px-4 py-2 text-[0.65rem] font-bold transition hover:bg-[var(--lemon)] hover:text-[var(--ink)]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--lemon)" }}
      >
        close esc
      </button>
    </div>
  );
}
