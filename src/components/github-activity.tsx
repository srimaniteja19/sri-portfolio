const BENTO_COLORS = ["mint", "lemon", "coral", "sky", "lilac", "peach"] as const;

const CONTRIBUTION_COLORS: Record<string, string> = {
  NONE: "#ebedf0",
  FIRST_QUARTILE: "rgba(126,237,196,0.6)",
  SECOND_QUARTILE: "var(--mint)",
  THIRD_QUARTILE: "#5FE0B4",
  FOURTH_QUARTILE: "#3dd4a0",
};

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
}

async function fetchContributions(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.deno.dev/${username}.json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
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
  const contributionWeeks = contributions?.contributions ?? [];

  const display = events
    .slice(0, 8)
    .filter((e: { type: string }) =>
      ["PushEvent", "CreateEvent", "WatchEvent", "ForkEvent", "PublicEvent"].includes(e.type)
    );

  return (
    <div className="border-b px-6 py-6 md:px-8" style={{ borderColor: "var(--ink)" }}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[0.65rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", letterSpacing: "0.1em" }}>
          <span style={{ color: "rgba(13,13,13,0.2)" }}>//</span> contribution activity
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[100px] border px-2.5 py-1 text-[0.68rem] font-bold transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "var(--ink)", background: "var(--ink)", color: "var(--bg)" }}
        >
          @{username}
        </a>
      </div>
      <div className="overflow-hidden">
        <div
          className="mb-3 text-[0.68rem]"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}
        >
          {totalContributions} contributions in the past year
        </div>
          <div className="overflow-x-auto py-2">
            {contributionWeeks.length > 0 ? (
              <div className="flex gap-[3px]">
                {contributionWeeks.map((week: Array<{ color: string; contributionCount: number; contributionLevel: string; date: string }>, wi: number) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => (
                      <div
                        key={di}
                        className="h-2.5 w-2.5 min-w-2.5 rounded-[2px]"
                        style={{
                          background: CONTRIBUTION_COLORS[day.contributionLevel] ?? day.color,
                        }}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-[0.8rem]" style={{ color: "var(--muted)" }}>
                No contribution data
              </div>
            )}
            <div className="mt-4 flex items-center justify-end gap-2 text-[0.58rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
              <span>Less</span>
              <div className="flex gap-0.5">
                {["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"].map(
                  (level) => (
                    <div
                      key={level}
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{ background: CONTRIBUTION_COLORS[level] ?? "#ebedf0" }}
                    />
                  )
                )}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Event cards */}
        {display.length > 0 && (
          <div
            className="mt-6 grid grid-cols-1 gap-2 border-t pt-6 sm:grid-cols-2 lg:grid-cols-3"
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
                  className={`group relative block p-5 transition-colors duration-150 bento-${color}`}
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
                    className="text-[0.7rem] font-light"
                    style={{ color: "var(--muted)" }}
                  >
                    {formatRelativeTime(event.created_at)}
                  </div>
                  <span
                    className="absolute right-4 top-4 text-[0.9rem] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
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
