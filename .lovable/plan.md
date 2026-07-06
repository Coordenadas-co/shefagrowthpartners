## Goal

1. Replace the hero background image with the newly uploaded photo of Juan Sebastián.
2. Replace every existing photo of Juan Sebastián (the About Me headshot) with the same uploaded image.
3. Switch the booking calendar from the current LeadConnector widget to Calendly (`https://calendly.com/juan-medrano-shefagrowthpartners/30min`).

## Changes

### 1. Add the uploaded image as a CDN asset
Upload `Gemini_Generated_Image_juerssjuerssjuer-2.png` via the asset CLI and reference it through its `.asset.json` pointer.

### 2. Hero background — `src/components/sections/Hero.tsx`
- Replace the `heroBg` import (`@/assets/hero-bg.png`) with the new asset pointer and use its URL in the background `<img src>`.
- Dark overlay already sits on top, so text legibility is preserved.

### 3. About Me photo — `src/components/sections/AboutMe.tsx`
- Replace the `jsmPhoto` import (`@/assets/jsm-photo.png`) with the new asset pointer for the round headshot.

Note: this is the only other place a photo of Juan Sebastián appears in the code. The uploaded image is a wide landscape shot; in the round 160px frame it will be center-cropped (existing `rounded-full object-cover`), so his face stays framed.

### 4. Calendar → Calendly — `src/components/BookingModal.tsx`
- Change `BOOKING_URL` to `https://calendly.com/juan-medrano-shefagrowthpartners/30min`.
- The existing iframe modal keeps working with the Calendly URL (loading spinner + responsive sizing preserved). No other logic changes; every "Book a session" CTA already routes through this modal via `BookingContext`.

## Out of scope
- No copy, layout, or design-token changes.
- Old `hero-bg.png` / `jsm-photo.png` assets can be left in place or removed; I'll remove them if unreferenced to keep things clean.

## Technical details
- Uploaded image becomes `src/assets/jsm-office.png.asset.json` (CDN pointer); imported as `import jsmOffice from "@/assets/jsm-office.png.asset.json"` and used as `jsmOffice.url`.
- Calendly renders fine in a plain iframe; no extra script needed for this modal approach.