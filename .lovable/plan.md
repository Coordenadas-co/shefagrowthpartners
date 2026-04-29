# Compactar Hero (sin cambiar diseño)

Mantengo el layout actual del screenshot, solo ajusto alturas y separaciones para que entre mejor en pantallas 13"-15" y mobile.

## Cambios en `src/components/sections/Hero.tsx`

### 1. Sección — reducir min-height
- `min-h-[85vh]` → `min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]`
- `pt-16` → `pt-14 md:pt-16`

### 2. Eyebrow ("Growth Partner for B2B & SaaS")
- `mb-4` → `mb-3`

### 3. Título h1
- `mb-5` → `mb-4`
- Subtítulo dorado ("without hiring a single rep"): `mt-2` → `mt-1`

### 4. Párrafo descriptivo
- `mb-8` → `mb-5 md:mb-6`

### 5. Lista de bullets
- `mb-6` → `mb-4 md:mb-5`
- `gap-3` entre bullets → `gap-2 md:gap-2.5`

### 6. GuaranteeBadge
- `mb-6` → `mb-4 md:mb-5`

### 7. CTA container
- Sin cambios estructurales (mantiene flex column → row en sm)

## Resultado
- Hero ~15% más corto verticalmente en todos los breakpoints
- Mismo diseño, mismas tipografías, mismo orden
- Above-the-fold mejora en 13" (1366×768) y mobile (<640px)

## Archivos modificados
- `src/components/sections/Hero.tsx` (único archivo)
