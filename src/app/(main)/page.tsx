import { Hero } from "@/components/hero";
import { ScrollTicker } from "@/components/scroll-ticker";
import { SectionDivider } from "@/components/section-divider";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Showcase2026 } from "@/components/showcase-2026";
import { ProcessSection } from "@/components/process-section";
import { ExperienceSection } from "@/components/experience-section";
import { DevlogSection } from "@/components/devlog-section";
import { GitHubActivity } from "@/components/github-activity";
import { About } from "@/components/about";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LogbookRail } from "@/components/logbook-rail";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full overflow-x-clip">
      <LogbookRail />
      <main className="min-w-0 flex-1">
        <Hero />
        <ScrollTicker />

        <SectionDivider
          label="Shipped Projects"
          right="8 repositories · Feb — Aug 2026"
        />
        <Showcase2026 />

        <SectionDivider
          label="Currently Building"
          right="Refrainly · live at refrainly.dev"
        />
        <DevlogSection />

        <SectionDivider
          label="Experience"
          right="Work history & education"
        />
        <ExperienceSection />

        <section id="github" className="scroll-mt-16">
          <SectionDivider
            label="GitHub Activity"
            right="@srimaniteja19"
          />
          <GitHubActivity />
        </section>

        <section id="skills" className="scroll-mt-16">
          <SectionDivider
            label="Skills & Process"
            right="Tech stack & how I work"
          />
          <SkillsMarquee />
          <ProcessSection />
        </section>

        <SectionDivider
          label="About"
          right="Background & focus"
        />
        <About />

        <SectionDivider
          label="Contact"
          right="Let's build something"
        />
        <CTASection />

        <Footer />
      </main>
    </div>
  );
}
