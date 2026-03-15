"use client";

import { useState, useRef, useEffect } from "react";

const CMDS: Record<string, string> = {
  skills: `<span class="term-cmd">→ skills</span>
<span class="term-key">frontend:</span> <span class="term-val">Next.js, React, TypeScript, Tailwind, Vue</span>
<span class="term-key">backend:</span> <span class="term-val">Node.js, Python, PostgreSQL, Redis, REST APIs</span>
<span class="term-key">ai/ml:</span> <span class="term-val">LangChain, LangGraph, RAG, OpenAI, Pinecone</span>
<span class="term-key">infra:</span> <span class="term-val">AWS, Docker, Kubernetes, CI/CD</span>`,
  projects: `<span class="term-cmd">→ projects</span>
<span class="term-key">[1]</span> <span class="term-val">AI Bookmarking</span> — AI-powered bookmark manager
<span class="term-key">[2]</span> <span class="term-val">DevPath AI</span> — course plans & interview prep
<span class="term-key">[3]</span> <span class="term-val">Job Tracker</span> — track applications
<span class="term-key">[4]</span> <span class="term-val">Rate Limiter X</span> — Redis, Java`,
  contact: `<span class="term-cmd">→ contact</span>
<span class="term-key">email:</span> <span class="term-val">srimaniteja.ch@gmail.com</span>
<span class="term-key">github:</span> <span class="term-val">github.com/srimaniteja19</span>
<span class="term-key">linkedin:</span> <span class="term-val">linkedin.com/in/sri-maniteja-chinnam</span>`,
  devpath: `<span class="term-cmd">→ devpath</span>
<span class="term-val">DevPath AI</span> — self-learning platform
<span class="term-key">stack:</span> <span class="term-val">Next.js, TypeScript, Gemini API, RAG</span>
<span class="term-key">status:</span> <span class="term-val">actively building 🚀</span>`,
  help: `<span class="term-cmd">→ available commands</span>
<span class="term-val">skills</span> · <span class="term-val">projects</span> · <span class="term-val">contact</span> · <span class="term-val">devpath</span> · <span class="term-val">hello</span> · <span class="term-val">clear</span>`,
  hello: `<span class="term-cmd">→ hello!</span>
<span class="term-val">hey there 👋 I'm Maniteja — full-stack engineer building with AI.</span>
<span class="term-comment">type 'help' to see what you can ask me</span>`,
  clear: "__clear__",
};

export function Terminal() {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const run = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    const resp = CMDS[c];
    if (resp === "__clear__") {
      setHistory([]);
      return;
    }
    const safeCmd = c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const output = resp || `<span style="color:var(--coral)">command not found: ${safeCmd}</span> <span class="term-comment">— try 'help'</span>`;
    setHistory((h) => [...h, { cmd: c, output }]);
  };

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [history]);

  return (
    <div
      className="overflow-hidden rounded-2xl border-[2.5px]"
      style={{ borderColor: "var(--ink)", background: "#1a1a1a" }}
    >
      <div
        className="flex items-center gap-2 border-b-2 px-4 py-2"
        style={{ borderColor: "var(--ink)", background: "#2a2a2a" }}
      >
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF5F57" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28CA41" }} />
        <span className="mx-auto font-mono text-[0.68rem] text-[#666]">maniteja.sh — ask me anything</span>
      </div>
      <div
        ref={bodyRef}
        className="max-h-[180px] overflow-y-auto px-4 pt-4 font-mono text-[0.78rem] leading-7"
      >
        <div className="term-line text-[#555]"># welcome! type a command below</div>
        <div className="term-line text-[#555]"># try: skills · projects · contact · devpath</div>
        {history.map((h, i) => (
          <div key={i} className="mt-2">
            <div className="term-line text-[#555]">
              maniteja@portfolio:~$ <span className="text-white">{h.cmd}</span>
            </div>
            <div
              className="term-line [&_.term-cmd]:text-[var(--mint)] [&_.term-key]:text-[var(--lemon)] [&_.term-val]:text-[var(--peach)] [&_.term-comment]:text-[#555]"
              dangerouslySetInnerHTML={{ __html: h.output.replace(/\n/g, "<br/>") }}
            />
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-2 border-t border-[#333] px-4 py-2"
        onClick={() => inputRef.current?.focus()}
      >
        <span className="font-mono text-[0.78rem] font-bold" style={{ color: "var(--mint)" }}>
          maniteja@portfolio:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder="type a command..."
          className="flex-1 border-none bg-transparent font-mono text-[0.78rem] text-white outline-none placeholder:text-[#666]"
          style={{ caretColor: "var(--lemon)" }}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            const el = e.target as HTMLInputElement;
            run(el.value);
            el.value = "";
          }}
        />
      </div>
    </div>
  );
}
