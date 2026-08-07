import { Hero } from "@/components/hero";
import { ScrollTicker } from "@/components/scroll-ticker";
import { SectionDivider } from "@/components/section-divider";
import { InteractiveCharacters } from "@/components/interactive-characters";
import { TypingTest } from "@/components/typing-test";
import { LearningBoard } from "@/components/learning-board";
import { SkillsMarquee } from "@/components/skills-marquee";
import { Showcase2026 } from "@/components/showcase-2026";
import { ProcessSection } from "@/components/process-section";
import { ExperienceSection } from "@/components/experience-section";
import { DevlogSection } from "@/components/devlog-section";
import { GitHubActivity } from "@/components/github-activity";
import { About } from "@/components/about";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { MouseTrail } from "@/components/mouse-trail";
import { Hobbies } from "@/components/hobbies";
import { ActionFigureSection } from "@/components/action-figure-section";

export default function Home() {
  return (
    <MouseTrail>
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ScrollTicker />
      <section id="skills" className="scroll-mt-24">
        <SectionDivider label="skills" right="// grouped by domain" />
        <SkillsMarquee />
      </section>
      <SectionDivider label="the crew" right="// your dev team in one person" />
      <InteractiveCharacters />
      <SectionDivider label="shipped so far" right="// 7 projects · release timeline" />
      <Showcase2026 />
      <SectionDivider label="how i work" right="// 4-step process" />
      <ProcessSection />
      <SectionDivider label="experience" right="// work history" />
      <ExperienceSection />
      <SectionDivider label="currently building" right="// devpath-ai · live" />
      <DevlogSection />
      <section id="github" className="scroll-mt-24">
        <SectionDivider label="github" right="// @srimaniteja19" />
        <GitHubActivity />
      </section>
      <SectionDivider label="typing test" right="// how fast do you code?" />
      <TypingTest />
      <SectionDivider label="learning board" right="// what I want to learn" />
      <LearningBoard />
      <SectionDivider
        label="hobbies & life outside code"
        right="// what i do when the terminal is closed"
      />
      <Hobbies />
      <SectionDivider label="about" />
      <About />
      <SectionDivider label="contact" right="// let's build something" />
      <CTASection />
      <SectionDivider label="collectible" right="// full-stack AI engineer" />
      <ActionFigureSection />
      <Footer />
    </main>
    </MouseTrail>
  );
}
