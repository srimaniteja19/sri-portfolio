"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { PortfolioContent } from "@/types/portfolio-content";

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#1a1a18] text-left font-semibold"
      >
        {title}
        <span className="text-[#666]">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-4 bg-[#141413] border-t border-[#333] space-y-3">{children}</div>}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const inputClass = "w-full px-3 py-2 rounded bg-[#0a0a09] border border-[#333] text-[#e0e0dc] text-sm focus:border-[#7EEDC4] outline-none";
  return (
    <label className="block">
      <span className="block text-xs font-medium text-[#888] mb-1">{label}</span>
      {textarea ? (
        <textarea className={inputClass} rows={2} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type="text" className={inputClass} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "ok" | "err">("idle");
  const [saveMessage, setSaveMessage] = useState("");

  const fetchContent = useCallback(async () => {
    const res = await fetch("/api/content", { credentials: "include" });
    if (res.ok) {
      const data = await res.json();
      setContent(data);
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const meRes = await fetch("/api/admin/me", { credentials: "include" });
      if (!meRes.ok) {
        setAuthed(false);
        setLoading(false);
        return;
      }
      const contentRes = await fetch("/api/content", { credentials: "include" });
      if (contentRes.ok) {
        const data = await contentRes.json();
        setContent(data);
        setAuthed(true);
      } else {
        setAuthed(false);
      }
      setLoading(false);
    })();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      credentials: "include",
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setAuthed(true);
      await fetchContent();
    } else {
      setLoginError(data.error || "Login failed");
    }
  };

  const handleSave = async () => {
    if (!content) return;
    setSaveStatus("saving");
    setSaveMessage("");
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
      credentials: "include",
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setSaveStatus("ok");
      setSaveMessage("Saved. Refresh your portfolio to see changes.");
    } else {
      setSaveStatus("err");
      setSaveMessage(data.error || "Save failed");
    }
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-[#666]">Loading…</span>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="max-w-sm mx-auto px-4 py-16">
        <h1 className="text-xl font-bold mb-2">Portfolio Admin</h1>
        <p className="text-sm text-[#888] mb-6">Sign in to edit your portfolio content.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="block text-xs font-medium text-[#888] mb-1">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#0a0a09] border border-[#333] text-[#e0e0dc] focus:border-[#7EEDC4] outline-none"
              autoFocus
            />
          </label>
          {loginError && <p className="text-sm text-red-400">{loginError}</p>}
          <button
            type="submit"
            className="w-full py-2 rounded bg-[#7EEDC4] text-[#0a0a09] font-semibold hover:bg-[#6dd9b0]"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-xs text-[#555]">
          Set ADMIN_SECRET in .env.local to your chosen password.
        </p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-[#666]">Could not load content.</span>
      </div>
    );
  }

  const update = <K extends keyof PortfolioContent>(key: K, value: PortfolioContent[K]) => {
    setContent((c) => (c ? { ...c, [key]: value } : c));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Portfolio Admin</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm text-[#7EEDC4] hover:underline"
          >
            View site
          </Link>
          <button
            type="button"
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-4 py-2 rounded bg-[#7EEDC4] text-[#0a0a09] font-semibold text-sm hover:bg-[#6dd9b0] disabled:opacity-50"
          >
            {saveStatus === "saving" ? "Saving…" : "Save all"}
          </button>
        </div>
      </div>
      {saveMessage && (
        <p className={`mb-4 text-sm ${saveStatus === "err" ? "text-red-400" : "text-[#7EEDC4]"}`}>
          {saveMessage}
        </p>
      )}

      <div className="space-y-3">
        <Section title="Header" defaultOpen>
          <Field label="Name" value={content.header.name} onChange={(v) => update("header", { ...content.header, name: v })} />
          <Field label="Email" value={content.header.email} onChange={(v) => update("header", { ...content.header, email: v })} />
          <Field label="Open to roles text" value={content.header.openToRolesText} onChange={(v) => update("header", { ...content.header, openToRolesText: v })} />
        </Section>

        <Section title="Hero">
          <Field label="Subtitle" value={content.hero.subtitle} onChange={(v) => update("hero", { ...content.hero, subtitle: v })} />
          <Field label="Name" value={content.hero.name} onChange={(v) => update("hero", { ...content.hero, name: v })} />
          <Field label="Role" value={content.hero.role} onChange={(v) => update("hero", { ...content.hero, role: v })} />
          <Field label="Code role" value={content.hero.codeRole} onChange={(v) => update("hero", { ...content.hero, codeRole: v })} />
          <Field label="Code focus" value={content.hero.codeFocus} onChange={(v) => update("hero", { ...content.hero, codeFocus: v })} />
          <Field label="Code status" value={content.hero.codeStatus} onChange={(v) => update("hero", { ...content.hero, codeStatus: v })} />
          <Field label="Terminal whoami" value={content.hero.terminalWhoami} onChange={(v) => update("hero", { ...content.hero, terminalWhoami: v })} />
          <Field label="Terminal stack" value={content.hero.terminalStack} onChange={(v) => update("hero", { ...content.hero, terminalStack: v })} />
          <Field label="GitHub URL" value={content.hero.githubUrl} onChange={(v) => update("hero", { ...content.hero, githubUrl: v })} />
          <Field label="LinkedIn URL" value={content.hero.linkedinUrl} onChange={(v) => update("hero", { ...content.hero, linkedinUrl: v })} />
        </Section>

        <Section title="Experience">
          {content.experience.items.map((item, i) => (
            <div key={i} className="p-3 rounded bg-[#0a0a09] border border-[#333] space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#666]">Item {i + 1}</span>
                <button
                  type="button"
                  onClick={() => {
                    const next = content.experience.items.filter((_, j) => j !== i);
                    update("experience", { ...content.experience, items: next });
                  }}
                  className="text-xs text-red-400 hover:underline"
                >
                  Remove
                </button>
              </div>
              <Field label="Date" value={item.date} onChange={(v) => {
                const next = [...content.experience.items];
                next[i] = { ...next[i], date: v };
                update("experience", { ...content.experience, items: next });
              }} />
              <Field label="Role" value={item.role} onChange={(v) => {
                const next = [...content.experience.items];
                next[i] = { ...next[i], role: v };
                update("experience", { ...content.experience, items: next });
              }} />
              <Field label="Meta" value={item.meta} onChange={(v) => {
                const next = [...content.experience.items];
                next[i] = { ...next[i], meta: v };
                update("experience", { ...content.experience, items: next });
              }} />
              <Field label="Description" value={item.desc} onChange={(v) => {
                const next = [...content.experience.items];
                next[i] = { ...next[i], desc: v };
                update("experience", { ...content.experience, items: next });
              }} textarea />
            </div>
          ))}
          <button
            type="button"
            onClick={() => update("experience", {
              ...content.experience,
              items: [...content.experience.items, { date: "", role: "", meta: "", desc: "" }],
            })}
            className="text-sm text-[#7EEDC4] hover:underline"
          >
            + Add experience
          </button>
        </Section>

        <Section title="Education">
          {content.education.map((edu, i) => (
            <div key={i} className="p-3 rounded bg-[#0a0a09] border border-[#333] space-y-2">
              <Field label="School" value={edu.school} onChange={(v) => {
                const next = [...content.education];
                next[i] = { ...next[i], school: v };
                setContent((c) => c ? { ...c, education: next } : c);
              }} />
              <Field label="Degree" value={edu.degree} onChange={(v) => {
                const next = [...content.education];
                next[i] = { ...next[i], degree: v };
                setContent((c) => c ? { ...c, education: next } : c);
              }} />
              <Field label="Period" value={edu.period} onChange={(v) => {
                const next = [...content.education];
                next[i] = { ...next[i], period: v };
                setContent((c) => c ? { ...c, education: next } : c);
              }} />
              <Field label="Location" value={edu.location} onChange={(v) => {
                const next = [...content.education];
                next[i] = { ...next[i], location: v };
                setContent((c) => c ? { ...c, education: next } : c);
              }} />
            </div>
          ))}
        </Section>

        <Section title="About">
          {content.about.cells.map((cell, i) => (
            <div key={i} className="p-3 rounded bg-[#0a0a09] border border-[#333] space-y-2">
              <Field label="Label" value={cell.label} onChange={(v) => {
                const next = [...content.about.cells];
                next[i] = { ...next[i], label: v };
                update("about", { cells: next });
              }} />
              <Field label="Title" value={cell.title} onChange={(v) => {
                const next = [...content.about.cells];
                next[i] = { ...next[i], title: v };
                update("about", { cells: next });
              }} />
              <Field label="Body" value={cell.body} onChange={(v) => {
                const next = [...content.about.cells];
                next[i] = { ...next[i], body: v };
                update("about", { cells: next });
              }} textarea />
            </div>
          ))}
        </Section>

        <Section title="Projects">
          {content.projects.map((proj, i) => (
            <div key={i} className="p-3 rounded bg-[#0a0a09] border border-[#333] space-y-2">
              <Field label="Name" value={proj.name} onChange={(v) => {
                const next = [...content.projects];
                next[i] = { ...next[i], name: v };
                update("projects", next);
              }} />
              <Field label="Description" value={proj.desc} onChange={(v) => {
                const next = [...content.projects];
                next[i] = { ...next[i], desc: v };
                update("projects", next);
              }} textarea />
              <Field label="URL" value={proj.url} onChange={(v) => {
                const next = [...content.projects];
                next[i] = { ...next[i], url: v };
                update("projects", next);
              }} />
              <Field label="Tags (comma-separated)" value={proj.tags.join(", ")} onChange={(v) => {
                const next = [...content.projects];
                next[i] = { ...next[i], tags: v.split(",").map((t) => t.trim()).filter(Boolean) };
                update("projects", next);
              }} />
            </div>
          ))}
        </Section>

        <Section title="Contact">
          <Field label="Email" value={content.contact.email} onChange={(v) => update("contact", { ...content.contact, email: v })} />
          <Field label="Phone" value={content.contact.phone} onChange={(v) => update("contact", { ...content.contact, phone: v })} />
          <Field label="Location" value={content.contact.location} onChange={(v) => update("contact", { ...content.contact, location: v })} />
          <Field label="Tagline" value={content.contact.tagline} onChange={(v) => update("contact", { ...content.contact, tagline: v })} textarea />
        </Section>

        <Section title="Footer">
          <Field label="Name" value={content.footer.name} onChange={(v) => update("footer", { ...content.footer, name: v })} />
          <Field label="Location" value={content.footer.location} onChange={(v) => update("footer", { ...content.footer, location: v })} />
          <Field label="Status text" value={content.footer.statusText} onChange={(v) => update("footer", { ...content.footer, statusText: v })} />
        </Section>
      </div>
    </div>
  );
}
