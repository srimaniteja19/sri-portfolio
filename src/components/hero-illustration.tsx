"use client";

export function HeroIllustration() {
  return (
    <div className="flex flex-1 flex-col items-center justify-end overflow-hidden px-4 pb-2 pt-4">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 420 300"
        className="max-h-[260px] w-full max-w-[380px]"
        preserveAspectRatio="xMidYMax meet"
      >
        <style>{`
          .char-arm { animation: illoWave 2.5s ease-in-out infinite; transform-origin: 262px 190px; }
          .ft1 { animation: illoFloatB 3s ease-in-out infinite; }
          .ft2 { animation: illoFloatA 3.5s ease-in-out infinite 0.8s; }
          .ft3 { animation: illoFloatC 2.8s ease-in-out infinite 1.5s; }
          .sparkle { animation: illoFloatA 2.5s ease-in-out infinite; }
        `}</style>

        {/* Laptop & desk */}
        <rect x="110" y="200" width="200" height="10" rx="5" fill="var(--ink)" />
        <rect x="100" y="210" width="220" height="8" rx="4" fill="var(--ink)" />
        <rect x="120" y="218" width="10" height="40" rx="3" fill="var(--ink)" />
        <rect x="290" y="218" width="10" height="40" rx="3" fill="var(--ink)" />
        <rect x="140" y="145" width="140" height="58" rx="6" fill="var(--ink)" />
        <rect x="147" y="151" width="126" height="46" rx="3" fill="var(--bg)" />
        <rect x="154" y="158" width="45" height="4" rx="2" fill="var(--mint)" opacity="0.9" />
        <rect x="154" y="165" width="32" height="4" rx="2" fill="var(--lilac)" opacity="0.8" />
        <rect x="154" y="172" width="60" height="4" rx="2" fill="rgba(13,13,13,0.15)" />
        <rect x="154" y="179" width="40" height="4" rx="2" fill="var(--lemon)" opacity="0.8" />
        <rect x="154" y="186" width="28" height="4" rx="2" fill="rgba(13,13,13,0.1)" />
        <rect x="186" y="186" width="4" height="4" rx="1" fill="var(--ink)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="138" y="203" width="144" height="6" rx="3" fill="#1a1a18" />

        {/* Person - body */}
        <rect x="170" y="228" width="80" height="12" rx="4" fill="var(--hair1)" />
        <rect x="238" y="195" width="10" height="45" rx="3" fill="var(--hair1)" />
        <rect x="178" y="155" width="64" height="58" rx="14" fill="var(--sky)" />
        <rect x="198" y="162" width="24" height="3" rx="1.5" fill="rgba(13,13,13,0.12)" />
        <path d="M196 155 Q210 165 224 155" fill="none" stroke="rgba(13,13,13,0.2)" strokeWidth="1.5" />
        <rect x="202" y="143" width="16" height="16" rx="6" fill="var(--skin)" />
        <ellipse cx="210" cy="128" rx="24" ry="26" fill="var(--skin)" />
        <ellipse cx="210" cy="106" rx="25" ry="14" fill="var(--hair1)" />
        <ellipse cx="197" cy="112" rx="10" ry="10" fill="var(--hair1)" />
        <ellipse cx="223" cy="112" rx="10" ry="10" fill="var(--hair1)" />
        <ellipse cx="186" cy="128" rx="5" ry="7" fill="var(--skin)" />
        <ellipse cx="234" cy="128" rx="5" ry="7" fill="var(--skin)" />
        <ellipse cx="200" cy="126" rx="4" ry="4.5" fill="white" />
        <ellipse cx="220" cy="126" rx="4" ry="4.5" fill="white" />
        <circle cx="201" cy="127" r="2.5" fill="var(--hair1)" />
        <circle cx="221" cy="127" r="2.5" fill="var(--hair1)" />
        <rect x="194" y="122" width="13" height="9" rx="4" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
        <rect x="213" y="122" width="13" height="9" rx="4" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
        <line x1="207" y1="126" x2="213" y2="126" stroke="var(--ink)" strokeWidth="1.8" />
        <line x1="186" y1="126" x2="194" y2="126" stroke="var(--ink)" strokeWidth="1.8" />
        <line x1="226" y1="126" x2="234" y2="126" stroke="var(--ink)" strokeWidth="1.8" />
        <path d="M203 135 Q210 141 217 135" fill="none" stroke="var(--skin2)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M178 175 Q158 190 148 198" fill="none" stroke="var(--skin)" strokeWidth="14" strokeLinecap="round" className="char-arm" />
        <path d="M242 175 Q262 190 272 198" fill="none" stroke="var(--skin)" strokeWidth="14" strokeLinecap="round" />
        <ellipse cx="147" cy="200" rx="8" ry="6" fill="var(--skin)" />
        <ellipse cx="273" cy="200" rx="8" ry="6" fill="var(--skin)" />
        <path d="M185 213 L183 255 L200 255 L200 213" fill="var(--ink)" />
        <path d="M235 213 L237 255 L220 255 L220 213" fill="var(--ink)" />
        <ellipse cx="192" cy="256" rx="14" ry="6" fill="var(--hair1)" />
        <ellipse cx="228" cy="256" rx="14" ry="6" fill="var(--hair1)" />

        {/* Floating pills */}
        <g className="ft1">
          <rect x="10" y="148" width="68" height="22" rx="11" fill="var(--mint)" stroke="var(--ink)" strokeWidth="2" />
          <text x="44" y="163" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">Next.js</text>
        </g>
        <g className="ft2">
          <rect x="342" y="140" width="68" height="22" rx="11" fill="var(--lemon)" stroke="var(--ink)" strokeWidth="2" />
          <text x="376" y="155" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">TypeScript</text>
        </g>
        <g className="ft3">
          <rect x="330" y="80" width="60" height="22" rx="11" fill="var(--lilac)" stroke="var(--ink)" strokeWidth="2" />
          <text x="360" y="95" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">AI / RAG</text>
        </g>
        <g className="ft1">
          <rect x="16" y="82" width="72" height="22" rx="11" fill="var(--peach)" stroke="var(--ink)" strokeWidth="2" />
          <text x="52" y="97" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">LangChain</text>
        </g>
        <line x1="78" y1="159" x2="140" y2="175" stroke="rgba(13,13,13,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="342" y1="151" x2="282" y2="170" stroke="rgba(13,13,13,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="320" y="115" fontSize="12" fill="var(--ink)" className="sparkle">✦</text>
        <text x="90" y="110" fontSize="9" fill="var(--ink)" className="ft3" style={{ transformOrigin: "90px 110px" }}>✦</text>
        <text x="50" y="195" fontSize="8" fill="var(--ink)" className="ft2" style={{ transformOrigin: "50px 195px" }}>✦</text>
      </svg>
    </div>
  );
}
