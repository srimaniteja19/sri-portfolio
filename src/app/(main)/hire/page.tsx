import Link from "next/link";
import { SectionDivider } from "@/components/section-divider";
import { HireAIChat } from "@/components/hire/hire-ai-chat";
import { HireJDMatcher } from "@/components/hire/hire-jd-matcher";
import { HireProofOfWork } from "@/components/hire/hire-proof-of-work";
import { HireGitHub } from "@/components/hire/hire-github";
import { HireResumeShare } from "@/components/hire/hire-resume-share";
import { HireStackChecker } from "@/components/hire/hire-stack-checker";
import { HireInterviewQA } from "@/components/hire/hire-interview-qa";

const JUMP_LINKS = [
  { href: "#ai-chat", label: "Ask AI" },
  { href: "#jd-matcher", label: "Job Match" },
  { href: "#proof-of-work", label: "Case Studies" },
  { href: "#stack-check", label: "Stack Check" },
  { href: "#interview-qa", label: "Q&A" },
  { href: "#github-live", label: "GitHub" },
  { href: "#share-contact", label: "Contact & Share" },
];

export default function HirePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Top Sticky Bar */}
      <header
        className="sticky top-0 z-50 border-b-[2.5px]"
        style={{
          borderColor: "var(--ink)",
          background: "var(--bg)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="nb-btn px-3.5 py-2 text-[0.68rem]"
              style={{
                background: "var(--surface-elevated)",
                color: "var(--ink)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <path d="M9 6H3M3 6L6 3M3 6L6 9" />
              </svg>
              <span>Back to Portfolio</span>
            </Link>

            <div
              className="hidden items-center gap-2 border-2 px-3 py-1 font-data text-[0.68rem] font-bold uppercase sm:flex"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface)",
                color: "var(--ink)",
              }}
            >
              <span
                className="h-2 w-2"
                style={{ background: "var(--emerald)" }}
              />
              <span>Software Engineer @ Rivian</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="mailto:srimaniteja.ch@gmail.com"
              className="nb-btn px-4 py-2 text-[0.68rem]"
              style={{
                background: "var(--signal)",
                color: "#FFFFFF",
              }}
            >
              <span>Email Maniteja</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <path d="M3 9L9 3M9 3H4M9 3V8" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Intro Section */}
      <section
        className="border-b-[2.5px] px-4 py-10 md:px-8 md:py-14"
        style={{
          borderColor: "var(--ink)",
          background: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1
                className="font-display text-[clamp(3.3rem,6.8vw,5.75rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]"
                style={{ color: "var(--ink)" }}
              >
                Hiring &amp;{" "}
                <span
                  className="inline-block border-[2.5px] px-2.5 py-0.5"
                  style={{
                    borderColor: "var(--ink)",
                    background: "var(--volt)",
                    color: "#111210",
                    boxShadow: "4px 4px 0px var(--ink)",
                  }}
                >
                  Fit Check
                </span>
              </h1>
              <p
                className="mt-5 max-w-[65ch] text-[1.08rem] font-medium leading-[1.6]"
                style={{ color: "var(--ink)" }}
              >
                Interactive tools for engineering leaders and recruiters to
                evaluate Sri Maniteja Chinnam — test role fit against your job
                description, inspect production case studies, check stack
                overlap, or ask the AI assistant directly.
              </p>
            </div>

            <div
              className="nb-box grid grid-cols-2 divide-x-2 divide-y-2"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
              }}
            >
              <div className="p-4">
                <div
                  className="font-data text-[0.6rem] font-bold uppercase"
                  style={{ color: "var(--dim)" }}
                >
                  Current Role
                </div>
                <div
                  className="mt-1 font-display text-[1.45rem] font-black uppercase leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  Rivian SWE
                </div>
              </div>
              <div className="p-4">
                <div
                  className="font-data text-[0.6rem] font-bold uppercase"
                  style={{ color: "var(--dim)" }}
                >
                  Experience
                </div>
                <div
                  className="mt-1 font-display text-[1.45rem] font-black uppercase leading-none tabular-nums"
                  style={{ color: "var(--ink)" }}
                >
                  4+ Years
                </div>
              </div>
              <div className="p-4">
                <div
                  className="font-data text-[0.6rem] font-bold uppercase"
                  style={{ color: "var(--dim)" }}
                >
                  Education
                </div>
                <div
                  className="mt-1 font-display text-[1.45rem] font-black uppercase leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  M.S. Data Sci
                </div>
              </div>
              <div
                className="p-4"
                style={{ background: "var(--volt)", color: "#111210" }}
              >
                <div className="font-data text-[0.6rem] font-bold uppercase">
                  2026 Shipped
                </div>
                <div className="mt-1 font-display text-[1.45rem] font-black uppercase leading-none tabular-nums">
                  12 Projects
                </div>
              </div>
            </div>
          </div>

          {/* Quick Jump Bar */}
          <div
            className="mt-8 flex flex-wrap items-center gap-2 border-t-2 pt-5"
            style={{ borderColor: "var(--ink)" }}
          >
            <span
              className="mr-1 font-data text-[0.68rem] font-bold uppercase"
              style={{ color: "var(--dim)" }}
            >
              Jump to:
            </span>
            {JUMP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nb-btn px-3 py-1.5 text-[0.68rem]"
                style={{
                  background: "var(--surface-elevated)",
                  color: "var(--ink)",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="ai-chat" className="scroll-mt-16">
        <SectionDivider
          label="AI Portfolio Assistant"
          right="Powered by Gemini 2.5 Flash · Ask anything"
        />
        <HireAIChat />
      </div>

      <div id="jd-matcher" className="scroll-mt-16">
        <SectionDivider
          label="Job Description Matcher"
          right="Paste a JD · Get skill overlap + tailored intro"
        />
        <HireJDMatcher />
      </div>

      <div id="proof-of-work" className="scroll-mt-16">
        <SectionDivider
          label="Production Impact & Case Studies"
          right="Enterprise systems & shipped products"
        />
        <HireProofOfWork />
      </div>

      <div id="stack-check" className="scroll-mt-16">
        <SectionDivider
          label="Team Stack Compatibility"
          right="Select your team's technologies to check overlap"
        />
        <HireStackChecker />
      </div>

      <div id="interview-qa" className="scroll-mt-16">
        <SectionDivider
          label="Technical & Behavioral Q&A"
          right="14 common interview questions & direct answers"
        />
        <HireInterviewQA />
      </div>

      <div id="github-live" className="scroll-mt-16">
        <SectionDivider
          label="GitHub Overview"
          right="Live repositories · @srimaniteja19"
        />
        <HireGitHub />
      </div>

      <div id="share-contact" className="scroll-mt-16">
        <SectionDivider
          label="Quick Share & Contact"
          right="Share with your hiring team"
        />
        <HireResumeShare />
      </div>

      <footer
        className="flex flex-col justify-between gap-4 border-t-[2.5px] px-4 py-6 md:flex-row md:items-center md:px-8"
        style={{
          borderColor: "var(--ink)",
          background: "var(--ink)",
          color: "var(--bg)",
        }}
      >
        <div className="flex flex-wrap items-center gap-4 font-data text-[0.68rem] font-bold uppercase">
          <span>Sri Maniteja Chinnam · Software Engineer @ Rivian</span>
          <span style={{ color: "var(--volt)" }}>(716) 923-5404</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-data text-[0.68rem] font-bold uppercase">
          <Link href="/" className="transition-opacity hover:opacity-75">
            Portfolio Home
          </Link>
          <a
            href="https://github.com/srimaniteja19"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-75"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sri-maniteja-chinnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-75"
          >
            LinkedIn
          </a>
          <a
            href="mailto:srimaniteja.ch@gmail.com"
            className="transition-opacity hover:opacity-75"
            style={{ color: "var(--volt)" }}
          >
            srimaniteja.ch@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
