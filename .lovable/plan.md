
# Shefa Growth Partners — Bilingual Landing Page

## Design
- **Style**: Warm & premium — dark navy/charcoal background (`#0F1923`, `#1A2533`) with gold accents (`#C9A84C`, `#D4AF37`), cream text for readability
- **Typography**: Clean sans-serif headings (Inter/DM Sans bold), lighter body text
- **Layout**: Full-width sections with generous whitespace, subtle gradients between sections

## Language
- **EN/ES toggle** in the navbar, defaulting to English. All content switches instantly (no page reload) using React state/context.

## Sections (following the wireframe from the PDF)

1. **Hero** — Bold headline ("Scale your revenue. Fix your system."), subheadline about +30% in 90 days, quick validation bullets, primary CTA button ("Apply for a strategy session"), secondary scroll link
2. **Problem** — Pain points list with icons, emotional copy about lacking a system
3. **Paradigm Shift** — Before/After comparison table (old way vs. new way)
4. **Solution (Growth System)** — Visual flow: Acquisition → Conversion → Monetization → Retention → Scaling, with brief descriptions
5. **Who It's For** — Two columns: "Yes, it's for you" vs "Not for you" — qualifying leads
6. **How I Work (Differentiation)** — Partnership model bullets, "If you don't grow, I don't earn"
7. **Results / Social Proof** — Case study cards with problem → action → result format
8. **Commercial System** — Sales engine capabilities (pipeline, CRM, scripts, training)
9. **Methodology** — 4-step process: Diagnose → Design → Implement → Optimize (visual loop/timeline)
10. **About Me** — Juan Sebastián Medrano bio, credentials, photo placeholder
11. **Emotional Close** — Bold statement: "You don't need more traffic. You need a better system."
12. **Final CTA** — Application form or Calendly-style button, scarcity note ("limited spots")

## Technical
- Single-page React app with smooth scroll navigation
- Language context provider for EN/ES switching
- Fully responsive (mobile-first)
- Subtle scroll animations (fade-in on scroll)
- All content from the PDF, both languages
