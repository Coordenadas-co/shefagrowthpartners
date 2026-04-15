

# Use Uploaded Photo as Hero Background

## What
Replace the current Unsplash stock image in the Hero section with the uploaded professional photo (`user-uploads://image-11.png`).

## Steps
1. Copy `user-uploads://image-11.png` to `src/assets/hero-bg.png`
2. Update `src/components/sections/Hero.tsx` to import and use the local asset instead of the Unsplash URL

