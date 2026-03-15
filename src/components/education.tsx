"use client";

import { useContent } from "@/components/content-provider";

export function Education() {
  const { education } = useContent();
  return (
    <section id="education" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-[var(--foreground)]">
          education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {edu.degree}
              </h3>
              <p className="font-medium text-[var(--accent)]">{edu.school}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {edu.period} • {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
