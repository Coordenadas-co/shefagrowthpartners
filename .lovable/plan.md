

# Add Stock Images to Key Sections

## What
The landing page is currently all text + icons. We'll add high-quality stock images using Unsplash URLs to give sections visual weight and a more premium, cinematic feel.

## Image Placement Strategy

### 1. Hero Section — Background image with overlay
- Add a dark business/strategy-themed background image behind the hero content
- Use `bg-cover bg-center` with a dark gradient overlay (`bg-gradient-to-b from-background/90 via-background/70 to-background`) so text remains readable
- Image: business strategy / growth chart aesthetic

### 2. Problem Section — Inline image beside content
- Add a side image (frustrated team / stagnant chart visual) in a 2-column layout on desktop
- Image on the right, cards on the left. On mobile, image hides or stacks above

### 3. HowIWork Section — Background image with overlay
- Subtle background image (team collaboration / partnership) with dark overlay
- Replaces the current plain `bg-section-alt`

### 4. EmotionalClose Section — Full-width background image
- Dramatic wide-angle business image with heavy dark overlay
- Creates a cinematic "pause" moment before the final CTA

### 5. About Section — Already has a photo, no change needed

## Technical Details

### Image Sources
Using Unsplash URLs with size parameters for performance:
- Hero: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80` (analytics dashboard)
- Problem: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80` (team meeting)
- HowIWork: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80` (collaboration)
- EmotionalClose: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80` (tech office)

### Files to modify
| File | Change |
|------|--------|
| `src/components/sections/Hero.tsx` | Add background image with gradient overlay |
| `src/components/sections/Problem.tsx` | Add side image in 2-col layout |
| `src/components/sections/HowIWork.tsx` | Add background image with overlay |
| `src/components/sections/EmotionalClose.tsx` | Add full-width background image |

### Approach
- All images use `loading="lazy"` except Hero
- Background images use absolute positioning with z-index layering
- Dark overlays ensure text contrast on the navy/gold theme
- Images are decorative — proper alt text and `aria-hidden` where appropriate

