"use client";

import { useEffect, useState } from "react";
import {
  CRICKET_ILLUSTRATION,
  BOOKS_ILLUSTRATION,
  SITCOMS_ILLUSTRATION,
} from "@/data/hobby-illustrations";

export function Hobbies() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hobbies" className="scroll-mt-24">
      {/* Intro banner */}
      <div className="border-b border-(--ink) bg-(--ink) px-6 py-7 sm:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div
            className="font-serif text-[1.8rem] sm:text-[2.1rem] font-black italic leading-none text-[#F0EDE4]"
            style={{ letterSpacing: "-0.04em" }}
          >
            beyond the{" "}
            <span className="not-italic text-(--lemon)">keyboard.</span>
          </div>
          <div className="mt-2 font-mono text-[0.7rem] text-[rgba(240,237,228,0.5)]">
            // cricket on weekends · books after midnight · sitcoms with chai
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["🏏 cricket", "📚 reading", "📺 sitcoms", "☕ chai"].map((label) => (
            <div
              key={label}
              className="cursor-none rounded border border-[rgba(240,237,228,0.25)] px-3 py-1 font-mono text-[0.7rem] font-bold text-[#F0EDE4]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* 3-column hobby grid — animated illustrations (client-only to avoid hydration mismatch) */}
      <div className="grid border-b border-(--ink) lg:grid-cols-3">
        {/* Cricket — full animated six + crowd + scoreboard */}
        <div className="border-b border-[rgba(10,10,9,0.25)] lg:border-b-0 lg:border-r">
          <div className="h-[480px] relative overflow-hidden bg-[#87CEEB]">
            {mounted && (
              <div
                className="absolute inset-0 w-full h-full [&_svg]:w-full [&_svg]:h-full"
                dangerouslySetInnerHTML={{ __html: CRICKET_ILLUSTRATION }}
              />
            )}
          </div>

          <div className="px-6 pb-6 pt-4 border-t border-(--ink)">
            <div className="mb-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-(--dim)">
              // 01 — cricket
            </div>
            <div className="mb-2 font-serif text-[1.3rem] font-black italic leading-tight">
              scoring runs.
            </div>
            <p className="mb-3 text-[0.75rem] leading-relaxed text-(--dim)">
              Weekend league opener, late evening nets, and a very serious relationship
              with the off-side. I bat in the top-order and occasionally bowl gentle
              medium pace when the team is desperate.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-(--mint) px-2 py-1 font-mono text-[0.6rem] font-bold">
                right-hand bat
              </span>
              <span className="rounded bg-(--lemon) px-2 py-1 font-mono text-[0.6rem] font-bold">
                weekend leagues
              </span>
              <span className="rounded bg-(--coral) px-2 py-1 font-mono text-[0.6rem] font-bold">
                47* best score
              </span>
            </div>
          </div>
        </div>

        {/* Books — reader + page turn + thought bubble + chai */}
        <div className="border-b border-[rgba(10,10,9,0.25)] lg:border-b-0 lg:border-r">
          <div className="h-[440px] relative overflow-hidden bg-(--lilac)">
            {mounted && (
              <div
                className="absolute inset-0 w-full h-full [&_svg]:w-full [&_svg]:h-full"
                dangerouslySetInnerHTML={{ __html: BOOKS_ILLUSTRATION }}
              />
            )}
          </div>

          <div className="px-6 pb-6 pt-4 border-t border-(--ink)">
            <div className="mb-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-(--dim)">
              // 02 — books
            </div>
            <div className="mb-2 font-serif text-[1.3rem] font-black italic leading-tight">
              reading after midnight.
            </div>
            <p className="mb-3 text-[0.75rem] leading-relaxed text-(--dim)">
              Rotating stack of tech non-fiction, biographies, and the occasional
              fantasy series. Books end up in my notes engine as frameworks, mental
              models, and questions to revisit.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-(--sky) px-2 py-1 font-mono text-[0.6rem] font-bold">
                non‑fiction
              </span>
              <span className="rounded bg-(--lilac) px-2 py-1 font-mono text-[0.6rem] font-bold">
                biograpies
              </span>
              <span className="rounded bg-(--peach) px-2 py-1 font-mono text-[0.6rem] font-bold">
                note-taking nerd
              </span>
            </div>
          </div>
        </div>

        {/* Sitcoms — TV + couch + floating show tags + speech bubble */}
        <div>
          <div className="h-[440px] relative overflow-hidden bg-(--coral)">
            {mounted && (
              <div
                className="absolute inset-0 w-full h-full [&_svg]:w-full [&_svg]:h-full"
                dangerouslySetInnerHTML={{ __html: SITCOMS_ILLUSTRATION }}
              />
            )}
          </div>

          <div className="px-6 pb-6 pt-4 border-t border-(--ink)">
            <div className="mb-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-(--dim)">
              // 03 — sitcoms & chai
            </div>
            <div className="mb-2 font-serif text-[1.3rem] font-black italic leading-tight">
              one more episode.
            </div>
            <p className="mb-3 text-[0.75rem] leading-relaxed text-(--dim)">
              The Office, Brooklyn Nine-Nine, Friends, Seinfeld — comfort shows on
              repeat. Good comedy is harder than good code: timing, callbacks, and
              ruthless editing.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-(--coral) px-2 py-1 font-mono text-[0.6rem] font-bold">
                the office
              </span>
              <span className="rounded bg-(--sky) px-2 py-1 font-mono text-[0.6rem] font-bold">
                brooklyn 99
              </span>
              <span className="rounded bg-(--lemon) px-2 py-1 font-mono text-[0.6rem] font-bold">
                friends
              </span>
              <span className="rounded bg-(--mint) px-2 py-1 font-mono text-[0.6rem] font-bold">
                infinite chai
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

