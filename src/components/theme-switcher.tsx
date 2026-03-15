"use client";

import { useTheme } from "./theme-provider";

const THEMES = [
  { id: "default" as const, label: "default", swatch: "#F0EDE4" },
  { id: "dark" as const, label: "dark mode", swatch: "#0A0A09" },
  { id: "matrix" as const, label: "matrix", swatch: "#001a00" },
  { id: "pastel" as const, label: "pastel", swatch: "#FFF5F5" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex flex-wrap items-center gap-0 overflow-x-auto border-b"
      style={{ borderColor: "var(--ink)" }}
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`flex shrink-0 items-center gap-1.5 border-r-2 px-4 py-2.5 text-[0.58rem] font-bold uppercase tracking-wide transition ${
            theme === t.id ? "bg-[var(--ink)] text-[var(--bg)]" : "bg-transparent hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          }`}
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: theme === t.id ? "var(--bg)" : "var(--ink)", borderColor: "var(--ink)" }}
        >
          <span
            className="h-2.5 w-2.5 rounded-full border"
            style={{ borderColor: "currentColor", background: t.swatch }}
          />
          {t.label}
        </button>
      ))}
      <div
        className="ml-auto px-4 py-2.5 text-[0.54rem]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
      >
        try: ↑↑↓↓←→←→BA
      </div>
    </div>
  );
}
