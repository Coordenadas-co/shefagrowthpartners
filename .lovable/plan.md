

# Parallax + Hormozi-Style Conversion Overhaul

## Two Parts

### Part 1: Parallax on HowIWork & EmotionalClose
Add `useParallax` hook to both sections so background images shift subtly on scroll, matching the Hero's cinematic depth.

### Part 2: Hormozi-Style Audit & Rewrite

**The Brutal Audit:**

- **Hero headline talks about "the plane" not "the vacation."** "Scale your revenue. Fix your system." — the prospect doesn't care about YOUR system. They care about their bank account, their pipeline, their stress level at 2am.
- **No specific guarantee.** "Performance-based partnership" is vague. What happens if it doesn't work? Say it plainly.
- **CTA is weak.** "Apply for a Strategy Session" sounds like homework. Nobody wakes up wanting to "apply" for things.
- **Too many sections.** Problem → ParadigmShift → Solution → WhoItsFor → HowIWork → Results → ClientLogos → CommercialSystem → Methodology → About → EmotionalClose → FinalCTA = 12 sections. That's a novel, not a landing page. The prospect loses momentum.
- **Results are buried.** Social proof (the strongest conversion lever) is section 8 of 12. It should be within the first 3 scroll-lengths.
- **No objection handling.** Zero FAQ or "but what if..." section.
- **"Who it's for" is fluff.** "$500K+ ARR" is the only real qualifier. The rest is generic.
- **EmotionalClose says nothing new.** "You don't need more traffic. You need a better system." — just repeats the hero. Wasted space.
- **CommercialSystem + Solution + Methodology = 3 sections saying "I'll fix your process" in different words.**

**Value Equation rewrite:**
- **Dream outcome:** "Add $50K-$200K/mo to your pipeline in 90 days without hiring a single rep."
- **Likelihood of success:** "I've done this 30+ times for B2B companies doing $500K-$10M ARR. Here are the receipts."
- **Time delay:** "We start executing in week 1. First results by day 30. Full system live by day 90."
- **Effort/sacrifice:** "You give me 2 hours/week and access to your CRM. I do the rest."

### Implementation Plan

**Files to modify:**

| File | Change |
|------|--------|
| `HowIWork.tsx` | Add `useParallax` to background image |
| `EmotionalClose.tsx` | Add `useParallax` to background image |
| `Hero.tsx` | Rewrite headline, sub, bullets, CTA per Hormozi framework |
| `FinalCTA.tsx` | Rewrite CTA copy, add guarantee, objection bullets |
| `Problem.tsx` | Sharpen copy — outcome-focused, not feature-focused |
| `Results.tsx` | Move up in page order (Index.tsx) |
| `Index.tsx` | Reorder sections: Hero → Problem → Results → Solution → HowIWork → WhoItsFor → About → FinalCTA. Remove or merge CommercialSystem/Methodology/ParadigmShift/EmotionalClose into other sections |
| `ConversionPopup.tsx` | Rewrite popup copy with Hormozi-style headline |

**Hero rewrite (3 variations, ranked):**

**#1 (Highest expected conversion):**
> **Headline:** "Add $50K–$200K/mo to your B2B pipeline in 90 days — without hiring a single rep"
> **Sub:** "I embed with your team, rebuild your commercial engine, and only get paid when you grow. 30+ companies scaled this way."
> **Bullets:**
> - Close rate jumps 2-3× so every lead is worth more
> - Predictable pipeline so you stop guessing where next month's revenue comes from
> - No retainer risk — I eat what I kill alongside you
> **CTA:** "Book Your Free Growth Diagnostic →" (what happens: "30-min call. I'll show you exactly where you're leaking revenue.")

**#2:**
> **Headline:** "Stop bleeding revenue. Get a commercial system that actually closes — in 90 days"
> **Sub:** "Performance-based growth partner for B2B and SaaS. If you don't grow, I don't earn."
> **CTA:** "See If You Qualify — Free 30-Min Diagnostic"

**#3:**
> **Headline:** "Your pipeline is broken. I fix it in 90 days or you don't pay."
> **Sub:** "Fractional CRO for B2B companies doing $500K-$10M. I've added $20M+ in pipeline for 30+ companies."
> **CTA:** "Claim Your Free Diagnostic Call"

**Ranking reasoning:** #1 leads with the specific dollar outcome (most compelling), includes proof ("30+"), and removes risk ("only get paid when you grow"). #2 is emotional but less specific. #3 is bold but "broken" can feel insulting.

**Section reorder (simplified page):**
1. Hero (rewritten)
2. Problem (sharpened — 4 pain cards stay)
3. Results (MOVED UP — social proof early)
4. Solution (merged with CommercialSystem — one section, 5 pillars)
5. HowIWork (with parallax)
6. WhoItsFor (tightened)
7. About
8. FinalCTA (with guarantee + objection-handling bullets)

**Removed/merged:**
- ParadigmShift → fold "old way vs new way" into Problem section as a compact comparison
- CommercialSystem → merge into Solution
- Methodology → fold into HowIWork (4-step process fits naturally there)
- EmotionalClose → remove (redundant with FinalCTA)

**FinalCTA additions:**
- Guarantee: "If we don't identify at least 3 revenue leaks in your diagnostic call, I'll send you my full audit framework for free. Zero risk."
- Objection bullets:
  - "But I've tried consultants before" — I'm not a consultant. I execute. And I only get paid on results.
  - "We don't have budget for this" — No retainer. I invest my time upfront. We both win or nobody pays.
  - "Our sales process is too complex" — That's exactly what I fix. The more complex, the more I can unlock.
  - "We need to think about it" — Revenue leaks don't wait. Book the free call, decide after.

