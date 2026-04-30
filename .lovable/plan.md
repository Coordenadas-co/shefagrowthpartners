# Plan: Lead magnet como primer paso del embudo

## Cambio de estrategia
Hoy el CTA principal del Hero es "Agenda tu diagnóstico" y el lead magnet es secundario (link discreto debajo). Lo invertimos: el **primer paso del embudo es la descarga del lead magnet**, y agendar consultoría queda como upsell post-descarga (que ya está implementado en el step `upsell` del `LeadMagnetPopup`).

Embudo final:
```
Hero CTA → Descarga Lead Magnet → Upsell Consultoría → Booking → Confirmación GHL
```

## Cambios

### 1. Hero: invertir jerarquía de CTAs (`src/components/sections/Hero.tsx`)
- **CTA primario** (botón grande dorado con animación pulse) → ahora abre el lead magnet:
  - EN: "Get the free guide — The 5 Levers"
  - ES: "Descarga la guía gratis — Las 5 Palancas"
  - Ícono: `Download` en vez de `ArrowRight`
  - `onClick={openLeadMagnet}`
- **Microcopy** debajo del primario:
  - EN: "Free PDF · The 5 levers that double your revenue in 12 months"
  - ES: "PDF gratis · Las 5 palancas que duplican tus ingresos en 12 meses"
- **CTA secundario** (link discreto, en lugar del actual link al lead magnet) → ahora abre el booking:
  - EN: "Already know you need help? Book a free 30-min diagnostic →"
  - ES: "¿Ya sabes que necesitas ayuda? Agenda un diagnóstico gratis de 30 min →"
  - `onClick={openBooking}`

### 2. Auto-trigger del popup: removerlo
En `src/components/LeadMagnetPopup.tsx`, eliminar el `useEffect` que dispara el popup automáticamente a los 15s / on exit-intent (y la constante `STORAGE_KEY` asociada). Ya no tiene sentido auto-disparar porque el lead magnet ahora es el CTA primario visible — auto-popup encima de un Hero que ya vende lo mismo es redundante y molesto.

El popup sigue abriéndose manualmente desde:
- Hero (CTA primario, ahora)
- Navbar ("Free Guide / Guía Gratis")
- Sección `LeadMagnetCTA`
- Cualquier otro lugar que use `useLeadMagnet()`

### 3. `LeadMagnetCTA` y `FinalCTA`: revisar coherencia
- `LeadMagnetCTA.tsx` (sección dedicada entre Problem y Results) ya está alineada — mantener.
- `FinalCTA.tsx` revisar que su CTA principal sea coherente con el nuevo embudo. Propuesta: mantenerlo como booking (porque es el cierre emocional de la página, después de toda la prueba social y metodología — ahí ya tiene sentido pedir la consultoría directa). Si prefieres que también sea lead magnet, dímelo.

### 4. StickyCTA mobile: revisar
Si `StickyCTA.tsx` apunta hoy al booking, cambiarlo al lead magnet para mantener consistencia con el nuevo CTA primario del Hero. Lo verificaré al implementar.

## Lo que NO cambia
- `LeadMagnetPopup` interno (form → download → upsell consultoría) sigue idéntico — el upsell ya hace de puente al booking.
- `BookingModal`, integración GHL, edge function `submit-lead`.
- Tracking script de HighLevel.

## Archivos
- **Editar**: `src/components/sections/Hero.tsx` (invertir CTAs)
- **Editar**: `src/components/LeadMagnetPopup.tsx` (remover auto-trigger)
- **Posible editar**: `src/components/StickyCTA.tsx` (si apunta a booking, cambiar a lead magnet)
