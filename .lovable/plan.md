

# Favicon, Visual Effects & Conversion Popup

## What we're building
Four enhancements: (1) Shefa favicon, (2) cinematic visual effects with particles and parallax, (3) enhanced animations throughout, (4) a conversion popup that appears on first visit.

---

## 1. Favicon
- Copy `src/assets/logo.png` to `public/favicon.png`
- Update `index.html`: add `<link rel="icon" href="/favicon.png">`, update `<title>` to "Shefa Growth Partners", update meta descriptions and OG tags
- Delete `public/favicon.ico` if it exists

## 2. Floating Particles + Parallax (Cinematic Feel)
- **New `src/components/FloatingParticles.tsx`**: Canvas-based or CSS particle system with subtle gold dots floating upward in the Hero section background. Lightweight — ~20 particles with slow drift animation using CSS keyframes (no heavy library).
- **Parallax on Hero**: Add a `useEffect` scroll listener that translates the Hero background glow and text at different speeds (`transform: translateY(scrollY * 0.3)`) for a cinematic depth effect.
- **Parallax on section dividers**: Subtle gold gradient lines between sections shift slightly on scroll.

## 3. Enhanced Animations
- **Staggered card entrances**: Problem, Results, Solution cards animate in one-by-one with increasing `animation-delay`
- **Counter animation on Results metrics**: Animate numbers from 0 to final value on scroll reveal (e.g., "+42%" counts up)
- **Text reveal on Hero**: Headline words fade in sequentially with slight upward movement
- **Hover micro-interactions**: Cards get a subtle glow border + scale on hover
- Add keyframes to `tailwind.config.ts`: `float`, `particle-rise`, `text-reveal`

## 4. Conversion Popup (First Visit)
- **New `src/components/ConversionPopup.tsx`**: Dialog/modal that appears after 5 seconds on first visit (uses `localStorage` to show only once per session)
- Content: Gold headline "Get Your Free Growth Diagnostic" / "Obtén tu Diagnóstico de Crecimiento Gratis", brief value prop, CTA button linking to the booking URL
- Styled with the existing Dialog component, gold accent border, backdrop blur
- Dismiss sets `localStorage` flag so it won't reappear
- Bilingual using `useLang()`
- Mounted in `Index.tsx`

---

## Files to create/modify
| File | Action |
|------|--------|
| `public/favicon.png` | Copy from logo asset |
| `index.html` | Favicon link, meta tags |
| `src/components/FloatingParticles.tsx` | New — gold particle animation |
| `src/components/ConversionPopup.tsx` | New — first-visit conversion modal |
| `src/components/sections/Hero.tsx` | Add particles, parallax, text reveal |
| `src/components/sections/Results.tsx` | Counter animation on metrics |
| `src/components/sections/Problem.tsx` | Staggered card animation |
| `src/pages/Index.tsx` | Mount ConversionPopup |
| `tailwind.config.ts` | New keyframes (float, particle-rise) |
| `src/index.css` | Particle + parallax utility classes |

