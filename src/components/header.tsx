"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

const THEMES = [
  { id: "default" as const, label: "default", swatch: "#F0EDE4" },
  { id: "dark" as const, label: "dark mode", swatch: "#0A0A09" },
  { id: "matrix" as const, label: "matrix", swatch: "#001a00" },
  { id: "pastel" as const, label: "pastel", swatch: "#FFF5F5" },
  { id: "ocean" as const, label: "ocean", swatch: "#0a1929" },
  { id: "sunset" as const, label: "sunset", swatch: "#2d1f0f" },
  { id: "forest" as const, label: "forest", swatch: "#0d1f0d" },
  { id: "nord" as const, label: "nord", swatch: "#eceff4" },
  { id: "neon" as const, label: "japanese neon", swatch: "#0b0d17" },
  { id: "mono" as const, label: "black & white", swatch: "#000000" },
];

const navLinks = [
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#github", label: "github" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
  { href: "/hire", label: "hire" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!themeOpen) return;
    const close = (e: MouseEvent) => {
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(e.target as Node)
      )
        setThemeOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [themeOpen]);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b px-5 py-3 md:px-8"
      style={{
        background: "var(--bg)",
        borderColor: "var(--ink)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
      }}
    >
      <Link
        href="#"
        className="flex items-center gap-1 font-bold text-[0.8rem]"
        style={{ color: "var(--ink)" }}
      >
        <span style={{ color: "var(--mint)", fontSize: "1.1rem" }}>[</span>
        maniteja
        <span style={{ color: "var(--mint)", fontSize: "1.1rem" }}>]</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden gap-0.5 md:flex">
          <div className="relative" ref={themeDropdownRef}>
            <button
              type="button"
              onClick={() => setThemeOpen((o) => !o)}
              className="rounded px-3 py-1.5 text-[0.65rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
              style={{ color: "var(--dim)" }}
            >
              theme
            </button>
            {themeOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 min-w-[180px] border-2 py-2"
                style={{ background: "var(--bg)", borderColor: "var(--ink)" }}
              >
                <div
                  className="px-3 pb-1.5 text-[0.5rem] font-bold uppercase tracking-wider"
                  style={{ color: "var(--dim)" }}
                >
                  // pick your vibe
                </div>
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTheme(t.id);
                      setThemeOpen(false);
                    }}
                    className="flex w-full items-center gap-2 border-t px-3 py-2 text-left text-[0.6rem] font-bold uppercase transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
                    style={{
                      borderColor: "rgba(10,10,9,0.1)",
                      color: theme === t.id ? "var(--bg)" : "var(--ink)",
                      background: theme === t.id ? "var(--ink)" : "transparent",
                    }}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full border"
                      style={{
                        borderColor: "currentColor",
                        background: t.swatch,
                      }}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-1.5 text-[0.65rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
              style={{ color: "var(--dim)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-1.5 rounded border-2 px-2.5 py-1 md:flex"
            style={{
              borderColor: "var(--ink)",
              background: "var(--mint)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse-dot rounded-full"
              style={{ background: "var(--ink)" }}
            />
            open to new roles
          </div>

          <a
            href="mailto:srimaniteja.ch@gmail.com"
            className="hidden rounded-[100px] border-2 bg-[var(--ink)] px-4 py-1.5 text-[0.72rem] font-bold text-[var(--bg)] transition hover:bg-[var(--mint)] hover:text-[var(--ink)] md:inline-block"
            style={{ borderColor: "var(--ink)" }}
          >
            hire me ↗
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded border text-sm md:hidden"
            style={{ borderColor: "var(--ink)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
          <button
            type="button"
            onClick={() => setThemeOpen((o) => !o)}
            className="hidden h-8 w-8 items-center justify-center rounded border text-sm md:flex"
            style={{
              borderColor: themeOpen ? "var(--ink)" : "rgba(10,10,9,0.15)",
            }}
            aria-label="Theme"
          >
            ◐
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div
          className="absolute left-0 right-0 top-full border-b px-5 py-4 md:hidden"
          style={{ background: "var(--bg)", borderColor: "var(--ink)" }}
        >
          <div className="flex flex-col gap-2">
            <div className="relative" ref={themeDropdownRef}>
              <button
                type="button"
                onClick={() => setThemeOpen((o) => !o)}
                className="text-left font-bold"
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.72rem",
                }}
              >
                ./theme
              </button>
              {themeOpen && (
                <div
                  className="mt-2 border-l-2 pl-3"
                  style={{ borderColor: "var(--ink)" }}
                >
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className="flex w-full items-center gap-2 py-1.5 text-left text-[0.6rem] font-bold uppercase"
                      style={{
                        color: theme === t.id ? "var(--mint)" : "var(--dim)",
                      }}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full border"
                        style={{
                          borderColor: "currentColor",
                          background: t.swatch,
                        }}
                      />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.72rem",
                }}
              >
                ./{link.label}
              </Link>
            ))}
            <a
              href="mailto:srimaniteja.ch@gmail.com"
              className="rounded-[100px] border-2 bg-[var(--ink)] px-4 py-1.5 text-[0.72rem] font-bold text-[var(--bg)]"
              style={{ borderColor: "var(--ink)" }}
            >
              hire me ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
