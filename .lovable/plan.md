

# Fix Client Logos + Add Scheduling Link

## Two changes requested

### 1. Fix Client Logos Section — Not Displaying Properly
**Problem**: The `brightness-0 invert opacity-50` CSS filter turns all logos into white silhouettes on the dark navy background, making them nearly invisible. Many of these logos are PNGs with transparency — the filter approach doesn't work well.

**Fix**: Remove the `brightness-0 invert` filter and instead display logos at reduced opacity in their original colors. Use `opacity-60` as default with `opacity-100` on hover. Add a subtle white/light background pill behind each logo so they're visible regardless of the original logo colors.

**File**: `src/components/sections/ClientLogos.tsx`
- Replace `brightness-0 invert opacity-50` with `opacity-60 grayscale` (grayscale for the subtle "client wall" look, full color on hover)
- Add a rounded background container (`bg-white/10 rounded-lg p-4`) behind each logo for contrast
- Keep `h-12 max-w-[140px] object-contain` sizing

### 2. Replace All CTA Links with Scheduling URL
**URL**: `https://api.leadconnectorhq.com/widget/booking/FHOxAqdafvXaA2qoyd7c`

**Files to update**:
- `src/components/sections/FinalCTA.tsx` — change `mailto:contact@shefagrowth.com` to the booking URL, open in new tab
- `src/components/sections/Hero.tsx` — change `href="#cta"` on the main CTA button to the booking URL directly
- `src/components/Navbar.tsx` — change both "Apply Now" buttons (desktop + mobile) from `href="#cta"` to the booking URL

