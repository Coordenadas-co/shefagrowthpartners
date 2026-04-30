# Agregar VSL (Video Sales Letter) al Hero

## 1. Crear `src/components/VSLPlayer.tsx`
- Iframe responsivo de YouTube (`aspect-video` 16:9)
- Marco dorado: `border border-primary/30`, `rounded-xl`, `shadow-[0_0_40px_hsl(43_52%_54%/0.25)]`
- URL dinámica según `lang`:
  - ES → `https://www.youtube.com/embed/OaUw7oAxmKY`
  - EN → `https://www.youtube.com/embed/D04_AU7Tx40`
- `?rel=0&modestbranding=1&playsinline=1`
- `loading="lazy"`, `key={lang}` para re-render al cambiar idioma
- `max-w-3xl mx-auto`

## 2. Modificar `src/components/sections/Hero.tsx`
Reordenar para colocar el video justo después del título, con CTA inmediatamente debajo (estilo VSL del ejemplo):

```
Eyebrow
H1 + subtítulo dorado
[VSLPlayer]                ← nuevo
CTA principal + texto      ← sube
GuaranteeBadge
Párrafo descriptivo        ← baja
Bullets                    ← baja
```

- Importar `VSLPlayer`
- Aumentar contenedor a `max-w-5xl` (para que el video respire)
- Aumentar padding-bottom: `pb-16 md:pb-20 lg:pb-24`

## Archivos
- `src/components/VSLPlayer.tsx` (nuevo)
- `src/components/sections/Hero.tsx` (editar)
