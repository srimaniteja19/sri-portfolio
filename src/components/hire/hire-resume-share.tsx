"use client";

import { useState } from "react";

function getPortfolioUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  return "https://srimaniteja.vercel.app";
}

export function HireResumeShare() {
  const [copyStatus, setCopyStatus] = useState("copy link");
  const [emailStatus, setEmailStatus] = useState("click to copy email");

  const downloadResume = () => {
    window.open("https://github.com/srimaniteja19", "_blank");
  };

  const copyPortfolioLink = () => {
    const url = getPortfolioUrl();
    navigator.clipboard?.writeText(url);
    setCopyStatus("✓ copied!");
    setTimeout(() => setCopyStatus("copy link"), 2000);
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/srimaniteja19", "_blank");
  };

  const generateReferral = () => {
    const tmpl = `Hi [Team],

I wanted to introduce Maniteja — an AI consultant and full-stack engineer. He's built production RAG pipelines (+15% conversion), automated FP&A workflows (-60% manual triage), and is actively looking for senior AI/LLM engineering roles.

Portfolio: ${getPortfolioUrl()} | GitHub: github.com/srimaniteja19

Thought he'd be a great fit for your team.`;
    navigator.clipboard?.writeText(tmpl);
    setEmailStatus("✓ template copied!");
    setTimeout(() => setEmailStatus("click to copy email"), 2500);
  };

  const cards = [
    { icon: "↓", title: "Download Resume", sub: "1-page PDF · updated", onClick: downloadResume, hover: "var(--mint)" },
    { icon: "⎘", title: "Copy Portfolio Link", sub: "Share with your team", onClick: copyPortfolioLink, hover: "var(--lemon)", status: copyStatus },
    { icon: "in", title: "LinkedIn Profile", sub: "Full work history & endorsements", onClick: openLinkedIn, hover: "var(--sky)", link: "/in/srimaniteja19" },
    { icon: "✉", title: "Email Template", sub: "Refer me to your team", onClick: generateReferral, hover: "var(--coral)", status: emailStatus },
  ];

  return (
    <div className="grid border-b lg:grid-cols-4" style={{ borderColor: "var(--ink)" }}>
      {cards.map((c) => (
        <button
          key={c.title}
          onClick={c.onClick}
          className="group flex flex-col gap-2 border-r-2 p-6 text-left transition-colors last:border-r-0 hover:bg-[var(--mint)]"
          style={{ borderColor: "var(--ink)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = c.hover; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          <div className="font-serif text-3xl font-black italic leading-none">{c.icon}</div>
          <div className="font-serif text-[0.95rem] font-black">{c.title}</div>
          <div className="text-[0.72rem] font-light" style={{ color: "var(--dim)" }}>{c.sub}</div>
          <div className="mt-auto text-[0.56rem]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)" }}>{c.status ?? c.link ?? ""}</div>
        </button>
      ))}
    </div>
  );
}
