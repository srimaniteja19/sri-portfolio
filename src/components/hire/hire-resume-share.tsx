"use client";

import { useState } from "react";

function getPortfolioUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  return "https://srichinnam.space";
}

export function HireResumeShare() {
  const [copyStatus, setCopyStatus] = useState("Copy URL");
  const [emailStatus, setEmailStatus] = useState("Copy Referral Note");

  const openGitHub = () => {
    window.open("https://github.com/srimaniteja19", "_blank");
  };

  const copyPortfolioLink = () => {
    const url = getPortfolioUrl();
    navigator.clipboard?.writeText(url);
    setCopyStatus("Copied to Clipboard");
    setTimeout(() => setCopyStatus("Copy URL"), 2000);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/sri-maniteja-chinnam/", "_blank");
  };

  const generateReferral = () => {
    const tmpl = `Hi team,

Sharing Sri Maniteja Chinnam's portfolio — he's a Software Engineer at Rivian and full-stack AI engineer (M.S. Data Science, SUNY Buffalo) who has shipped production RAG pipelines (+15% conversion), LangGraph automation (-60% manual triage), and 12 projects in 2026 including Hoard and Refrainly.

Portfolio: ${getPortfolioUrl()} | GitHub: github.com/srimaniteja19 | Email: srimaniteja.ch@gmail.com`;
    navigator.clipboard?.writeText(tmpl);
    setEmailStatus("Referral Copied");
    setTimeout(() => setEmailStatus("Copy Referral Note"), 2500);
  };

  const cards = [
    {
      title: "Copy Portfolio Link",
      sub: "Share this portfolio & fit page with your hiring team",
      onClick: copyPortfolioLink,
      status: copyStatus,
      accent: "var(--volt)",
    },
    {
      title: "Copy Referral Note",
      sub: "One-click intro blurb ready for Slack or email",
      onClick: generateReferral,
      status: emailStatus,
      accent: "var(--emerald)",
    },
    {
      title: "LinkedIn Profile",
      sub: "Full work history at Rivian & recommendations",
      onClick: openLinkedIn,
      status: "linkedin.com/in/sri-maniteja-chinnam",
      accent: "var(--surface)",
    },
    {
      title: "GitHub Profile",
      sub: "Inspect repositories, commits & 2026 shipped code",
      onClick: openGitHub,
      status: "github.com/srimaniteja19",
      accent: "var(--surface)",
    },
  ];

  return (
    <section
      className="px-4 py-12 md:px-8 md:py-16"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <button
              key={c.title}
              type="button"
              onClick={c.onClick}
              className="nb-box cursor-pointer group flex flex-col justify-between p-6 text-left transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--ink)",
                background: "var(--surface-elevated)",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="h-3 w-3 border-2"
                    style={{
                      borderColor: "var(--ink)",
                      background: c.accent,
                    }}
                  />
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M9 3H4M9 3V8" />
                  </svg>
                </div>

                <h3
                  className="mt-4 font-display text-[1.45rem] font-black uppercase leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-2 text-[0.84rem] leading-relaxed"
                  style={{ color: "var(--dim)" }}
                >
                  {c.sub}
                </p>
              </div>

              <div
                className="mt-5 border-t pt-3 font-data text-[0.64rem] font-bold uppercase"
                style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
              >
                {c.status}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
