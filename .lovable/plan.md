

# Add Photo to About Me Section

## What
Replace the "JSM" initials placeholder in the About Me section with the uploaded professional photo of Juan Sebastián Medrano.

## Steps

1. **Copy the image** to `src/assets/jsm-photo.png` using `lov-copy`
2. **Update `src/components/sections/AboutMe.tsx`**:
   - Import the photo as an ES6 module
   - Replace the `<div>` placeholder with an `<img>` tag using `object-cover` and `rounded-full` styling

