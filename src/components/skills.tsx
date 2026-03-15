const skillCategories = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Vue.js",
      "Angular",
      "TailwindCSS",
      "Redux",
      "Zustand",
      "Framer Motion",
      "Shadcn",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "tRPC",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "GraphQL",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "OpenAI API",
      "LangChain",
      "Vercel AI SDK",
      "HuggingFace",
      "Pinecone",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Vercel",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Azure",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Jest",
      "Playwright",
      "Cypress",
      "Webpack",
      "Vite",
      "Turborepo",
      "pnpm",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center justify-center gap-3">
          <h2 className="text-center text-3xl font-bold text-[var(--foreground)]">
            technical skills
          </h2>
          <span
            className="rounded-lg px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: "var(--accent-muted)", color: "var(--foreground)" }}
          >
            In Motion
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                {category.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
