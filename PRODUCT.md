# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Everyone evaluating or collaborating with Sri Maniteja Chinnam: engineering leaders, hiring managers, founders, peers, indie hackers, open-source collaborators, and clients evaluating his engineering work, shipped systems, and availability for high-impact product, AI/LLM, and systems engineering work.

## Product Purpose

Personal engineering portfolio and release archive for Sri Maniteja Chinnam (Software Engineer @ Rivian, M.S. Data Science from University at Buffalo, 4+ years building production full-stack and AI/LLM applications). It exists to demonstrate shipped production work, technical depth, active build momentum, and clear paths to collaborate or reach out.

## Positioning

A real release record and living build log of 8+ shipped production applications in 2026 (including Refrainly at refrainly.dev, RoleWeaver, ReadThenDo, GenAI Concepts Explainer, Dev Job Board, AI Bookmarking, Roast My Resume) paired with enterprise systems engineering at Rivian.

## Operating Context

Visitors inspect shipped repositories, live deployment URLs, release cadence across 2026, active commit/feature progress on Refrainly, live GitHub contribution graphs and recent events (`@srimaniteja19`), work history, and direct contact/recruiter channels (`/hire`, email, GitHub, LinkedIn).

## Capabilities and Constraints

- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.
- Content driven by `src/data/portfolio-content.json` via `ContentProvider` (`useContent()`) and `src/data/projects-2026.ts` (`PROJECTS_2026`).
- Core proof sections to preserve and elevate:
  1. Hero & Core Identity
  2. Shipped Projects (`Showcase2026`: 2026 Release Timeline, filters, and project archive)
  3. Experience & Work History (`ExperienceSection`)
  4. Currently Building / Live Devlog (`DevlogSection` for Refrainly)
  5. Live GitHub Activity (`GitHubActivity` server component fetching real contributions & events for `srimaniteja19`)
  6. Technical Stack / Domain Capabilities (`SkillsMarquee` / domain index) & Process (`ProcessSection`)
  7. About & Contact / CTA (`About`, `CTASection`, `Footer`, `/hire` route link)
- Retire toy/filler sections from the main flow (Typing Test, Interactive Crew Characters, Learning Board, Hobbies, Collectible Action Figure, MouseTrail).

## Brand Commitments

- Industrial Neobrutalist Avionics & Telemetry Flight Logbook: architectural exposed structural borders (`2px`/`3px` carbon ink `#111210` with crisp mechanical shadow offsets `4px 4px 0 #111210`), limestone/titanium paper ground (`#F4F1EA`), high-visibility signal accents (international signal orange `#FF521B`, acid telemetry volt `#D4F534`, phosphor emerald `#10B981`, blueprint cobalt `#2563EB`), and genuine multi-voice typography rather than monospace-as-costume.

## Evidence on Hand

- 8 real 2026 repositories with commit windows, sizes, languages, and live Vercel/custom-domain deployments in `src/data/projects-2026.ts`.
- Live GitHub contribution calendar and event stream for `srimaniteja19`.
- Work history at Rivian (Software Engineer) and 4+ years of full-stack & AI/ML engineering (`src/data/portfolio-content.json`).
- Active flagship build: Refrainly (`refrainly.dev`), AI-generated daily learning campaigns up to 730 days with spaced repetition.

## Product Principles

1. Proof over self-scoring: demonstrate capability through shipped software, commit logs, architecture, and live deployments rather than arbitrary percentage bars or decorative gimmicks.
2. Artifact leads from the first viewport: visitors immediately encounter who Maniteja is, what he builds at Rivian and independently, and tangible links to live systems.
3. High-signal scannability for every visitor: whether a CTO scanning in 20 seconds or a peer exploring the 2026 build timeline, every section rewards inspection without filler.
