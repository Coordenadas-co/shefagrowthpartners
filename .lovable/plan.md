
# Aplicación completa de la auditoría (Shefa Growth Partners)

## 1. Errores funcionales (mobile)

### 1.1 Títulos cortados en mobile (ES)
En `Hero.tsx`, el subtítulo dorado usa `text-3xl sm:text-4xl` pero el texto ES ("sin contratar un solo vendedor") desborda. Ajustes:
- Añadir `break-words leading-tight` al `<h1>` y al span dorado.
- Reducir en mobile: subtítulo dorado `text-2xl sm:text-3xl lg:text-4xl`.
- Forzar `max-w-full overflow-hidden` al contenedor del headline.

### 1.2 Calendario no aparece en mobile
`BookingModal.tsx` usa `h-[85vh]` con `max-sm:h-[100dvh]`. El problema típico en LeadConnector es el `allow` del iframe y el ancho del widget:
- Añadir `allowFullScreen`, `scrolling="yes"`, y `allow="payment; fullscreen"`.
- Garantizar que el iframe tenga `min-height: 600px` en mobile.
- Añadir `sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"`.
- Dar al `DialogContent` `p-0` y evitar padding que recorte el iframe.

---

## 2. Reubicación: AboutMe a posición 2

En `Index.tsx`, reordenar:
```
Hero → AboutMe → Problem → Results → ClientLogos → Solution → HowIWork → WhoItsFor → Stack (nuevo) → FAQ → FinalCTA
```

Reescribir `AboutMe.tsx` con el copy extenso nuevo (bio + "De ventas a sistemas" + "Qué hago hoy" + "Resultados" + "Cómo puedo ayudarte"). Estructura propuesta:
- Header: foto + nombre + rol ("Growth Partner · Arquitecto de sistemas comerciales")
- Párrafo de apertura (bio de 13+ años)
- 3 sub-bloques con ícono y título: "De ventas a sistemas", "Qué hago hoy" (con 5 bullets: Adquisición / Conversión / Monetización / Retención / Data & ops), "Resultados" (4 bullets: +30% ingresos 90d, CAC↓, LTV↑, sistemas escalables)
- Bloque final "Cómo puedo ayudarte" con 4 bullets (ventas inestables, dependencia ads, etc.) + CTA
- Versión EN equivalente traducida

---

## 3. Correcciones de copy

| Sección | Cambio |
|---|---|
| `Hero.tsx` subtítulo ES | "Me convierto en tu Growth Partner: rediseño tu sistema comercial para generar ingresos predecibles, ejecuto contigo y solo gano cuando tu empresa crece. Más de 30 compañías ya escalaron bajo este modelo." (+ traducción EN equivalente) |
| `Problem.tsx` bullet "Reps improvisan" | ES: "Tu equipo comercial no falla por falta de talento, falla por falta de sistema: sin playbook, sin estructura y sin control del proceso, cada venta depende del azar." |
| `HowIWork.tsx` bullet "Basado en rendimiento" | ES: "Modelo 100% alineado a resultados: estructura de cobro relacionada con el crecimiento que construimos juntos." |
| `WhoItsFor.tsx` bullet "B2B o SaaS con $500K+ ARR" | ES: "Trabajo con negocios que buscan convertir su crecimiento en un sistema predecible y escalable." |

---

## 4. Garantía $100 USD (reemplazo + distribución en 5 puntos)

Nuevo copy:
> "Estamos tan seguros de darte valor que si en la llamada no consideras que te entregamos una estrategia valiosa para escalar tus ingresos, mi equipo y yo te enviamos $100 USD por haber perdido tu tiempo. Cero riesgo."

Crear componente reutilizable `GuaranteeBadge.tsx` (con ícono ShieldCheck + texto) y montarlo en:
1. **Hero** — debajo de los bullets, antes del botón
2. **Problem** — al final, antes del CTA de sección
3. **HowIWork** — dentro del bloque del método, destacado
4. **FinalCTA** — reemplazar el bloque de garantía actual con el nuevo texto
5. **FAQ** — como primer item destacado arriba del acordeón

---

## 5. Reemplazo completo de FAQ (10 nuevas)

Eliminar las 6 FAQ actuales en `FAQ.tsx` e insertar las 10 nuevas con sus preguntas/respuestas exactas del documento (ES + traducción EN):

1. ¿Cómo sé que esto realmente va a generar resultados...?
2. ¿Qué tan involucrado estás en la ejecución?
3. ¿En qué te diferencias de una agencia o consultor tradicional?
4. ¿En cuánto tiempo puedo ver resultados?
5. ¿Este servicio es para mi tipo de negocio?
6. ¿Necesito tener un equipo de ventas para trabajar contigo?
7. ¿Cómo funciona la inversión?
8. ¿Esto va a consumir demasiado tiempo de mi equipo?
9. ¿Con quién no trabajas?
10. ¿Qué pasa en la llamada diagnóstica?

Con respuestas exactas del documento.

---

## 6. Nueva sección Stack / Autoridad técnica

Crear `src/components/sections/Stack.tsx`:
- Título: "Herramientas con las que trabajamos" / "Tools we work with"
- Grid de 6 logos/badges: **Klaviyo Partners & Experts, HubSpot, GoHighLevel, Coordenadas.co Partners, Google Ads, Meta Ads**
- Layout: grid 3×2 en desktop, 2×3 en mobile, con estilo de badge (ícono + nombre) ya que no contamos con los SVGs oficiales. Usar íconos de lucide como placeholder + texto.
- Posición: entre `WhoItsFor` y `FAQ`.

Montar en `Index.tsx`.

---

## 7. CTAs distribuidos (9 copys, 1 por sección)

Crear componente `SectionCTA.tsx` (botón dorado full-width en mobile, auto en desktop, con `shadow` y `ArrowRight`). Acepta prop `label` y abre el BookingModal vía `useBooking`.

Mapeo copy → sección:
| # | Copy | Sección |
|---|---|---|
| 1 | Agenda tu diagnóstico estratégico ahora | Hero (ya existe, actualizar texto) |
| 2 | Activa tu crecimiento hoy mismo | AboutMe |
| 3 | Empieza a generar más ingresos desde hoy | Problem |
| 4 | Accede a tu plan de crecimiento ahora | Results |
| 5 | Escala tu empresa con estrategia real | Solution |
| 6 | Convierte tu negocio en una máquina de crecimiento | HowIWork |
| 7 | Descubre cómo multiplicar tus resultados | WhoItsFor |
| 8 | Reserva tu sesión estratégica privada | Stack (o FAQ) |
| 9 | Diseña el futuro financiero de tu negocio hoy | FinalCTA (reemplaza botón actual) |

Traducción EN breve para cada uno.

### Sticky CTA mobile (bonus recomendado)
Crear `StickyCTA.tsx`: barra fija inferior visible solo en mobile (`md:hidden`), aparece tras scroll del Hero, botón "Agenda ahora" dorado. Dismissible. Añadir al layout de `Index.tsx`.

---

## Archivos modificados / creados

### Nuevos
- `src/components/GuaranteeBadge.tsx` — badge reutilizable de garantía
- `src/components/SectionCTA.tsx` — CTA dorado reusable
- `src/components/StickyCTA.tsx` — barra CTA fija mobile
- `src/components/sections/Stack.tsx` — sección herramientas

### Modificados
- `src/pages/Index.tsx` — reordenar, montar Stack y StickyCTA
- `src/components/sections/Hero.tsx` — fix mobile títulos, nuevo subtítulo, GuaranteeBadge, botón con copy #1
- `src/components/sections/AboutMe.tsx` — reescritura completa con nuevo copy extenso + SectionCTA #2
- `src/components/sections/Problem.tsx` — nuevo copy de bullet "reps improvisan" + GuaranteeBadge + SectionCTA #3
- `src/components/sections/Results.tsx` — SectionCTA #4
- `src/components/sections/Solution.tsx` — SectionCTA #5
- `src/components/sections/HowIWork.tsx` — nuevo copy cobro + GuaranteeBadge + SectionCTA #6
- `src/components/sections/WhoItsFor.tsx` — nuevo copy del filtro ICP + SectionCTA #7
- `src/components/sections/FAQ.tsx` — 10 FAQs nuevas + GuaranteeBadge arriba
- `src/components/sections/FinalCTA.tsx` — nueva garantía $100 USD + botón con copy #9
- `src/components/BookingModal.tsx` — fix carga mobile del calendario

---

## Consideraciones técnicas

- Mantener bilingüismo (EN/ES) en todos los copys nuevos usando `useLang()` y `t()`.
- El `GuaranteeBadge` acepta prop `variant` (`"compact"` para Hero, `"full"` para FinalCTA).
- El `SectionCTA` usa `useBooking().openBooking` y animación `animate-fade-in` con `useScrollReveal`.
- Stack section usa el mismo padding responsive (`py-16 lg:py-20 xl:py-24`) que las demás.
- StickyCTA con `aria-hidden` cuando no visible, animación slide-up al aparecer en scroll > 600px.
