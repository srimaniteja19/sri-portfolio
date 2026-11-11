"use client";

import React, { useEffect, useState } from "react";

const BGS = [
  "rgba(17, 18, 16, 0.08)",
  "#8CE99A",
  "#10C982",
  "#D9F938",
  "#FF521B",
];

function ago(d: string) {
  const s = Math.floor((Date.now() - new Date(d).getTime()) / 1000);
  if (s < 3600) return Math.floor(s / 60) + "m ago";
  if (s < 86400) return Math.floor(s / 3600) + "h ago";
  return Math.floor(s / 86400) + "d ago";
}

type GhRepo = {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  language: string;
  pushed_at: string;
  updated_at: string;
  fork?: boolean;
};

export function HireGitHub() {
  const [user, setUser] = useState<{ public_repos: number; followers: number } | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [heatmap, setHeatmap] = useState<React.ReactNode>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch("https://api.github.com/users/srimaniteja19"),
          fetch("https://api.github.com/users/srimaniteja19/repos?per_page=100&sort=pushed"),
        ]);
        const u = uRes.ok ? await uRes.json() : null;
        const r = rRes.ok ? await rRes.json() : [];
        setUser(u);
        const filtered = (r as GhRepo[])
          .filter((x) => !x.fork)
          .sort(
            (a, b) =>
              new Date(b.pushed_at || b.updated_at).getTime() -
              new Date(a.pushed_at || a.updated_at).getTime()
          )
          .slice(0, 6);
        setRepos(filtered);

        const counts: Record<string, number> = {};
        const now = new Date();
        const oneYr = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        r.forEach((repo: { updated_at?: string; created_at?: string; pushed_at?: string }) => {
          [repo.updated_at, repo.created_at, repo.pushed_at].forEach((d) => {
            if (!d) return;
            const dt = new Date(d);
            if (dt > oneYr) {
              const k = dt.toISOString().split("T")[0];
              counts[k] = (counts[k] || 0) + 1;
            }
          });
        });
        const start = new Date(oneYr);
        start.setDate(start.getDate() - start.getDay());
        const cols: React.ReactElement[] = [];
        for (let w = 0; w < 53; w++) {
          const colCells: React.ReactElement[] = [];
          for (let d = 0; d < 7; d++) {
            const dt = new Date(start);
            dt.setDate(start.getDate() + w * 7 + d);
            if (dt > now) {
              colCells.push(
                <div key={d} className="h-3 w-3 min-w-3 bg-transparent" />
              );
            } else {
              const v = counts[dt.toISOString().split("T")[0]] || 0;
              const lvl = v === 0 ? 0 : v < 2 ? 1 : v < 4 ? 2 : v < 6 ? 3 : 4;
              colCells.push(
                <div
                  key={d}
                  className="h-3 w-3 min-w-3 border border-black/20"
                  style={{ background: BGS[lvl] }}
                  title={`${dt.toISOString().split("T")[0]}: ${v}`}
                />
              );
            }
          }
          cols.push(
            <div key={w} className="flex flex-col gap-[3px]">
              {colCells}
            </div>
          );
        }
        setHeatmap(<div className="flex gap-[3px]">{cols}</div>);
      } catch (e) {
        console.error("GitHub fetch error", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const langs = repos.reduce((acc: Record<string, number>, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {});

  return (
    <section
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Summary Strip */}
        <div
          className="nb-box mb-6 grid grid-cols-2 divide-x-2 divide-y-2 md:grid-cols-4 md:divide-y-0"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          <div className="p-5">
            <div
              className="font-data text-[0.64rem] font-bold uppercase"
              style={{ color: "var(--dim)" }}
            >
              Public Repositories
            </div>
            <div
              className="mt-1 font-display text-[1.75rem] font-black leading-none tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {user?.public_repos ?? "26"}
            </div>
          </div>
          <div
            className="p-5"
            style={{ background: "var(--volt)", color: "#111210" }}
          >
            <div className="font-data text-[0.64rem] font-bold uppercase">
              2026 Shipped
            </div>
            <div className="mt-1 font-display text-[1.75rem] font-black leading-none tabular-nums">
              12 Projects
            </div>
          </div>
          <div className="p-5">
            <div
              className="font-data text-[0.64rem] font-bold uppercase"
              style={{ color: "var(--dim)" }}
            >
              Followers
            </div>
            <div
              className="mt-1 font-display text-[1.75rem] font-black leading-none tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {user?.followers ?? "—"}
            </div>
          </div>
          <div className="p-5">
            <div
              className="font-data text-[0.64rem] font-bold uppercase"
              style={{ color: "var(--dim)" }}
            >
              Active Languages
            </div>
            <div
              className="mt-1 font-display text-[1.75rem] font-black leading-none tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              {Object.keys(langs).length || 3}
            </div>
          </div>
        </div>

        {/* Heatmap Box */}
        <div
          className="nb-box mb-6 p-5"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          <div className="overflow-x-auto py-2">
            {loading ? (
              <span
                className="font-data text-[0.68rem] font-bold uppercase"
                style={{ color: "var(--dim)" }}
              >
                Loading activity...
              </span>
            ) : (
              heatmap
            )}
          </div>
          <div
            className="mt-3 flex items-center justify-end gap-2 border-t pt-3 font-data text-[0.64rem] font-bold uppercase"
            style={{ borderColor: "var(--rule)", color: "var(--dim)" }}
          >
            <span>Less</span>
            {BGS.map((bg, i) => (
              <div
                key={i}
                className="h-3 w-3 border border-black/25"
                style={{ background: bg }}
              />
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Latest Pushed Repositories */}
        <div
          className="nb-box grid grid-cols-1 divide-y-2 md:grid-cols-2 md:divide-x-2 lg:grid-cols-3"
          style={{
            borderColor: "var(--ink)",
            background: "var(--surface-elevated)",
          }}
        >
          {loading ? (
            <div
              className="p-6 font-data text-[0.68rem] font-bold uppercase"
              style={{ color: "var(--dim)" }}
            >
              Loading repositories...
            </div>
          ) : (
            repos.map((r) => {
              const repoUrl =
                typeof r.html_url === "string" &&
                r.html_url.startsWith("https://github.com/")
                  ? r.html_url
                  : `https://github.com/srimaniteja19/${encodeURIComponent(
                      r.name
                    )}`;
              return (
                <a
                  key={r.name}
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-5 transition-colors hover:bg-[var(--volt)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-display text-[1.45rem] font-black uppercase leading-none group-hover:text-[#111210]"
                        style={{ color: "var(--ink)" }}
                      >
                        {r.name}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="square"
                        className="shrink-0 group-hover:text-[#111210]"
                        aria-hidden="true"
                      >
                        <path d="M3 9L9 3M9 3H4M9 3V8" />
                      </svg>
                    </div>
                    <p
                      className="mt-2 text-[0.84rem] leading-relaxed group-hover:text-[#111210]"
                      style={{ color: "var(--dim)" }}
                    >
                      {r.description ||
                        (r.homepage
                          ? `Live at ${r.homepage.replace(/^https?:\/\//, "")}`
                          : "Active 2026 repository")}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3 font-data text-[0.64rem] font-bold uppercase" style={{ borderColor: "var(--rule)" }}>
                    {r.language && (
                      <span
                        className="border px-2 py-0.5"
                        style={{
                          borderColor: "var(--ink)",
                          background: "var(--bg)",
                          color: "var(--ink)",
                        }}
                      >
                        {r.language}
                      </span>
                    )}
                    <span
                      className="tabular-nums group-hover:text-[#111210]"
                      style={{ color: "var(--dim)" }}
                    >
                      Updated {ago(r.pushed_at || r.updated_at)}
                    </span>
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
