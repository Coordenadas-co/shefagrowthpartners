

# Add Client Logos Section

## What
Add a "Trusted By" / "They've trusted us" logo carousel/grid between the Results and CommercialSystem sections, displaying the 10 uploaded client logos.

## Steps

1. **Copy all 10 logos** to `src/assets/clients/` with clean filenames:
   - atmosfera.jpeg, leset.png, tag.png, dra-lina-triana.png, agefit.png, exness.png, cronox.png, amparo-aguirre.png, unox.png, visdecol.png

2. **Create `src/components/sections/ClientLogos.tsx`**:
   - Simple section with heading: "Trusted by" / "Han confiado en nosotros"
   - Grid of logos (5 columns desktop, 3 tablet, 2 mobile)
   - Each logo displayed with `object-contain`, grayscale filter that removes on hover, consistent max height (~48px)
   - Uses scroll reveal animation like other sections
   - Logos imported as ES6 modules from `@/assets/clients/`

3. **Add to `src/pages/Index.tsx`** — insert `<ClientLogos />` between `<Results />` and `<CommercialSystem />`

## Design
- Subtle section — no background change, minimal padding
- Logos rendered in grayscale with `filter grayscale opacity-60`, full color on hover
- Consistent sizing so different logo shapes look balanced

