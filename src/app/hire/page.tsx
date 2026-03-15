import Link from "next/link";
import { SectionDivider } from "@/components/section-divider";
import { HireAIChat } from "@/components/hire/hire-ai-chat";
import { HireJDMatcher } from "@/components/hire/hire-jd-matcher";
import { HireProofOfWork } from "@/components/hire/hire-proof-of-work";
import { HireGitHub } from "@/components/hire/hire-github";
import { HireResumeShare } from "@/components/hire/hire-resume-share";
import { HireStackChecker } from "@/components/hire/hire-stack-checker";
import { HireInterviewQA } from "@/components/hire/hire-interview-qa";

export default function HirePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--bg)", fontFamily: "var(--sans)" }}>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "var(--ink)", background: "var(--bg)" }}>
        <Link href="/" className="text-[0.65rem] font-bold uppercase tracking-widest transition hover:opacity-70" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)" }}>
          ← back to portfolio
        </Link>
        <span className="text-[0.56rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>
          // recruiter tools
        </span>
      </header>

      <SectionDivider label="AI portfolio assistant" right="// powered by Gemini 2.5 Flash · ask me anything" />
      <HireAIChat />

      <SectionDivider label="JD matcher" right="// paste a job description · get match score + tailored pitch" />
      <HireJDMatcher />

      <SectionDivider label="proof of work" right="// not just skills — evidence" />
      <HireProofOfWork />

      <SectionDivider label="github activity" right="// live · @srimaniteja19" />
      <HireGitHub />

      <SectionDivider label="resume & share" right="// everything you need in one click" />
      <HireResumeShare />

      <SectionDivider label="stack compatibility" right="// check if my stack matches your team" />
      <HireStackChecker />

      <SectionDivider label="interview prep" right="// 14 questions · grounded in maniteja's experience" />
      <HireInterviewQA />

      <footer className="border-t px-6 py-8" style={{ borderColor: "var(--ink)" }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-[0.62rem] font-bold uppercase transition hover:opacity-70" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)" }}>
            ← home
          </Link>
          <a href="mailto:srimaniteja.ch@gmail.com" className="text-[0.62rem] font-bold uppercase transition hover:opacity-70" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)" }}>
            email me ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
