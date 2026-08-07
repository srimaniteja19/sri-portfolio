export type Project2026 = {
  id: string;
  title: string;
  repo: string;          // owner/name
  repoUrl: string;
  liveUrl?: string;
  blurb: string;
  language: "TypeScript" | "JavaScript";
  created: string;       // ISO date, first commit
  lastPush: string;      // ISO date
  size: string;          // human readable
  accent: "blue" | "coral" | "lime" | "sun";
};

export const PROJECTS_2026: Project2026[] = [
  {
    id: "devJobBoard",
    title: "Dev Job Board",
    repo: "srimaniteja19/devJobBoard",
    repoUrl: "https://github.com/srimaniteja19/devJobBoard",
    liveUrl: "https://mani-job-tracker.vercel.app",
    blurb: "A job board built for developers rather than recruiters. Seven weeks of commits from first push to last.",
    language: "TypeScript",
    created: "2026-02-28",
    lastPush: "2026-04-16",
    size: "511 KB",
    accent: "blue",
  },
  {
    id: "AIBookmarking",
    title: "AI Bookmarking",
    repo: "srimaniteja19/AIBookmarking",
    repoUrl: "https://github.com/srimaniteja19/AIBookmarking",
    blurb: "Bookmark capture with an AI layer on top — saving links is easy, making them findable again is the problem.",
    language: "TypeScript",
    created: "2026-03-04",
    lastPush: "2026-03-04",
    size: "94 MB",
    accent: "coral",
  },
  {
    id: "sri-portfolio",
    title: "Portfolio",
    repo: "srimaniteja19/sri-portfolio",
    repoUrl: "https://github.com/srimaniteja19/sri-portfolio",
    blurb: "This site. Second run at the personal-site problem in the same month.",
    language: "TypeScript",
    created: "2026-03-14",
    lastPush: "2026-03-17",
    size: "3.4 MB",
    accent: "sun",
  },
  {
    id: "RoastMyResume",
    title: "Roast My Resume",
    repo: "srimaniteja19/RoastMyResume",
    repoUrl: "https://github.com/srimaniteja19/RoastMyResume",
    blurb: "Resume feedback with the politeness filter removed. Built and shipped over a single weekend.",
    language: "JavaScript",
    created: "2026-03-23",
    lastPush: "2026-03-24",
    size: "449 KB",
    accent: "lime",
  },
  {
    id: "ResumeAnalysis",
    title: "RoleWeaver",
    repo: "srimaniteja19/ResumeAnalysis",
    repoUrl: "https://github.com/srimaniteja19/ResumeAnalysis",
    liveUrl: "https://roleweaver.vercel.app",
    blurb: "The straight-faced counterpart to Roast My Resume. Structured parsing and scoring instead of jokes.",
    language: "TypeScript",
    created: "2026-03-26",
    lastPush: "2026-03-27",
    size: "215 KB",
    accent: "blue",
  },
  {
    id: "GenAiConceptsExplainer",
    title: "GenAI Concepts Explainer",
    repo: "srimaniteja19/GenAiConceptsExplainer",
    repoUrl: "https://github.com/srimaniteja19/GenAiConceptsExplainer",
    liveUrl: "https://gen-ai-concepts-explainer.vercel.app",
    blurb: "Generative-AI concepts broken down and explained — the code side of the GenAI Decoded writing.",
    language: "TypeScript",
    created: "2026-04-11",
    lastPush: "2026-04-11",
    size: "107 KB",
    accent: "coral",
  },
  {
    id: "ReadThenDo",
    title: "ReadThenDo",
    repo: "srimaniteja19/ReadThenDo",
    repoUrl: "https://github.com/srimaniteja19/ReadThenDo",
    liveUrl: "https://readthendo.vercel.app",
    blurb: "Turn any book summary into 3 actionable habits and a personalized 30-day plan, powered by Google Gemini.",
    language: "TypeScript",
    created: "2026-06-16",
    lastPush: "2026-06-19",
    size: "175 KB",
    accent: "sun",
  },
  {
    id: "365DayLearning",
    title: "Refrainly",
    repo: "srimaniteja19/365DayLearning",
    repoUrl: "https://github.com/srimaniteja19/365DayLearning",
    liveUrl: "https://refrainly.dev",
    blurb: "Daily learning campaigns: AI-generated study plans up to 730 days, spaced repetition on a 7/30/90/180 ladder, XP and badges, and a Field Kit for notes and bookmarks. Next.js 16, React 19, Neon Postgres with Drizzle, NextAuth, Stripe, OpenRouter.",
    language: "TypeScript",
    created: "2026-07-27",
    lastPush: "2026-08-03",
    size: "2.7 MB",
    accent: "lime",
  },
];
