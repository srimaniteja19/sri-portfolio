const builds = [
  {
    title: "Internal E-Commerce Platform",
    tags: ["Next.js 14", "TypeScript", "tRPC", "React Server Components"],
    description: "Architected and deployed a high-performance platform serving 25K+ daily users with 200ms avg page load.",
    impact: "Improved conversion by 15% with real-time personalized recommendations; increased search accuracy by 22% via semantic search (Pinecone + OpenAI). Reduced bundle size by 40% and Lighthouse score from 72 to 95.",
  },
  {
    title: "AI-Powered Recommendations & Search",
    tags: ["Vercel AI SDK", "OpenAI", "Pinecone", "RAG"],
    description: "Built real-time personalized recommendations for 15K+ daily users across 10K+ SKUs.",
    impact: "Semantic search with vector indexing, chunking, metadata filters, and reranking. Latency guardrails and offline evaluation loop in production.",
  },
  {
    title: "Enterprise SaaS Platform",
    tags: ["React", "TypeScript", "Node.js", "WebSockets"],
    description: "Developed responsive platform for 20K+ daily users with real-time data sync.",
    impact: "Reduced page load from 3.2s to 1.1s; cut support tickets by 28%. REST APIs with PostgreSQL—latency from 850ms to 595ms.",
  },
  {
    title: "AI Ticket Routing System",
    tags: ["HuggingFace", "Transformers", "Python"],
    description: "Automated ticket classification and routing.",
    impact: "87% accuracy on 500+ daily requests; 60% reduction in manual triage.",
  },
  {
    title: "Production CI/CD & Observability",
    tags: ["GitHub Actions", "Jest", "Playwright", "AWS"],
    description: "End-to-end testing, automated rollbacks, environment promotion.",
    impact: "40% fewer production incidents; SLOs and on-call runbooks for high availability.",
  },
  {
    title: "Auth & Security Hardening",
    tags: ["OAuth2", "JWT", "httpOnly", "CSRF"],
    description: "Secure authentication with token rotation and session protection.",
    impact: "85% reduction in auth-related security findings.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-[var(--foreground)]">
          what i&apos;ve built
        </h2>

        <div className="space-y-6">
          {builds.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: "var(--accent-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[var(--muted)]">{item.description}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                <span className="font-medium text-[var(--foreground)]">Impact: </span>
                {item.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
