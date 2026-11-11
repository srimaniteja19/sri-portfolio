import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Showcase2026 } from "@/components/showcase-2026";
import { ProcessSection } from "@/components/process-section";
import { ExperienceSection } from "@/components/experience-section";
import { DevlogSection } from "@/components/devlog-section";
import { GitHubActivity } from "@/components/github-activity";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LogbookRail } from "@/components/logbook-rail";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full overflow-x-clip">
      <LogbookRail />
      <main className="min-w-0 flex-1">
        <Hero />

        <SectionDivider
          label="Shipped Projects"
          right="12 repositories · Feb — Oct 2026"
        />
        <Showcase2026 />

        <SectionDivider
          label="Active Builds"
          right="Hoard · Refrainly · Mission: Debt Zero"
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
          label="Contact"
          right="srimaniteja.ch@gmail.com"
        />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
