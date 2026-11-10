# Shefa Growth Partners — Guía de entrega y administración sin experiencia técnica

Sitio comercial bilingüe (español/inglés) de Shefa Growth Partners, con videos de venta, agenda de llamadas en Calendly y un formulario de descarga de guía. Está desarrollado con React, TypeScript, Vite, Tailwind CSS y componentes shadcn/ui; utiliza Lovable Cloud para almacenar registros del formulario.

**Contexto de esta entrega:** el proyecto será clonado y administrado fuera de la cuenta de Lovable que lo creó. Esta guía está dirigida a personas que no desarrollan software. No necesitas esa cuenta para abrir el código en tu computadora, pero copiar el código **no transfiere** los registros del formulario, el dominio, las cuentas de Calendly/YouTube/HighLevel ni el acceso al servicio que guarda los datos.

**Por dónde empezar:** pide los accesos de la sección 1, sigue la sección 7 para abrir la copia en tu computadora y utiliza la sección 8 cuando quieras publicarla. La sección 2 explica únicamente el proyecto original en Lovable; no es un paso obligatorio para administrar la copia externa.

> Abrir el sitio en tu computadora no lo publica en Internet ni crea un panel para editarlo. Este proyecto no tiene un editor visual de contenido independiente: los textos se cambian en archivos. La configuración inicial del alojamiento y cualquier traslado de datos deben quedar a cargo de una persona técnica; después puedes seguir esta guía para tareas sencillas.

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

Antes de cerrar la entrega, el equipo receptor debe contar con:

- [ ] Una copia del repositorio en una cuenta u organización que pueda administrar, no solo un enlace sin permisos.
- [ ] Acceso al alojamiento donde se publicará la copia y al proveedor del dominio.
- [ ] Acceso autorizado a Calendly, YouTube y, si corresponde, HighLevel.
- [ ] Confirmación de quién seguirá administrando los registros del formulario: el equipo original o un servicio del equipo receptor.
- [ ] Configuración pública necesaria para ejecutar el sitio y copias de los PDF y fotos originales.
- [ ] Exportación protegida de los datos que deban entregarse y credenciales propias para las integraciones nuevas, si se trasladan.

**No elimines el proyecto original ni cierres sus servicios antes de probar la copia.** El sitio clonado puede seguir utilizándolos aunque se vea en otra dirección.

| Servicio | Para qué se administra | Acceso necesario |
| --- | --- | --- |
| Lovable original, mientras siga siendo necesario | Servicio actual de registros y proyecto original | Acceso autorizado al proyecto original; clonar no lo concede |
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

El dominio no cambia de propietario al copiar el código. Para que muestre la nueva copia, su titular debe conectarlo al nuevo alojamiento después de probarlo.

## 2. Administrar dentro de Lovable

**Solo para quienes conserven acceso al proyecto original.** Los pasos de esta sección no administran una copia alojada fuera de Lovable. Publicar aquí actualiza el sitio original; publicar la copia se hace en el alojamiento elegido por el equipo receptor.

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

El sitio no incluye un panel público de administración propio. El contenido se cambia en Lovable o en el código; la disponibilidad de citas se cambia en Calendly. El equipo que solo reciba el repositorio no obtiene acceso a estos registros. Si se trasladan, la exportación debe realizarla una persona autorizada antes de finalizar la entrega.

## 3. Dónde cambiar cada elemento

Esta tabla es para quien edite desde **Code** o trabaje localmente:

Para localizar un archivo sin usar comandos, abre la carpeta del proyecto en Visual Studio Code y despliega las carpetas que aparecen en la columna izquierda. Por ejemplo, `src/components/sections/FAQ.tsx` significa abrir `src`, después `components`, luego `sections` y finalmente `FAQ.tsx`.

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

**Distingue dos casos:** trabajar sobre el mismo repositorio conectado puede seguir enviando cambios al proyecto original; crear una copia en otro repositorio no mantiene esa sincronización automáticamente. Para esta entrega, el equipo receptor debe confirmar qué repositorio administrará y qué cuenta lo controla. No supongas que tus ediciones externas quedan aisladas si sigues utilizando el repositorio original.

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

### Paso 1. Instalar las herramientas una sola vez

1. Instala **Node.js 22** desde https://nodejs.org/en/download. Es la herramienta que permite ejecutar el sitio en tu computadora; incluye **npm**, por lo que no necesitas instalar npm por separado.
2. Instala **Visual Studio Code** desde https://code.visualstudio.com. Permite abrir la carpeta y editar los textos.
3. Si usarás GitHub para guardar y compartir cambios, instala **GitHub Desktop** desde https://desktop.github.com y accede con la cuenta que tenga permisos en el repositorio del equipo receptor. Para comenzar mediante ZIP no necesitas Git ni GitHub Desktop.
4. Cierra y vuelve a abrir Visual Studio Code después de instalar Node.js.

### Paso 2. Obtener y abrir la copia

**Con GitHub Desktop —para mantener cambios compartidos:**

1. Pide al responsable el enlace del repositorio que administrará el equipo receptor; esta guía no inventa una dirección de repositorio.
2. En GitHub Desktop abre **File → Clone repository → URL**, pega el enlace y elige una carpeta fácil de encontrar.
3. Pulsa **Clone**. Si no tienes permisos, pide acceso al titular del repositorio.
4. En Visual Studio Code selecciona **File → Open Folder** y abre esa carpeta.

**Con un ZIP —para revisar el sitio sin configurar Git:**

1. En la página del repositorio de GitHub, pulsa **Code → Download ZIP**. Si no tienes acceso, el responsable debe entregarte la descarga.
2. Extrae el ZIP: en Windows, clic derecho → **Extraer todo**; en macOS, doble clic.
3. En Visual Studio Code selecciona **File → Open Folder** y abre la carpeta extraída que contiene `package.json`.

No abras solo un archivo ni la carpeta que contiene el ZIP. Debes abrir la carpeta donde están `package.json`, `src` y `public`. Una copia ZIP no se sincroniza con el repositorio: para publicar sus cambios necesitarás entregarlos al responsable o configurar Git.

### Paso 3. Preparar la conexión del formulario

La copia puede conservar un archivo `.env` con la configuración pública del servicio original. Eso **no** te concede permiso para administrarlo y puede hacer que tus pruebas registren datos reales allí.

- Si el equipo original autoriza conservar ese servicio, confirma que la configuración recibida está completa antes de enviar pruebas.
- Si falta la configuración, pide al responsable los tres valores públicos descritos más abajo; no intentes adivinarlos.
- Si se busca independencia, una persona técnica debe preparar el nuevo servicio y entregar sus valores públicos. Copiar archivos no realiza ese traslado.

Para introducir valores entregados por el responsable, crea en Visual Studio Code un archivo llamado exactamente `.env.local` junto a `package.json` y completa el ejemplo de «Variables de configuración». No dejes los textos entre `< >`: son etiquetas que hay que sustituir, no valores funcionales. No pongas claves privadas en este archivo. Si cambias esta configuración mientras el sitio está abierto, detenlo y vuelve a iniciarlo.

### Paso 4. Abrir la terminal y comprobar la instalación

En Visual Studio Code selecciona **Terminal → New Terminal**. La terminal es el panel inferior donde escribes las instrucciones siguientes. No copies los símbolos de los bloques ni toda la guía: escribe cada comando y pulsa **Enter**.

```bash
node --version
npm --version
```

El primero debe mostrar una versión que empieza por `v22.`; el segundo, un número de versión de npm. Si aparece «no se reconoce» o «command not found», vuelve a abrir el programa y revisa la instalación de Node.js.

**Windows:** si PowerShell dice que no puede ejecutar `npm.ps1`, no desactives protecciones del equipo. En el menú junto al botón **+** de la terminal selecciona **Command Prompt / Símbolo del sistema** y abre una terminal con esa opción; vuelve a ejecutar los comandos allí.

### Paso 5. Instalar y encender el sitio

En la terminal de la carpeta del proyecto escribe:

```bash
npm ci
```

Espera a que termine y vuelva a aparecer la línea donde puedes escribir; la primera instalación requiere Internet y puede tardar varios minutos. Después escribe:

```bash
npm run dev
```

La terminal mostrará una dirección local, normalmente **http://localhost:8080**. Ábrela en Chrome, Edge, Firefox o Safari. Si muestra otro puerto, usa la dirección que aparece en la terminal.

**Resultado esperado:** aparece la página de Shefa Growth Partners; puedes cambiar el idioma y abrir el calendario. Los videos y el servicio del formulario necesitan Internet. Si aparecen errores o una pantalla en blanco, revisa la sección 11 antes de continuar.

Mantén la terminal abierta mientras revisas el sitio. Que siga mostrando mensajes sin volver a la línea de escritura es normal: está manteniendo el sitio encendido.

### Paso 6. Apagarlo y volver a abrirlo otro día

- Para detenerlo, selecciona la terminal y pulsa **Ctrl+C**; si Windows solicita confirmación, confírmala.
- Para abrirlo otro día: abre la misma carpeta en Visual Studio Code, abre una terminal y ejecuta `npm run dev`.
- No necesitas ejecutar `npm ci` cada vez: úsalo la primera vez o cuando el responsable indique que cambiaron las dependencias del proyecto.
- La dirección `localhost` funciona en tu computadora, no es una dirección pública para enviar a clientes.

### Paso 7. Hacer cambios sencillos sin alterar el funcionamiento

1. Antes de editar, comprueba que puedes recuperar la versión anterior con el responsable o desde el historial del repositorio.
2. Abre el archivo de la sección indicada en la tabla de la sección 3.
3. Para cambiar una frase, reemplaza solo el texto entre las comillas; conserva comillas, comas, paréntesis y etiquetas. Actualiza español e inglés.
4. Guarda con **Ctrl+S** en Windows o **Cmd+S** en macOS. Revisa el cambio en la dirección local.
5. Para sustituir un PDF, copia el nuevo archivo a `public/lead-magnet/` conservando el nombre exacto indicado en la sección 4.
6. Revisa ambos idiomas y los botones. Si aparece un error después de editar, deshaz el cambio y pide ayuda antes de publicar.

Cambiar fotos que requieran modificar código, la acción de botones, formularios o conexiones a servicios requiere más cuidado: entrega al responsable el cambio deseado en lugar de modificar instrucciones que no reconoces.

### Paso 8. Guardar los cambios para el equipo

Si utilizas GitHub Desktop, revisa la lista **Changes**, escribe una descripción breve del cambio, guárdalo con **Commit** y envíalo con **Push origin** únicamente a la rama acordada con el responsable. Estos pasos guardan y envían los archivos; **no garantizan que ya estén publicados**. Un alojamiento externo puede publicar automáticamente al recibirlos, por lo que debes confirmar antes qué rama publica el sitio.

Si utilizas ZIP, entrega los archivos modificados al responsable indicando sus carpetas y lo que cambiaste. No envíes `node_modules`, archivos con secretos ni datos de personas. No sobrescribas el proyecto original sin una revisión.

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

Para revisar la versión que se publicará, ejecuta `npm run build` y, cuando termine sin errores, `npm run preview`. Abre la dirección que muestre la terminal; puede ser distinta de la utilizada para editar. Detén esa revisión con **Ctrl+C**.

Si fallan pruebas o revisiones, comparte el mensaje sin credenciales ni datos personales con el responsable; no ignores errores para publicar. No subas `node_modules/`, `dist/` ni secretos al repositorio.

## 8. Publicar en otro alojamiento

**No necesitas pulsar Publish en la cuenta original de Lovable para publicar la copia externa.** El responsable debe dejar configurado el alojamiento del equipo receptor y explicar cómo publicar y restaurar una versión. Las instrucciones siguientes son una lista de entrega para esa configuración inicial, no una indicación de que los servicios ya se hayan trasladado.

### Opción A: mover solo el sitio y conservar Lovable Cloud

Otro proveedor sirve el sitio, mientras los registros siguen en el servicio actual. **Esta opción no es independiente de la cuenta original:** requiere un acuerdo de acceso, continuidad y pago con su responsable. Clonar el sitio no asegura que ese servicio siga disponible.

1. Conecta el repositorio a un alojamiento compatible con sitios estáticos, como Netlify, Vercel o Cloudflare Pages.
2. Configura Node.js 22, instalación con `npm ci`, compilación con `npm run build` y carpeta de salida `dist`.
3. Añade las variables públicas anteriores **antes de compilar**. Si cambian, vuelve a desplegar.
4. Configura las rutas del sitio para que las visitas a rutas de la aplicación devuelvan `index.html` —excepto archivos existentes— en lugar de un error 404.
5. Comprueba los PDF, videos, Calendly y envío del formulario en la dirección de prueba del proveedor.
6. Configura HTTPS y el dominio con las instrucciones DNS del nuevo alojamiento. Cambia el tráfico solo después de validar la nueva versión.

Si en el futuro añades autenticación o funciones, revisa también sus URL de redirección y los orígenes permitidos. Los despliegues externos y su publicación automática se administran en ese proveedor, no en Lovable.

### Opción B: mover también el backend

Esta opción permite retirar la dependencia del servicio de datos de la cuenta original, una vez trasladado y probado. Es una migración independiente, no una consecuencia automática de clonar el código. Requiere una persona con conocimientos técnicos:

- Recrear estructura, políticas de acceso y permisos a partir de las migraciones disponibles; comprobar que coinciden con el estado real.
- Exportar e importar los registros de base de datos por separado.
- Copiar por separado los archivos almacenados fuera del repositorio, si existen.
- Configurar autenticación, funciones, automatizaciones y credenciales propias que realmente se utilicen.
- Actualizar la conexión de la aplicación y validar lectura y escritura antes de cambiar el dominio.

Los secretos de Lovable Cloud no se exportan con Git. La clave de servicio y la contraseña de base de datos del backend administrado no están disponibles para solicitarlas o copiarlas. Prepara credenciales propias en el destino y consulta la guía oficial de migración; no asumas que una copia del repositorio es una copia completa del servicio.

Para exportar los datos, una persona autorizada debe abrir en el proyecto original **More → Database → Manage → Settings → Export project data**, seleccionar **Export data** y después **Database → Export → Start export**. Cuando la exportación esté lista, debe descargarla desde **More → Storage** y guardarla de forma protegida. Los archivos almacenados allí se descargan aparte; no se entregan con el ZIP del código. Confirma que la exportación pueda importarse en el destino antes de retirar el servicio original.

### Lo que debe dejar preparado el responsable para una persona no técnica

- Dirección del sitio público y acceso al alojamiento del equipo receptor.
- Repositorio y rama que publican los cambios, y si la publicación ocurre automáticamente.
- Instrucciones propias de ese alojamiento para publicar y volver a la versión anterior.
- Acceso al lugar donde se consultan y exportan los registros del formulario.
- Confirmación de si queda alguna dependencia de la cuenta original y quién la paga/administra.
- Prueba documentada de calendario, videos, PDF y registro de formulario en la nueva dirección.

**Este README prepara la entrega; no realiza el clonado, la transferencia de cuentas, la migración de datos ni el cambio del dominio.**

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
| `node` o `npm` no se reconoce | Instala Node.js 22 y vuelve a abrir Visual Studio Code |
| Windows bloquea `npm.ps1` | Abre una terminal de tipo Command Prompt / Símbolo del sistema en Visual Studio Code; no desactives protecciones |
| `npm ci` dice que no encuentra `package.json` | Abre la carpeta extraída o clonada que contiene ese archivo y crea una terminal nueva desde allí |
| La instalación falla por conexión o permisos | Revisa Internet y copia el error para el responsable; no borres archivos ni ejecutes comandos como administrador sin indicación |
| La página local no abre | Mantén `npm run dev` activo y usa la dirección exacta mostrada en la terminal |
| Se ve una pantalla en blanco | Revisa configuración pública y mensajes de la terminal; deshaz la última edición si el problema empezó al cambiar un archivo |
| Mi compañero no abre el enlace `localhost` | Esa dirección es solo local; comparte la dirección publicada por el alojamiento |
| No puedo consultar los registros tras clonar | Clonar no da acceso al servicio de datos; pide el acceso o confirma el traslado con el responsable |
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
