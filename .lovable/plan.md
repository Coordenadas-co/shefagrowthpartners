# Plan: CTA del Lead Magnet en la Home

## Objetivo
Hoy el popup del lead magnet ("Las 5 Palancas") solo aparece automáticamente (exit-intent o 15s). Vamos a darle visibilidad permanente en la home con CTAs explícitos para que el usuario pueda solicitarlo cuando quiera, en EN y ES.

## Cambios

### 1. Crear `LeadMagnetContext` (nuevo)
`src/contexts/LeadMagnetContext.tsx` — análogo a `BookingContext`:
- Estado `open` + `openLeadMagnet()` / `closeLeadMagnet()`.
- Provider envuelve la app en `App.tsx` (junto al `BookingProvider`).

### 2. Refactor de `LeadMagnetPopup.tsx`
- Consumir el contexto en lugar de manejar `open` localmente.
- Mantener la lógica de auto-trigger (exit-intent + 15s) llamando a `openLeadMagnet()` si no se ha mostrado.
- Resetear el `step` a `"form"` al cerrar para que reabrir muestre el flujo completo.

### 3. Nueva sección `LeadMagnetCTA` 
`src/components/sections/LeadMagnetCTA.tsx` — banner/card destacado entre `Problem` y `Results`:
- Mockup/ícono del PDF a la izquierda, copy a la derecha.
- Headline (ES): "Descarga gratis: Las 5 Palancas que duplican el crecimiento en 12 meses".
- Headline (EN): "Free download: The 5 Levers that double growth in 12 months".
- 3 bullets cortos (qué incluye la guía).
- Botón primario "Descargar guía gratis" / "Get the free guide" → `openLeadMagnet()`.
- Microcopy: "PDF · 100% gratis · Sin spam".
- Estilo coherente con tokens (navy bg, gold accents, GuaranteeBadge opcional).

### 4. CTA secundario en `Hero`
- Bajo el botón principal "Agenda tu diagnóstico", agregar un link/botón ghost pequeño:  
  "📥 O descarga primero la guía gratis: Las 5 Palancas" / "Or grab the free guide first: The 5 Levers".
- onClick → `openLeadMagnet()`.

### 5. Item en `Navbar`
- Agregar entrada "Guía Gratis" / "Free Guide" en `navItems` (no ancla; onClick que llama `openLeadMagnet()`).
- Visible en desktop y mobile menu.

### 6. Integración en `Index.tsx`
- Insertar `<LeadMagnetCTA />` entre `<Problem />` y `<Results />`.

## Notas
- Bilingüe vía `useLang().t(en, es)` ya existente.
- Sin cambios de BD (la tabla `lead_magnet_downloads` ya está).
- El popup sigue auto-disparándose una vez por sesión; los CTAs lo abren on-demand sin importar si ya se mostró.
