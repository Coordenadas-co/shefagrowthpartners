# Shefa Growth Partners — Guía de administración

Sitio comercial bilingüe (español/inglés) de Shefa Growth Partners, con videos de venta, agenda de llamadas en Calendly y un formulario de descarga de guía. Está desarrollado con React, TypeScript, Vite, Tailwind CSS y componentes shadcn/ui; utiliza Lovable Cloud para almacenar registros del formulario.

## Índice

- [1. Accesos y responsabilidades](#1-accesos-y-responsabilidades)
- [2. Administrar dentro de Lovable](#2-administrar-dentro-de-lovable)
- [3. Dónde cambiar cada elemento](#3-dónde-cambiar-cada-elemento)
- [4. Calendario, videos, idiomas y guía](#4-calendario-videos-idiomas-y-guía)
- [5. Formularios e integraciones](#5-formularios-e-integraciones)
- [6. Sincronización con el repositorio](#6-sincronización-con-el-repositorio)
- [7. Administrar fuera de Lovable](#7-administrar-fuera-de-lovable)
- [8. Publicar en otro alojamiento](#8-publicar-en-otro-alojamiento)
- [9. Seguridad, respaldos y mantenimiento](#9-seguridad-respaldos-y-mantenimiento)
- [10. Comprobaciones antes de publicar](#10-comprobaciones-antes-de-publicar)
- [11. Problemas frecuentes](#11-problemas-frecuentes)

## 1. Accesos y responsabilidades

| Servicio | Para qué se administra | Acceso necesario |
| --- | --- | --- |
| Lovable | Contenido, diseño, publicación y Lovable Cloud | Cuenta con acceso al proyecto |
| Repositorio Git | Código, revisiones y colaboración | Permisos de lectura o escritura según la tarea |
| Calendly | Disponibilidad, duración, notificaciones y reuniones | Cuenta propietaria del evento |
| YouTube | Videos, privacidad y permiso para insertarlos | Cuenta propietaria de los videos |
| Proveedor del dominio | DNS y renovación del dominio | Cuenta del titular del dominio |
| Alojamiento externo, si se utiliza | Despliegues, variables y registros de errores | Cuenta del proveedor |
| HighLevel, si se configura | Contactos, seguimiento y automatizaciones | Cuenta y permisos de la ubicación correspondiente |

**Direcciones del sitio:**

- Dominio personalizado: https://www.shefagrowthpartners.com
- Dirección publicada de Lovable: https://shefagrowthpartners.lovable.app

Estas direcciones identifican el sitio; no sustituyen una comprobación de disponibilidad o del estado del dominio.

## 2. Administrar dentro de Lovable

### Cambiar contenido o diseño

1. Abre el proyecto en Lovable.
2. Solicita el cambio en el chat, indicando la sección, el texto exacto y los dos idiomas cuando corresponda.
3. Revisa el resultado en la vista previa, tanto en computadora como en móvil.
4. Comprueba los botones, el calendario y los videos antes de publicar.

Ejemplo de solicitud:

> Cambia la segunda respuesta del FAQ por estos textos: español «…» e inglés «…». Conserva el diseño y la acción de los botones.

Para editar archivos directamente, abre **Code**. La edición manual depende del plan; en el plan gratuito el editor es de solo lectura. Guarda los cambios y utiliza el historial de versiones si necesitas revisar o revertir una edición.

### Publicar cambios

1. Pulsa **Publish**.
2. Si el sitio ya está publicado, confirma **Update** en el diálogo de publicación.
3. Abre el dominio público y comprueba el resultado.

**Vista previa, repositorio y sitio publicado no son lo mismo.** Un cambio de contenido en la vista previa o un commit sincronizado no actualiza automáticamente el sitio público en Lovable. Los cambios del backend, como modificaciones de tablas o funciones, pueden aplicarse al servicio activo sin esperar una publicación del sitio: trátalos con especial cuidado.

### Administrar registros del formulario

Abre **More → Database** para revisar las herramientas de base de datos de Lovable Cloud. Los registros de descarga se guardan en `lead_magnet_downloads`, con nombre, correo, teléfono, idioma y fecha. La exportación de datos se realiza por separado desde **More → Database → Manage → Settings → Export data**.

El sitio no incluye un panel público de administración propio. El contenido se cambia en Lovable o en el código; la disponibilidad de citas se cambia en Calendly.

## 3. Dónde cambiar cada elemento

Esta tabla es para quien edite desde **Code** o trabaje localmente:

| Elemento | Archivo o carpeta |
| --- | --- |
| Orden de las secciones visibles | `src/pages/Index.tsx` |
| Encabezado principal, textos y fondo | `src/components/sections/Hero.tsx` |
| Perfil de Juan Sebastián | `src/components/sections/AboutMe.tsx` |
| Preguntas frecuentes | `src/components/sections/FAQ.tsx` |
| Otras secciones comerciales | `src/components/sections/` |
| Navegación | `src/components/Navbar.tsx` |
| Pie de página | `src/components/Footer.tsx` |
| Botón compartido entre secciones | `src/components/SectionCTA.tsx` |
| Botón fijo en móvil | `src/components/StickyCTA.tsx` |
| Llamada final a la acción | `src/components/sections/FinalCTA.tsx` |
| Calendario | `src/components/BookingModal.tsx` |
| Videos por idioma | `src/components/VSLPlayer.tsx` |
| Selección de idioma | `src/contexts/LanguageContext.tsx` |
| Formulario, descarga y oferta posterior | `src/components/LeadMagnetPopup.tsx` |
| Archivos PDF | `public/lead-magnet/` |
| Fotos y logotipos | `src/assets/` |
| Colores y estilos globales | `src/index.css` y `tailwind.config.ts` |
| Título y descripción para buscadores/redes | `index.html` |
| Comandos y dependencias | `package.json` |
| Historial de cambios de estructura de datos | `supabase/migrations/` |

Mantén los colores mediante los tokens existentes y los textos en ambos idiomas. Cambiar el botón compartido no modifica necesariamente todos los botones: revisa también navegación, encabezado, botón móvil y sección final.

## 4. Calendario, videos, idiomas y guía

### Calendly

El calendario insertado utiliza:

https://calendly.com/juan-medrano-shefagrowthpartners/30min

- Para modificar horarios, duración o avisos: administra el evento en Calendly.
- Para sustituir el evento: cambia `BOOKING_URL` en `src/components/BookingModal.tsx` o solicita el cambio en Lovable.
- Comprueba el evento dentro del sitio y desde su enlace directo.

Los CTA principales están orientados a **agendar una llamada**. El formulario de guía sigue presente en el código; no confundas su existencia con que todos los botones lo abran. El calendario actual no incluye una detección de reserva completada ni una página de confirmación propia en este componente; configura la confirmación en Calendly o solicita su implementación antes de darla por disponible.

### Videos de venta

Los identificadores se definen en `VIDEO_IDS` dentro de `src/components/VSLPlayer.tsx`:

| Idioma | Video actual | Identificador |
| --- | --- | --- |
| Español | https://youtu.be/JdajKCPv3D4 | `JdajKCPv3D4` |
| Inglés | https://youtu.be/yAJMUIdEwx8 | `yAJMUIdEwx8` |

Para cambiar un video, sustituye únicamente el identificador del idioma correspondiente. En YouTube, permite la inserción y utiliza un video público o no listado que no requiera acceso privado.

### Idioma del sitio

Al cargar, se revisan `navigator.language` y `navigator.languages`: si alguno comienza con `es`, se muestra español; en caso contrario, inglés. El visitante puede cambiarlo con el selector. Actualmente esa elección manual no se guarda entre recargas.

Los textos se definen generalmente como `t("Texto en inglés", "Texto en español")`. Respeta ese orden al editar.

### Sustituir los PDF

1. Prepara una versión en español y otra en inglés.
2. Sustituye los archivos conservando los nombres siguientes, o actualiza también `PDF_URLS` en el formulario:

   - `public/lead-magnet/5-Palancas-Shefa-Growth-Partners-ES.pdf`
   - `public/lead-magnet/5-Levers-Shefa-Growth-Partners-EN.pdf`

3. Publica y abre las rutas `/lead-magnet/5-Palancas-Shefa-Growth-Partners-ES.pdf` y `/lead-magnet/5-Levers-Shefa-Growth-Partners-EN.pdf` en el dominio público.
4. Comprueba la descarga en ambos idiomas, también en móvil; algunos navegadores móviles pueden abrir el PDF en lugar de guardarlo directamente.

Cuando se abre el formulario, el flujo implementado es: datos válidos → registro guardado → botón de descarga → oferta para agendar la llamada. La oferta aparece aproximadamente 600 ms después de pulsar la descarga; esto no confirma que el navegador haya terminado de guardar el archivo.

## 5. Formularios e integraciones

El formulario actual exige nombre, correo y teléfono. Solo avanza a la descarga cuando Lovable Cloud acepta el registro.

**HighLevel: no dar por confirmada la sincronización.** El código actual de `LeadMagnetPopup.tsx` inserta el registro en Lovable Cloud; no realiza una llamada explícita a HighLevel. Tampoco se observa un script de seguimiento de HighLevel en el `index.html` actual ni una función `submit-lead` en este repositorio. Esto no permite descartar automatizaciones externas, pero tampoco confirma que los contactos lleguen a HighLevel.

Si la entrega de contactos a HighLevel es necesaria, verifica la integración activa y realiza una prueba completa: enviar un formulario de prueba y comprobar que el contacto aparece en la ubicación correcta. Un secreto guardado por sí solo no activa una integración. Nunca coloques una API privada en el navegador; las llamadas que la requieran deben ejecutarse en una función segura con el secreto configurado en el servicio.

## 6. Sincronización con el repositorio

En Lovable, revisa **Project settings → Git** para conocer el proveedor, repositorio y rama sincronizada. También puedes llegar desde el menú **+** del chat, en **Project → GitHub** cuando corresponda.

- Si ya está conectado, los cambios guardados en Lovable, incluido este README, se envían mediante la sincronización del proyecto.
- Los commits enviados desde fuera a la **rama sincronizada** llegan a Lovable. Los de otras ramas no llegan hasta que se fusionan o se cambia la rama activa.
- La sincronización inicial crea un repositorio nuevo; no enlaza uno preexistente. Desconectar y reconectar crea otro repositorio, no vuelve a enlazar el anterior.
- En un borrador, los cambios no aparecen en el repositorio hasta aceptar el borrador o abrir su pull request.
- No borres el repositorio ni uses `force push` sobre la rama sincronizada.
- Si Lovable y el repositorio divergen, revisa y fusiona la rama `lovable-sync*` más reciente antes de continuar.
- Un push al repositorio no publica el sitio automáticamente en Lovable.

Esta guía no acredita el estado de conexión del repositorio: compruébalo en **Project settings → Git**. Para evitar conflictos, coordina las ediciones externas y las de Lovable, y trabaja en ramas separadas para cambios grandes.

## 7. Administrar fuera de Lovable

### Obtener el código

Clona el repositorio conectado desde su proveedor. Si prefieres una descarga sin Git, en planes de pago puedes usar **Project settings → Git → Download codebase** o **Download codebase** al pie del árbol de archivos de **Code**.

La descarga de código no incluye las filas de la base de datos ni los secretos privados del backend.

### Ejecutar en tu computadora

Requisitos: Git para clonar, Node.js 22 y npm.

```bash
# Sustituye la URL y el nombre de carpeta por los de tu repositorio.
git clone <URL_DEL_REPOSITORIO>
cd <CARPETA_DEL_REPOSITORIO>
npm ci
npm run dev
```

Abre la dirección indicada por Vite; la configuración de este proyecto utiliza normalmente **http://localhost:8080**. Si el puerto está ocupado, revisa la dirección que aparece en la terminal.

### Variables de configuración

El cliente utiliza estas variables públicas:

```dotenv
VITE_SUPABASE_PROJECT_ID=<identificador_del_backend>
VITE_SUPABASE_URL=<url_del_backend>
VITE_SUPABASE_PUBLISHABLE_KEY=<clave_publica_del_backend>
```

Los nombres técnicos deben conservarse aunque el servicio administrado sea Lovable Cloud. Para seguir utilizando el mismo backend, configura los valores públicos correspondientes al proyecto. En tu equipo puedes usar `.env.local`, que está ignorado por Git. En otro alojamiento, utiliza su panel de variables.

**Toda variable `VITE_` puede llegar al navegador.** Nunca uses este prefijo para claves privadas de HighLevel, credenciales, contraseñas o claves de servicio. No edites manualmente los archivos generados `src/integrations/supabase/client.ts`, `types.ts` o `supabase/config.toml` dentro de Lovable.

**Precaución:** si utilizas la configuración del proyecto activo, los formularios locales escriben en la misma base de datos del sitio publicado. Usa registros de prueba identificables; para pruebas destructivas utiliza un entorno separado.

### Comandos disponibles

| Comando | Resultado |
| --- | --- |
| `npm ci` | Instala las dependencias exactas del archivo de bloqueo |
| `npm run dev` | Inicia el entorno local |
| `npm run test` | Ejecuta las pruebas disponibles |
| `npm run lint` | Revisa reglas de calidad del código |
| `npm run build` | Genera el sitio de producción en `dist/` |
| `npm run preview` | Sirve localmente el resultado de producción; no es un servidor para publicar |

Antes de devolver cambios a la rama sincronizada, revisa las diferencias, ejecuta las comprobaciones pertinentes y abre una revisión en el repositorio. No subas `node_modules/`, `dist/` ni secretos.

## 8. Publicar en otro alojamiento

### Opción A: mover solo el sitio y conservar Lovable Cloud

Es la alternativa de menor alcance: otro proveedor sirve el sitio, mientras los registros siguen en el backend actual.

1. Conecta el repositorio a un alojamiento compatible con sitios estáticos, como Netlify, Vercel o Cloudflare Pages.
2. Configura Node.js 22, instalación con `npm ci`, compilación con `npm run build` y carpeta de salida `dist`.
3. Añade las variables públicas anteriores **antes de compilar**. Si cambian, vuelve a desplegar.
4. Configura las rutas del sitio para que las visitas a rutas de la aplicación devuelvan `index.html` —excepto archivos existentes— en lugar de un error 404.
5. Comprueba los PDF, videos, Calendly y envío del formulario en la dirección de prueba del proveedor.
6. Configura HTTPS y el dominio con las instrucciones DNS del nuevo alojamiento. Cambia el tráfico solo después de validar la nueva versión.

Si en el futuro añades autenticación o funciones, revisa también sus URL de redirección y los orígenes permitidos. Los despliegues externos y su publicación automática se administran en ese proveedor, no en Lovable.

### Opción B: mover también el backend

Es una migración independiente, no una consecuencia automática de clonar el código. Requiere una persona con conocimientos técnicos:

- Recrear estructura, políticas de acceso y permisos a partir de las migraciones disponibles; comprobar que coinciden con el estado real.
- Exportar e importar los registros de base de datos por separado.
- Copiar por separado los archivos almacenados fuera del repositorio, si existen.
- Configurar autenticación, funciones, automatizaciones y credenciales propias que realmente se utilicen.
- Actualizar la conexión de la aplicación y validar lectura y escritura antes de cambiar el dominio.

Los secretos de Lovable Cloud no se exportan con Git. La clave de servicio y la contraseña de base de datos del backend administrado no están disponibles para solicitarlas o copiarlas. Prepara credenciales propias en el destino y consulta la guía oficial de migración; no asumas que una copia del repositorio es una copia completa del servicio.

## 9. Seguridad, respaldos y mantenimiento

- Limita los permisos de Lovable, repositorio y servicios a las personas que los necesiten; activa verificación en dos pasos cuando esté disponible.
- Trata nombre, correo y teléfono como datos personales: no los incluyas en commits, capturas públicas ni registros de errores compartidos.
- No abras acceso público de lectura a `lead_magnet_downloads` para solucionar un fallo de formulario; conserva las políticas de acceso y revisa los permisos necesarios para insertar.
- Conserva versiones del código en Git y exportaciones de datos en un lugar protegido, especialmente antes de migrar o borrar información.
- Guarda una copia de los PDF y fotos originales. Los archivos `.asset.json` pueden apuntar a recursos alojados: comprueba su disponibilidad desde cualquier alojamiento nuevo y prepara copias si necesitas independencia del proveedor.
- Revisa periódicamente dependencias, disponibilidad del calendario, videos, enlaces y renovación del dominio.
- Si necesitas volver atrás, utiliza una versión anterior del sitio o un despliegue anterior del alojamiento. Revertir el código no revierte automáticamente cambios o borrados en la base de datos.

## 10. Comprobaciones antes de publicar

- [ ] Textos correctos en español e inglés.
- [ ] Carga inicial probada con idioma de navegador español y con inglés.
- [ ] Diseño sin superposiciones en móvil y en computadoras de pantalla pequeña.
- [ ] Botones principales abren el calendario correcto.
- [ ] Videos reproducibles en ambos idiomas.
- [ ] PDF correcto en cada idioma y descarga comprobada cuando el formulario esté accesible.
- [ ] Envío de prueba con nombre, correo y teléfono; registro visible en Lovable Cloud.
- [ ] Si se requiere HighLevel, contacto de prueba visible allí; no basta con que el formulario muestre éxito.
- [ ] Título, descripción, enlaces, fotos y logotipos revisados.
- [ ] Pruebas pertinentes ejecutadas y ausencia de errores nuevos.
- [ ] Resultado comprobado en el dominio público después de publicar.

## 11. Problemas frecuentes

| Problema | Qué revisar |
| --- | --- |
| La vista previa cambió, pero el dominio no | Publica con **Publish → Update** y comprueba la caché del navegador |
| Los cambios externos no aparecen en Lovable | Rama sincronizada, estado de Git y posibles conflictos en **Project settings → Git** |
| Calendario vacío o con error | Enlace directo, disponibilidad del evento, permisos y posibles bloqueadores del navegador |
| Video no disponible | Identificador, privacidad del video y permiso de inserción en YouTube |
| PDF devuelve 404 | Nombre exacto, mayúsculas/minúsculas, ruta en `PDF_URLS` y publicación del archivo |
| El formulario no avanza | Validez de los tres campos, conexión al backend, permisos de inserción y error de la solicitud |
| El contacto no aparece en HighLevel | Verifica una integración activa; el código actual del formulario no confirma ese envío |
| Una ruta externa devuelve 404 al recargar | Configura el fallback de la aplicación a `index.html` en el alojamiento |
| La app externa no conecta al backend | Variables públicas presentes durante la compilación y nuevo despliegue después de cambiarlas |

## Documentación oficial

- [Editar y revisar código en Lovable](https://docs.lovable.dev/features/code-mode)
- [Publicar en Lovable](https://docs.lovable.dev/features/publish)
- [Sincronización Git y trabajo local](https://docs.lovable.dev/integrations/git-sync-overview)
- [Conectar GitHub](https://docs.lovable.dev/integrations/github)
- [Alojamiento externo y migración](https://docs.lovable.dev/tips-tricks/external-deployment-hosting)

**Alcance de esta guía:** documenta el código presente en este repositorio; no certifica el estado de publicación, sincronización Git, DNS ni automatizaciones configuradas en servicios externos.
