
# Lead Magnet Flow: Guía 5 Palancas → Consultoría

## Resumen del flujo

```
Usuario navega → Popup aparece (exit-intent + 15s)
                    ↓
        [Formulario: nombre + email]
                    ↓
        Submit → Guarda lead en BD
                    ↓
        Pantalla 2: "¡Descarga lista!" + botón descargar PDF
                    ↓
        Al descargar → Pantalla 3 (upsell):
        "Aplica esto con un experto - Diagnóstico gratis 30min"
                    ↓
              [Agendar Sesión] → BookingModal
```

## Cambios

### 1. Subir el PDF al proyecto
- Copiar `user-uploads://shefa-growth-partners-leadmagnet_1.pdf` → `public/lead-magnet/guia-5-palancas.pdf`
- Servible directo en `/lead-magnet/guia-5-palancas.pdf`

### 2. Lovable Cloud — tabla `lead_magnet_downloads`
Migración con:
- `id uuid pk`, `name text`, `email text not null`, `lang text`, `created_at timestamptz default now()`
- RLS habilitado: política `INSERT` para `anon` (público puede registrar leads)
- Sin `SELECT` público (datos privados del owner)

### 3. Reemplazar `ConversionPopup.tsx` por nuevo `LeadMagnetPopup.tsx`
Componente con 3 estados internos (`form` | `download` | `upsell`):

**Estado 1 — Formulario (bilingüe)**
- Eyebrow: "GUÍA GRATUITA / FREE GUIDE"
- Título: *"Las 5 palancas que duplican el crecimiento de tu empresa en 12 meses"* / EN equivalente
- Subtítulo corto + bullets cortos (3 beneficios sacados del PDF)
- Inputs: Nombre, Email
- Botón: "Descargar Guía Gratis" / "Get Free Guide"
- Trust line: "Sin spam. Cancela cuando quieras."

**Estado 2 — Descarga**
- Check verde grande + "¡Tu guía está lista!"
- Botón primario: "Descargar PDF" → trigger download del PDF y avanza a estado 3
- Mini preview/thumb del PDF (opcional, decorativo dorado)

**Estado 3 — Upsell consultoría**
- Headline: "Ya tienes el mapa. ¿Quieres que lo apliquemos juntos?" / EN
- Texto: 30 min, sin compromiso, identificamos las 2-3 palancas de mayor impacto para tu empresa
- GuaranteeBadge reutilizado
- CTA primario: "Agendar Mi Diagnóstico Gratis" → cierra popup + `openBooking()`
- Link secundario: "No, gracias" → cierra

### 4. Trigger del popup
- **Exit intent** (mouseleave hacia top viewport) **O**
- **15 segundos** en página
- Lo que pase primero
- Mostrar máx 1 vez por sesión (`localStorage` `shefa_leadmagnet_shown`)

### 5. Botón secundario en Hero (opcional pero recomendado)
Debajo del CTA principal del Hero, agregar link sutil:
*"O descarga primero la guía gratuita →"*
que dispara el popup manualmente.

### 6. Limpieza
- Eliminar `ConversionPopup.tsx` viejo (queda reemplazado)
- Index.tsx: cambiar import a `LeadMagnetPopup`

## Archivos

**Crear:**
- `public/lead-magnet/guia-5-palancas.pdf`
- `src/components/LeadMagnetPopup.tsx`
- Migración SQL para `lead_magnet_downloads`

**Modificar:**
- `src/pages/Index.tsx` (swap del popup)
- `src/components/sections/Hero.tsx` (link secundario opcional)

**Eliminar:**
- `src/components/ConversionPopup.tsx`

## Detalles técnicos
- Insert vía `supabase.from('lead_magnet_downloads').insert(...)` desde el cliente (RLS permite anon insert)
- Descarga del PDF: `<a href="/lead-magnet/guia-5-palancas.pdf" download>` programático con `link.click()`
- Validación email regex simple, loading state en botón
- Toast de confirmación al insertar
- Reusar tokens de diseño existentes (gold, navy, GuaranteeBadge, Dialog shadcn)
- Bilingüe vía `useLang()` + `t()`
- `useBooking()` para abrir el modal de consultoría en estado 3

¿Apruebas? Si quieres ajustar algo (timing del popup, copy del upsell, omitir el link en Hero, o no usar BD y solo trackear localmente), dímelo antes de implementar.
