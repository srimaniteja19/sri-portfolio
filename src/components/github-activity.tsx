const LEVEL_COLORS: Record<number, string> = {
  0: "rgba(11, 15, 23, 0.08)",
  1: "#A5F3FC",
  2: "#38F2C2",
  3: "#60A5FA",
  4: "#2546F0",
};

interface DayContribution {
  date: string;
  count: number;
  level: number;
  tooltipText: string;
  dayIndex: number;
  weekIndex: number;
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const sec = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (sec < 60) return "just now";
  if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
  if (sec < 2592000) return `${Math.floor(sec / 86400)}d ago`;
  return date.toLocaleDateString();
}

async function fetchGitHubEvents(username: string) {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "sri-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/users/${username}/events?per_page=12`,
      {
        headers,
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function fetchContributions(username: string) {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, Gecko) Chrome/120.0.0.0 Safari/537.36",
          "X-Requested-With": "XMLHttpRequest",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;
    const html = await res.text();

    const daysMap: Record<string, DayContribution> = {};
    const dayRegex =
      /data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"/g;
    let match: RegExpExecArray | null;

    while ((match = dayRegex.exec(html)) !== null) {
      const id = match[2];
      const wMatch = id.match(/contribution-day-component-(\d+)-(\d+)/);
      const dayIdx = wMatch ? parseInt(wMatch[1], 10) : 0;
      const weekIdx = wMatch ? parseInt(wMatch[2], 10) : 0;

      daysMap[id] = {
        date: match[1],
        level: parseInt(match[3], 10),
        count: 0,
        tooltipText: `No contributions on ${match[1]}`,
        dayIndex: dayIdx,
        weekIndex: weekIdx,
      };
    }

    const tooltipRegex = /for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
    let tMatch: RegExpExecArray | null;
    while ((tMatch = tooltipRegex.exec(html)) !== null) {
      const id = tMatch[1];
      const text = tMatch[2].trim();
      if (daysMap[id]) {
        daysMap[id].tooltipText = text;
        const countMatch = text.match(/^(\d+|No)\s+contribution/);
        if (countMatch && countMatch[1] !== "No") {
          daysMap[id].count = parseInt(countMatch[1], 10);
        }
      }
    }

    const weeksMap: Record<number, DayContribution[]> = {};
    Object.values(daysMap).forEach((d) => {
      weeksMap[d.weekIndex] = weeksMap[d.weekIndex] || [];
      weeksMap[d.weekIndex][d.dayIndex] = d;
    });

    const weeksList = Object.keys(weeksMap)
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      .map((k) => weeksMap[parseInt(k, 10)]);

    const totalContributions = Object.values(daysMap).reduce(
      (acc, d) => acc + d.count,
      0
    );

    return { totalContributions, weeks: weeksList };
  } catch (err) {
    console.error("Error parsing GitHub contributions HTML:", err);
    return null;
  }
}

export async function GitHubActivity() {
  const username = "srimaniteja19";
  const [contributions, events] = await Promise.all([
    fetchContributions(username),
    fetchGitHubEvents(username),
  ]);

  const totalContributions = contributions?.totalContributions ?? 0;
  const contributionWeeks = contributions?.weeks ?? [];

  const display = Array.isArray(events)
    ? events
        .slice(0, 6)
        .filter((e: { type: string }) =>
          [
            "PushEvent",
            "CreateEvent",
            "WatchEvent",
            "ForkEvent",
            "PublicEvent",
          ].includes(e.type)
        )
    : [];

  return (
    <div
      className="border-b-[2.5px] px-4 py-12 md:px-8 md:py-16"
      style={{ borderColor: "var(--ink)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Bar — Heading leads directly */}
        <div
          className="mb-8 flex flex-col items-start justify-between gap-4 border-b-[2.5px] pb-6 sm:flex-row sm:items-end"
          style={{ borderColor: "var(--ink)" }}
        >
          <div>
            <h2
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.92]"
              style={{ color: "var(--ink)" }}
            >
              GitHub Activity
            </h2>
            <p
              className="mt-2 font-data text-[0.78rem] font-bold uppercase tabular-nums"
              style={{ color: "var(--dim)" }}
            >
              {totalContributions} contributions in the past year · @{username}
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn px-4 py-2 text-[0.74rem]"
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
            }}
          >
            <span>@{username} on GitHub</span>
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
          </a>
        </div>

        {/* Contribution Matrix Chassis (Lightweight single-node cells for 60fps scroll) */}
        <div className="nb-box p-5" style={{ contain: "content" }}>
          <div className="overflow-x-auto pb-2 pt-2">
            {contributionWeeks.length > 0 ? (
              <div className="flex gap-[3px] py-2">
                {contributionWeeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => {
                      const bgColor =
                        LEVEL_COLORS[day?.level ?? 0] ||
                        "rgba(17, 18, 16, 0.08)";
                      return (
                        <div
                          key={di}
                          title={
                            day?.tooltipText ||
                            `${day?.count || 0} contributions on ${day?.date}`
                          }
                          className="h-3 w-3 min-w-3 border border-black/20"
                          style={{ backgroundColor: bgColor }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="py-8 text-center font-data text-[0.78rem] font-bold uppercase"
                style={{ color: "var(--dim)" }}
              >
                Visit github.com/srimaniteja19
              </div>
            )}
          </div>

          {/* Legend */}
          <div
            className="mt-4 flex flex-wrap items-center justify-end gap-2 border-t-2 pt-3 font-data text-[0.64rem] font-bold uppercase"
            style={{ borderColor: "var(--rule)", color: "var(--dim)" }}
          >
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="h-3 w-3 border border-black/25"
                    style={{ background: LEVEL_COLORS[level] }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Recent Repository Event Ledger */}
        {display.length > 0 && (
          <div className="mt-8">
            <div
              className="nb-box divide-y-2"
              style={{ borderColor: "var(--ink)" }}
            >
              <div
                className="flex items-center justify-between px-4 py-2.5 font-data text-[0.68rem] font-bold uppercase"
                style={{
                  background: "var(--ink)",
                  color: "var(--bg)",
                }}
              >
                <span>Recent Activity</span>
                <span style={{ color: "var(--volt)" }}>
                  Latest {display.length}
                </span>
              </div>

              <div
                className="grid grid-cols-1 divide-y-2 md:grid-cols-2 md:divide-x-2 lg:grid-cols-3"
                style={{ borderColor: "var(--ink)" }}
              >
                {display.map(
                  (
                    event: {
                      id: string;
                      type: string;
                      repo: { name: string };
                      created_at: string;
                    },
                    i: number
                  ) => {
                    const repoName = event.repo.name.replace(/^[^/]+\//, "");
                    const isFirst = i === 0;
                    return (
                      <a
                        key={event.id}
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between p-5 transition-colors hover:bg-[var(--volt)]"
                        style={{
                          background: isFirst
                            ? "var(--surface)"
                            : "var(--surface-elevated)",
                        }}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="border px-2 py-0.5 font-data text-[0.6rem] font-bold uppercase"
                            style={{
                              borderColor: "var(--ink)",
                              background: "var(--bg)",
                              color: "var(--ink)",
                            }}
                          >
                            {event.type.replace(/Event$/, "")}
                          </span>
                          <span
                            className="font-data text-[0.64rem] font-semibold tabular-nums group-hover:text-[#0B0F17]"
                            style={{ color: "var(--dim)" }}
                          >
                            {formatRelativeTime(event.created_at)}
                          </span>
                        </div>

                        <div className="mt-3 flex items-end justify-between gap-2">
                          <span
                            className="truncate font-display text-[1.45rem] font-black uppercase leading-none group-hover:text-[#0B0F17]"
                            style={{ color: "var(--ink)" }}
                          >
                            {repoName}
                          </span>
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="square"
                            className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0B0F17]"
                            aria-hidden="true"
                          >
                            <path d="M3 9L9 3M9 3H4M9 3V8" />
                          </svg>
                        </div>
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
