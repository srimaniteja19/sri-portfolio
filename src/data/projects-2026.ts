export type Project2026 = {
  id: string;
  title: string;
  repo: string;          // owner/name
  repoUrl: string;
  liveUrl?: string;
  blurb: string;
  language: "TypeScript" | "JavaScript" | "Java";
  created: string;       // ISO date, first commit
  lastPush: string;      // ISO date
  size: string;          // human readable
  accent: "blue" | "coral" | "lime" | "sun";
  stack?: string[];
  highlights?: string[];
};

export const PROJECTS_2026: Project2026[] = [
  {
    id: "Hoard",
    title: "Hoard",
    repo: "srimaniteja19/Hoard",
    repoUrl: "https://github.com/srimaniteja19/Hoard",
    liveUrl: "https://hoard-ten.vercel.app",
    blurb:
      "Contextual bookmark manager & creator studio for articles, videos, repos, and papers — with semantic search, multi-part series roadmaps, Kanban pipeline, PWA offline caching, and a Manifest V3 browser extension.",
    language: "TypeScript",
    created: "2026-08-09",
    lastPush: "2026-10-07",
    size: "67.3 MB",
    accent: "coral",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Neon Postgres",
      "Drizzle ORM",
      "Better Auth",
      "Vercel AI SDK",
      "Manifest V3",
      "d3-force",
    ],
    highlights: [
      "Semantic Library Search: Backfills vector embeddings across saved articles, papers, and repos for hybrid keyword + semantic retrieval.",
      "Creator Studio & Series Roadmaps: Broadcast-style Kanban pipeline with multi-part series paste import, episode roadmaps, and AI script drafting.",
      "Omnichannel Capture: Manifest V3 browser extension (Alt+Shift+H & right-click capture) plus PWA Web Share Target for mobile.",
      "Reader & Force Graph: Mozilla Readability article extraction paired with d3-force knowledge graph visualization.",
    ],
  },
  {
    id: "365DayLearning",
    title: "Refrainly",
    repo: "srimaniteja19/365DayLearning",
    repoUrl: "https://github.com/srimaniteja19/365DayLearning",
    liveUrl: "https://refrainly.dev",
    blurb:
      "Daily learning campaigns: AI-generated study plans up to 730 days, spaced repetition on a 7/30/90/180 ladder, XP and badges, and a Field Kit for notes and bookmarks.",
    language: "TypeScript",
    created: "2026-07-27",
    lastPush: "2026-08-08",
    size: "2.7 MB",
    accent: "lime",
    stack: [
      "Next.js 16",
      "React 19",
      "Neon Postgres",
      "Drizzle ORM",
      "NextAuth v5",
      "Stripe Billing",
      "OpenRouter AI",
      "Upstash Redis",
    ],
    highlights: [
      "Multi-Horizon Plan Builder: Generates structured daily curriculums up to 730 days or seeds custom plans directly from saved Field Kit bookmarks.",
      "Spaced Repetition Engine: Automated 7 / 30 / 90 / 180-day recall ladder with cross-entry AI journal insights.",
      "Hybrid BYOK + Managed Quotas: Supports free OpenRouter BYOK keys alongside Stripe-managed Operator & Architect subscription tiers.",
      "Cloud Sync Snapshot: Real-time transactional state persistence in Neon Postgres with Upstash Redis rate limiting.",
    ],
  },
  {
    id: "MyDebtt",
    title: "Mission: Debt Zero",
    repo: "srimaniteja19/MyDebtt",
    repoUrl: "https://github.com/srimaniteja19/MyDebtt",
    liveUrl: "https://my-debtt.vercel.app",
    blurb:
      "Interactive debt payoff accelerator, strategy simulator, payment tracker, and financial analytics dashboard with offline PWA support.",
    language: "TypeScript",
    created: "2026-08-08",
    lastPush: "2026-08-09",
    size: "325 KB",
    accent: "sun",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Neon Postgres",
      "Recharts",
      "Service Worker PWA",
    ],
    highlights: [
      "Strategy Battle Arena: Compares avalanche vs. snowball payoff trajectories, windfall injections, and consolidation scenarios in real time.",
      "Multi-Route Financial IA: Dedicated routes for Strategy, Payments, Insights, Rewards, and auto-saving compensation Settings.",
      "Offline-First PWA: Precaches all dashboard routes via custom Service Worker for mobile use.",
    ],
  },
  {
    id: "rate-limiter-x",
    title: "Rate Limiter X",
    repo: "srimaniteja19/rate-limiter-x",
    repoUrl: "https://github.com/srimaniteja19/rate-limiter-x",
    blurb:
      "Distributed Redis-backed rate limiter supporting 5 algorithms (Token Bucket, Sliding Window, Fixed Window, Leaky Bucket, Composite) with adaptive traffic shaping and 472+ tests.",
    language: "Java",
    created: "2026-03-04",
    lastPush: "2026-03-04",
    size: "2.7 MB",
    accent: "blue",
    stack: [
      "Java 21",
      "Spring Boot 3.5",
      "Redis 7",
      "Lua Scripts",
      "Prometheus",
      "Docker",
    ],
    highlights: [
      "5 Atomic Algorithms: Token Bucket, Sliding Window, Fixed Window, Leaky Bucket, and Composite traffic shaping backed by Redis Lua scripts.",
      "50,000+ RPS Throughput: Sub-2ms P95 latency under concurrent load with thread-safe atomic execution.",
      "Adaptive & Geo Rules: Dynamic limit adjustment based on traffic patterns, CDN location headers, and 472+ automated unit/load tests.",
    ],
  },
  {
    id: "ReadThenDo",
    title: "ReadThenDo",
    repo: "srimaniteja19/ReadThenDo",
    repoUrl: "https://github.com/srimaniteja19/ReadThenDo",
    liveUrl: "https://readthendo.vercel.app",
    blurb:
      "Turn any book summary into 3 actionable habits and a personalized 30-day plan, powered by Google Gemini.",
    language: "TypeScript",
    created: "2026-06-16",
    lastPush: "2026-06-19",
    size: "175 KB",
    accent: "sun",
    stack: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    highlights: [
      "Actionable Extraction: Converts passive book takeaways into 3 concrete daily habits and a 30-day execution checklist.",
      "Structured Gemini Output: Schema-constrained generation with persisted local habit tracking.",
    ],
  },
  {
    id: "GenAiConceptsExplainer",
    title: "GenAI Concepts Explainer",
    repo: "srimaniteja19/GenAiConceptsExplainer",
    repoUrl: "https://github.com/srimaniteja19/GenAiConceptsExplainer",
    liveUrl: "https://gen-ai-concepts-explainer.vercel.app",
    blurb:
      "Generative-AI concepts broken down and explained — interactive visualizers for embeddings, attention, RAG, and agent loops.",
    language: "TypeScript",
    created: "2026-04-11",
    lastPush: "2026-04-11",
    size: "107 KB",
    accent: "coral",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: "ResumeAnalysis",
    title: "RoleWeaver",
    repo: "srimaniteja19/ResumeAnalysis",
    repoUrl: "https://github.com/srimaniteja19/ResumeAnalysis",
    liveUrl: "https://roleweaver.vercel.app",
    blurb:
      "Structured resume parsing, JD alignment scoring, and bullet-point rewrite suggestions tailored to target engineering roles.",
    language: "TypeScript",
    created: "2026-03-26",
    lastPush: "2026-03-27",
    size: "215 KB",
    accent: "blue",
    stack: ["Next.js", "TypeScript", "LLM Parsing", "Tailwind CSS"],
  },
  {
    id: "RoastMyResume",
    title: "Roast My Resume",
    repo: "srimaniteja19/RoastMyResume",
    repoUrl: "https://github.com/srimaniteja19/RoastMyResume",
    blurb:
      "Resume feedback with the politeness filter removed. Built and shipped over a single weekend.",
    language: "JavaScript",
    created: "2026-03-23",
    lastPush: "2026-03-24",
    size: "449 KB",
    accent: "lime",
    stack: ["JavaScript", "Next.js", "AI Prompting"],
  },
  {
    id: "sri-portfolio",
    title: "Portfolio",
    repo: "srimaniteja19/sri-portfolio",
    repoUrl: "https://github.com/srimaniteja19/sri-portfolio",
    liveUrl: "https://srichinnam.space",
    blurb:
      "This site — built with Next.js 16, React 19, live GitHub activity integration, Gemini recruiter tools, and a custom neobrutalist design system.",
    language: "TypeScript",
    created: "2026-03-14",
    lastPush: "2026-08-07",
    size: "3.4 MB",
    accent: "sun",
    stack: ["Next.js 16", "React 19", "TypeScript", "Gemini 2.5 Flash", "Tailwind CSS v4"],
  },
  {
    id: "DevPathAI",
    title: "DevPath AI",
    repo: "srimaniteja19/DevPathAI",
    repoUrl: "https://github.com/srimaniteja19/DevPathAI",
    blurb:
      "Self-learning platform that generates structured multi-phase course plans, hands-on projects, and persisted checkpoints from any learning goal using Google Gemini.",
    language: "TypeScript",
    created: "2026-03-05",
    lastPush: "2026-03-09",
    size: "121 KB",
    accent: "lime",
    stack: ["Next.js 14", "TypeScript", "Google Gemini", "Zustand", "Tailwind CSS"],
    highlights: [
      "3-Pace Curriculum Engine: Generates multi-phase roadmaps with Casual, Focused, and Intensive weekly schedules.",
      "Checkpoint Persistence & Export: Tracks topic completion in localStorage and exports full course plans to Markdown or JSON.",
    ],
  },
  {
    id: "AIBookmarking",
    title: "AI Bookmarking",
    repo: "srimaniteja19/AIBookmarking",
    repoUrl: "https://github.com/srimaniteja19/AIBookmarking",
    blurb:
      "Early prototype of bookmark capture with an AI tagging layer on top — evolved into Hoard.",
    language: "TypeScript",
    created: "2026-03-04",
    lastPush: "2026-03-04",
    size: "94 MB",
    accent: "coral",
    stack: ["Next.js", "TypeScript", "AI Tagging"],
  },
  {
    id: "devJobBoard",
    title: "Dev Job Board",
    repo: "srimaniteja19/devJobBoard",
    repoUrl: "https://github.com/srimaniteja19/devJobBoard",
    liveUrl: "https://mani-job-tracker.vercel.app",
    blurb:
      "A job board and application tracker built for developers rather than recruiters. Seven weeks of commits from first push to last.",
    language: "TypeScript",
    created: "2026-02-28",
    lastPush: "2026-04-16",
    size: "511 KB",
    accent: "blue",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];
