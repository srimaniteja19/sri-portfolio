"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { useContent } from "@/components/content-provider";

const THEMES = [
  { id: "default" as const, label: "Light", swatch: "#F4F1EA" },
  { id: "dark" as const, label: "Dark", swatch: "#0D0F0E" },
  { id: "matrix" as const, label: "Matrix", swatch: "#041106" },
  { id: "mono" as const, label: "Mono", swatch: "#000000" },
];

function ArrowUpRightIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M3 9L9 3M9 3H4M9 3V8" />
    </svg>
  );
}

export function Header() {
  const { header: content } = useContent();
  const navLinks = content.navLinks;
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
      ) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [themeOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b-[2.5px]"
      style={{
        background: "var(--bg)",
        borderColor: "var(--ink)",
      }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 md:px-8">
        {/* Left Identity */}
        <div className="flex items-center gap-3">
          <Link
            href="#top"
            className="group flex items-center gap-2 border-2 px-3 py-1 transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--ink)",
              background: "var(--ink)",
              color: "var(--bg)",
            }}
          >
            <span
              className="inline-block h-2.5 w-2.5"
              style={{ background: "var(--signal)" }}
            />
            <span className="font-display text-[1.1rem] font-black uppercase tracking-wider">
              {content.name}
            </span>
          </Link>

          <div
            className="hidden items-center gap-2 border-2 px-2.5 py-1 lg:flex"
            style={{
              borderColor: "var(--ink)",
              background: "var(--volt)",
              color: "#111210",
            }}
          >
            <span
              className="h-2 w-2 animate-pulse-dot"
              style={{ background: "#111210" }}
            />
            <span className="font-data text-[0.68rem] font-bold uppercase tracking-wider">
              {content.openToRolesText}
            </span>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => {
              const href =
                link.href === "#work" ? "#shipped-so-far" : link.href;
              return (
                <Link
                  key={link.href}
                  href={href}
                  className="border-2 border-transparent px-2.5 py-1 font-data text-[0.74rem] font-bold uppercase tracking-wider transition-colors hover:border-[var(--ink)] hover:bg-[var(--surface-elevated)]"
                  style={{ color: "var(--ink)" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Switcher */}
          <div className="relative" ref={themeDropdownRef}>
            <button
              type="button"
              onClick={() => setThemeOpen((o) => !o)}
              aria-expanded={themeOpen}
              aria-label="Select color theme"
              className="nb-btn cursor-pointer px-2.5 py-1 text-[0.68rem]"
              style={{
                background: "var(--surface-elevated)",
                color: "var(--ink)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="4.5" />
                <path d="M6 1.5V10.5" />
              </svg>
              <span className="hidden sm:inline">Theme</span>
            </button>

            {themeOpen && (
              <div
                className="absolute right-0 top-full z-50 mt-2 min-w-[160px] border-[2.5px] p-1.5"
                style={{
                  background: "var(--surface-elevated)",
                  borderColor: "var(--ink)",
                  boxShadow: "var(--shadow-hard)",
                }}
              >
                {THEMES.map((t) => {
                  const active = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className="mt-1 flex w-full cursor-pointer items-center justify-between border-2 px-2.5 py-1.5 text-left font-data text-[0.68rem] font-bold uppercase transition-colors first:mt-0"
                      style={{
                        borderColor: active ? "var(--ink)" : "transparent",
                        background: active ? "var(--volt)" : "transparent",
                        color: active ? "#111210" : "var(--ink)",
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 shrink-0 border-2"
                          style={{
                            borderColor: active ? "#111210" : "var(--ink)",
                            background: t.swatch,
                          }}
                        />
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href={`mailto:${content.email}`}
            className="nb-btn hidden px-3.5 py-1 text-[0.74rem] md:inline-flex"
            style={{
              background: "var(--signal)",
              color: "#FFFFFF",
            }}
          >
            <span>Hire Me</span>
            <ArrowUpRightIcon />
          </a>

          <button
            type="button"
            className="nb-btn px-2.5 py-1.5 md:hidden"
            style={{
              background: "var(--surface-elevated)",
              color: "var(--ink)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M3 3L13 13M13 3L3 13" />
              ) : (
                <path d="M2 4H14M2 8H14M2 12H14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="border-t-[2.5px] px-4 py-4 md:hidden"
          style={{
            background: "var(--surface-elevated)",
            borderColor: "var(--ink)",
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const href =
                link.href === "#work" ? "#shipped-so-far" : link.href;
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="border-2 px-3 py-2 font-data text-[0.78rem] font-bold uppercase"
                  style={{
                    borderColor: "var(--ink)",
                    background: "var(--bg)",
                    color: "var(--ink)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${content.email}`}
              className="nb-btn mt-1 py-2.5 text-[0.78rem]"
              style={{
                background: "var(--signal)",
                color: "#FFFFFF",
              }}
            >
              <span>Hire Me</span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
