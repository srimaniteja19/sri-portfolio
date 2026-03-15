"use client";

import { useContent } from "@/components/content-provider";

export function CTASection() {
  const { cta, contact } = useContent();
  const availItems = cta.availItems;
  return (
    <section id="contact" className="scroll-mt-24">
      <div
        className="grid border-b lg:grid-cols-2"
        style={{ borderColor: "var(--ink)" }}
      >
        {/* Left - dark */}
        <div
          className="relative flex flex-col justify-center overflow-hidden px-8 py-12 lg:px-10"
          style={{ background: "var(--ink)" }}
        >
          <div
            className="pointer-events-none absolute -bottom-4 -right-4 text-[9rem] font-black italic leading-none"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "rgba(255,255,255,0.03)" }}
          >
            hire.
          </div>
          <div className="relative z-10">
            <div
              className="mb-4 text-[0.54rem] font-bold uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.14em", color: "rgba(255,255,255,0.28)" }}
            >
              // open to opportunities
            </div>
            <h2
              className="mb-6 text-[2.2rem] font-black leading-[1.05]"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#F0EDE4", fontStyle: "italic" }}
            >
              got a hard
              <br />
              problem?
              <br />
              <span style={{ color: "var(--lemon)", fontStyle: "normal" }}>{cta.subline}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/hire"
                className="rounded border-2 border-[var(--lemon)] bg-[var(--lemon)] px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-wide text-[var(--ink)] transition hover:bg-[#EDD800]"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                recruiter tools ↗
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded border-2 border-[var(--lemon)] bg-[var(--lemon)] px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-wide text-[var(--ink)] transition hover:bg-[#EDD800]"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                email me ↗
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border-2 border-[rgba(255,255,255,0.2)] px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-wide transition hover:border-[rgba(255,255,255,0.6)] hover:text-white"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "rgba(255,255,255,0.55)" }}
              >
                github
              </a>
            </div>
          </div>
          {/* Handshake illustration */}
          <div className="absolute bottom-0 right-8" style={{ opacity: 0.85 }}>
            <svg width="260" height="190" viewBox="0 0 260 190" className="max-h-[180px] max-w-[260px]">
              <style>{`
                .cta-spark1 { animation: illoFloatB 2s ease-in-out infinite; }
                .cta-spark2 { animation: illoFloatA 2.5s ease-in-out infinite 0.5s; }
                .cta-spark3 { animation: illoFloatC 3s ease-in-out infinite 1s; }
              `}</style>
              <g transform="translate(18,12)">
                <ellipse cx="42" cy="48" rx="18" ry="20" fill="var(--skin)" />
                <ellipse cx="42" cy="30" rx="19" ry="10" fill="var(--coral)" />
                <rect x="28" y="21" width="9" height="18" rx="4.5" fill="var(--coral)" />
                <rect x="49" y="21" width="9" height="18" rx="4.5" fill="var(--coral)" />
                <path d="M31 55 Q42 63 53 55" fill="none" stroke="var(--skin2)" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="34" cy="46" r="3" fill="white" />
                <circle cx="35" cy="47" r="1.8" fill="#2C2C2A" />
                <circle cx="50" cy="46" r="3" fill="white" />
                <circle cx="51" cy="47" r="1.8" fill="#2C2C2A" />
                <rect x="29" y="68" width="30" height="48" rx="8" fill="var(--coral)" />
                <path d="M29 80 Q16 93 13 106" fill="none" stroke="var(--skin)" strokeWidth="9" strokeLinecap="round" />
                <path d="M59 80 Q72 93 75 106" fill="none" stroke="var(--skin)" strokeWidth="9" strokeLinecap="round" />
                <ellipse cx="75" cy="108" rx="7" ry="6" fill="var(--skin)" />
                <rect x="31" y="116" width="11" height="44" rx="5" fill="#2C2C2A" />
                <rect x="48" y="116" width="11" height="44" rx="5" fill="#2C2C2A" />
                <ellipse cx="37" cy="161" rx="10" ry="4.5" fill="var(--ink)" />
                <ellipse cx="53" cy="161" rx="10" ry="4.5" fill="var(--ink)" />
              </g>
              <g transform="translate(155,12)">
                <ellipse cx="42" cy="48" rx="18" ry="20" fill="var(--skin2)" />
                <ellipse cx="42" cy="30" rx="19" ry="10" fill="#2C2C2A" />
                <circle cx="33" cy="32" r="8" fill="#2C2C2A" />
                <circle cx="42" cy="30" r="8" fill="#2C2C2A" />
                <circle cx="51" cy="32" r="8" fill="#2C2C2A" />
                <path d="M31 55 Q42 63 53 55" fill="none" stroke="var(--hair3)" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="34" cy="46" r="3" fill="white" />
                <circle cx="35" cy="47" r="1.8" fill="var(--ink)" />
                <circle cx="50" cy="46" r="3" fill="white" />
                <circle cx="51" cy="47" r="1.8" fill="var(--ink)" />
                <rect x="29" y="68" width="30" height="48" rx="8" fill="var(--mint)" />
                <path d="M29 80 Q16 93 13 106" fill="none" stroke="var(--skin2)" strokeWidth="9" strokeLinecap="round" />
                <ellipse cx="13" cy="108" rx="7" ry="6" fill="var(--skin2)" />
                <path d="M59 80 Q72 93 75 106" fill="none" stroke="var(--skin2)" strokeWidth="9" strokeLinecap="round" />
                <rect x="31" y="116" width="11" height="44" rx="5" fill="#1a1a18" />
                <rect x="48" y="116" width="11" height="44" rx="5" fill="#1a1a18" />
                <ellipse cx="37" cy="161" rx="10" ry="4.5" fill="var(--ink)" />
                <ellipse cx="53" cy="161" rx="10" ry="4.5" fill="var(--ink)" />
              </g>
              <ellipse cx="130" cy="120" rx="16" ry="11" fill="var(--skin)" />
              <path d="M115 118 Q130 108 145 118" fill="var(--skin)" stroke="none" />
              <text x="118" y="94" fontSize="13" fill="var(--lemon)" className="cta-spark1">✦</text>
              <text x="124" y="80" fontSize="9" fill="var(--mint)" className="cta-spark2">✦</text>
              <text x="131" y="92" fontSize="8" fill="var(--coral)" className="cta-spark3">✦</text>
              <ellipse cx="60" cy="175" rx="28" ry="4" fill="rgba(240,237,228,0.18)" />
              <ellipse cx="197" cy="175" rx="28" ry="4" fill="rgba(240,237,228,0.18)" />
            </svg>
          </div>
        </div>

        {/* Right - lemon */}
        <div
          className="flex flex-col justify-center gap-6 p-8 lg:p-10"
          style={{ background: "var(--lemon)" }}
        >
          <div
            className="text-[0.54rem] font-bold uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.12em", color: "rgba(10,10,9,0.38)" }}
          >
            // i&apos;m available for
          </div>
          <div className="flex flex-col gap-2">
            {availItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded border-2 border-[var(--ink)] bg-[rgba(255,255,255,0.52)] px-3 py-2 transition-colors hover:bg-[rgba(255,255,255,0.88)]"
              >
                <span className="text-[0.63rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  {item}
                </span>
                <div
                  className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)]"
                >
                  <svg viewBox="0 0 12 12" className="h-1.5 w-1.5" stroke="var(--ink)" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
