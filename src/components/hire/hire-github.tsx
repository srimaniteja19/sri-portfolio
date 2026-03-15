"use client";

import React, { useEffect, useState } from "react";

const LC: Record<string, string> = { JavaScript: "#F5E642", TypeScript: "#7EC8F5", Python: "#7EEDC4", HTML: "#FF8A7A", CSS: "#C4A8FF", Vue: "#FFB876", Shell: "rgba(10,10,9,.5)", Other: "#D3D1C7" };
const BGS = ["rgba(10,10,9,.07)", "rgba(126,237,196,.4)", "#7EEDC4", "#3CC49A", "#0D9E6E"];
const COLS = ["var(--mint)", "var(--lemon)", "var(--coral)", "var(--sky)", "var(--lilac)", "var(--peach)"];

function ago(d: string) {
  const s = Math.floor((Date.now() - new Date(d).getTime()) / 1000);
  if (s < 3600) return Math.floor(s / 60) + "m";
  if (s < 86400) return Math.floor(s / 3600) + "h";
  return Math.floor(s / 86400) + "d";
}

export function HireGitHub() {
  const [user, setUser] = useState<{ public_repos: number; followers: number } | null>(null);
  const [repos, setRepos] = useState<Array<{ name: string; description: string; html_url: string; stargazers_count: number; language: string; updated_at: string; fork?: boolean }>>([]);
  const [heatmap, setHeatmap] = useState<React.ReactNode>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch("https://api.github.com/users/srimaniteja19"),
          fetch("https://api.github.com/users/srimaniteja19/repos?per_page=100&sort=updated"),
        ]);
        const u = uRes.ok ? await uRes.json() : null;
        const r = rRes.ok ? await rRes.json() : [];
        setUser(u);
        const filtered = (r as Array<{ name: string; description: string; html_url: string; stargazers_count: number; language: string; updated_at: string; fork?: boolean }>)
          .filter((x) => !x.fork)
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
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
              colCells.push(<div key={d} className="h-2.5 w-2.5 min-w-2.5 rounded-[1px] bg-transparent" />);
            } else {
              const v = counts[dt.toISOString().split("T")[0]] || 0;
              const lvl = v === 0 ? 0 : v < 2 ? 1 : v < 4 ? 2 : v < 6 ? 3 : 4;
              colCells.push(<div key={d} className="h-2.5 w-2.5 min-w-2.5 rounded-[1px]" style={{ background: BGS[lvl] }} title={`${dt.toISOString().split("T")[0]}: ${v}`} />);
            }
          }
          cols.push(<div key={w} className="flex flex-col gap-0.5">{colCells}</div>);
        }
        setHeatmap(<div className="flex gap-0.5">{cols}</div>);
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
  const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  return (
    <div className="border-b p-6" style={{ borderColor: "var(--ink)" }}>
      <div className="mb-4 grid grid-cols-4 gap-1 overflow-hidden rounded-md border-2" style={{ borderColor: "var(--ink)", background: "var(--ink)" }}>
        <div className="bg-[var(--bg)] p-4 text-center">
          <div className="font-serif text-2xl font-black">{user?.public_repos ?? "—"}</div>
          <div className="text-[0.54rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>repos</div>
        </div>
        <div className="p-4 text-center" style={{ background: "var(--mint)" }}>
          <div className="font-serif text-2xl font-black">{stars}</div>
          <div className="text-[0.54rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(10,10,9,.5)" }}>stars</div>
        </div>
        <div className="p-4 text-center" style={{ background: "var(--lemon)" }}>
          <div className="font-serif text-2xl font-black">{user?.followers ?? "—"}</div>
          <div className="text-[0.54rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(10,10,9,.5)" }}>followers</div>
        </div>
        <div className="p-4 text-center" style={{ background: "var(--coral)" }}>
          <div className="font-serif text-2xl font-black">{Object.keys(langs).length}</div>
          <div className="text-[0.54rem] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(10,10,9,.5)" }}>languages</div>
        </div>
      </div>
      <div className="mb-4 overflow-x-auto">{loading ? <span className="text-[0.6rem]" style={{ color: "var(--dim)" }}>⟳ loading heatmap...</span> : heatmap}</div>
      <div className="mb-4 flex items-center justify-end gap-2 text-[0.55rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
        less
        {BGS.map((bg, i) => <div key={i} className="h-2.5 w-2.5 rounded-[1px]" style={{ background: bg }} />)}
        more
      </div>
      <div className="grid gap-1 overflow-hidden rounded-md border-2 lg:grid-cols-3" style={{ borderColor: "var(--ink)", background: "var(--ink)" }}>
        {loading ? (
          <div className="bg-[var(--bg)] p-4 text-[0.6rem]" style={{ color: "var(--dim)" }}>loading repos...</div>
        ) : (
          repos.map((r, i) => (
            <a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer" className="group relative block bg-[var(--bg)] p-4 transition-colors hover:bg-[#E8E4D9]">
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full border-[1.5px] border-[var(--ink)]" style={{ background: COLS[i % 6] }} />
                <span className="text-[0.65rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>{r.name}</span>
              </div>
              <div className="mb-2 min-h-[2.4em] text-[0.6rem] font-light leading-relaxed" style={{ color: "var(--dim)" }}>{r.description || "—"}</div>
              <div className="flex flex-wrap gap-1.5">
                {r.language && (
                  <span className="flex items-center gap-1 text-[0.54rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    <span className="h-2 w-2 rounded-full border-[1.5px] border-[var(--ink)]" style={{ background: LC[r.language] || "#888" }} />
                    {r.language}
                  </span>
                )}
                <span className="text-[0.54rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>★{r.stargazers_count}</span>
                <span className="rounded border px-1.5 py-0.5 text-[0.5rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "rgba(10,10,9,.15)", color: "var(--dim)" }}>{ago(r.updated_at)}</span>
              </div>
              <span className="absolute right-3 top-4 text-[0.68rem] opacity-0 transition group-hover:opacity-100" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>↗</span>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
