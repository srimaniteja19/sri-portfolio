// Auto-generated from maniteja-portfolio.html — animated hobby illustrations

export const CRICKET_ILLUSTRATION = `      <style>
        /* BAT SWING: coiled → explosive through → follow-through */
        #batArms {
          transform-origin: 148px 195px;
          animation: batSwing 2.8s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes batSwing {
          0%   { transform: rotate(55deg); }
          20%  { transform: rotate(55deg); }   /* load */
          22%  { transform: rotate(58deg); }   /* micro-coil */
          42%  { transform: rotate(-95deg); }  /* explosive contact */
          58%  { transform: rotate(-105deg); } /* follow-through */
          75%  { transform: rotate(-100deg); }
          90%  { transform: rotate(20deg); }   /* reset */
          100% { transform: rotate(55deg); }
        }

        /* BALL: sits → launches upward on contact */
        #ballG {
          transform-origin: 62px 218px;
          animation: ballFly 2.8s cubic-bezier(.2,.8,.3,1) infinite;
        }
        @keyframes ballFly {
          0%   { transform: translate(0px, 0px) scale(1);   opacity:1; }
          20%  { transform: translate(0px, 0px) scale(1);   opacity:1; }
          25%  { transform: translate(-2px,-4px) scale(1.1);opacity:1; } /* impact bulge */
          42%  { transform: translate(-55px,-130px) scale(.82); opacity:1; }
          60%  { transform: translate(-105px,-270px) scale(.58); opacity:1; }
          75%  { transform: translate(-140px,-380px) scale(.38); opacity:.75; }
          88%  { transform: translate(-155px,-450px) scale(.22); opacity:.3; }
          89%  { transform: translate(0px, 0px) scale(1);   opacity:0; }
          100% { transform: translate(0px, 0px) scale(1);   opacity:0; }
        }

        /* BALL SPIN during flight */
        #ballInner {
          transform-origin: 13px 13px;
          animation: ballSpin 2.8s linear infinite;
        }
        @keyframes ballSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* MOTION TRAIL */
        #trailG { animation: trailShow 2.8s ease infinite; }
        @keyframes trailShow {
          0%,20% { opacity:0; }
          28%    { opacity:.9; }
          55%    { opacity:.5; }
          72%    { opacity:.15; }
          88%    { opacity:0; }
          100%   { opacity:0; }
        }

        /* BATTER BODY: slight weight shift forward on contact */
        #batterBody {
          transform-origin: 148px 230px;
          animation: bodyLurch 2.8s ease infinite;
        }
        @keyframes bodyLurch {
          0%,20% { transform: rotate(0deg) translateX(0px); }
          42%    { transform: rotate(6deg) translateX(5px); }
          60%    { transform: rotate(5deg) translateX(4px); }
          85%    { transform: rotate(2deg) translateX(2px); }
          100%   { transform: rotate(0deg) translateX(0px); }
        }

        /* SIX BADGE pop */
        #sixBadge {
          transform-origin: 50% 50%;
          animation: sixPop 2.8s cubic-bezier(.34,1.56,.64,1) infinite;
        }
        @keyframes sixPop {
          0%,30% { transform: scale(0) rotate(-8deg); opacity:0; }
          48%    { transform: scale(1.18) rotate(2deg); opacity:1; }
          56%    { transform: scale(1) rotate(0deg);   opacity:1; }
          82%    { transform: scale(1) rotate(0deg);   opacity:1; }
          92%    { transform: scale(0) rotate(4deg);   opacity:0; }
          100%   { transform: scale(0) rotate(-8deg);  opacity:0; }
        }

        /* IMPACT SPARKS */
        #sparksG {
          transform-origin: 62px 218px;
          animation: sparksShow 2.8s ease infinite;
        }
        @keyframes sparksShow {
          0%,22%  { opacity:0; transform: scale(0); }
          28%     { opacity:1; transform: scale(1.2); }
          42%     { opacity:1; transform: scale(1); }
          52%     { opacity:0; }
          100%    { opacity:0; }
        }

        /* CROWD ROAR TEXT */
        #roarG { animation: roarAnim 2.8s ease infinite; }
        @keyframes roarAnim {
          0%,35%  { opacity:0; transform:translateY(8px) scale(.8); }
          52%     { opacity:1; transform:translateY(0px) scale(1.05); }
          65%     { opacity:1; transform:translateY(0px) scale(1); }
          82%     { opacity:.5; }
          90%     { opacity:0; }
          100%    { opacity:0; }
        }

        /* SCORECARD pulse */
        #scoreCard { animation: scorePulse 2.8s ease infinite; }
        @keyframes scorePulse {
          0%,45% { opacity:.85; }
          50%    { opacity:1; transform:scale(1.04); }
          60%    { opacity:1; transform:scale(1); }
          100%   { opacity:.85; }
        }

        /* CROWD WAVE */
        .crowd-arm { animation: crowdWave 2.8s ease infinite; }
        .crowd-arm:nth-child(2) { animation-delay:.12s; }
        .crowd-arm:nth-child(3) { animation-delay:.24s; }
        .crowd-arm:nth-child(4) { animation-delay:.08s; }
        .crowd-arm:nth-child(5) { animation-delay:.18s; }
        @keyframes crowdWave {
          0%,30%  { transform:translateY(0); }
          50%     { transform:translateY(-8px); }
          65%     { transform:translateY(0); }
          100%    { transform:translateY(0); }
        }
      </style>

      <svg width="100%" height="100%" viewBox="0 0 300 480" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">

        <!-- ░░░ SKY GRADIENT ░░░ -->
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5BA3D9"/>
            <stop offset="60%" stop-color="#A8D8EA"/>
            <stop offset="100%" stop-color="#C8EFC8"/>
          </linearGradient>
          <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5CB85C"/>
            <stop offset="100%" stop-color="#3E8C3E"/>
          </linearGradient>
          <linearGradient id="pitchGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#D4B896"/>
            <stop offset="100%" stop-color="#B89A6A"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        <!-- sky -->
        <rect x="0" y="0" width="300" height="480" fill="url(#skyGrad)"/>

        <!-- ░░░ STADIUM STANDS ░░░ -->
        <!-- left stand structure -->
        <path d="M0 185 L0 155 Q60 130 120 138 L120 168 Q60 160 0 185Z" fill="#2a2a38"/>
        <!-- left stand seating rows -->
        <path d="M0 160 Q60 137 120 145 L120 150 Q60 142 0 165Z" fill="#3a3a48" opacity=".7"/>
        <path d="M0 165 Q60 142 120 150 L120 155 Q60 147 0 170Z" fill="#353545" opacity=".7"/>
        <path d="M0 170 Q60 147 120 155 L120 160 Q60 152 0 175Z" fill="#3a3a48" opacity=".7"/>
        <!-- right stand structure -->
        <path d="M300 185 L300 155 Q240 130 180 138 L180 168 Q240 160 300 185Z" fill="#2a2a38"/>
        <path d="M300 160 Q240 137 180 145 L180 150 Q240 142 300 165Z" fill="#3a3a48" opacity=".7"/>
        <path d="M300 165 Q240 142 180 150 L180 155 Q240 147 300 170Z" fill="#353545" opacity=".7"/>
        <path d="M300 170 Q240 147 180 155 L180 160 Q240 152 300 175Z" fill="#3a3a48" opacity=".7"/>

        <!-- ░░░ CROWD SILHOUETTES ░░░ -->
        <!-- left crowd row 1 (further back, smaller) -->
        <g opacity=".55">
          <circle cx="10"  cy="154" r="5.5" fill="#1a1a28"/>
          <circle cx="23"  cy="149" r="5"   fill="#2a3a5a"/>
          <circle cx="36"  cy="145" r="5.5" fill="#1a1a28"/>
          <circle cx="49"  cy="142" r="5"   fill="#8B2020"/>
          <circle cx="62"  cy="140" r="5.5" fill="#1a1a28"/>
          <circle cx="75"  cy="141" r="5"   fill="#2a5a2a"/>
          <circle cx="88"  cy="143" r="5.5" fill="#1a1a28"/>
          <circle cx="101" cy="146" r="5"   fill="#5a2a8B"/>
          <circle cx="114" cy="149" r="5.5" fill="#1a1a28"/>
        </g>
        <!-- right crowd row 1 -->
        <g opacity=".55">
          <circle cx="186" cy="149" r="5.5" fill="#1a1a28"/>
          <circle cx="199" cy="146" r="5"   fill="#8B5520"/>
          <circle cx="212" cy="143" r="5.5" fill="#1a1a28"/>
          <circle cx="225" cy="141" r="5"   fill="#205a8B"/>
          <circle cx="238" cy="140" r="5.5" fill="#1a1a28"/>
          <circle cx="251" cy="142" r="5"   fill="#2a5a2a"/>
          <circle cx="264" cy="145" r="5.5" fill="#1a1a28"/>
          <circle cx="277" cy="149" r="5"   fill="#8B2020"/>
          <circle cx="290" cy="154" r="5.5" fill="#1a1a28"/>
        </g>
        <!-- crowd row 2 (front, bigger) -->
        <g opacity=".75">
          <circle cx="5"   cy="167" r="6.5" fill="#1a1a28"/>
          <circle cx="20"  cy="161" r="6"   fill="#CC3322"/>
          <circle cx="35"  cy="157" r="6.5" fill="#1a1a28"/>
          <circle cx="50"  cy="154" r="6"   fill="#F5E642"/>
          <circle cx="65"  cy="152" r="6.5" fill="#1a1a28"/>
          <circle cx="80"  cy="152" r="6"   fill="#3399CC"/>
          <circle cx="95"  cy="154" r="6.5" fill="#1a1a28"/>
          <circle cx="110" cy="157" r="6"   fill="#CC3322"/>
          <circle cx="125" cy="161" r="6.5" fill="#1a1a28"/>
        </g>
        <g opacity=".75">
          <circle cx="175" cy="161" r="6.5" fill="#1a1a28"/>
          <circle cx="190" cy="157" r="6"   fill="#F5E642"/>
          <circle cx="205" cy="154" r="6.5" fill="#1a1a28"/>
          <circle cx="220" cy="152" r="6"   fill="#CC3322"/>
          <circle cx="235" cy="152" r="6.5" fill="#1a1a28"/>
          <circle cx="250" cy="154" r="6"   fill="#3399CC"/>
          <circle cx="265" cy="157" r="6.5" fill="#1a1a28"/>
          <circle cx="280" cy="161" r="6"   fill="#1a1a28"/>
          <circle cx="295" cy="167" r="6.5" fill="#CC3322"/>
        </g>
        <!-- crowd ARMS raised on SIX -->
        <g id="crowdArms">
          <g class="crowd-arm"><rect x="18"  y="154" width="4" height="10" rx="2" fill="#CC3322" opacity=".6"/></g>
          <g class="crowd-arm"><rect x="48"  y="147" width="4" height="10" rx="2" fill="#F5E642" opacity=".6"/></g>
          <g class="crowd-arm"><rect x="79"  y="145" width="4" height="10" rx="2" fill="#3399CC" opacity=".6"/></g>
          <g class="crowd-arm"><rect x="220" y="145" width="4" height="10" rx="2" fill="#CC3322" opacity=".6"/></g>
          <g class="crowd-arm"><rect x="249" y="147" width="4" height="10" rx="2" fill="#F5E642" opacity=".6"/></g>
        </g>

        <!-- ░░░ SCOREBOARD ░░░ -->
        <g id="scoreCard">
          <rect x="100" y="95" width="100" height="52" rx="5" fill="#1a1a18" stroke="#333" stroke-width="1.5"/>
          <rect x="103" y="98" width="94" height="46" rx="3" fill="#0a1a0a"/>
          <text x="150" y="111" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,.4)">IND vs AUS  OD</text>
          <text x="150" y="124" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9.5" font-weight="700" fill="#F5E642">IND 287/4</text>
          <text x="150" y="134" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,.4)">42.3 overs</text>
          <text x="150" y="143" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6.5" font-weight="700" fill="#7EEDC4">MANITEJA 47*(32)</text>
        </g>

        <!-- ░░░ OUTFIELD (GRASS) ░░░ -->
        <ellipse cx="150" cy="430" rx="260" ry="95" fill="url(#grassGrad)"/>
        <ellipse cx="150" cy="430" rx="210" ry="78" fill="#5CB85C" opacity=".6"/>
        <ellipse cx="150" cy="430" rx="160" ry="62" fill="#62C462" opacity=".5"/>
        <!-- mowing pattern stripes -->
        <ellipse cx="150" cy="430" rx="135" ry="52" fill="none" stroke="rgba(0,60,0,.15)" stroke-width="6"/>
        <ellipse cx="150" cy="430" rx="110" ry="43" fill="none" stroke="rgba(80,160,80,.15)" stroke-width="5"/>
        <ellipse cx="150" cy="430" rx="85"  ry="33" fill="none" stroke="rgba(0,60,0,.12)" stroke-width="4"/>

        <!-- ░░░ PITCH ░░░ -->
        <rect x="132" y="305" width="36" height="130" rx="2" fill="url(#pitchGrad)" opacity=".85"/>
        <!-- pitch wear marks -->
        <ellipse cx="150" cy="370" rx="8" ry="4" fill="rgba(100,60,0,.25)" opacity=".6"/>
        <line x1="140" y1="325" x2="147" y2="342" stroke="rgba(80,40,0,.2)" stroke-width="1"/>
        <line x1="156" y1="315" x2="161" y2="338" stroke="rgba(80,40,0,.15)" stroke-width="1"/>
        <line x1="138" y1="355" x2="143" y2="370" stroke="rgba(80,40,0,.15)" stroke-width="1"/>
        <!-- pitch border -->
        <rect x="132" y="305" width="36" height="130" rx="2" fill="none" stroke="rgba(200,160,100,.3)" stroke-width="1"/>

        <!-- ░░░ CREASE LINES ░░░ -->
        <line x1="88" y1="385" x2="212" y2="385" stroke="white" stroke-width="3" opacity=".9"/>
        <line x1="88" y1="318" x2="212" y2="318" stroke="white" stroke-width="2" opacity=".6"/>
        <!-- return crease -->
        <line x1="88"  y1="385" x2="88"  y2="360" stroke="white" stroke-width="2" opacity=".5"/>
        <line x1="212" y1="385" x2="212" y2="360" stroke="white" stroke-width="2" opacity=".5"/>
        <line x1="88"  y1="318" x2="88"  y2="342" stroke="white" stroke-width="2" opacity=".4"/>
        <line x1="212" y1="318" x2="212" y2="342" stroke="white" stroke-width="2" opacity=".4"/>

        <!-- ░░░ STUMPS ░░░ -->
        <!-- far end stumps (small) -->
        <rect x="143" y="318" width="4" height="30" rx="1.5" fill="#D4B870" stroke="#8B6914" stroke-width="1"/>
        <rect x="148" y="318" width="4" height="30" rx="1.5" fill="#D4B870" stroke="#8B6914" stroke-width="1"/>
        <rect x="153" y="318" width="4" height="30" rx="1.5" fill="#D4B870" stroke="#8B6914" stroke-width="1"/>
        <rect x="141" y="316" width="10" height="3.5" rx="1.5" fill="#F5E642" stroke="#8B6914" stroke-width="1"/>
        <rect x="151" y="316" width="10" height="3.5" rx="1.5" fill="#F5E642" stroke="#8B6914" stroke-width="1"/>
        <!-- batter end stumps (big) -->
        <rect x="139" y="385" width="7"  height="55" rx="2.5" fill="#E8C870" stroke="#0A0A09" stroke-width="1.8"/>
        <rect x="147" y="385" width="7"  height="55" rx="2.5" fill="#E8C870" stroke="#0A0A09" stroke-width="1.8"/>
        <rect x="155" y="385" width="7"  height="55" rx="2.5" fill="#E8C870" stroke="#0A0A09" stroke-width="1.8"/>
        <rect x="136" y="382" width="14" height="5" rx="2.2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="153" y="382" width="14" height="5" rx="2.2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>

        <!-- ground shadow -->
        <ellipse cx="148" cy="448" rx="55" ry="9" fill="rgba(0,0,0,.22)"/>

        <!-- ░░░ WICKETKEEPER (background) ░░░ -->
        <g opacity=".65">
          <ellipse cx="148" cy="395" rx="14" ry="14" fill="#E8D4A0"/>
          <rect x="136" y="395" width="24" height="36" rx="8" fill="white"/>
          <path d="M136 410 Q124 422 122 433" fill="none" stroke="#E8D4A0" stroke-width="9" stroke-linecap="round"/>
          <path d="M160 410 Q172 422 174 433" fill="none" stroke="#E8D4A0" stroke-width="9" stroke-linecap="round"/>
          <!-- keeper gloves -->
          <ellipse cx="122" cy="435" rx="7" ry="9" fill="#E8A050" stroke="#0A0A09" stroke-width="1.5"/>
          <ellipse cx="174" cy="435" rx="7" ry="9" fill="#E8A050" stroke="#0A0A09" stroke-width="1.5"/>
          <!-- keeper pads -->
          <rect x="130" y="415" width="12" height="35" rx="5" fill="white" stroke="rgba(10,10,9,.2)" stroke-width="1"/>
          <rect x="146" y="415" width="12" height="35" rx="5" fill="white" stroke="rgba(10,10,9,.2)" stroke-width="1"/>
          <!-- keeper helmet -->
          <ellipse cx="148" cy="388" rx="16" ry="11" fill="#1a1a18"/>
          <ellipse cx="148" cy="386" rx="14" ry="9" fill="#3366CC"/>
        </g>

        <!-- ░░░ BALL + TRAIL ░░░ -->
        <!-- motion trail (drawn BEHIND ball) -->
        <g id="trailG">
          <ellipse cx="56"  cy="208" rx="7"  ry="5.5" fill="rgba(204,51,34,.4)"  transform="translate(0,0)"/>
          <ellipse cx="48"  cy="192" rx="6"  ry="4.5" fill="rgba(204,51,34,.28)" transform="translate(0,0)"/>
          <ellipse cx="36"  cy="170" rx="5"  ry="3.8" fill="rgba(204,51,34,.18)" transform="translate(0,0)"/>
          <ellipse cx="22"  cy="145" rx="4"  ry="3"   fill="rgba(204,51,34,.1)"  transform="translate(0,0)"/>
          <ellipse cx="8"   cy="118" rx="3"  ry="2.5" fill="rgba(204,51,34,.06)" transform="translate(0,0)"/>
        </g>

        <g id="ballG">
          <!-- ball shadow (ground) -->
          <ellipse cx="13" cy="225" rx="10" ry="4" fill="rgba(0,0,0,.18)" opacity=".6"/>
          <!-- ball body -->
          <g id="ballInner">
            <circle cx="13" cy="213" r="13" fill="#CC3322"/>
            <!-- leather quarters -->
            <path d="M13 200 Q20 207 13 213 Q6 207 13 200Z" fill="rgba(0,0,0,.12)"/>
            <path d="M13 213 Q20 219 13 226 Q6 219 13 213Z" fill="rgba(0,0,0,.08)"/>
            <!-- main seam - horizontal -->
            <path d="M3 207 Q13 212 23 207" fill="none" stroke="#0A0A09" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M3 219 Q13 214 23 219" fill="none" stroke="#0A0A09" stroke-width="1.6" stroke-linecap="round"/>
            <!-- seam stitching dots -->
            <circle cx="5"  cy="207" r=".8" fill="rgba(255,255,255,.5)"/>
            <circle cx="9"  cy="209" r=".8" fill="rgba(255,255,255,.5)"/>
            <circle cx="13" cy="210" r=".8" fill="rgba(255,255,255,.5)"/>
            <circle cx="17" cy="209" r=".8" fill="rgba(255,255,255,.5)"/>
            <circle cx="21" cy="207" r=".8" fill="rgba(255,255,255,.5)"/>
            <!-- shine/highlight -->
            <ellipse cx="19" cy="205" rx="4.5" ry="3" fill="rgba(255,255,255,.55)" transform="rotate(-25,19,205)"/>
            <circle  cx="21" cy="204" r="1.5" fill="rgba(255,255,255,.7)"/>
          </g>
        </g>

        <!-- ░░░ IMPACT SPARKS ░░░ -->
        <g id="sparksG">
          <line x1="62" y1="218" x2="82" y2="195" stroke="#F5E642" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="62" y1="218" x2="88" y2="215" stroke="#FF8A7A" stroke-width="2"   stroke-linecap="round"/>
          <line x1="62" y1="218" x2="80" y2="238" stroke="#7EEDC4" stroke-width="2"   stroke-linecap="round"/>
          <line x1="62" y1="218" x2="42" y2="238" stroke="#F5E642" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="62" y1="218" x2="38" y2="212" stroke="#FF8A7A" stroke-width="2"   stroke-linecap="round"/>
          <line x1="62" y1="218" x2="48" y2="196" stroke="#C4A8FF" stroke-width="2"   stroke-linecap="round"/>
          <circle cx="82" cy="195" r="3.2" fill="#F5E642"/>
          <circle cx="88" cy="215" r="2.8" fill="#FF8A7A"/>
          <circle cx="80" cy="238" r="2.8" fill="#7EEDC4"/>
          <circle cx="42" cy="238" r="3.2" fill="#F5E642"/>
          <circle cx="38" cy="212" r="2.5" fill="#FF8A7A"/>
        </g>

        <!-- ░░░ BATTER GROUP ░░░ -->
        <g id="batterBody">

          <!-- ─ LEGS ─ -->
          <!-- back leg (right, further from bowler) -->
          <path d="M138 248 Q133 282 136 382" fill="none" stroke="#22336A" stroke-width="20" stroke-linecap="round"/>
          <!-- front leg (left, towards bowler — weight transfer) -->
          <path d="M158 248 Q168 278 164 378" fill="none" stroke="#22336A" stroke-width="20" stroke-linecap="round"/>
          <!-- back boot -->
          <ellipse cx="135" cy="385" rx="17" ry="7.5" fill="#1a1a2a"/>
          <ellipse cx="135" cy="383" rx="14" ry="5"   fill="#2a2a3a"/>
          <!-- front boot (with spikes) -->
          <ellipse cx="166" cy="381" rx="19" ry="8"   fill="#1a1a2a"/>
          <ellipse cx="166" cy="379" rx="15" ry="5.5" fill="#2a2a3a"/>
          <!-- spike marks under front boot -->
          <line x1="154" y1="389" x2="154" y2="395" stroke="#aaa" stroke-width="1.8"/>
          <line x1="161" y1="390" x2="161" y2="396" stroke="#aaa" stroke-width="1.8"/>
          <line x1="168" y1="390" x2="168" y2="396" stroke="#aaa" stroke-width="1.8"/>
          <line x1="175" y1="389" x2="175" y2="395" stroke="#aaa" stroke-width="1.8"/>

          <!-- ─ PADS (realistic layered) ─ -->
          <!-- back leg pad -->
          <rect x="118" y="260" width="22" height="112" rx="10" fill="white"  stroke="#0A0A09" stroke-width="2"/>
          <rect x="120" y="270" width="18" height="100" rx="8"  fill="#F8F8F8"/>
          <!-- pad ribs -->
          <line x1="122" y1="278" x2="136" y2="278" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="122" y1="290" x2="136" y2="290" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="122" y1="302" x2="136" y2="302" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="122" y1="314" x2="136" y2="314" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="122" y1="326" x2="136" y2="326" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="122" y1="338" x2="136" y2="338" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <!-- pad straps -->
          <path d="M118 280 Q110 284 118 288" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>
          <path d="M118 305 Q110 309 118 313" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>
          <path d="M118 330 Q110 334 118 338" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>
          <!-- front leg pad -->
          <rect x="160" y="252" width="24" height="118" rx="11" fill="white"  stroke="#0A0A09" stroke-width="2"/>
          <rect x="162" y="262" width="20" height="106" rx="9"  fill="#F8F8F8"/>
          <line x1="164" y1="272" x2="180" y2="272" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="164" y1="285" x2="180" y2="285" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="164" y1="298" x2="180" y2="298" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="164" y1="311" x2="180" y2="311" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="164" y1="324" x2="180" y2="324" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <line x1="164" y1="337" x2="180" y2="337" stroke="rgba(10,10,9,.15)" stroke-width="1.5"/>
          <path d="M184 275 Q192 279 184 283" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>
          <path d="M184 300 Q192 304 184 308" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>
          <path d="M184 325 Q192 329 184 333" fill="none" stroke="rgba(10,10,9,.3)" stroke-width="1.8"/>

          <!-- ─ THIGH GUARD ─ -->
          <rect x="158" y="248" width="18" height="30" rx="6" fill="#DDDDEE" stroke="rgba(10,10,9,.2)" stroke-width="1.5" opacity=".8"/>

          <!-- ─ BODY (India whites + blue collar) ─ -->
          <rect x="120" y="162" width="60" height="96" rx="14" fill="white" stroke="#0A0A09" stroke-width="2.5"/>
          <!-- India blue collar -->
          <path d="M132 165 Q150 180 168 165" fill="#22336A" stroke="#22336A" stroke-width="1"/>
          <!-- jersey number -->
          <text x="150" y="196" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="20" font-weight="900" fill="#22336A" opacity=".85">7</text>
          <!-- chest sponsor area -->
          <rect x="132" y="208" width="36" height="14" rx="3" fill="rgba(34,51,106,.08)" stroke="rgba(34,51,106,.15)" stroke-width="1"/>
          <!-- India horizontal stripe -->
          <rect x="120" y="222" width="60" height="8" rx="0" fill="#FF8A00" opacity=".9"/>
          <rect x="120" y="222" width="60" height="2" fill="#22336A" opacity=".6"/>
          <rect x="120" y="228" width="60" height="2" fill="#22336A" opacity=".6"/>

          <!-- ─ GLOVES ─ -->
          <!-- back hand glove (left hand, lower on handle) -->
          <rect x="116" y="200" width="18" height="34" rx="8" fill="#F5E642" stroke="#0A0A09" stroke-width="2"/>
          <rect x="118" y="202" width="14" height="8"  rx="3" fill="rgba(0,0,0,.12)"/>
          <line x1="119" y1="212" x2="131" y2="212" stroke="rgba(0,0,0,.2)" stroke-width="1.2"/>
          <line x1="119" y1="220" x2="131" y2="220" stroke="rgba(0,0,0,.2)" stroke-width="1.2"/>
          <line x1="119" y1="228" x2="131" y2="228" stroke="rgba(0,0,0,.2)" stroke-width="1.2"/>
          <!-- front hand glove (right hand, top of handle) -->
          <rect x="162" y="180" width="18" height="32" rx="8" fill="#F5E642" stroke="#0A0A09" stroke-width="2"/>
          <rect x="164" y="182" width="14" height="8"  rx="3" fill="rgba(0,0,0,.12)"/>
          <line x1="165" y1="193" x2="177" y2="193" stroke="rgba(0,0,0,.2)" stroke-width="1.2"/>
          <line x1="165" y1="201" x2="177" y2="201" stroke="rgba(0,0,0,.2)" stroke-width="1.2"/>

        </g><!-- end batterBody -->

        <!-- ░░░ BAT ARMS GROUP (swings independently) ░░░ -->
        <g id="batArms">
          <!-- TOP ARM (right hand, drives through) -->
          <path d="M172 185 Q198 158 210 135" fill="none" stroke="#D4956A" stroke-width="15" stroke-linecap="round"/>
          <!-- BOTTOM ARM (left hand, pulls through) -->
          <path d="M122 208 Q100 175 104 148" fill="none" stroke="#D4956A" stroke-width="15" stroke-linecap="round"/>

          <!-- ═══ THE BAT ═══ -->
          <!-- handle -->
          <rect x="92" y="38" width="15" height="78" rx="7" fill="#8B5E3C" stroke="#0A0A09" stroke-width="2.2"/>
          <!-- grip tape — alternating dark bands -->
          <rect x="92" y="44"  width="15" height="9" rx="2" fill="#1a1a18" opacity=".45"/>
          <rect x="92" y="57"  width="15" height="9" rx="2" fill="#1a1a18" opacity=".38"/>
          <rect x="92" y="70"  width="15" height="9" rx="2" fill="#1a1a18" opacity=".45"/>
          <rect x="92" y="83"  width="15" height="9" rx="2" fill="#1a1a18" opacity=".38"/>
          <!-- grip end cap -->
          <ellipse cx="99" cy="40"  rx="8" ry="4.5" fill="#1a1a18" stroke="#0A0A09" stroke-width="1.5"/>
          <!-- splice (transition handle→blade) -->
          <rect x="88" y="114" width="23" height="14" rx="4" fill="#A0722A" stroke="#0A0A09" stroke-width="2"/>
          <!-- shoulder (widening taper) -->
          <path d="M88 126 L112 126 L116 138 L84 138 Z" fill="#C8A060" stroke="#0A0A09" stroke-width="1.8"/>
          <!-- blade main face (light willow) -->
          <rect x="80" y="137" width="40" height="140" rx="7" fill="#ECD9A8" stroke="#0A0A09" stroke-width="2.2"/>
          <!-- blade face highlight (near edge) -->
          <rect x="80" y="137" width="40" height="140" rx="7" fill="none"
                stroke="rgba(255,255,200,.4)" stroke-width="1"/>
          <!-- wood grain lines -->
          <line x1="88"  y1="146" x2="88"  y2="272" stroke="rgba(140,90,30,.22)" stroke-width="1.2"/>
          <line x1="94"  y1="144" x2="94"  y2="274" stroke="rgba(140,90,30,.16)" stroke-width="1"/>
          <line x1="100" y1="143" x2="100" y2="275" stroke="rgba(140,90,30,.2)"  stroke-width="1.2"/>
          <line x1="106" y1="143" x2="106" y2="275" stroke="rgba(140,90,30,.16)" stroke-width="1"/>
          <line x1="112" y1="144" x2="112" y2="274" stroke="rgba(140,90,30,.22)" stroke-width="1.2"/>
          <!-- sweet spot oval (slightly raised sheen) -->
          <ellipse cx="100" cy="222" rx="15" ry="32" fill="rgba(255,255,220,.25)" stroke="rgba(180,140,60,.35)" stroke-width="1.8"/>
          <!-- blade edges (3D depth) -->
          <rect x="80"  y="137" width="8" height="140" rx="3" fill="rgba(100,60,15,.2)"/>
          <rect x="112" y="137" width="8" height="140" rx="3" fill="rgba(100,60,15,.2)"/>
          <!-- toe of bat -->
          <rect x="80" y="270" width="40" height="7" rx="3.5" fill="#B89040" stroke="#0A0A09" stroke-width="1.8"/>
          <!-- manufacturer sticker -->
          <ellipse cx="100" cy="190" rx="9" ry="6" fill="rgba(200,0,0,.75)" stroke="#0A0A09" stroke-width="1"/>
          <text x="100" y="194" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6" font-weight="700" fill="white">MNT</text>
          <!-- bat number sticker bottom -->
          <rect x="88" y="258" width="24" height="10" rx="2" fill="rgba(34,51,106,.6)" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
          <text x="100" y="266" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(255,255,255,.8)">SH·GR·TT</text>

          <!-- hands gripping bat -->
          <ellipse cx="210" cy="137" rx="10" ry="9" fill="#D4956A" stroke="#0A0A09" stroke-width="1.8"/>
          <ellipse cx="104" cy="150" rx="10" ry="9" fill="#D4956A" stroke="#0A0A09" stroke-width="1.8"/>
        </g><!-- end batArms -->

        <!-- ░░░ NECK + HEAD ░░░ -->
        <rect x="142" y="148" width="16" height="20" rx="7" fill="#D4956A"/>

        <!-- ░░░ HEAD ░░░ -->
        <!-- face -->
        <ellipse cx="150" cy="133" rx="28" ry="30" fill="#D4956A"/>
        <!-- cheekbones / face structure -->
        <ellipse cx="136" cy="138" rx="6"  ry="4" fill="rgba(180,100,40,.18)"/>
        <ellipse cx="164" cy="138" rx="6"  ry="4" fill="rgba(180,100,40,.18)"/>

        <!-- ░░░ HAIR (short, dark) ░░░ -->
        <ellipse cx="150" cy="108" rx="28" ry="14" fill="#1a1a18"/>
        <ellipse cx="137" cy="115" rx="13" ry="12" fill="#1a1a18"/>
        <ellipse cx="163" cy="115" rx="13" ry="12" fill="#1a1a18"/>
        <!-- small sideburns -->
        <ellipse cx="124" cy="130" rx="4" ry="7" fill="#1a1a18" opacity=".6"/>
        <ellipse cx="176" cy="130" rx="4" ry="7" fill="#1a1a18" opacity=".6"/>

        <!-- ░░░ HELMET ░░░ -->
        <!-- outer shell -->
        <ellipse cx="150" cy="110" rx="33" ry="22" fill="#1a1a18"/>
        <!-- India blue main colour -->
        <ellipse cx="150" cy="106" rx="30" ry="19" fill="#1C3678"/>
        <!-- orange horizontal stripe (Indian flag colour) -->
        <rect x="117" y="104" width="66" height="7.5" rx="0" fill="#FF8C00" opacity=".95"/>
        <!-- BCCI / national emblem circle -->
        <circle cx="150" cy="99"  r="8" fill="#FF8C00" stroke="#1C3678" stroke-width="1.5"/>
        <circle cx="150" cy="99"  r="5" fill="#1C3678"/>
        <circle cx="150" cy="99"  r="2.5" fill="#FF8C00"/>
        <!-- helmet back ridge -->
        <path d="M118 108 Q150 96 182 108" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
        <!-- air vents -->
        <rect x="138" y="92" width="6" height="3" rx="1.5" fill="rgba(0,0,0,.35)"/>
        <rect x="147" y="90" width="6" height="3" rx="1.5" fill="rgba(0,0,0,.35)"/>
        <rect x="156" y="92" width="6" height="3" rx="1.5" fill="rgba(0,0,0,.35)"/>

        <!-- ░░░ GRILL / VISOR ░░░ -->
        <!-- grill cage background -->
        <path d="M118 123 Q150 137 182 123 L182 135 Q150 150 118 135Z" fill="rgba(10,10,9,.72)"/>
        <!-- grill vertical bars -->
        <line x1="126" y1="125" x2="121" y2="144" stroke="#666" stroke-width="2"   opacity=".85"/>
        <line x1="133" y1="128" x2="129" y2="147" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="140" y1="130" x2="137" y2="149" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="147" y1="131" x2="146" y2="150" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="150" y1="131" x2="150" y2="150" stroke="#666" stroke-width="2"   opacity=".85"/>
        <line x1="153" y1="131" x2="154" y2="150" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="160" y1="130" x2="163" y2="149" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="167" y1="128" x2="171" y2="147" stroke="#666" stroke-width="1.8" opacity=".85"/>
        <line x1="174" y1="125" x2="179" y2="144" stroke="#666" stroke-width="2"   opacity=".85"/>
        <!-- horizontal grill bars -->
        <path d="M120 130 Q150 140 180 130" fill="none" stroke="#666" stroke-width="1.5" opacity=".7"/>
        <path d="M119 136 Q150 146 181 136" fill="none" stroke="#666" stroke-width="1.5" opacity=".7"/>
        <path d="M119 142 Q150 152 181 142" fill="none" stroke="#666" stroke-width="1.2" opacity=".55"/>
        <!-- grill highlight (metal sheen) -->
        <path d="M118 123 Q150 137 182 123" fill="none" stroke="rgba(200,200,200,.25)" stroke-width="1.5"/>

        <!-- ░░░ HELMET EAR GUARD (left side) ░░░ -->
        <path d="M118 112 Q112 124 118 140 Q122 144 128 140 Q124 124 128 112Z"
              fill="#1C3678" stroke="#1a1a18" stroke-width="2"/>
        <!-- padding inside ear guard -->
        <path d="M120 118 Q115 128 120 138 Q123 141 126 138 Q121 128 126 118Z"
              fill="rgba(0,0,0,.25)"/>

        <!-- ░░░ CHIN STRAP ░░░ -->
        <path d="M118 130 Q114 140 118 152" fill="none" stroke="#1C3678" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M182 130 Q186 140 182 152" fill="none" stroke="#1C3678" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="135" y="152" width="30" height="6" rx="3" fill="#1C3678" stroke="#1a1a18" stroke-width="1.2"/>

        <!-- ░░░ EARS ░░░ -->
        <ellipse cx="122" cy="135" rx="5.5" ry="7.5" fill="#D4956A"/>
        <ellipse cx="178" cy="135" rx="5.5" ry="7.5" fill="#D4956A"/>

        <!-- ░░░ EYES (fierce concentration) ░░░ -->
        <ellipse cx="140" cy="135" rx="5"   ry="5.5" fill="white"/>
        <circle  cx="141" cy="136" r="3.8"  fill="#2a1a08"/>
        <circle  cx="142" cy="134" r="1.5"  fill="rgba(255,255,255,.6)"/>
        <ellipse cx="160" cy="135" rx="5"   ry="5.5" fill="white"/>
        <circle  cx="161" cy="136" r="3.8"  fill="#2a1a08"/>
        <circle  cx="162" cy="134" r="1.5"  fill="rgba(255,255,255,.6)"/>
        <!-- fierce brow (deep V shape) -->
        <path d="M135 130 Q140 125 145 130" fill="none" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M155 130 Q160 125 165 130" fill="none" stroke="#1a1a18" stroke-width="2.5" stroke-linecap="round"/>
        <!-- nose -->
        <path d="M148 142 Q150 147 152 142" fill="none" stroke="rgba(160,80,30,.4)" stroke-width="1.5" stroke-linecap="round"/>
        <!-- mouth — slightly open on impact, determined -->
        <path d="M143 148 Q150 154 157 148" fill="none" stroke="#B07040" stroke-width="2" stroke-linecap="round"/>
        <!-- sweat drop (effort!) -->
        <ellipse cx="132" cy="128" rx="2"  ry="3" fill="rgba(255,255,255,.5)" transform="rotate(15,132,128)"/>

        <!-- ░░░ SIX! BADGE ░░░ -->
        <g id="sixBadge" transform="translate(172, 40)">
          <rect x="0"  y="0"  width="116" height="55" rx="27" fill="#F5E642" stroke="#0A0A09" stroke-width="3"/>
          <rect x="4"  y="4"  width="108" height="47" rx="24" fill="none"   stroke="rgba(10,10,9,.15)" stroke-width="2"/>
          <text x="58" y="24" text-anchor="middle" font-family="Fraunces,serif" font-size="12" font-weight="900" font-style="italic" fill="#0A0A09">THAT'S A</text>
          <text x="58" y="44" text-anchor="middle" font-family="Fraunces,serif" font-size="20" font-weight="900" fill="#0A0A09">SIX! ✦</text>
        </g>

        <!-- ░░░ CROWD ROAR ░░░ -->
        <g id="roarG" transform="translate(0,62)">
          <rect x="48" y="0" width="204" height="24" rx="12" fill="rgba(10,10,9,.55)"/>
          <text x="150" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10.5" font-weight="700" fill="white" letter-spacing=".05em">📢 CROWD GOES WILD!</text>
        </g>

        <!-- score strip bottom -->
        <rect x="0" y="463" width="300" height="17" fill="rgba(0,0,0,.25)"/>
        <text x="12"  y="475" font-family="JetBrains Mono,monospace" font-size="8" font-weight="700" fill="rgba(255,255,255,.75)">47* (32)  SR: 146.8</text>
        <text x="288" y="475" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="8" font-weight="700" fill="rgba(255,255,255,.75)">IND 287/4 (42.3)</text>

      </svg>
    </div><!-- end cricket illo -->`;

export const BOOKS_ILLUSTRATION = `      <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 300 440" preserveAspectRatio="xMidYMid meet">
        <defs><style>.pturn{animation:pageTurn 3s ease-in-out infinite;transform-origin:152px 240px}@keyframes pageTurn{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(-20deg)}}</style></defs>
        <!-- bookshelf back -->
        <rect x="0" y="300" width="300" height="140" fill="rgba(10,10,9,.06)"/>
        <rect x="0" y="296" width="300" height="8" rx="0" fill="#2C2C2A"/>
        <rect x="0" y="338" width="300" height="5" fill="rgba(10,10,9,.08)"/>
        <!-- books row 1 -->
        <rect x="12" y="238" width="22" height="60" rx="2" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="23" y="278" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6" font-weight="700" fill="white" transform="rotate(-90,23,278)">ATOMIC</text>
        <rect x="35" y="246" width="18" height="52" rx="2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="44" y="282" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0A0A09" transform="rotate(-90,44,282)">CLEAN</text>
        <rect x="54" y="233" width="20" height="65" rx="2" fill="#7EC8F5" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="64" y="273" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0A0A09" transform="rotate(-90,64,273)">DUNE</text>
        <rect x="75" y="243" width="17" height="55" rx="2" fill="#7EEDC4" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="93" y="236" width="24" height="62" rx="2" fill="#FFB876" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="105" y="275" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0A0A09" transform="rotate(-90,105,275)">SAPIENS</text>
        <rect x="118" y="240" width="17" height="58" rx="2" fill="#C4A8FF" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="136" y="228" width="22" height="70" rx="2" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="147" y="270" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="white" transform="rotate(-90,147,270)">ZERO→1</text>
        <rect x="159" y="242" width="19" height="56" rx="2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="179" y="234" width="21" height="64" rx="2" fill="#7EEDC4" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="201" y="246" width="16" height="52" rx="2" fill="#7EC8F5" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="218" y="238" width="23" height="60" rx="2" fill="#FFB876" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="229" y="276" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" font-weight="700" fill="#0A0A09" transform="rotate(-90,229,276)">THINK</text>
        <rect x="242" y="243" width="18" height="55" rx="2" fill="#C4A8FF" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="261" y="230" width="24" height="68" rx="2" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1.5"/>
        <!-- row 2 -->
        <rect x="8" y="346" width="20" height="46" rx="2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="29" y="354" width="16" height="38" rx="2" fill="#7EC8F5" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="46" y="348" width="22" height="44" rx="2" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="69" y="356" width="15" height="36" rx="2" fill="#7EEDC4" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="85" y="346" width="20" height="46" rx="2" fill="#C4A8FF" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="210" y="348" width="20" height="44" rx="2" fill="#FFB876" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="231" y="354" width="17" height="38" rx="2" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <rect x="249" y="346" width="22" height="46" rx="2" fill="#7EC8F5" stroke="#0A0A09" stroke-width="1.5"/>
        <!-- chair -->
        <rect x="88" y="196" width="124" height="16" rx="5" fill="#2C2C2A"/>
        <rect x="86" y="156" width="10" height="56" rx="3" fill="#2C2C2A"/>
        <rect x="204" y="156" width="10" height="56" rx="3" fill="#2C2C2A"/>
        <rect x="93" y="212" width="12" height="36" rx="3" fill="#2C2C2A"/>
        <rect x="195" y="212" width="12" height="36" rx="3" fill="#2C2C2A"/>
        <!-- legs -->
        <path d="M126 196 Q128 220 143 242" fill="none" stroke="#1a1a18" stroke-width="16" stroke-linecap="round"/>
        <path d="M174 196 Q172 220 157 242" fill="none" stroke="#1a1a18" stroke-width="16" stroke-linecap="round"/>
        <ellipse cx="142" cy="245" rx="14" ry="6" fill="#0A0A09"/>
        <ellipse cx="158" cy="245" rx="14" ry="6" fill="#0A0A09"/>
        <!-- body -->
        <rect x="123" y="122" width="54" height="78" rx="12" fill="#C4A8FF" stroke="#0A0A09" stroke-width="2.5"/>
        <rect x="123" y="144" width="54" height="6" fill="rgba(10,10,9,.12)"/>
        <path d="M134 124 Q150 136 166 124" fill="none" stroke="rgba(10,10,9,.15)" stroke-width="1.8"/>
        <!-- arms holding book -->
        <path d="M123 148 Q98 168 83 190" fill="none" stroke="#F4C49A" stroke-width="13" stroke-linecap="round"/>
        <path d="M177 148 Q202 168 217 190" fill="none" stroke="#F4C49A" stroke-width="13" stroke-linecap="round"/>
        <ellipse cx="82" cy="192" rx="8" ry="7" fill="#F4C49A"/>
        <ellipse cx="218" cy="192" rx="8" ry="7" fill="#F4C49A"/>
        <!-- open book -->
        <g class="pturn">
          <path d="M80 184 Q118 172 150 177 L150 222 Q118 227 80 222Z" fill="white" stroke="#0A0A09" stroke-width="2"/>
          <line x1="90" y1="185" x2="146" y2="181" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="88" y1="192" x2="146" y2="188" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="87" y1="199" x2="146" y2="196" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="87" y1="206" x2="146" y2="204" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="88" y1="213" x2="146" y2="212" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <path d="M150 177 Q182 172 220 184 L220 222 Q182 227 150 222Z" fill="#FFF8F0" stroke="#0A0A09" stroke-width="2"/>
          <line x1="154" y1="181" x2="214" y2="185" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="154" y1="188" x2="214" y2="191" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="154" y1="196" x2="214" y2="198" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="154" y1="204" x2="214" y2="206" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="154" y1="212" x2="214" y2="213" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
          <line x1="150" y1="177" x2="150" y2="222" stroke="#0A0A09" stroke-width="2.5"/>
          <rect x="194" y="170" width="7" height="28" rx="1" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1"/>
          <polygon points="194,198 197.5,204 201,198" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1"/>
        </g>
        <!-- neck + head -->
        <rect x="142" y="110" width="16" height="16" rx="5" fill="#F4C49A"/>
        <ellipse cx="150" cy="96" rx="22" ry="24" fill="#F4C49A"/>
        <!-- hair - bun -->
        <ellipse cx="150" cy="75" rx="22" ry="12" fill="#2C2C2A"/>
        <circle cx="150" cy="68" r="10" fill="#2C2C2A"/>
        <circle cx="150" cy="68" r="6" fill="#FF8A7A" stroke="#0A0A09" stroke-width="1.5"/>
        <!-- reading glasses -->
        <rect x="134" y="91" width="13" height="10" rx="5" fill="none" stroke="#0A0A09" stroke-width="2"/>
        <rect x="153" y="91" width="13" height="10" rx="5" fill="none" stroke="#0A0A09" stroke-width="2"/>
        <line x1="147" y1="96" x2="153" y2="96" stroke="#0A0A09" stroke-width="2"/>
        <line x1="127" y1="96" x2="134" y2="96" stroke="#0A0A09" stroke-width="2"/>
        <line x1="166" y1="96" x2="173" y2="96" stroke="#0A0A09" stroke-width="2"/>
        <path d="M141 105 Q150 111 159 105" fill="none" stroke="#E8A876" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="128" cy="96" rx="4.5" ry="6.5" fill="#F4C49A"/>
        <ellipse cx="172" cy="96" rx="4.5" ry="6.5" fill="#F4C49A"/>
        <!-- thought bubbles -->
        <g style="animation:floatA 3.5s ease-in-out infinite;transform-origin:56px 62px">
          <circle cx="50" cy="77" r="5" fill="rgba(255,255,255,.6)" stroke="rgba(10,10,9,.2)" stroke-width="1"/>
          <circle cx="42" cy="64" r="7" fill="rgba(255,255,255,.6)" stroke="rgba(10,10,9,.2)" stroke-width="1"/>
          <rect x="20" y="34" width="44" height="26" rx="10" fill="rgba(255,255,255,.88)" stroke="#0A0A09" stroke-width="1.5"/>
          <text x="42" y="50" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7.5" font-weight="700" fill="#0A0A09">one more</text>
          <text x="42" y="58" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7.5" font-weight="700" fill="#0A0A09">chapter...</text>
        </g>
        <!-- chai mug -->
        <g style="animation:floatB 5s ease-in-out infinite 2s;transform-origin:252px 147px">
          <rect x="238" y="130" width="28" height="24" rx="4" fill="white" stroke="#0A0A09" stroke-width="1.5"/>
          <path d="M266 135 Q274 135 274 142 Q274 149 266 149" fill="none" stroke="#0A0A09" stroke-width="1.5"/>
          <rect x="240" y="135" width="24" height="5" rx="2.5" fill="#C4752A" opacity=".6"/>
          <path d="M246 128 Q248 122 250 128" fill="none" stroke="rgba(10,10,9,.25)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M253" y="126 Q255 120 257 126" fill="none" stroke="rgba(10,10,9,.25)" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <text x="28" y="162" font-size="11" fill="#0A0A09" style="animation:sparkle 2s ease-in-out infinite .5s">✦</text>
        <text x="268" y="172" font-size="9" fill="#0A0A09" style="animation:sparkle 1.8s ease-in-out infinite 1s">✦</text>
        <text x="150" y="28" font-size="13" fill="#0A0A09" style="animation:sparkle 2.4s ease-in-out infinite">✦</text>
      </svg>
    </div>`;

export const SITCOMS_ILLUSTRATION = `      <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 300 440" preserveAspectRatio="xMidYMid meet">
        <defs><style>.tvs{animation:tvFlicker 4s ease-in-out infinite}@keyframes tvFlicker{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.85}52%{opacity:1}78%{opacity:1}80%{opacity:.9}82%{opacity:1}}.scanl{animation:scanline 3s linear infinite;opacity:.04}</style></defs>
        <rect x="0" y="0" width="300" height="300" fill="rgba(255,255,255,.12)"/>
        <rect x="0" y="295" width="300" height="145" fill="rgba(10,10,9,.08)"/>
        <line x1="0" y1="295" x2="300" y2="295" stroke="#0A0A09" stroke-width="2"/>
        <rect x="10" y="38" width="5" height="50" rx="2" fill="#2C2C2A"/>
        <ellipse cx="12" cy="38" rx="16" ry="9" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <ellipse cx="150" cy="342" rx="98" ry="22" fill="rgba(10,10,9,.08)" stroke="rgba(10,10,9,.12)" stroke-width="1"/>
        <!-- TV -->
        <rect x="52" y="40" width="196" height="136" rx="8" fill="#0A0A09" stroke="#0A0A09" stroke-width="2.5"/>
        <rect x="58" y="44" width="184" height="122" rx="5" fill="#1a1a18"/>
        <rect class="tvs" x="62" y="48" width="176" height="114" rx="3" fill="#1a2a1a"/>
        <rect class="scanl" x="62" y="0" width="176" height="6" fill="white"/>
        <g opacity=".9">
          <ellipse cx="102" cy="118" rx="16" ry="17" fill="rgba(245,230,66,.5)"/>
          <rect x="90" y="118" width="24" height="38" rx="6" fill="rgba(245,230,66,.35)"/>
          <ellipse cx="150" cy="113" rx="14" ry="15" fill="rgba(126,237,196,.5)"/>
          <rect x="139" y="113" width="22" height="40" rx="6" fill="rgba(126,237,196,.35)"/>
          <ellipse cx="198" cy="120" rx="16" ry="17" fill="rgba(196,168,255,.5)"/>
          <rect x="186" y="120" width="24" height="36" rx="6" fill="rgba(196,168,255,.35)"/>
          <line x1="78" y1="146" x2="222" y2="146" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
          <rect x="188" y="50" width="42" height="14" rx="3" fill="rgba(255,80,80,.7)"/>
          <text x="209" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="6" font-weight="700" fill="white">● LIVE</text>
          <rect x="63" y="152" width="82" height="8" rx="2" fill="rgba(0,0,0,.4)"/>
          <text x="104" y="159" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="5.5" fill="rgba(255,255,255,.7)">S03 E08 · 24m left</text>
        </g>
        <rect x="128" y="176" width="44" height="10" rx="3" fill="#2C2C2A"/>
        <rect x="112" y="186" width="76" height="8" rx="3" fill="#2C2C2A"/>
        <rect x="116" y="194" width="10" height="22" rx="2" fill="#1a1a18"/>
        <rect x="174" y="194" width="10" height="22" rx="2" fill="#1a1a18"/>
        <!-- couch -->
        <rect x="32" y="252" width="236" height="68" rx="14" fill="#F5E642" stroke="#0A0A09" stroke-width="2.5"/>
        <rect x="32" y="230" width="236" height="32" rx="10" fill="#EDD800" stroke="#0A0A09" stroke-width="2.5"/>
        <rect x="37" y="257" width="70" height="55" rx="8" fill="#F5E642" stroke="rgba(10,10,9,.2)" stroke-width="1.5"/>
        <rect x="115" y="257" width="70" height="55" rx="8" fill="#EDD800" stroke="rgba(10,10,9,.2)" stroke-width="1.5"/>
        <rect x="193" y="257" width="70" height="55" rx="8" fill="#F5E642" stroke="rgba(10,10,9,.2)" stroke-width="1.5"/>
        <rect x="42" y="316" width="14" height="15" rx="4" fill="#2C2C2A"/>
        <rect x="244" y="316" width="14" height="15" rx="4" fill="#2C2C2A"/>
        <!-- person on couch -->
        <path d="M198 272 Q218 264 244 257" fill="none" stroke="#1a1a18" stroke-width="16" stroke-linecap="round"/>
        <path d="M218 272 Q236 270 254 262" fill="none" stroke="#1a1a18" stroke-width="16" stroke-linecap="round"/>
        <ellipse cx="245" cy="256" rx="12" ry="8" fill="#7EEDC4" stroke="#0A0A09" stroke-width="2"/>
        <ellipse cx="255" cy="261" rx="11" ry="7.5" fill="#7EEDC4" stroke="#0A0A09" stroke-width="2"/>
        <rect x="145" y="231" width="54" height="62" rx="12" fill="#C4A8FF" stroke="#0A0A09" stroke-width="2.5"/>
        <path d="M155 233 Q172 245 191 233" fill="none" stroke="rgba(10,10,9,.15)" stroke-width="1.8"/>
        <rect x="145" y="253" width="54" height="5" fill="rgba(10,10,9,.1)"/>
        <path d="M199 254 Q221 247 229 240" fill="none" stroke="#F4C49A" stroke-width="12" stroke-linecap="round"/>
        <rect x="225" y="227" width="18" height="30" rx="6" fill="#2C2C2A" stroke="#0A0A09" stroke-width="1.5"/>
        <circle cx="234" cy="234" r="3" fill="#FF8A7A"/>
        <rect x="228" y="239" width="5" height="4" rx="1" fill="rgba(255,255,255,.4)"/>
        <rect x="235" y="239" width="5" height="4" rx="1" fill="rgba(255,255,255,.4)"/>
        <rect x="228" y="246" width="5" height="4" rx="1" fill="rgba(255,255,255,.4)"/>
        <rect x="235" y="246" width="5" height="4" rx="1" fill="rgba(255,255,255,.4)"/>
        <path d="M145 254 Q129 260 119 264" fill="none" stroke="#F4C49A" stroke-width="12" stroke-linecap="round"/>
        <ellipse cx="117" cy="265" rx="8" ry="7" fill="#F4C49A"/>
        <ellipse cx="92" cy="260" rx="18" ry="8" fill="#FFB876" stroke="#0A0A09" stroke-width="2"/>
        <ellipse cx="92" cy="255" rx="15" ry="6" fill="#F5E642" stroke="#0A0A09" stroke-width="1.5"/>
        <text x="92" y="259" text-anchor="middle" font-size="8">🍿</text>
        <rect x="164" y="219" width="14" height="16" rx="5" fill="#F4C49A"/>
        <ellipse cx="171" cy="206" rx="22" ry="24" fill="#F4C49A"/>
        <ellipse cx="171" cy="184" rx="24" ry="13" fill="#2C2C2A"/>
        <ellipse cx="160" cy="189" rx="11" ry="9" fill="#2C2C2A"/>
        <ellipse cx="182" cy="189" rx="11" ry="9" fill="#2C2C2A"/>
        <path d="M171 182 Q173 173 176 179" fill="none" stroke="#2C2C2A" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="162" cy="204" rx="5" ry="5.5" fill="white"/>
        <circle cx="163" cy="205" r="3.5" fill="#2C2C2A"/>
        <circle cx="164" cy="203" r="1.5" fill="rgba(126,237,196,.5)"/>
        <ellipse cx="180" cy="204" rx="5" ry="5.5" fill="white"/>
        <circle cx="181" cy="205" r="3.5" fill="#2C2C2A"/>
        <circle cx="182" cy="203" r="1.5" fill="rgba(126,237,196,.5)"/>
        <path d="M164 214 Q171 220 178 214" fill="none" stroke="#E8A876" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="149" cy="206" rx="4.5" ry="6.5" fill="#F4C49A"/>
        <ellipse cx="193" cy="206" rx="4.5" ry="6.5" fill="#F4C49A"/>
        <ellipse cx="171" cy="206" rx="22" ry="24" fill="rgba(126,237,196,.08)"/>
        <!-- speech bubble -->
        <g style="animation:floatA 3.5s ease-in-out infinite;transform-origin:56px 167px">
          <rect x="20" y="144" width="72" height="30" rx="12" fill="white" stroke="#0A0A09" stroke-width="2"/>
          <path d="M53 174 Q60 182 68 174" fill="white" stroke="#0A0A09" stroke-width="2"/>
          <path d="M54 175 Q60 180 67 175" fill="white" stroke="none"/>
          <text x="56" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" font-weight="700" fill="#0A0A09">haha 😂</text>
          <text x="56" y="169" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" font-weight="700" fill="#0A0A09">10/10</text>
        </g>
        <g style="animation:floatC 5s ease-in-out infinite 1s;transform-origin:250px 202px">
          <rect x="216" y="186" width="72" height="20" rx="10" fill="#0A0A09"/>
          <text x="252" y="200" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" font-weight="700" fill="#F5E642">The Office</text>
        </g>
        <g style="animation:floatB 4s ease-in-out infinite 2s;transform-origin:250px 210px">
          <rect x="214" y="210" width="76" height="20" rx="10" fill="#0A0A09"/>
          <text x="252" y="224" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" font-weight="700" fill="#7EEDC4">Brooklyn 99</text>
        </g>
        <g style="animation:floatA 3.8s ease-in-out infinite .5s;transform-origin:250px 234px">
          <rect x="220" y="234" width="64" height="20" rx="10" fill="#0A0A09"/>
          <text x="252" y="248" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" font-weight="700" fill="#C4A8FF">Friends</text>
        </g>
        <text x="23" y="232" font-size="10" fill="#0A0A09" style="animation:sparkle 1.8s ease-in-out infinite .5s">✦</text>
        <text x="282" y="122" font-size="9" fill="#0A0A09" style="animation:sparkle 2.2s ease-in-out infinite 1s">✦</text>
      </svg>
    </div>`;
