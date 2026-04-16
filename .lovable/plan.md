

# Optimize for 13" Screens (1280×800 / 1366×768)

## Problem
On 13" laptops, the hero headline is very large (`lg:text-6xl`), section padding is generous (`py-24`), and vertical spacing pushes content below the fold unnecessarily. The page was designed for larger screens.

## Changes

### 1. Hero Section (`Hero.tsx`)
- Reduce `min-h-[90vh]` to `min-h-[85vh]` so the hero doesn't consume the entire viewport
- Scale down headline: `lg:text-6xl` → `lg:text-[3.25rem]` and subtitle `lg:text-5xl` → `lg:text-4xl`
- Tighten margins: `mb-6` → `mb-5`, `mb-10` → `mb-8` on bullets list

### 2. Section Padding (all sections)
- Add a responsive intermediate: reduce `py-24` to `py-20` on `Problem`, `Results`, `Solution`, `HowIWork`, `WhoItsFor`, `AboutMe`, `FAQ`, `FinalCTA` using `py-16 lg:py-20 xl:py-24`

### 3. Navbar (`Navbar.tsx`)
- Reduce nav padding from `py-4` to `py-3` to recover vertical space on smaller screens

### 4. Typography scaling tweaks
- Results section metric numbers: ensure they don't overflow at this width
- FAQ section: already `max-w-3xl`, no change needed

## Files Modified
| File | Change |
|------|--------|
| `Hero.tsx` | Reduce min-height, headline sizes, vertical margins |
| `Problem.tsx` | Responsive section padding |
| `Results.tsx` | Responsive section padding |
| `Solution.tsx` | Responsive section padding |
| `HowIWork.tsx` | Responsive section padding |
| `WhoItsFor.tsx` | Responsive section padding |
| `AboutMe.tsx` | Responsive section padding |
| `FAQ.tsx` | Responsive section padding |
| `FinalCTA.tsx` | Responsive section padding |
| `Navbar.tsx` | Tighter nav padding |

