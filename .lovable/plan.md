# Hero — fix real de densidad (v2)

El cambio anterior fue muy tímido: el `min-h-[70vh]` sigue forzando altura > contenido, por eso se ve igual. Voy a aplicar cambios de verdad.

## Diagnóstico del screenshot
- Subtítulo dorado ("without hiring a single rep") **tapado por el navbar** → falta padding-top real
- Garantía $100 USD **se superpone con la zona del CTA** (efecto del `min-h` que estira y centra forzando huecos raros)
- Botón "Book your strategic diagnostic" **muy bajo**, lejos del contenido
- En general: huecos enormes producidos por `min-h` + `items-center` con poco contenido

## Cambios en `src/components/sections/Hero.tsx`

### 1. Quitar `min-h` y usar padding real (cambio clave)
```
- min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] items-center pt-14 md:pt-16
+ items-center pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20
```
Esto elimina el espacio "fantasma" del `min-h` y deja que el Hero ocupe lo que necesita su contenido + padding consistente. El navbar ya no tapa el título.

### 2. h1 — controlar tamaño en desktop
```
- text-3xl sm:text-5xl lg:text-[3.25rem]
+ text-3xl sm:text-4xl lg:text-5xl
```

### 3. Subtítulo dorado — más pequeño
```
- text-2xl sm:text-3xl lg:text-4xl mt-1
+ text-xl sm:text-2xl lg:text-3xl mt-2
```

### 4. Párrafo descriptivo — más compacto
```
- text-base sm:text-lg mb-5 md:mb-6 max-w-2xl
+ text-sm sm:text-base mb-4 md:mb-5 max-w-xl
```

### 5. Bullets — texto más chico, ícono más chico, menos gap
```
- gap-3 text-sm  (li)        h-5 w-5  (icon)     mb-4 md:mb-5  (ul)
+ gap-2.5 text-[13px] sm:text-sm  h-4 w-4  mb-3 md:mb-4
```

### 6. GuaranteeBadge — margen inferior reducido
```
- mb-4 md:mb-5
+ mb-3 md:mb-4
```

### 7. CTA — gap más pequeño entre botón y texto
```
- gap-4
+ gap-2 sm:gap-4
```

## Resultado esperado
- Hero ~25-30% más corto en desktop
- Sin huecos extraños entre garantía y CTA
- Navbar ya no tapa el subtítulo dorado
- Más respirable visualmente, todo agrupado coherentemente
- En mobile (390px): cabe casi todo above-the-fold

## Archivos modificados
- `src/components/sections/Hero.tsx` (único)
