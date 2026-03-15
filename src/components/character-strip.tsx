"use client";

export function CharacterStrip() {
  return (
    <div className="overflow-hidden border-b px-4 py-5 md:px-8" style={{ borderColor: "var(--ink)" }}>
      <div className="flex items-end justify-around">
        <svg width="100%" height="265" viewBox="0 0 900 265" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            .char-wave { animation: charWave 2.5s ease-in-out infinite; }
            @keyframes charWave { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(18deg)} 75%{transform:rotate(-10deg)} }
            .char-fa { animation: illoFloatA 3.5s ease-in-out infinite; }
            .char-fb { animation: illoFloatB 4s ease-in-out infinite 1s; }
            .char-fc { animation: illoFloatC 3s ease-in-out infinite 2s; }
          `}</style>
          <line x1="0" y1="255" x2="900" y2="255" stroke="var(--ink)" strokeWidth="2" />

          {/* char 1: coral, phone */}
          <g transform="translate(52,15)">
            <rect x="22" y="110" width="46" height="60" rx="10" fill="var(--coral)" />
            <path d="M20 148 Q45 168 70 148 L68 172 Q45 178 22 172 Z" fill="var(--coral)" />
            <rect x="38" y="98" width="14" height="15" rx="5" fill="var(--skin)" />
            <ellipse cx="45" cy="84" rx="20" ry="22" fill="var(--skin)" />
            <ellipse cx="45" cy="65" rx="22" ry="13" fill="var(--hair1)" />
            <rect x="23" y="65" width="8" height="28" rx="4" fill="var(--hair1)" />
            <rect x="59" y="65" width="8" height="24" rx="4" fill="var(--hair1)" />
            <ellipse cx="36" cy="83" rx="3.5" ry="4" fill="white" />
            <circle cx="37" cy="84" r="2" fill="var(--hair1)" />
            <ellipse cx="54" cy="83" rx="3.5" ry="4" fill="white" />
            <circle cx="55" cy="84" r="2" fill="var(--hair1)" />
            <path d="M38 93 Q45 99 52 93" fill="none" stroke="var(--skin2)" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="25" cy="84" rx="4" ry="6" fill="var(--skin)" />
            <ellipse cx="65" cy="84" rx="4" ry="6" fill="var(--skin)" />
            <path d="M22 122 Q8 140 6 155" fill="none" stroke="var(--skin)" strokeWidth="10" strokeLinecap="round" />
            <g style={{ transformOrigin: "80px 100px" }} className="char-wave">
              <path d="M68 122 Q82 112 84 102" fill="none" stroke="var(--skin)" strokeWidth="10" strokeLinecap="round" />
              <rect x="78" y="87" width="13" height="21" rx="3" fill="var(--ink)" />
              <rect x="80" y="90" width="9" height="14" rx="2" fill="var(--sky)" />
            </g>
            <ellipse cx="6" cy="157" rx="7" ry="5" fill="var(--skin)" />
            <rect x="28" y="172" width="13" height="46" rx="5" fill="var(--hair1)" />
            <rect x="48" y="172" width="13" height="46" rx="5" fill="var(--hair1)" />
            <ellipse cx="35" cy="219" rx="11" ry="5" fill="var(--ink)" />
            <ellipse cx="55" cy="219" rx="11" ry="5" fill="var(--ink)" />
            <circle cx="65" cy="89" r="3" fill="var(--lemon)" stroke="var(--ink)" strokeWidth="1" />
          </g>

          {/* char 2: mint/black jacket */}
          <g transform="translate(185,10)">
            <rect x="20" y="107" width="50" height="66" rx="10" fill="var(--ink)" />
            <rect x="27" y="110" width="36" height="30" rx="6" fill="var(--mint)" />
            <rect x="37" y="95" width="16" height="16" rx="5" fill="var(--skin2)" />
            <ellipse cx="45" cy="81" rx="22" ry="24" fill="var(--skin2)" />
            <ellipse cx="45" cy="61" rx="23" ry="12" fill="var(--hair1)" />
            <circle cx="35" cy="63" r="8" fill="var(--hair1)" />
            <circle cx="45" cy="61" r="8" fill="var(--hair1)" />
            <circle cx="55" cy="63" r="8" fill="var(--hair1)" />
            <path d="M30 88 Q45 100 60 88" fill="var(--hair1)" opacity="0.35" />
            <ellipse cx="36" cy="80" rx="4" ry="4.5" fill="white" />
            <circle cx="37" cy="81" r="2.5" fill="var(--ink)" />
            <ellipse cx="54" cy="80" rx="4" ry="4.5" fill="white" />
            <circle cx="55" cy="81" r="2.5" fill="var(--ink)" />
            <path d="M37 91 Q45 98 53 91" fill="none" stroke="var(--hair3)" strokeWidth="1.8" strokeLinecap="round" />
            <ellipse cx="23" cy="81" rx="4" ry="6" fill="var(--skin2)" />
            <ellipse cx="67" cy="81" rx="4" ry="6" fill="var(--skin2)" />
            <path d="M20 120 Q2 138 0 158" fill="none" stroke="var(--skin2)" strokeWidth="11" strokeLinecap="round" />
            <path d="M70 120 Q84 108 86 96" fill="none" stroke="var(--skin2)" strokeWidth="11" strokeLinecap="round" />
            <ellipse cx="86" cy="92" rx="8" ry="7" fill="var(--skin2)" />
            <rect x="27" y="173" width="15" height="48" rx="5" fill="#1a1a18" />
            <rect x="50" y="173" width="15" height="48" rx="5" fill="#1a1a18" />
            <ellipse cx="35" cy="222" rx="12" ry="5" fill="var(--ink)" />
            <ellipse cx="58" cy="222" rx="12" ry="5" fill="var(--ink)" />
          </g>

          {/* char 3: lilac, celebrating */}
          <g transform="translate(315,8)" className="char-fc">
            <rect x="20" y="104" width="50" height="62" rx="10" fill="var(--lilac)" />
            <rect x="37" y="92" width="16" height="16" rx="5" fill="var(--skin)" />
            <ellipse cx="45" cy="78" rx="22" ry="24" fill="var(--skin)" />
            <ellipse cx="45" cy="58" rx="20" ry="11" fill="#E8C87A" />
            <circle cx="45" cy="52" r="12" fill="#E8C87A" />
            <path d="M33 75 Q37 71 41 75" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
            <path d="M49 75 Q53 71 57 75" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 87 Q45 96 56 87" fill="none" stroke="var(--skin2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 116 Q4 97 2 80" fill="none" stroke="var(--skin)" strokeWidth="11" strokeLinecap="round" />
            <path d="M70 116 Q86 97 88 80" fill="none" stroke="var(--skin)" strokeWidth="11" strokeLinecap="round" />
            <ellipse cx="2" cy="77" rx="7" ry="8" fill="var(--skin)" />
            <ellipse cx="88" cy="77" rx="7" ry="8" fill="var(--skin)" />
            <rect x="24" y="166" width="15" height="50" rx="5" fill="#534AB7" />
            <rect x="51" y="166" width="15" height="50" rx="5" fill="#534AB7" />
            <ellipse cx="32" cy="217" rx="12" ry="5" fill="var(--coral)" />
            <ellipse cx="59" cy="217" rx="12" ry="5" fill="var(--coral)" />
            <circle cx="23" cy="82" r="3.5" fill="var(--lemon)" stroke="var(--ink)" strokeWidth="1" />
            <circle cx="67" cy="82" r="3.5" fill="var(--lemon)" stroke="var(--ink)" strokeWidth="1" />
          </g>

          {/* char 4: sky, laptop */}
          <g transform="translate(435,3)" className="char-fb">
            <rect x="19" y="100" width="52" height="72" rx="10" fill="var(--sky)" />
            <rect x="36" y="88" width="18" height="16" rx="6" fill="var(--skin)" />
            <ellipse cx="45" cy="74" rx="23" ry="25" fill="var(--skin)" />
            <ellipse cx="45" cy="52" rx="24" ry="12" fill="#7A5C38" />
            <ellipse cx="36" cy="74" rx="4" ry="4.5" fill="white" />
            <circle cx="37" cy="75" r="2.5" fill="#5C3D1E" />
            <ellipse cx="54" cy="74" rx="4" ry="4.5" fill="white" />
            <circle cx="55" cy="75" r="2.5" fill="#5C3D1E" />
            <path d="M37 84 Q45 91 53 84" fill="none" stroke="var(--skin2)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M19 117 Q2 133 -2 150" fill="none" stroke="var(--skin)" strokeWidth="12" strokeLinecap="round" />
            <rect x="-20" y="137" width="33" height="23" rx="4" fill="var(--ink)" />
            <rect x="-17" y="140" width="27" height="16" rx="2" fill="var(--bg)" />
            <path d="M71 117 Q88 104 95 94" fill="none" stroke="var(--skin)" strokeWidth="12" strokeLinecap="round" className="char-wave" style={{ transformOrigin: "71px 114px" }} />
            <ellipse cx="96" cy="91" rx="8" ry="7" fill="var(--skin)" />
            <rect x="23" y="172" width="16" height="52" rx="5" fill="#1a1a18" />
            <rect x="51" y="172" width="16" height="52" rx="5" fill="#1a1a18" />
            <ellipse cx="31" cy="225" rx="13" ry="5" fill="#2C2C2A" />
            <ellipse cx="59" cy="225" rx="13" ry="5" fill="#2C2C2A" />
          </g>

          {/* char 5: peach, tablet */}
          <g transform="translate(578,14)" className="char-fa">
            <rect x="20" y="108" width="48" height="60" rx="10" fill="var(--peach)" />
            <rect x="36" y="96" width="16" height="16" rx="5" fill="var(--hair3)" />
            <ellipse cx="44" cy="82" rx="21" ry="23" fill="var(--hair3)" />
            <circle cx="44" cy="67" r="24" fill="var(--hair1)" />
            <path d="M36 87 Q44 93 52 87" fill="none" stroke="#A05C1A" strokeWidth="1.8" strokeLinecap="round" />
            <ellipse cx="36" cy="76" rx="3.5" ry="4" fill="white" />
            <circle cx="37" cy="77" r="2.2" fill="var(--ink)" />
            <ellipse cx="52" cy="76" rx="3.5" ry="4" fill="white" />
            <circle cx="53" cy="77" r="2.2" fill="var(--ink)" />
            <rect x="5" y="144" width="78" height="50" rx="6" fill="var(--ink)" />
            <rect x="9" y="148" width="70" height="40" rx="4" fill="var(--bg)" />
            <rect x="24" y="168" width="14" height="48" rx="5" fill="#534AB7" />
            <rect x="50" y="168" width="14" height="48" rx="5" fill="#534AB7" />
            <ellipse cx="31" cy="217" rx="11" ry="5" fill="var(--ink)" />
            <ellipse cx="57" cy="217" rx="11" ry="5" fill="var(--ink)" />
          </g>

          {/* char 6: lemon, blazer */}
          <g transform="translate(715,10)">
            <rect x="20" y="104" width="50" height="66" rx="10" fill="var(--lemon)" />
            <path d="M20 107 L30 133 L45 124 L60 133 L70 107 Z" fill="var(--ink)" opacity={0.88} />
            <rect x="37" y="92" width="16" height="16" rx="5" fill="var(--skin)" />
            <ellipse cx="45" cy="78" rx="22" ry="24" fill="var(--skin)" />
            <ellipse cx="45" cy="58" rx="23" ry="12" fill="var(--hair1)" />
            <ellipse cx="36" cy="77" rx="4" ry="4.5" fill="white" />
            <circle cx="37" cy="78" r="2.5" fill="var(--hair1)" />
            <ellipse cx="54" cy="77" rx="4" ry="4.5" fill="white" />
            <circle cx="55" cy="78" r="2.5" fill="var(--hair1)" />
            <path d="M38 88 Q45 94 52 88" fill="none" stroke="var(--skin2)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M20 117 Q6 133 4 150" fill="none" stroke="var(--skin)" strokeWidth="11" strokeLinecap="round" />
            <path d="M70 117 Q82 130 80 147" fill="none" stroke="var(--skin)" strokeWidth="11" strokeLinecap="round" />
            <ellipse cx="4" cy="152" rx="7" ry="6" fill="var(--skin)" />
            <ellipse cx="80" cy="149" rx="7" ry="6" fill="var(--skin)" />
            <rect x="24" y="170" width="15" height="50" rx="5" fill="#1a1a18" />
            <rect x="51" y="170" width="15" height="50" rx="5" fill="#1a1a18" />
            <ellipse cx="32" cy="221" rx="13" ry="5" fill="var(--hair1)" />
            <ellipse cx="59" cy="221" rx="13" ry="5" fill="var(--hair1)" />
          </g>

          {/* sparkles */}
          <text x="160" y="52" fontSize="13" fill="var(--ink)" className="char-fb">✦</text>
          <text x="400" y="36" fontSize="10" fill="var(--ink)" className="char-fa">✦</text>
          <text x="555" y="50" fontSize="11" fill="var(--ink)" className="char-fc">✦</text>
          <text x="840" y="58" fontSize="9" fill="var(--ink)" className="char-fb">✦</text>
        </svg>
      </div>
      <div
        className="grid border-t"
        style={{ borderColor: "var(--ink)", gridTemplateColumns: "repeat(6, 1fr)" }}
      >
        {["// frontend dev", "// ai engineer", "// celebrating", "// fullstack dev", "// data scientist", "// consultant"].map((l) => (
          <div key={l} className="border-r px-4 py-3 last:border-r-0" style={{ borderColor: "var(--ink)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.56rem", fontWeight: 700, color: "var(--dim)" }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
