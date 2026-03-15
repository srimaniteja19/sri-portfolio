export function Footer() {
  return (
    <footer
      className="flex flex-col justify-between gap-4 border-t px-6 py-5 md:flex-row md:items-center md:px-8"
      style={{ borderColor: "var(--ink)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.62rem", color: "var(--dim)" }}
    >
      <div className="flex items-center gap-6">
        <span>~/maniteja · united states</span>
        <div className="flex items-center gap-1.5" style={{ borderColor: "rgba(10,10,9,0.15)" }}>
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full" style={{ background: "var(--mint)" }} />
          systems nominal
        </div>
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/srimaniteja19" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--ink)]">
          github
        </a>
        <a href="https://www.linkedin.com/in/sri-maniteja-chinnam/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--ink)]">
          linkedin
        </a>
        <a href="mailto:srimaniteja.ch@gmail.com" className="transition-colors hover:text-[var(--ink)]">
          email
        </a>
        <span style={{ color: "rgba(13,13,13,0.2)" }}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
