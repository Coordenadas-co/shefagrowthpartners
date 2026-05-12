## Goal

1. Serve the correct lead-magnet PDF based on language (EN vs ES).
2. Auto-detect the user's preferred language on first visit from the browser/OS settings.

## Changes

### 1. Add the two PDFs to the project
Copy the uploaded files to `public/lead-magnet/`:
- `public/lead-magnet/5-Levers-Shefa-Growth-Partners-EN.pdf` (English)
- `public/lead-magnet/5-Palancas-Shefa-Growth-Partners-ES.pdf` (Spanish)

(Old `guia-5-palancas.pdf` will be removed to avoid confusion.)

### 2. `src/components/LeadMagnetPopup.tsx`
- Replace the single `PDF_URL` constant with a map keyed by language.
- `handleDownload` picks the URL and the filename based on `lang`:
  - ES → `5-Palancas-Shefa-Growth-Partners.pdf`
  - EN → `5-Levers-Shefa-Growth-Partners.pdf`

### 3. `src/contexts/LanguageContext.tsx` — auto-detect language
- Initialize `lang` state lazily:
  - Read `navigator.language` / `navigator.languages`.
  - If any starts with `es` → default to `"es"`, otherwise `"en"`.
  - SSR-safe guard (`typeof navigator !== "undefined"`).
- Manual toggle via the navbar still overrides detection for the current session (no persistence added unless requested).

## Out of scope
- No persistence of user choice in localStorage (current behavior preserved). Happy to add it if you want the choice remembered across visits.
- No changes to copy or design.
