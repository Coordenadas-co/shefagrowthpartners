## Plan: Remove profile photo from the AboutMe section

### What will change
- Remove the circular profile photo from `src/components/sections/AboutMe.tsx`.
- Clean up the now-unused image import and constant.
- Adjust the header layout so the name/role/LinkedIn block remains centered and visually balanced without the image.

### Files to edit
- `src/components/sections/AboutMe.tsx`

### Implementation details
1. Delete the `<img>` element inside the header block.
2. Remove the `jsmPhotoAsset` import and `jsmPhoto` constant.
3. Simplify the header container from `flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left` to a centered text-only layout (e.g., `text-center`).
4. Keep the LinkedIn link, name, and role unchanged.

No other sections or CTAs are affected.