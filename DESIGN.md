---
name: Sri Maniteja Chinnam — Flight Logbook & Release Archive
description: Industrial Neobrutalist Avionics & Telemetry Flight Logbook for full-stack and AI systems engineering.
colors:
  electric-cobalt: "#2546F0"
  glacial-mint: "#38F2C2"
  iris-ice: "#A5B4FC"
  ice-cyan: "#A5F3FC"
  sky-cobalt: "#60A5FA"
  studio-chalk: "#F2F4F7"
  silver-slate: "#E4E8F0"
  pure-white: "#FFFFFF"
  obsidian-ink: "#0B0F17"
  slate-secondary: "#334155"
  steel-muted: "#475569"
  cool-silver: "#CBD5E1"
typography:
  display:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(3.3rem, 6.8vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
  title-md:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 900
    lineHeight: 1
  title-sm:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.1
  title-xs:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1.1
  body-lg:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 400
    lineHeight: 1.6
  label-lg:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
  label-md:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.64rem"
    fontWeight: 700
    lineHeight: 1.4
  label-xs:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  none: "0px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.electric-cobalt}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.glacial-mint}"
    textColor: "{colors.obsidian-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-surface:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.obsidian-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  card-chassis:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.obsidian-ink}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Sri Maniteja Chinnam — Flight Logbook & Release Archive

## Overview

**Creative North Star: "The Industrial Telemetry Flight Logbook"**

This design system treats a software engineer's portfolio not as a promotional brochure or pastel sticker wall, but as a calibrated flight-test dossier and living release manifest. Inspired by Rivian hardware-software field specifications, NASA Apollo mission flight plans, and Swiss railway timetables, every surface is locked into an exposed structural chassis with crisp mechanical borders, high-visibility signal colors, and real-time operational telemetry.

Density is deliberate and architectural: sections interlock through exposed `2.5px` structural rules, tabular coordinate readouts, discrete block-stepped readiness gauges, and a sticky companion index rail that tracks scroll depth across the document. Instead of using monospace as a decorative costume for the entire website, three distinct typographic voices divide labor strictly between condensed industrial headlines, humanist-grotesk prose, and tabular telemetry data.

Confirmed anti-references rejected by this system include rainbow pastel bento grids, cartoon stick-figure illustrations, arbitrary skill percentage bars (`95% Next.js`), monospace-everywhere body text, and eyebrow/kicker labels stacked above headings.

**Key Characteristics:**
- Exposed `2.5px` carbon-ink structural chassis with crisp `4px 4px 0px` mechanical offset shadows.
- Warm titanium ledger stock paired with high-visibility industrial signal accents (Signal Orange, Telemetry Volt, Field Emerald).
- Strict three-voice typography: condensed industrial display (`Big Shoulders`), high-legibility technical sans (`Chivo`), and tabular instrumentation mono (`JetBrains Mono`).
- Real interactive telemetry instrumentation (`<canvas>` oscilloscope waveform bench and stepped 10-block readiness matrices).

## Colors

The palette pairs warm, low-glare limestone and titanium paper grounds with high-contrast carbon ink and industrial safety/telemetry accents.

### Primary
- **Signal Orange** (`#FF521B`): Primary action triggers, live probe crosshairs, current deployment markers, and high-priority operational callouts.

### Secondary
- **Telemetry Volt** (`#D9F938`): Active selection states, oscilloscope primary trace, timeline milestone badges, and high-salience specification highlights.

### Tertiary
- **Field Emerald** (`#10C982`): Verified production readiness blocks, live endpoint indicators, and secondary harmonic traces.
- **Blueprint Cobalt** (`#2B5CE6`): Architectural accent for deep-mode telemetry and secondary reference states.

### Neutral
- **Titanium Paper** (`#F4F1EA`): Primary page ground (`--bg`), warm and glare-free under extended reading.
- **Anodized Stone** (`#ECE7DC`): Recessed structural panels, companion rail ground, and card footer strips (`--surface`).
- **Elevated Sheet** (`#FAF8F3`): Raised specification cards and instrument modules (`--surface-elevated`).
- **Carbon Chassis** (`#111210`): Primary ink, structural `2.5px` borders, hard offset shadows, and inverted bezel headers (`--ink`).
- **Graphite Secondary** (`#3D3E3A`): Long-form body descriptions and specification summaries (`--dim`), maintaining >7:1 contrast on Titanium Paper.
- **Slate Muted** (`#4A4B46`): Secondary metadata labels and timestamps (`--muted`).

### Named Rules
**The High-Contrast Signal Rule.** Text placed over `Telemetry Volt` (`#D9F938`) or `Field Emerald` (`#10C982`) must always use `Carbon Chassis` (`#111210`), never white; text placed over `Signal Orange` (`#FF521B`) or `Carbon Chassis` (`#111210`) must use crisp white (`#FFFFFF`) or `Titanium Paper` (`#F4F1EA`).

**The Surface Role Rule.** Color owns whole structural strips, headers, and interactive states rather than floating as decorative blobs or gradients.

## Typography

**Display Font:** `Big Shoulders` (with `sans-serif` fallback)
**Body Font:** `Chivo` (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Label/Mono Font:** `JetBrains Mono` (with `ui-monospace, monospace` fallback)

**Character:** Compressed, authoritative industrial stenciling (`Big Shoulders`) commands section headers and project titles, while `Chivo` delivers clean, readable prose at 65–75ch and `JetBrains Mono` handles commit hashes, dates, coordinates, and numeric readouts with `font-variant-numeric: tabular-nums`.

### Hierarchy
- **Display** (`900`, `clamp(3.3rem, 6.8vw, 5.75rem)`, `line-height: 0.88`): Primary hero identity banner, uppercase with `-0.03em` tracking.
- **Headline** (`900`, `clamp(2.2rem, 4vw, 3.4rem)`, `line-height: 0.92`): Major logbook section headers, uppercase with `text-wrap: balance`.
- **Title** (`900`, `1.6rem–2.1rem`, `line-height: 1.0`): Project specification titles, career roles, and subsystem headers.
- **Body** (`400–500`, `0.92rem–1.08rem`, `line-height: 1.6`): Project blurbs, architectural summaries, and experience narratives capped at `65ch–68ch`.
- **Label** (`700`, `0.62rem–0.74rem`, `letter-spacing: 0.06em`, `uppercase`): Bezel headers, filter controls, commit hashes, and tabular telemetry readouts.

### Named Rules
**The No-Eyebrow Rule.** Headings (`h1`, `h2`, `h3`) never carry a small monospace kicker or eyebrow label stacked directly above them. The heading leads on its own weight; metadata belongs in structural bezel bars, sidebars, or inline badges beside the heading.

**The Monospace Discipline Rule.** `JetBrains Mono` is reserved strictly for code identifiers, commit hashes, ISO dates, coordinates, and interactive controls—never for paragraphs or display headings.

## Layout

The page is organized as a continuous structural chassis (`flex min-h-screen`) pairing a sticky `210px` left-hand companion index rail (`LogbookRail`, visible at `xl` viewports) with a fluid main column bounded by `2.5px` horizontal and vertical rules.

Interior sections use a `max-w-7xl` (`1280px`) container with `16px` (`px-4`) horizontal padding on mobile and `32px` (`md:px-8`) on desktop, and vertical rhythm of `48px` (`py-12`) to `64px` (`md:py-16`). Multi-column splits use explicit `2.5px` solid `var(--ink)` divider tracks (`lg:grid-cols-[1.15fr_2.5px_0.85fr]` in the Flight Deck; `lg:grid-cols-[320px_2.5px_1fr]` in the Service Record). In the 2026 Release Manifest, the flagship project (`Refrainly`) spans two columns (`md:col-span-2`) to establish asymmetric visual hierarchy.

## Elevation & Depth

Depth is strictly mechanical and neobrutalist: zero-blur hard offset shadows (`var(--shadow-hard)`) pair with `2.5px` solid carbon-ink borders to make instrument modules and project sheets read as physical plates bolted to a chassis. Diffuse drop shadows, glassmorphism (`backdrop-filter: blur`), and glowing neon halos are forbidden.

### Shadow Vocabulary
- **Standard Chassis Offset** (`box-shadow: 4px 4px 0px var(--ink)`): Applied to primary specification cards, the release timeline container, and the telemetry oscilloscope console (`.nb-box`).
- **Compact Control Offset** (`box-shadow: 2.5px 2.5px 0px var(--ink)`): Applied to interactive buttons (`.nb-btn`), active index rail links, and compact credential boxes.

### Named Rules
**The Mechanical Press Rule.** Interactive buttons (`.nb-btn`) rest at `2.5px 2.5px 0px var(--ink)`, lift to `translate(-2px, -2px)` with `4px 4px 0px var(--ink)` on `:hover`, and depress to `translate(1px, 1px)` with `1px 1px 0px var(--ink)` on `:active`.

## Shapes

Every container, button, badge, and gauge uses crisp `0px` square mitered corners (`border-radius: 0px`) framed by `2px` or `2.5px` solid `var(--ink)` strokes. Progress and readiness indicators use discrete 5-block or 10-block stepped rectangular matrices rather than rounded pill bars. Icons are custom-authored inline SVGs drawn with `2px–2.2px` square-capped strokes.

## Components

### Buttons (`.nb-btn`)
- **Shape:** Square corners (`0px` radius), `2.5px solid var(--ink)` border.
- **Primary:** `Signal Orange` (`#FF521B`) background, `#FFFFFF` text, `12px 20px` padding, uppercase `JetBrains Mono` (`0.76rem`, `700`).
- **Hover / Focus:** Translates `(-2px, -2px)` with shadow expanding to `4px 4px 0px var(--ink)` over `150ms cubic-bezier(0.16, 1, 0.3, 1)`. `:focus-visible` renders a `2.5px solid var(--signal)` outline with `2px` offset.
- **Secondary / Surface:** `Telemetry Volt` (`#D9F938`) with `#111210` text for secondary CTAs; `Elevated Sheet` (`#FAF8F3`) for neutral actions.

### Chips & Filter Controls
- **Style:** `2.5px solid var(--ink)` border, square corners, `JetBrains Mono` `0.68rem` bold uppercase with an inline count badge.
- **State:** Unselected chips sit on `--surface-elevated`; selected (`aria-pressed="true"`) invert to `var(--ink)` background with `var(--bg)` text and a `Telemetry Volt` counter badge.

### Cards / Specification Containers (`.nb-box`)
- **Corner Style:** `0px` square corners.
- **Background:** `Elevated Sheet` (`#FAF8F3`) body with a `2.5px` bordered top specification strip (colored by project accent role) and a `Anodized Stone` (`#ECE7DC`) action footer.
- **Shadow Strategy:** `4px 4px 0px var(--ink)` at rest; highlighted cards add a `4px` `Signal Orange` ring.
- **Border:** `2.5px solid var(--ink)`.
- **Internal Padding:** `24px` (`p-6`) body padding; `10px 16px` header strip padding.

### Navigation (`Header` & `LogbookRail`)
- **Top Header:** Sticky `border-b-[2.5px]` bar with an inverted identity stamp (`[maniteja REV.26]`), live Rivian status badge, uppercase mono section links, Display Optics switcher (`Titanium Day`, `Night Flight`, `Phosphor CRT`, `High-Contrast Mono`), and primary comms trigger.
- **Companion Index Rail (`LogbookRail`):** Sticky left-hand `210px` rail displaying `SYS.INDEX`, 8 chapter jump switches (highlighting the active scroll section in `Telemetry Volt`), and a 10-block stepped `LOG DEPTH` scroll gauge at the foot.

### Interactive Telemetry Scope (`Hero` Oscilloscope & `ProjectTimeline`)
- **Telemetry Scope:** HTML5 `<canvas>` oscilloscope over a 10-division etched graticule (`#0D110F` ground, `#D9F938` primary trace, `#10C982` harmonic trace) with pointer-reactive frequency/amplitude modulation, detented channel selector buttons (`CH1`, `CH2`, `CH3`), and a `HOLD TRACE` toggle.
- **2026 Flight Window Timeline:** Calibrated Feb–Aug 2026 horizontal vernier axis with 3-tier staggered project pins (`top: 0px / 42px / 84px`) that smooth-scroll to and highlight the corresponding specification card on click.

## Do's and Don'ts

### Do:
- **Do** lead every section and card directly with its `Big Shoulders` heading (`h1`, `h2`, `h3`) without placing a small eyebrow or kicker label above it.
- **Do** use `font-variant-numeric: tabular-nums` (`.tabular-nums` / `.font-data`) on all dates, commit hashes, counts, percentages, and coordinates.
- **Do** represent readiness, scroll depth, and subsystem completion with discrete stepped block grids (`5` or `10` cells) rather than arbitrary percentage bars.
- **Do** maintain a minimum `4.5:1` contrast ratio on all body copy and badges (`#111210` ink on `#D9F938` volt and `#10C982` emerald; `#FFFFFF` on `#FF521B` signal orange).

### Don't:
- **Don't** use `JetBrains Mono` for body paragraphs or display headlines; keep prose in `Chivo` and headlines in `Big Shoulders`.
- **Don't** use Unicode symbols (`↗`, `☰`, `◐`) or emojis (`🧠`, `🚢`, `⚡`) as UI icons; always use inline SVGs with `2px` square-capped strokes.
- **Don't** apply decorative CSS background grids (`.graticule-bg`), glassmorphic blurs, or gradient text to layout containers; reserve graticule lines strictly for the `<canvas>` oscilloscope instrument.
- **Don't** create uniform grids of identical icon-heading-text cards; give flagship artifacts (`Refrainly`) asymmetric multi-column prominence (`md:col-span-2`).

