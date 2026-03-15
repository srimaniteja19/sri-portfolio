"use client";

import { useContent } from "@/components/content-provider";

const colorBg: Record<string, string> = {
  mint: "var(--mint)",
  lemon: "var(--lemon)",
  coral: "var(--coral)",
  sky: "var(--sky)",
};

export function ProcessSection() {
  const { process } = useContent();
  const steps = process.steps;
  return (
    <section className="scroll-mt-24">
      <div className="grid grid-cols-1 border-b sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--ink)" }}>
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative overflow-hidden border-r p-6 last:border-r-0"
            style={{ borderColor: "var(--ink)", background: colorBg[step.color] }}
          >
            <div
              className="mb-2"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.55rem", color: "var(--dim)", letterSpacing: "0.06em" }}
            >
              // {step.num}
            </div>
            <div className="mb-4 flex justify-center">
              <ProcessIllustration index={parseInt(step.num) - 1} />
            </div>
            <h3
              className="mb-2 text-[0.95rem] font-black"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "var(--ink)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-[0.72rem] font-light leading-relaxed"
              style={{ color: "var(--dim)" }}
            >
              {step.desc}
            </p>
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: step.stripe }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessIllustration({ index }: { index: number }) {
  const size = 80;
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" className="overflow-visible">
      <style>{`
        .proc-fa { animation: illoFloatA 3.5s ease-in-out infinite; transform-origin: 45px 45px; }
        .proc-fb { animation: illoFloatB 3.2s ease-in-out infinite; transform-origin: 45px 45px; }
        .proc-fc { animation: illoFloatC 4s ease-in-out infinite; transform-origin: 45px 45px; }
      `}</style>
      {index === 0 && (
        <g className="proc-fa">
          <ellipse cx="38" cy="28" rx="10" ry="11" fill="var(--skin)" />
          <ellipse cx="38" cy="19" rx="11" ry="7" fill="var(--hair1)" />
          <rect x="32" y="39" width="22" height="28" rx="6" fill="var(--ink)" />
          <path d="M32 50 Q22 60 20 70" fill="none" stroke="var(--skin)" strokeWidth="6" strokeLinecap="round" />
          <path d="M54 50 Q64 58 68 65" fill="none" stroke="var(--skin)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="72" cy="60" r="12" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
          <circle cx="72" cy="60" r="7" fill="rgba(255,255,255,0.5)" />
          <line x1="81" y1="69" x2="88" y2="78" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
          <rect x="34" y="67" width="8" height="18" rx="3" fill="var(--hair1)" />
          <rect x="46" y="67" width="8" height="18" rx="3" fill="var(--hair1)" />
        </g>
      )}
      {index === 1 && (
        <g className="proc-fc">
          <ellipse cx="30" cy="26" rx="10" ry="11" fill="var(--skin2)" />
          <ellipse cx="30" cy="17" rx="11" ry="7" fill="var(--hair1)" />
          <rect x="23" y="37" width="22" height="26" rx="6" fill="var(--lilac)" />
          <path d="M45 48 Q55 44 62 38" fill="none" stroke="var(--skin2)" strokeWidth="7" strokeLinecap="round" />
          <rect x="52" y="20" width="32" height="42" rx="4" fill="white" stroke="var(--ink)" strokeWidth="2" />
          <rect x="56" y="25" width="16" height="3" rx="1.5" fill="var(--ink)" opacity="0.5" />
          <rect x="56" y="31" width="22" height="3" rx="1.5" fill="var(--ink)" opacity="0.3" />
          <rect x="67" y="50" width="5" height="16" rx="2" fill="var(--lemon)" stroke="var(--ink)" strokeWidth="1" />
          <polygon points="67,66 72,66 69.5,72" fill="var(--skin)" />
          <rect x="25" y="63" width="8" height="18" rx="3" fill="var(--ink)" />
          <rect x="37" y="63" width="8" height="18" rx="3" fill="var(--ink)" />
        </g>
      )}
      {index === 2 && (
        <g className="proc-fb">
          <ellipse cx="45" cy="24" rx="10" ry="11" fill="var(--skin)" />
          <ellipse cx="45" cy="15" rx="11" ry="7" fill="var(--hair3)" />
          <rect x="38" y="35" width="22" height="24" rx="6" fill="var(--ink)" />
          <rect x="8" y="32" width="30" height="22" rx="4" fill="var(--ink)" />
          <rect x="11" y="35" width="24" height="15" rx="2" fill="#1a1a18" />
          <rect x="13" y="38" width="10" height="2" rx="1" fill="var(--mint)" opacity="0.9" />
          <rect x="13" y="42" width="7" height="2" rx="1" fill="var(--lilac)" opacity="0.8" />
          <rect x="13" y="46" width="12" height="2" rx="1" fill="var(--lemon)" opacity="0.7" />
          <path d="M38 46 Q24 52 18 56" fill="none" stroke="var(--skin)" strokeWidth="7" strokeLinecap="round" />
          <rect x="40" y="59" width="8" height="18" rx="3" fill="var(--hair1)" />
          <rect x="52" y="59" width="8" height="18" rx="3" fill="var(--hair1)" />
        </g>
      )}
      {index === 3 && (
        <g className="proc-fa">
          <ellipse cx="45" cy="30" rx="10" ry="11" fill="var(--skin)" />
          <ellipse cx="45" cy="21" rx="11" ry="7" fill="var(--hair2)" />
          <rect x="38" y="41" width="22" height="22" rx="6" fill="var(--lemon)" />
          <path d="M38 48 Q24 38 18 28" fill="none" stroke="var(--skin)" strokeWidth="7" strokeLinecap="round" />
          <path d="M60 48 Q74 38 80 28" fill="none" stroke="var(--skin)" strokeWidth="7" strokeLinecap="round" />
          <ellipse cx="17" cy="25" rx="6" ry="7" fill="var(--skin)" />
          <ellipse cx="81" cy="25" rx="6" ry="7" fill="var(--skin)" />
          <text x="8" y="18" fontSize="10" fill="var(--ink)">✦</text>
          <text x="70" y="15" fontSize="10" fill="var(--ink)">✦</text>
          <text x="38" y="10" fontSize="8" fill="var(--ink)">✦</text>
          <rect x="40" y="63" width="8" height="18" rx="3" fill="var(--ink)" />
          <rect x="52" y="63" width="8" height="18" rx="3" fill="var(--ink)" />
        </g>
      )}
    </svg>
  );
}
