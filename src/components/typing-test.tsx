"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TEXTS = [
  'const buildAI = async () => { const rag = await langchain.init(); return rag.query("ship it"); };',
  "type faster than your deploy pipeline runs — that is the way of the developer who ships",
  'git commit -m "feat(ui): pixel perfect at 2am, ship it" && git push origin main',
];

export function TypingTest() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [time, setTime] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputLenRef = useRef(0);

  const pickNew = useCallback(() => {
    const t = TEXTS[Math.floor(Math.random() * TEXTS.length)];
    setText(t);
    setInput("");
    setWpm(0);
    setAccuracy(100);
    setTime(0);
    setDone(false);
    startRef.current = null;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    pickNew();
  }, [pickNew]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    inputLenRef.current = val.length;
    if (!startRef.current && val.length > 0) {
      startRef.current = Date.now();
      timerRef.current = setInterval(() => {
        const elapsed = (Date.now() - (startRef.current ?? 0)) / 1000;
        setTime(Number(elapsed.toFixed(1)));
        const words = inputLenRef.current / 5;
        setWpm(Math.round((words / elapsed) * 60) || 0);
      }, 200);
    }
    setInput(val);
    let errs = 0;
    for (let i = 0; i < val.length; i++) if (val[i] !== text[i]) errs++;
    setAccuracy(Math.round((1 - errs / Math.max(val.length, 1)) * 100));
    if (val === text) {
      if (timerRef.current) clearInterval(timerRef.current);
      const elapsed = (Date.now() - (startRef.current ?? 0)) / 60000;
      setWpm(Math.round(text.split(" ").length / Math.max(elapsed, 0.001)));
      setDone(true);
    }
  };

  return (
    <div className="border-b" style={{ borderColor: "var(--ink)" }}>
      <div
        className="cursor-pointer border-b p-4"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.78rem", lineHeight: 1.9, borderColor: "var(--ink)", minHeight: 80 }}
        onClick={pickNew}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && pickNew()}
      >
        {text.split("").map((ch, i) => {
          let cls = "transition-colors";
          if (i < input.length) cls += input[i] === ch ? " text-[var(--mint)]" : " text-[var(--coral)] bg-[rgba(255,138,122,0.15)]";
          if (i === input.length) cls += " border-b-2 border-[var(--ink)]";
          return (
            <span key={i} className={cls}>
              {ch === " " ? "\u00A0" : ch}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="start typing above..."
        autoComplete="off"
        spellCheck={false}
        className="w-full border-none bg-transparent px-4 py-3 text-[0.75rem] outline-none"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--ink)", caretColor: "var(--lemon)" }}
      />
      <div
        className="flex flex-wrap gap-0 border-t"
        style={{ borderColor: "var(--ink)" }}
      >
        <div className="border-r px-4 py-2 text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "var(--ink)" }}>
          wpm: <span style={{ color: "var(--dim)", fontWeight: 400 }}>{wpm}</span>
        </div>
        <div className="border-r px-4 py-2 text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "var(--ink)" }}>
          accuracy: <span style={{ color: "var(--dim)", fontWeight: 400 }}>{accuracy}%</span>
        </div>
        <div className="border-r px-4 py-2 text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", borderColor: "var(--ink)" }}>
          time: <span style={{ color: "var(--dim)", fontWeight: 400 }}>{time}s</span>
        </div>
        {done && (
          <div className="ml-auto px-4 py-2 text-[0.6rem] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--mint)" }}>
            ✓ done! {wpm} wpm
          </div>
        )}
      </div>
    </div>
  );
}
