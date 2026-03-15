"use client";

import { useContent } from "@/components/content-provider";

export function Contact() {
  const { contact: c } = useContent();
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-[var(--foreground)]">
          let&apos;s connect
        </h2>
        <p className="mb-10 text-center text-[var(--muted)]">
          {c.tagline}
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
          <a
            href={`mailto:${c.email}`}
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            email: {c.email}
          </a>
          <a
            href={`tel:${c.phone.replace(/\D/g, "")}`}
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            phone: {c.phone}
          </a>
          <a
            href={c.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            github: {c.github.replace(/^https?:\/\//, "")}
          </a>
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            linkedin: {c.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          {c.location}
        </p>
      </div>
    </section>
  );
}
