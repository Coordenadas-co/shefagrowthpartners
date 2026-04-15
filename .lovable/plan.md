

# Add FAQ Section

## What
Create a bilingual FAQ section with B2B prospect objections, placed between `AboutMe` and `FinalCTA` — the natural "last doubts" position before the final CTA.

## Content (6 FAQs)
1. "How is this different from hiring a sales consultant?" — I execute, not advise. Performance-based.
2. "What kind of results can I expect?" — $50K-$200K/mo pipeline growth, 2-3× close rate, 90-day timeline.
3. "How long until I see results?" — Week 1 execution, day 30 first results, day 90 full system.
4. "What do I need to commit?" — 2 hours/week + CRM access. I do the rest.
5. "What if it doesn't work?" — Performance-based: if you don't grow, I don't earn.
6. "Do you work with companies outside B2B/SaaS?" — Primary focus is B2B/SaaS $500K-$10M ARR.

All translated to Spanish via `useLang()`.

## Design
- Uses shadcn `Accordion` component (already installed)
- Gold accent on open item indicator
- `useScrollReveal` for entrance animation
- Matches existing section styling (`py-24`, `max-w-3xl`, centered)

## Files
| File | Change |
|------|--------|
| `src/components/sections/FAQ.tsx` | New — accordion FAQ section |
| `src/pages/Index.tsx` | Import + mount between AboutMe and FinalCTA |

