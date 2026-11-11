"use client";

import { useContent } from "@/components/content-provider";

export function Footer() {
  const { footer, contact } = useContent();
  return (
    <footer
      className="flex flex-col justify-between gap-4 px-4 py-6 md:flex-row md:items-center md:px-8"
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
      }}
    >
      <div className="flex flex-wrap items-center gap-5 font-data text-[0.68rem] font-bold uppercase">
        <span>
          {footer.name} · {footer.location}
        </span>
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 animate-pulse-dot"
            style={{ background: "var(--emerald)" }}
          />
          <span style={{ color: "var(--volt)" }}>{footer.statusText}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 font-data text-[0.68rem] font-bold uppercase">
        <a href="/hire" className="transition-opacity hover:opacity-75">
          /hire
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-75"
        >
          github
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-75"
        >
          linkedin
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="transition-opacity hover:opacity-75"
        >
          email
        </a>
        <span className="tabular-nums opacity-75">
          © {new Date().getFullYear()} SRI MANITEJA CHINNAM
        </span>
      </div>
    </footer>
  );
}
