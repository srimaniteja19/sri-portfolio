"use client";

import { useEffect, useState } from "react";

type CommitItem = {
  hash: string;
  scope: string;
  msg: string;
  date: string;
  url: string;
};

type SpotlightBuild = {
  id: "Hoard" | "365DayLearning" | "MyDebtt";
  name: string;
  repo: string;
  repoUrl: string;
  liveUrl: string;
  liveLabel: string;
  fallbackCommits: CommitItem[];
  modules: {
    module: string;
    role: string;
    tag: string;
  }[];
};

const BUILDS: SpotlightBuild[] = [
  {
    id: "Hoard",
    name: "Hoard",
    repo: "srimaniteja19/Hoard",
    repoUrl: "https://github.com/srimaniteja19/Hoard",
    liveUrl: "https://hoard-ten.vercel.app",
    liveLabel: "hoard-ten.vercel.app",
    fallbackCommits: [
      {
        hash: "06f9352",
        scope: "feat:",
        msg: "Add multi-part series paste import and parsing capabilities",
        date: "Oct 7, 2026",
        url: "https://github.com/srimaniteja19/Hoard/commit/06f9352",
      },
      {
        hash: "55df16b",
        scope: "refactor:",
        msg: "Redesign studio editor top bar and layout structure",
        date: "Oct 7, 2026",
        url: "https://github.com/srimaniteja19/Hoard/commit/55df16b",
      },
      {
        hash: "bc9e268",
        scope: "feat:",
        msg: "Enhance studio search and filter with roadmaps collapsible drawer",
        date: "Oct 7, 2026",
        url: "https://github.com/srimaniteja19/Hoard/commit/bc9e268",
      },
      {
        hash: "018c5ce",
        scope: "feat:",
        msg: "Add StudioOmnibar component and modal views for studio interface",
        date: "Oct 6, 2026",
        url: "https://github.com/srimaniteja19/Hoard/commit/018c5ce",
      },
      {
        hash: "d9a1b18",
        scope: "refactor:",
        msg: "Set default series view state to collapsed for all series",
        date: "Oct 6, 2026",
        url: "https://github.com/srimaniteja19/Hoard/commit/d9a1b18",
      },
    ],
    modules: [
      {
        module: "Semantic Library & Knowledge Graph",
        role: "Vector embeddings + hybrid search across articles, papers, videos, and repos with d3-force graph view",
        tag: "Shipped",
      },
      {
        module: "Creator Studio & Series Roadmaps",
        role: "Kanban drag-and-drop board, multi-part series importer, cover generator, and AI script drafting",
        tag: "Shipped",
      },
      {
        module: "Manifest V3 Browser Extension",
        role: "One-keystroke tab saving (Alt+Shift+H), context-menu capture, and instant popup search",
        tag: "Shipped",
      },
      {
        module: "PWA & Web Share Target",
        role: "Offline Service Worker caching and native share sheet integration on iOS, Android, and desktop",
        tag: "Shipped",
      },
    ],
  },
  {
    id: "365DayLearning",
    name: "Refrainly",
    repo: "srimaniteja19/365DayLearning",
    repoUrl: "https://github.com/srimaniteja19/365DayLearning",
    liveUrl: "https://refrainly.dev",
    liveLabel: "refrainly.dev",
    fallbackCommits: [
      {
        hash: "b57fd34",
        scope: "feat:",
        msg: "Add Turn into plan action on bookmarks",
        date: "Aug 8, 2026",
        url: "https://github.com/srimaniteja19/365DayLearning/commit/b57fd34",
      },
      {
        hash: "d8bdacb",
        scope: "feat:",
        msg: "Let PlanBuilder accept an initialDraft seed",
        date: "Aug 8, 2026",
        url: "https://github.com/srimaniteja19/365DayLearning/commit/d8bdacb",
      },
      {
        hash: "0165d12",
        scope: "feat:",
        msg: "Add seedDraftFromBookmark for plan-builder pre-fill",
        date: "Aug 8, 2026",
        url: "https://github.com/srimaniteja19/365DayLearning/commit/0165d12",
      },
      {
        hash: "44af5e0",
        scope: "fix:",
        msg: "Move Insights button out of hidden kit-root header and add tooltip gating",
        date: "Aug 8, 2026",
        url: "https://github.com/srimaniteja19/365DayLearning/commit/44af5e0",
      },
      {
        hash: "bd586c2",
        scope: "feat:",
        msg: "Add cross-entry AI journal insights panel",
        date: "Aug 8, 2026",
        url: "https://github.com/srimaniteja19/365DayLearning/commit/bd586c2",
      },
    ],
    modules: [
      {
        module: "Study Plan Engine",
        role: "AI-generated daily learning campaigns up to 730 days or seeded directly from saved bookmarks",
        tag: "Shipped",
      },
      {
        module: "Spaced Repetition Ladder",
        role: "Automated 7 / 30 / 90 / 180-day recall reviews with cross-entry AI journal insights",
        tag: "Shipped",
      },
      {
        module: "Field Kit & Notes",
        role: "Bookmark capture, personal study notes, and XP rank progression",
        tag: "Shipped",
      },
      {
        module: "Stripe Billing & Cloud Sync",
        role: "NextAuth v5 sessions, Neon Postgres + Drizzle ORM snapshots, and Stripe subscription tiers",
        tag: "Shipped",
      },
    ],
  },
  {
    id: "MyDebtt",
    name: "Mission: Debt Zero",
    repo: "srimaniteja19/MyDebtt",
    repoUrl: "https://github.com/srimaniteja19/MyDebtt",
    liveUrl: "https://my-debtt.vercel.app",
    liveLabel: "my-debtt.vercel.app",
    fallbackCommits: [
      {
        hash: "ec9682f",
        scope: "merge:",
        msg: "Merge branch worktree-dashboard-ia-rework",
        date: "Aug 9, 2026",
        url: "https://github.com/srimaniteja19/MyDebtt/commit/ec9682f",
      },
      {
        hash: "bc77593",
        scope: "fix:",
        msg: "Address final-review findings on mobile header, footer, and offline routes",
        date: "Aug 9, 2026",
        url: "https://github.com/srimaniteja19/MyDebtt/commit/bc77593",
      },
      {
        hash: "754d801",
        scope: "fix:",
        msg: "Prevent PWAInstallPrompt from covering mobile BottomNav",
        date: "Aug 9, 2026",
        url: "https://github.com/srimaniteja19/MyDebtt/commit/754d801",
      },
      {
        hash: "a41c920",
        scope: "feat:",
        msg: "Add Strategy, Payments, Insights, Rewards, and Settings routes",
        date: "Aug 9, 2026",
        url: "https://github.com/srimaniteja19/MyDebtt",
      },
    ],
    modules: [
      {
        module: "Strategy Battle Arena",
        role: "Interactive avalanche vs. snowball payoff simulator, windfall calculator, and consolidation radar",
        tag: "Shipped",
      },
      {
        module: "Payment Tracker & Time Machine",
        role: "High-frequency payment logging with Recharts payoff curves and milestone projections",
        tag: "Shipped",
      },
      {
        module: "Multi-Route Financial IA",
        role: "Dedicated routes for Strategy, Payments, Insights, Trophy Room Rewards, and auto-saved Settings",
        tag: "Shipped",
      },
      {
        module: "Offline-First PWA",
        role: "Installable mobile & desktop web app with Service Worker route precaching",
        tag: "Shipped",
      },
    ],
  },
];

function parseCommitLine(rawMessage: string): { scope: string; msg: string } {
  const firstLine = rawMessage.split("\n")[0].trim();
  const match = firstLine.match(/^([a-zA-Z]+(?:\([^)]+\))?:)\s*(.+)$/);
  if (match) {
    return { scope: match[1], msg: match[2] };
  }
  return { scope: "commit:", msg: firstLine };
}

function formatShortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function DevlogSection() {
  const [activeId, setActiveId] = useState<SpotlightBuild["id"]>("Hoard");
  const [liveCommits, setLiveCommits] = useState<Record<string, CommitItem[]>>({});

  const activeBuild = BUILDS.find((b) => b.id === activeId) ?? BUILDS[0];

  useEffect(() => {
    let cancelled = false;
    if (liveCommits[activeBuild.id]) return;

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${activeBuild.repo}/commits?per_page=5`
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data) || cancelled) return;

        const parsed: CommitItem[] = data.slice(0, 5).map((item: {
          sha?: string;
          html_url?: string;
          commit?: { message?: string; author?: { date?: string } };
        }) => {
          const sha = (item.sha || "").slice(0, 7);
          const { scope, msg } = parseCommitLine(item.commit?.message || "");
          const date = item.commit?.author?.date
            ? formatShortDate(item.commit.author.date)
            : "";
          return {
            hash: sha,
            scope,
            msg,
            date,
            url: item.html_url || `${activeBuild.repoUrl}/commit/${sha}`,
          };
        });

        if (parsed.length > 0 && !cancelled) {
          setLiveCommits((prev) => ({ ...prev, [activeBuild.id]: parsed }));
        }
      } catch {
        // Fallback commits are already displayed
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [activeBuild, liveCommits]);

  const commits = liveCommits[activeBuild.id] ?? activeBuild.fallbackCommits;

  return (
    <section
      id="devlog"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        {/* Top Header & Project Switcher */}
        <div
          className="mb-8 flex flex-col items-start justify-between gap-4 border-b-[2.5px] pb-6 lg:flex-row lg:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92]"
              style={{ color: "var(--ink)" }}
            >
              Commit Log &amp; Subsystems
            </h2>
            <p
              className="mt-2 max-w-[65ch] text-[0.95rem] leading-[1.6]"
              style={{ color: "var(--dim)" }}
            >
              Inspect live commits and core modules across my latest 2026 builds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {BUILDS.map((b) => {
              const isSelected = b.id === activeBuild.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(b.id)}
                  className="nb-btn cursor-pointer px-4 py-2 text-[0.74rem]"
                  style={{
                    background: isSelected
                      ? "var(--ink)"
                      : "var(--surface-elevated)",
                    color: isSelected ? "var(--bg)" : "var(--ink)",
                  }}
                >
                  <span
                    className="h-2 w-2 border"
                    style={{
                      borderColor: isSelected ? "var(--bg)" : "var(--ink)",
                      background: isSelected ? "var(--volt)" : "var(--emerald)",
                    }}
                  />
                  <span>{b.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Recent Commits */}
          <div className="nb-box flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between border-b-2 px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>Recent Commits ({activeBuild.repo})</span>
                <span style={{ color: "var(--volt)" }}>main</span>
              </div>

              <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
                {commits.map((c) => (
                  <a
                    key={c.hash}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--surface)]"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="border px-1.5 py-0.5 font-data text-[0.6rem] font-bold tabular-nums"
                          style={{
                            borderColor: "var(--ink)",
                            background: "var(--volt)",
                            color: "#111210",
                          }}
                        >
                          {c.hash}
                        </span>
                        <span
                          className="font-data text-[0.68rem] font-bold"
                          style={{ color: "var(--signal)" }}
                        >
                          {c.scope}
                        </span>
                      </div>
                      <p
                        className="mt-1.5 text-[0.84rem] font-medium leading-snug"
                        style={{ color: "var(--ink)" }}
                      >
                        {c.msg}
                      </p>
                    </div>

                    <span
                      className="shrink-0 font-data text-[0.64rem] font-semibold tabular-nums"
                      style={{ color: "var(--dim)" }}
                    >
                      {c.date}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Core Architecture */}
          <div className="nb-box flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between border-b-2 px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  borderColor: "var(--ink)",
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>{activeBuild.name} Subsystems</span>
                <span style={{ color: "var(--emerald)" }}>
                  {activeBuild.liveLabel}
                </span>
              </div>

              <div className="divide-y-2" style={{ borderColor: "var(--rule)" }}>
                {activeBuild.modules.map((m) => (
                  <div
                    key={m.module}
                    className="flex items-start justify-between gap-4 px-4 py-3.5"
                  >
                    <div>
                      <div
                        className="font-display text-[1.25rem] font-bold uppercase"
                        style={{ color: "var(--ink)" }}
                      >
                        {m.module}
                      </div>
                      <p
                        className="mt-1 text-[0.84rem]"
                        style={{ color: "var(--dim)" }}
                      >
                        {m.role}
                      </p>
                    </div>
                    <span
                      className="shrink-0 border px-2 py-0.5 font-data text-[0.6rem] font-bold uppercase"
                      style={{
                        borderColor: "var(--ink)",
                        background: "var(--emerald)",
                        color: "#111210",
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
