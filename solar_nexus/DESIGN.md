---
name: Solar Nexus
colors:
  surface: '#0a1422'
  surface-dim: '#0a1422'
  surface-bright: '#303a49'
  surface-container-lowest: '#050e1c'
  surface-container-low: '#121c2a'
  surface-container: '#16202f'
  surface-container-high: '#212a39'
  surface-container-highest: '#2c3545'
  on-surface: '#d9e3f7'
  on-surface-variant: '#bbc9ce'
  inverse-surface: '#d9e3f7'
  inverse-on-surface: '#273140'
  outline: '#869398'
  outline-variant: '#3c494d'
  surface-tint: '#35d7fd'
  primary: '#b6edff'
  on-primary: '#003641'
  primary-container: '#38d9ff'
  on-primary-container: '#005c6e'
  inverse-primary: '#00677c'
  secondary: '#ffb955'
  on-secondary: '#452b00'
  secondary-container: '#c48313'
  on-secondary-container: '#3c2500'
  tertiary: '#ffe0ae'
  on-tertiary: '#422d00'
  tertiary-container: '#febd37'
  on-tertiary-container: '#6f4e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b1ecff'
  primary-fixed-dim: '#35d7fd'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5e'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#fcbb35'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#0a1422'
  on-background: '#d9e3f7'
  surface-variant: '#2c3545'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-telemetry:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an ultra-premium, high-precision engineering environment tailored for field technicians, photovoltaic system architects, and utility-scale solar diagnosticians. The brand identity fuses Tesla's functional telemetry minimalism with Apple's material restraint: dark, cinematic, surgically accurate, and noise-free.

The design movement combines **Precision Glassmorphism** with **Technical Minimalism**:
- Translucent deep-space backdrops layered with sub-pixel gradient borders.
- Monochromatic baseline structures interrupted only by deliberate, data-driven luminescent signals.
- Atmospheric restraint where glowing interactive nodes communicate instantaneous status, health, and electrical flow without visual excess.
- High-confidence hierarchy designed for rapid diagnostic triage under varying operational light conditions.

## Colors

The system employs an authoritative dark-mode architecture engineered to reduce ocular fatigue during prolonged analytical sessions while highlighting crucial telemetry values.

- **Primary Canvas (`#07111F`):** Deep Midnight Navy acting as the terminal void. Never absolute black (`#000000`), preserving perceptual depth.
- **Surface Elevation (`#0D1B2A`):** Deep Obsidian Blue applied to cards, telemetry modules, and drawer sheets, blended with varying levels of opacity (`80%` to `90%`).
- **Primary Interactive & Diagnostic (`#38D9FF`):** Electric Cyan representing dynamic power flow, optimal operational states, active inputs, and interactive telemetry nodes.
- **Secondary Alert & Voltage (`#FFB547`):** Solar Amber indicating high-voltage warnings, thermal thresholds, and state-of-charge warnings.
- **Muted Structural Outlines (`#1E293B`, `#334155`):** Sub-pixel structural grid dividers and card borders at varying opacities to delimit modules without high contrast friction.
- **Typography & Content Hierarchy:** Primary text in Soft White (`#F8FAFC`), secondary readouts in Slate Gray (`#94A3B8`), and muted metadata in Steel Dust (`#64748B`).

## Typography

Typography establishes an uncompromising, surgical tone. **Space Grotesk** commands display headings, diagnostic metrics, telemetry callouts, and tags, infusing the UI with geometric precision and aerospace pedigree. **Inter** handles high-density technical logs, procedural documentation, and long-form troubleshooting guidance for maximum sustained legibility.

Tabular figures (`font-variant-numeric: tabular-nums`) must be applied globally to all telemetry values, timestamp logs, inverter voltage numbers, and diagnostic code indicators to avoid jitter during real-time data streams.

## Layout & Spacing

The system runs on an 8pt spatial grid built around a responsive 12-column dynamic framework (collapsing to 8 columns on tablet and 4 on mobile).

- **Desktop (1280px+):** Fluid content container clamped at 1600px width with 2.5rem (`40px`) margins and 1.5rem (`24px`) gutters. Multi-pane diagnostic split views (e.g., topology tree on the left, telemetry readouts center, remediation protocol right).
- **Tablet (768px – 1279px):** Adaptive layouts auto-stack dense sidebars into sliding bottom sheets or toggleable side rails. Margin compresses to 1.5rem (`24px`).
- **Mobile (< 768px):** 1rem (`16px`) outer margins with single-column linear stacked modules. Critical status banners lock to the top safe area; real-time metrics prioritize primary inverted metrics over historical curves.

## Elevation & Depth

Elevation is expressed through translucent optical stratification and selective bioluminescent glows rather than classic dropped shadows:

- **Level 0 (Canvas Void):** `#07111F` flat surface.
- **Level 1 (Panels & Structural Modules):** Background `#0D1B2A` at `80%` opacity, `backdrop-filter: blur(16px)`, with a subtle `1px` border of `#1E293B` (or a dynamic top-to-bottom gradient fading from `rgba(56, 217, 255, 0.15)` to `rgba(255, 255, 255, 0.02)`).
- **Level 2 (Active Cards & Overlays):** Background `#102238` at `90%` opacity, `backdrop-filter: blur(24px)`, `1px` border of `#334155`. Box shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.45)`.
- **Level 3 (Focused Diagnostics & Critical Modals):** Accentuated by optical ambient light. If state is nominal or interactive, use an Electric Cyan back-glow: `0 0 24px 0 rgba(56, 217, 255, 0.18)`. For high-voltage warnings and alerts, shift to Solar Amber: `0 0 24px 0 rgba(255, 181, 71, 0.22)`.

## Shapes

The design uses tight, technical corners (`roundedness: 1`). Radii stay between `0.25rem` (`4px`) and `0.5rem` (`8px`) across interactive controls and modular panels, giving physical, instrument-grade tactility similar to precision test gear. Pill shapes are reserved strictly for high-priority telemetry status capsules and interactive chips to visually isolate micro-status points from structural layout blocks.

## Components

### Buttons
- **Primary Technical Action:** Background `#38D9FF`, text `#07111F` (bold, uppercase label tracking). On hover, activate an electric ambient glow (`box-shadow: 0 0 16px rgba(56, 217, 255, 0.4)`).
- **Secondary / Ghost:** Transparent surface, `1px` border of `#334155`, text `#F8FAFC`. On hover, border shifts to `#38D9FF` with background `rgba(56, 217, 255, 0.06)`.
- **Cautionary / High-Voltage:** Background `rgba(255, 181, 71, 0.12)`, `1px` border `#FFB547`, text `#FFB547`.

### Telemetry Status Chips
- Height: `24px`. Full pill border radius (`9999px`).
- Nominal: Background `rgba(56, 217, 255, 0.08)`, border `1px solid rgba(56, 217, 255, 0.3)`, text `#38D9FF`, accompanied by a pulsing `6px` indicator beacon.
- Warning/Degraded: Background `rgba(255, 181, 71, 0.08)`, border `1px solid rgba(255, 181, 71, 0.4)`, text `#FFB547`.

### Hardware Diagnostic Cards
- Layered glassmorphic container (`#0D1B2A` at `85%` blur) with a `1px` gradient border.
- Header displays component identifier (e.g., `INV-NORTH-04`) in `Space Grotesk` with monospace telemetry metrics (e.g., `642.4 VDC`) right-aligned in tabular font.
- Interactive states feature subtle micro-interactions: borders brighten upon hover, displaying an illuminated trace along the top border edge.

### Input Fields & Selectors
- Background: `#07111F` inset with `1px` outline `#1E293B`.
- Text: `#F8FAFC`, placeholder `#64748B`.
- Focus State: Sub-pixel glow transition to `#38D9FF` border with `box-shadow: 0 0 0 1px #38D9FF`.

### Checkboxes & Radios
- Sharp, soft-beveled bounds (`2px` radius for checkboxes; full round for radios).
- Inactive: `#1E293B` background with `#334155` border.
- Selected: Solid `#38D9FF` fill with Midnight Navy (`#07111F`) iconography.

### High-Voltage Warning Banners
- Glass-backed banner surfaced in `rgba(255, 181, 71, 0.07)` with an amber hazard-stripe micro-accent along the left boundary (`3px` solid `#FFB547`).
- Text in Soft White with inline amber monospace codes (e.g., `ERR_ARC_FAULT_DETECTED`).

### Navigation Breadcrumbs & Tabbed Filters
- Breadcrumbs styled with angled technical slashes (`/`), muted in `#64748B` with the terminal node illuminated in `#38D9FF`.
- Segmented tab filters: Inset slate container holding low-profile segmented tabs; active tab transitions with a crisp surface lift (`#1E293B`) and white text.