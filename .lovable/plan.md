

# UX/UI Audit & Optimization Plan

## Issues Found

### 1. Navbar — Active link not highlighted on scroll
The nav links don't indicate which section is currently visible. No scroll-spy behavior.

### 2. Hero — CTA button not full-width on mobile
The primary CTA is left-aligned and narrow on mobile. Should be full-width for better tap targets.

### 3. Hero — Too much empty space above fold
Large gap between navbar and hero content. The hero could benefit from a more compact top area.

### 4. Paradigm Shift table — Poor mobile readability
Two-column table with small text on mobile. Columns get cramped at 375px.

### 5. Solution (5-column grid) — Too small on desktop, stacked on mobile
The 5-column layout makes each card very narrow. The arrow connectors between cards are barely visible.

### 6. Results cards — No visual hierarchy for the key metric
The result number ("+42%", "35 meetings") should pop more. Currently same size as other text.

### 7. Client Logos — Some logos likely too small at h-10
10px height may be too small for some logos. No fallback if images fail to load.

### 8. Methodology — Vertical timeline dots misaligned on certain viewport sizes
The absolute positioning of numbered circles can shift slightly.

### 9. FinalCTA — No hover/focus state on button, no link destination
The CTA button has no `href` — it's a dead button, not a link.

### 10. Footer — Too minimal
No social links, no secondary nav, no contact info.

### 11. No active nav indicator
Navbar doesn't show which section is in view.

### 12. Sections feel monotonous
Alternating `bg-section-alt` and default bg, but the visual rhythm is flat — no variation in section heights, no accent dividers.

---

## Optimization Plan

### A. Navbar enhancements
- Add scroll-spy hook to highlight active section in nav
- Add subtle shadow on scroll (`scrollY > 0`)
- Improve mobile menu animation (slide-down transition)

### B. Hero polish
- Make CTA full-width on mobile (`w-full sm:w-auto`)
- Add subtle floating animation or pulse to CTA button
- Reduce top padding slightly on mobile

### C. Paradigm Shift — Mobile-friendly
- On mobile, stack as individual cards instead of a cramped 2-col table
- Add strikethrough styling on "Old Way" items for visual contrast

### D. Solution section — Visual flow improvement
- Change to 3+2 grid on desktop instead of 5-col (cards too narrow)
- Make arrow connectors more visible with proper SVG or border treatment
- Add step numbers (1-5) for clarity

### E. Results — Highlight key metrics
- Pull the result metric into a large, bold, gold-colored number
- Add a subtle card hover lift effect

### F. Client Logos — Better sizing
- Increase logo height to `h-12` with `max-w-[140px]`
- Add `brightness-0 invert` for dark-bg-compatible rendering of dark logos

### G. FinalCTA — Make it actionable
- Wrap CTA button in an `<a href>` (mailto or Calendly placeholder)
- Add subtle glow/pulse animation to draw attention

### H. Footer — Add substance
- Add social links (LinkedIn), email, and secondary nav links
- Add a divider line above

### I. Global polish
- Add section divider accents (subtle gold gradient line between key sections)
- Improve scroll-reveal to stagger children (cards appear one-by-one, not all at once)
- Add `scroll-margin-top` to sections so navbar doesn't overlap anchored content

---

## Files to modify
- `src/components/Navbar.tsx` — scroll-spy, shadow on scroll, mobile animation
- `src/components/sections/Hero.tsx` — CTA width, spacing
- `src/components/sections/ParadigmShift.tsx` — mobile layout, strikethrough
- `src/components/sections/Solution.tsx` — grid layout, step numbers, arrows
- `src/components/sections/Results.tsx` — metric highlight, hover effects
- `src/components/sections/ClientLogos.tsx` — logo sizing
- `src/components/sections/FinalCTA.tsx` — link wrapper, pulse animation
- `src/components/Footer.tsx` — social links, nav
- `src/index.css` — scroll-margin-top, section dividers, stagger animations
- `src/hooks/useScrollReveal.ts` — optional stagger support
- New: `src/hooks/useActiveSection.ts` — scroll-spy hook for navbar

