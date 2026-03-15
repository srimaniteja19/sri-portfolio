export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-[var(--foreground)]">
          let&apos;s connect
        </h2>
        <p className="mb-10 text-center text-[var(--muted)]">
          I&apos;m always open to interesting conversations and collaborations.
          Feel free to reach out!
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
          <a
            href="mailto:srimaniteja.ch@gmail.com"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            email: srimaniteja.ch@gmail.com
          </a>
          <a
            href="tel:+17169235404"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            phone: (716) 923-5404
          </a>
          <a
            href="https://github.com/srimaniteja19"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            github: github.com/srimaniteja19
          </a>
          <a
            href="https://www.linkedin.com/in/sri-maniteja-chinnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            linkedin: linkedin.com/in/sri-maniteja-chinnam
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          United States
        </p>
      </div>
    </section>
  );
}
