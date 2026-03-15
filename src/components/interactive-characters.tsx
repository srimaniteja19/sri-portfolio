"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = [
  {
    id: "c1",
    name: "Maya",
    role: "Frontend Dev",
    color: "#FF8A7A",
    x: 80,
    skinTone: "#F4C49A",
    hairColor: "#2C2C2A",
    hairStyle: "long" as const,
    outfitColor: "#FF8A7A",
    pantsColor: "#2C2C2A",
    shoeColor: "#0A0A09",
    mood: 88,
    phrases: [
      "I ship UIs ✦",
      "Tailwind for life!",
      "CSS is art.",
      "next deploy in 3..2..1",
      "I fixed the layout!",
      "pixel perfect ✓",
    ],
    moodColor: "#FF8A7A",
  },
  {
    id: "c2",
    name: "Dev",
    role: "AI Engineer",
    color: "#7EEDC4",
    x: 200,
    skinTone: "#E8A876",
    hairColor: "#2C2C2A",
    hairStyle: "curly" as const,
    outfitColor: "#7EEDC4",
    pantsColor: "#1a1a18",
    shoeColor: "#0A0A09",
    mood: 95,
    phrases: [
      "RAG pipeline GO",
      "LLM in prod ✓",
      "embeddings are cool",
      "bedrock or bust",
      "context window full",
      "vector search!",
    ],
    moodColor: "#7EEDC4",
  },
  {
    id: "c3",
    name: "Sam",
    role: "Celebrating",
    color: "#C4A8FF",
    x: 340,
    skinTone: "#F4C49A",
    hairColor: "#E8C87A",
    hairStyle: "bun" as const,
    outfitColor: "#C4A8FF",
    pantsColor: "#534AB7",
    shoeColor: "#FF8A7A",
    mood: 100,
    phrases: [
      "WE SHIPPED IT!!! ✦",
      "prod is green ✓",
      "lets gooooo",
      "PR merged!",
      "deploy successful!",
    ],
    moodColor: "#C4A8FF",
  },
  {
    id: "c4",
    name: "Alex",
    role: "Fullstack Dev",
    color: "#7EC8F5",
    x: 490,
    skinTone: "#F4C49A",
    hairColor: "#7A5C38",
    hairStyle: "sidepart" as const,
    outfitColor: "#7EC8F5",
    pantsColor: "#1a1a18",
    shoeColor: "#2C2C2A",
    mood: 82,
    phrases: [
      "full stack attack",
      "postgres or die",
      "REST? GraphQL?",
      "node.js goes brrr",
      "api keys rotated",
    ],
    moodColor: "#7EC8F5",
  },
  {
    id: "c5",
    name: "Priya",
    role: "Data Scientist",
    color: "#FFB876",
    x: 640,
    skinTone: "#C4752A",
    hairColor: "#2C2C2A",
    hairStyle: "afro" as const,
    outfitColor: "#FFB876",
    pantsColor: "#534AB7",
    shoeColor: "#0A0A09",
    mood: 91,
    phrases: [
      "RAG retrieval ✓",
      "semantic search!",
      "embeddings done",
      "pinecone indexed",
      "data clean. finally.",
    ],
    moodColor: "#FFB876",
  },
  {
    id: "c6",
    name: "Jordan",
    role: "Consultant",
    color: "#F5E642",
    x: 790,
    skinTone: "#F4C49A",
    hairColor: "#2C2C2A",
    hairStyle: "slick" as const,
    outfitColor: "#F5E642",
    pantsColor: "#1a1a18",
    shoeColor: "#2C2C2A",
    mood: 87,
    phrases: [
      "let's ship it →",
      "ROI: delivered",
      "stakeholders happy",
      "deck is 10/10",
      "deal closed ✦",
    ],
    moodColor: "#F5E642",
  },
];

type Char = (typeof CHARS)[number];
type Anim = "jump" | "dance" | "shake" | "spin" | "bounce" | "wave";

function CharacterSVG({ c }: { c: Char }) {
  const s = c.skinTone;
  const h = c.hairColor;
  const o = c.outfitColor;
  const p = c.pantsColor;
  const sh = c.shoeColor;
  const skin2 = s === "#F4C49A" ? "#E8A876" : s === "#E8A876" ? "#C4752A" : "#A05C1A";

  let hair: React.ReactNode;
  if (c.hairStyle === "long") {
    hair = (
      <>
        <ellipse cx="45" cy="68" rx="23" ry="13" fill={h} />
        <rect x="22" y="68" width="9" height="32" rx="4.5" fill={h} />
        <rect x="60" y="68" width="9" height="27" rx="4.5" fill={h} />
      </>
    );
  } else if (c.hairStyle === "curly") {
    hair = (
      <>
        <ellipse cx="45" cy="64" rx="23" ry="12" fill={h} />
        <circle cx="33" cy="66" r="9" fill={h} />
        <circle cx="45" cy="63" r="9" fill={h} />
        <circle cx="57" cy="66" r="9" fill={h} />
      </>
    );
  } else if (c.hairStyle === "bun") {
    hair = (
      <>
        <ellipse cx="45" cy="64" rx="21" ry="11" fill={h} />
        <circle cx="45" cy="56" r="13" fill={h} />
        <circle cx="45" cy="56" r="7" fill="#D4A840" stroke="#0A0A09" strokeWidth="1.5" />
      </>
    );
  } else if (c.hairStyle === "sidepart") {
    hair = (
      <>
        <ellipse cx="45" cy="63" rx="24" ry="12" fill={h} />
        <ellipse cx="33" cy="68" rx="13" ry="10" fill={h} />
      </>
    );
  } else if (c.hairStyle === "afro") {
    hair = (
      <>
        <circle cx="45" cy="70" r="25" fill={h} />
        <circle cx="45" cy="63" r="23" fill={h} />
      </>
    );
  } else {
    hair = (
      <>
        <ellipse cx="45" cy="62" rx="23" ry="12" fill={h} />
        <ellipse cx="34" cy="66" rx="14" ry="10" fill={h} />
      </>
    );
  }

  const bodyExtra =
    c.hairStyle === "slick" ? (
      <>
        <path d="M28 118 L38 145 L45 136 L52 145 L62 118 Z" fill="#0A0A09" opacity={0.86} />
        <path d="M38 118 L45 136 L52 118" fill={o} />
      </>
    ) : null;

  return (
    <svg
      id={`svg-${c.id}`}
      width="90"
      height="220"
      viewBox="0 0 90 220"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
    >
      <ellipse cx="45" cy="210" rx="28" ry="6" fill="rgba(10,10,9,0.1)" />
      <rect x="28" y="175" width="14" height="30" rx="5" fill={p} />
      <rect x="48" y="175" width="14" height="30" rx="5" fill={p} />
      <ellipse cx="35" cy="206" rx="13" ry="5" fill={sh} />
      <ellipse cx="55" cy="206" rx="13" ry="5" fill={sh} />
      <rect id={`body-${c.id}`} x="25" y="112" width="40" height="65" rx="11" fill={o} />
      {bodyExtra}
      <rect x="38" y="100" width="14" height="16" rx="5.5" fill={s} />
      <ellipse id={`head-${c.id}`} cx="45" cy="84" rx="22" ry="24" fill={s} />
      {c.hairStyle === "afro" && <ellipse cx="45" cy="77" rx="17" ry="20" fill={s} />}
      {hair}
      <ellipse cx="23" cy="84" rx="4.5" ry="6.5" fill={s} />
      <ellipse cx="67" cy="84" rx="4.5" ry="6.5" fill={s} />
      <ellipse id={`eye-l-${c.id}`} cx="36" cy="82" rx="4.2" ry="5" fill="white" />
      <circle id={`pupil-l-${c.id}`} cx="37" cy="83" r="2.8" fill="#1a1a18" />
      <ellipse id={`eye-r-${c.id}`} cx="54" cy="82" rx="4.2" ry="5" fill="white" />
      <circle id={`pupil-r-${c.id}`} cx="55" cy="83" r="2.8" fill="#1a1a18" />
      <ellipse cx="45" cy="90" rx="3" ry="2" fill={skin2} opacity={0.5} />
      <path id={`mouth-${c.id}`} d="M37 97 Q45 104 53 97" fill="none" stroke={skin2} strokeWidth="2" strokeLinecap="round" />
      {c.id === "c5" && (
        <>
          <circle cx="36" cy="82" r="7" fill="none" stroke="#0A0A09" strokeWidth="1.5" opacity={0.6} />
          <circle cx="54" cy="82" r="7" fill="none" stroke="#0A0A09" strokeWidth="1.5" opacity={0.6} />
          <line x1="43" y1="82" x2="47" y2="82" stroke="#0A0A09" strokeWidth="1.5" />
        </>
      )}
      {c.id === "c1" && <circle cx="67" cy="89" r="3.5" fill="#F5E642" stroke="#0A0A09" strokeWidth="1" />}
      {c.id === "c3" && (
        <>
          <circle cx="23" cy="88" r="3.5" fill={o} stroke="#0A0A09" strokeWidth="1" />
          <circle cx="67" cy="88" r="3.5" fill={o} stroke="#0A0A09" strokeWidth="1" />
        </>
      )}
      {c.id === "c5" && (
        <>
          <circle cx="23" cy="88" r="4" fill="none" stroke={o} strokeWidth="2" />
          <circle cx="67" cy="88" r="4" fill="none" stroke={o} strokeWidth="2" />
        </>
      )}
      <g id={`arm-l-${c.id}`}>
        <path d="M25 128 Q10 145 8 162" fill="none" stroke={s} strokeWidth="12" strokeLinecap="round" />
        <ellipse cx="8" cy="164" rx="7" ry="6" fill={s} />
      </g>
      <g id={`arm-r-${c.id}`} style={{ transformOrigin: "65px 128px" }}>
        <path d="M65 128 Q80 145 82 162" fill="none" stroke={s} strokeWidth="12" strokeLinecap="round" />
        <ellipse cx="82" cy="164" rx="7" ry="6" fill={s} />
      </g>
    </svg>
  );
}

export function InteractiveCharacters() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const wrapRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [positions, setPositions] = useState<Record<string, number>>(
    Object.fromEntries(CHARS.map((c) => [c.id, c.x]))
  );
  const [moods, setMoods] = useState<Record<string, number>>(
    Object.fromEntries(CHARS.map((c) => [c.id, c.mood]))
  );
  const [bubbles, setBubbles] = useState<Record<string, { text: string; color: string }>>({});
  const [reactions, setReactions] = useState<{ id: string; emoji: string; left: number; bottom: number }[]>([]);
  const [partyActive, setPartyActive] = useState(false);
  const phraseIdx = useRef<Record<string, number>>({});
  const bubbleTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const dragState = useRef<{ id: string; startX: number; startLeft: number; didMove: boolean; offX: number } | null>(null);
  const collidedIds = useRef<Set<string>>(new Set());

  const doAnim = useCallback((id: string, type: Anim) => {
    const wrap = wrapRefs.current[id];
    if (!wrap) return;
    const svg = wrap.querySelector(`#svg-${id}`) as SVGElement | null;
    const armR = wrap.querySelector(`#arm-r-${id}`) as SVGElement | null;
    if (!svg) return;
    svg.style.animation = "none";
    void svg.getBoundingClientRect();
    const animMap: Record<Anim, string> = {
      jump: "interactiveJump .55s ease",
      dance: "interactiveDance .4s ease 4",
      shake: "interactiveShake .35s ease 3",
      spin: "interactiveSpin .6s ease",
      bounce: "interactiveBounce .4s ease 3",
      wave: "interactiveWave .5s ease 3",
    };
    if (type === "wave" && armR) {
      armR.style.animation = animMap.wave;
      armR.style.transformOrigin = "65px 128px";
    } else {
      svg.style.animation = animMap[type];
      svg.style.transformOrigin = "center bottom";
    }
    setTimeout(() => {
      svg.style.animation = "";
      if (armR) armR.style.animation = "";
    }, 1500);
  }, []);

  const showBubble = useCallback(
    (c: Char, text: string) => {
      Object.values(bubbleTimers.current).forEach(clearTimeout);
      setBubbles((prev) => ({ ...prev, [c.id]: { text, color: c.color } }));
      const t = setTimeout(() => setBubbles((prev) => ({ ...prev, [c.id]: undefined! })), 3000);
      bubbleTimers.current[c.id] = t;
    },
    []
  );

  const hideBubble = useCallback((id: string) => {
    setBubbles((prev) => ({ ...prev, [id]: undefined! }));
  }, []);

  const spawnReaction = useCallback((id: string) => {
    const wrap = wrapRefs.current[id];
    if (!wrap) return;
    const left = (positions[id] ?? 0) + 20 + Math.random() * 50;
    const rid = `r-${Date.now()}-${Math.random()}`;
    setReactions((prev) => [
      ...prev,
      {
        id: rid,
        emoji: ["✦", "⭐", "🔥", "💥", "✨", "⚡"][Math.floor(Math.random() * 6)],
        left,
        bottom: 220 + Math.random() * 30,
      },
    ]);
    setTimeout(() => setReactions((p) => p.filter((r) => r.id !== rid)), 1300);
  }, [positions]);

  const updateMood = useCallback((id: string, delta: number) => {
    setMoods((prev) => {
      const next = Math.max(10, Math.min(100, (prev[id] ?? 50) + delta));
      return { ...prev, [id]: next };
    });
  }, []);

  const triggerAll = useCallback(
    (anim: Anim) => {
      const phrases: Record<string, string[]> = {
        wave: ["👋", "hey!", "hello!"],
        jump: ["🎉", "weee!", "woo!"],
        dance: ["🕺", "vibes!", "🎵"],
        shake: ["😱", "oh no!", "PANIC"],
        spin: ["🌀", "dizzy!", "spinning"],
        bounce: ["✨", "bounce!"],
      };
      CHARS.forEach((c, i) => {
        setTimeout(() => {
          doAnim(c.id, anim);
          const p = phrases[anim];
          if (p) showBubble(c, p[Math.floor(Math.random() * p.length)]);
          updateMood(c.id, anim === "shake" ? -8 : anim === "dance" ? 12 : 5);
          spawnReaction(c.id);
        }, i * 100);
      });
    },
    [doAnim, showBubble, updateMood, spawnReaction]
  );

  const resetAll = useCallback(() => {
    setPositions(Object.fromEntries(CHARS.map((c) => [c.id, c.x])));
    setMoods(Object.fromEntries(CHARS.map((c) => [c.id, c.mood])));
    setBubbles({});
    CHARS.forEach((c) => hideBubble(c.id));
  }, [hideBubble]);

  const scatter = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const w = scene.offsetWidth - 90;
    CHARS.forEach((c) => {
      const nx = Math.random() * Math.max(0, w);
      setPositions((p) => ({ ...p, [c.id]: nx }));
      doAnim(c.id, "jump");
      spawnReaction(c.id);
    });
  }, [doAnim, spawnReaction]);

  // Drag handling
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const ds = dragState.current;
      if (!ds || !sceneRef.current) return;
      ds.didMove = ds.didMove || Math.abs(e.clientX - ds.startX) > 5;
      const rect = sceneRef.current.getBoundingClientRect();
      let newX = e.clientX - rect.left - ds.offX;
      newX = Math.max(0, Math.min(rect.width - 90, newX));
      setPositions((p) => {
        const next = { ...p, [ds.id]: newX };
        CHARS.forEach((other) => {
          if (other.id === ds.id) return;
          const otherLeft = p[other.id] ?? other.x;
          if (Math.abs(newX - otherLeft) < 70 && !collidedIds.current.has(other.id)) {
            collidedIds.current.add(other.id);
            queueMicrotask(() => {
              showBubble(other, "😮 hey watch it!");
              doAnim(other.id, "shake");
            });
          } else if (Math.abs(newX - otherLeft) >= 70) {
            collidedIds.current.delete(other.id);
          }
        });
        return next;
      });
    };
    const onUp = () => {
      const ds = dragState.current;
      if (ds) {
        const wrap = wrapRefs.current[ds.id];
        wrap?.classList.remove("dragging");
        dragState.current = null;
        collidedIds.current.clear();
      }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [showBubble, doAnim]);

  // Eyes follow cursor
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      CHARS.forEach((c) => {
        const wrap = wrapRefs.current[c.id];
        if (!wrap) return;
        const wLeft = positions[c.id] ?? c.x;
        const cx = rect.left + wLeft + 45;
        const cy = rect.top + 100;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(2, Math.sqrt(dx * dx + dy * dy) / 60);
        const px = Math.cos(angle) * dist;
        const py = Math.sin(angle) * dist;
        const pL = wrap.querySelector(`#pupil-l-${c.id}`) as SVGCircleElement | null;
        const pR = wrap.querySelector(`#pupil-r-${c.id}`) as SVGCircleElement | null;
        if (pL) {
          pL.setAttribute("cx", String(37 + px));
          pL.setAttribute("cy", String(83 + py));
        }
        if (pR) {
          pR.setAttribute("cx", String(55 + px));
          pR.setAttribute("cy", String(83 + py));
        }
      });
    };
    scene.addEventListener("mousemove", onMove);
    return () => scene.removeEventListener("mousemove", onMove);
  }, [positions]);

  // Idle wave
  useEffect(() => {
    if (partyActive) return;
    const iv = setInterval(() => {
      const c = CHARS[Math.floor(Math.random() * CHARS.length)];
      const wrap = wrapRefs.current[c.id];
      if (!wrap || Math.random() <= 0.6) return;
      const armR = wrap.querySelector(`#arm-r-${c.id}`) as SVGElement | null;
      if (armR) {
        armR.style.animation = "none";
        void armR.getBoundingClientRect();
        armR.style.animation = "interactiveWave 0.5s ease 1";
        armR.style.transformOrigin = "65px 128px";
      }
    }, 2800);
    return () => clearInterval(iv);
  }, [partyActive]);

  // Random thought bubbles
  useEffect(() => {
    if (partyActive) return;
    const iv = setInterval(() => {
      if (Math.random() <= 0.55) return;
      const c = CHARS[Math.floor(Math.random() * CHARS.length)];
      const thoughts = ["...", "hmm", "☕", "ping!", "merging...", "git push ✓", "building..."];
      showBubble(c, thoughts[Math.floor(Math.random() * thoughts.length)]);
    }, 4000);
    return () => clearInterval(iv);
  }, [partyActive, showBubble]);

  // Party mode interval
  useEffect(() => {
    if (!partyActive) return;
    const iv = setInterval(() => {
      const c = CHARS[Math.floor(Math.random() * CHARS.length)];
      const anims: Anim[] = ["dance", "jump", "wave", "bounce"];
      doAnim(c.id, anims[Math.floor(Math.random() * anims.length)]);
      spawnReaction(c.id);
      updateMood(c.id, 3);
    }, 400);
    return () => clearInterval(iv);
  }, [partyActive, doAnim, spawnReaction, updateMood]);

  return (
    <div className="border-b px-4 py-6 md:px-8" style={{ borderColor: "var(--ink)" }}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "1.4rem", fontWeight: 900, fontStyle: "italic" }}>
          the crew. <span style={{ fontSize: "0.9rem", color: "var(--dim)", fontStyle: "normal", fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 400 }}>// interactive</span>
        </div>
        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.58rem", color: "var(--dim)" }}>
          hover · click · drag · try the buttons
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {[
          { dot: "var(--mint)", label: "hover = react" },
          { dot: "var(--lemon)", label: "click = speak" },
          { dot: "var(--coral)", label: "drag = move" },
          { dot: "var(--sky)", label: "double-click = jump" },
          { dot: "var(--lilac)", label: "right-click = mood" },
        ].map((i) => (
          <div
            key={i.label}
            className="flex items-center gap-2 rounded border-2 border-[var(--ink)] px-2.5 py-1 text-[0.6rem] font-bold"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            <div className="h-2 w-2 rounded-full" style={{ border: "1.5px solid var(--ink)", background: i.dot }} />
            {i.label}
          </div>
        ))}
      </div>

      <div ref={sceneRef} className="interactive-scene relative">
        {/* Props */}
        <div className="absolute right-[30px] bottom-[62px]" style={{ pointerEvents: "none" }}>
          <svg width="80" height="100" viewBox="0 0 80 100">
            <rect x="5" y="55" width="70" height="8" rx="3" fill="#2C2C2A" />
            <rect x="10" y="63" width="8" height="30" rx="2" fill="#2C2C2A" />
            <rect x="62" y="63" width="8" height="30" rx="2" fill="#2C2C2A" />
            <rect x="15" y="20" width="50" height="36" rx="5" fill="#0A0A09" />
            <rect x="18" y="23" width="44" height="28" rx="3" fill="#1a1a18" />
            <rect x="21" y="26" width="18" height="3" rx="1.5" fill="#7EEDC4" opacity={0.8} />
            <rect x="21" y="31" width="12" height="3" rx="1.5" fill="#C4A8FF" opacity={0.7} />
            <rect x="21" y="36" width="22" height="3" rx="1.5" fill="#F5E642" opacity={0.6} />
            <rect x="21" y="41" width="15" height="3" rx="1.5" fill="#FF8A7A" opacity={0.7} />
          </svg>
        </div>
        <div className="absolute left-6 bottom-[62px]" style={{ pointerEvents: "none" }}>
          <svg width="50" height="80" viewBox="0 0 50 80">
            <rect x="15" y="58" width="20" height="16" rx="3" fill="#FF8A7A" stroke="#0A0A09" strokeWidth="1.5" />
            <line x1="25" y1="56" x2="25" y2="28" stroke="#2a7a3a" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="25" cy="26" rx="10" ry="14" fill="#3CC49A" stroke="#0A0A09" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute left-[180px] bottom-[62px]" style={{ pointerEvents: "none" }}>
          <svg width="30" height="35" viewBox="0 0 30 35">
            <rect x="4" y="10" width="18" height="18" rx="4" fill="white" stroke="#0A0A09" strokeWidth="1.5" />
            <path d="M22 15 Q28 15 28 20 Q28 25 22 25" fill="none" stroke="#0A0A09" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Characters */}
        {CHARS.map((c) => (
          <div
            key={c.id}
            id={`wrap-${c.id}`}
            ref={(el) => {
              wrapRefs.current[c.id] = el;
            }}
            className="interactive-char-wrap"
            style={{ left: positions[c.id] ?? c.x, width: 90 }}
            onMouseEnter={() => {
              const armR = wrapRefs.current[c.id]?.querySelector(`#arm-r-${c.id}`) as SVGElement | null;
              if (armR) {
                armR.style.animation = "interactiveWave 0.6s ease-in-out 3";
                armR.style.transformOrigin = "65px 128px";
              }
              showBubble(c, "👋 hey there!");
              updateMood(c.id, 5);
            }}
            onMouseLeave={() => hideBubble(c.id)}
            onClick={(e) => {
              e.stopPropagation();
              if (dragState.current?.id === c.id && dragState.current?.didMove) return;
              const idx = (phraseIdx.current[c.id] ?? 0) % c.phrases.length;
              phraseIdx.current[c.id] = idx + 1;
              showBubble(c, c.phrases[idx]);
              doAnim(c.id, "jump");
              updateMood(c.id, 8);
              spawnReaction(c.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              showBubble(c, "🎉 woooo!");
              doAnim(c.id, "jump");
              updateMood(c.id, 15);
              for (let i = 0; i < 4; i++)
                setTimeout(() => spawnReaction(c.id), i * 150);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              const moods = ["😤 too many PRs", "🤔 thinking...", "😴 need coffee", "💡 big idea!", "😅 its fine", "🚀 lets ship!"];
              showBubble(c, moods[Math.floor(Math.random() * moods.length)]);
              doAnim(c.id, "shake");
              updateMood(c.id, -10);
            }}
            onMouseDown={(e) => {
              if (e.button !== 0) return;
              const wrap = e.currentTarget as HTMLElement;
              const rect = wrap.getBoundingClientRect();
              dragState.current = {
                id: c.id,
                startX: e.clientX,
                startLeft: positions[c.id] ?? c.x,
                didMove: false,
                offX: e.clientX - rect.left,
              };
              wrap.classList.add("dragging");
            }}
          >
            <CharacterSVG c={c} />
          </div>
        ))}

        {/* Bubbles */}
        {Object.entries(bubbles).map(
          ([id, b]) =>
            b && (
              <div
                key={id}
                className="interactive-bubble show"
                style={{
                  left: (positions[id] ?? 0) - 10,
                  bottom: 230,
                  background: b.color,
                  borderColor: "var(--ink)",
                }}
              >
                {b.text}
              </div>
            )
        )}

        {/* Reactions */}
        {reactions.map((r) => (
          <div
            key={r.id}
            className="interactive-reaction"
            style={{ left: r.left, bottom: r.bottom }}
          >
            {r.emoji}
          </div>
        ))}

        <div className="interactive-scene-floor" />
      </div>

      {/* Mood meters */}
      <div
        className="mt-5 grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg border-2 border-[var(--ink)] sm:grid-cols-3 lg:grid-cols-6"
        style={{ background: "var(--ink)" }}
      >
        {CHARS.map((c) => (
          <div key={c.id} className="bg-[var(--bg)] p-3">
            <div className="mb-1 text-[0.56rem] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--dim)", letterSpacing: "0.08em" }}>
              {c.name}
            </div>
            <div className="h-1.5 overflow-hidden rounded" style={{ background: "rgba(10,10,9,0.08)" }}>
              <div
                className="h-full transition-[width] duration-500"
                style={{ width: `${moods[c.id] ?? c.mood}%`, background: c.moodColor }}
              />
            </div>
            <div className="mt-1 text-[0.62rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: c.moodColor }}>
              {Math.round(moods[c.id] ?? c.mood)}%
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          { label: "wave all", onClick: () => triggerAll("wave") },
          { label: "jump all", onClick: () => triggerAll("jump") },
          { label: "dance party", onClick: () => triggerAll("dance") },
          { label: "panic mode", onClick: () => triggerAll("shake") },
          { label: "spin", onClick: () => triggerAll("spin") },
          { label: "scatter 💥", onClick: scatter },
          { label: "reset", onClick: resetAll },
          {
            label: partyActive ? "stop party" : "party mode 🎉",
            onClick: () => {
              setPartyActive((p) => !p);
              if (!partyActive) triggerAll("dance");
              else resetAll();
            },
            active: partyActive,
          },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.onClick}
            className={`rounded border-2 border-[var(--ink)] px-3 py-1.5 text-[0.6rem] font-bold uppercase transition ${btn.active ? "bg-[var(--ink)] text-[var(--bg)]" : "bg-transparent hover:bg-[var(--ink)] hover:text-[var(--bg)]"}`}
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.04em" }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
