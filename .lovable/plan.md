

# Embed Booking Widget In-Page

## What
Replace all `target="_blank"` booking links with an in-page modal that loads the LeadConnector booking widget via iframe, so users never leave the site.

## Approach

1. **New `src/components/BookingModal.tsx`**
   - Reusable component using the existing `Dialog` component
   - Contains an `<iframe>` pointing to `https://api.leadconnectorhq.com/widget/booking/FHOxAqdafvXaA2qoyd7c`
   - Full-width iframe inside a large dialog (`sm:max-w-3xl`, height ~80vh)
   - Exposes `open` / `onOpenChange` props
   - Bilingual title using `useLang()`

2. **New `src/hooks/useBookingModal.ts`**
   - Simple shared state hook (or context) so any CTA can trigger the modal
   - Returns `{ openBooking, isOpen, setIsOpen }`

3. **Create `src/contexts/BookingContext.tsx`**
   - Provider wrapping the app with a single `BookingModal` instance
   - `useBooking()` hook returns `openBooking()` function

4. **Update CTA components** — replace `<a href="..." target="_blank">` with `onClick={() => openBooking()}`:
   - `src/components/sections/Hero.tsx` — main CTA button
   - `src/components/sections/FinalCTA.tsx` — bottom CTA button
   - `src/components/Navbar.tsx` — "Apply Now" buttons (desktop + mobile)
   - `src/components/ConversionPopup.tsx` — popup CTA button

5. **Mount provider** in `src/App.tsx` or `src/pages/Index.tsx`

## Design
- Dialog with minimal chrome, gold border accent
- Loading spinner while iframe loads
- Close button clearly visible
- Responsive: full-screen on mobile, centered modal on desktop

