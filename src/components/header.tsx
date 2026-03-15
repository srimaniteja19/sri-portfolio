"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#theme", label: "theme" },
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#github", label: "github" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b px-5 py-3 md:px-8"
      style={{
        background: "var(--bg)",
        borderColor: "var(--ink)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
      }}
    >
      <Link href="#" className="flex items-center gap-1 font-bold text-[0.8rem]" style={{ color: "var(--ink)" }}>
        <span style={{ color: "var(--mint)", fontSize: "1.1rem" }}>[</span>
        maniteja
        <span style={{ color: "var(--mint)", fontSize: "1.1rem" }}>]</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden gap-0.5 md:flex">
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
            style={{ borderColor: "var(--ink)", background: "var(--mint)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full" style={{ background: "var(--ink)" }} />
            available
          </div>
          <span className="hidden rounded border px-2 py-0.5 text-[0.56rem] md:block" style={{ color: "var(--dim)", borderColor: "rgba(10,10,9,0.15)" }}>
            v2.1.0
          </span>
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
          <Link
            href="#theme"
            className="hidden h-8 w-8 items-center justify-center rounded border text-sm md:flex"
            style={{ borderColor: "rgba(10,10,9,0.15)" }}
            aria-label="Theme"
          >
            ◐
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <div
          className="absolute left-0 right-0 top-full border-b px-5 py-4 md:hidden"
          style={{ background: "var(--bg)", borderColor: "var(--ink)" }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ color: "var(--dim)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.72rem" }}>
                ./{link.label}
              </Link>
            ))}
            <a href="mailto:srimaniteja.ch@gmail.com" className="rounded-[100px] border-2 bg-[var(--ink)] px-4 py-1.5 text-[0.72rem] font-bold text-[var(--bg)]" style={{ borderColor: "var(--ink)" }}>
              hire me ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
