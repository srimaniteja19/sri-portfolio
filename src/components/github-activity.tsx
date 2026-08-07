const BENTO_COLORS = ["mint", "lemon", "coral", "sky", "lilac", "peach"] as const;

const LEVEL_COLORS: Record<number, string> = {
  0: "rgba(10, 10, 9, 0.08)",
  1: "rgba(126, 237, 196, 0.6)",
  2: "var(--mint)",
  3: "#5FE0B4",
  4: "#3dd4a0",
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
    const res = await fetch(`https://api.github.com/users/${username}/events?per_page=12`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function fetchContributions(username: string) {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const html = await res.text();

    const daysMap: Record<string, DayContribution> = {};
    const dayRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"/g;
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

    const totalContributions = Object.values(daysMap).reduce((acc, d) => acc + d.count, 0);

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
        .slice(0, 8)
        .filter((e: { type: string }) =>
          ["PushEvent", "CreateEvent", "WatchEvent", "ForkEvent", "PublicEvent"].includes(e.type)
        )
    : [];

  return (
    <div className="border-b px-6 py-6 md:px-8" style={{ borderColor: "var(--ink)" }}>
      <div className="mb-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 text-[0.65rem] font-bold uppercase"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--dim)",
            letterSpacing: "0.1em",
          }}
        >
          <span style={{ color: "rgba(13,13,13,0.2)" }}>//</span> contribution activity
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[100px] border px-2.5 py-1 text-[0.68rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            borderColor: "var(--ink)",
            background: "var(--ink)",
            color: "var(--bg)",
          }}
        >
          @{username}
        </a>
      </div>

      <div>
        <div
          className="mb-3 text-[0.68rem] font-bold"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
        >
          {totalContributions} contributions in the past year
        </div>

        <div className="overflow-x-auto pb-2 pt-4 scrollbar-thin">
          {contributionWeeks.length > 0 ? (
            <div className="flex gap-[3px] py-2">
              {contributionWeeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => {
                    const bgColor = LEVEL_COLORS[day?.level ?? 0] || "rgba(10, 10, 9, 0.08)";
                    return (
                      <div key={di} className="group relative">
                        <div
                          className="h-3 w-3 min-w-3 cursor-pointer rounded-[2px] border border-black/10 transition-all duration-150 hover:z-30 hover:scale-150 hover:border-[#0E0E10] hover:shadow-md hover:ring-2 hover:ring-[#0E0E10]"
                          style={{ backgroundColor: bgColor }}
                        />

                        {/* Instant Tooltip on Hover */}
                        <div
                          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded border-[2px] border-[#0E0E10] bg-[#0E0E10] px-2.5 py-1 text-[0.65rem] font-bold text-[#FFFFFF] shadow-[3px_3px_0_#0E0E10] opacity-0 transition-all duration-150 group-hover:-translate-y-1 group-hover:opacity-100"
                          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                        >
                          {day?.tooltipText || `${day?.count || 0} contributions on ${day?.date}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-[0.8rem]" style={{ color: "var(--muted)" }}>
              No contribution data available
            </div>
          )}

          {/* Legend */}
          <div
            className="mt-4 flex items-center justify-end gap-2 text-[0.58rem] font-bold"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
          >
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className="h-3 w-3 rounded-[2px] border border-black/10"
                  style={{ background: LEVEL_COLORS[level] }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Event cards */}
      {display.length > 0 && (
        <div
          className="mt-6 grid grid-cols-1 gap-3 border-t pt-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: "var(--ink)" }}
        >
          {display.map((event: { id: string; type: string; repo: { name: string }; created_at: string }, i: number) => {
            const repoName = event.repo.name.replace(/^[^/]+\//, "");
            const color = BENTO_COLORS[i % BENTO_COLORS.length];
            return (
              <a
                key={event.id}
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block border-[2px] border-[#0E0E10] p-5 shadow-[4px_4px_0_#0E0E10] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0E0E10] bento-${color}`}
              >
                <div
                  className="mb-1 text-[0.58rem] font-bold uppercase"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
                >
                  {event.type.replace(/Event$/, "")}
                </div>
                <div
                  className="mb-1 text-[0.95rem] font-black leading-tight"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
                >
                  {repoName}
                </div>
                <div
                  className="text-[0.7rem] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {formatRelativeTime(event.created_at)}
                </div>
                <span
                  className="absolute right-4 top-4 text-[0.9rem] font-bold opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
                >
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      )}

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block text-center text-[0.7rem] font-bold transition hover:opacity-80"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)" }}
      >
        view all activity on github ↗
      </a>
    </div>
  );
}
