# Shefa Growth Partners — Guía de entrega y administración sin experiencia técnica

Sitio comercial bilingüe (español/inglés) de Shefa Growth Partners, desarrollado con React, TypeScript, Vite, Tailwind CSS y componentes shadcn/ui. Incluye videos, agenda y archivos de guía.

**Contexto de entrega:** el cliente administrará y publicará el proyecto sin utilizar Lovable. No se contempla una base de datos conectada ni un servicio obligatorio de captura de contactos. El cliente puede elegir su alojamiento, agente de IA, calendario, CRM, formularios y APIs. Los servicios que aparecen en el código son referencias existentes, no una obligación de contratación ni una confirmación de integración activa.

**Advertencia sobre el código recibido:** todavía existen referencias heredadas a un cliente de datos y un formulario que intenta guardar información antes de habilitar la descarga. Actualizar este README no elimina esas referencias. Antes de ejecutar una copia sin configuración o publicarla, pide al agente que revise y adapte esos puntos para funcionar sin servicio de datos, o que conecte exclusivamente el servicio que elijas. No inventes credenciales ni asumas que el formulario ya funciona sin conexión.

**Por dónde empezar:** revisa los accesos de la sección 1, utiliza el prompt de la sección 2, sigue la sección 7 para abrir el sitio en tu computadora y publica con la sección 8.

> Abrir el sitio localmente no lo publica ni crea un panel de administración. Puedes revisar el diseño sin contratar una base de datos una vez desacopladas las referencias heredadas. Cualquier integración con terceros es opcional y debe configurarse y probarse por separado.

## Índice

- [1. Accesos y responsabilidades](#1-accesos-y-responsabilidades)
- [2. Administrar con cualquier agente de IA](#2-administrar-con-cualquier-agente-de-ia)
- [3. Dónde cambiar cada elemento](#3-dónde-cambiar-cada-elemento)
- [4. Calendario, videos, idiomas y guía](#4-calendario-videos-idiomas-y-guía)
- [5. Formularios e integraciones](#5-formularios-e-integraciones)
- [6. Administrar el repositorio](#6-administrar-el-repositorio)
- [7. Ejecutar y editar en tu computadora](#7-ejecutar-y-editar-en-tu-computadora)
- [8. Publicar con el alojamiento elegido](#8-publicar-con-el-alojamiento-elegido)
- [9. Seguridad, respaldos y mantenimiento](#9-seguridad-respaldos-y-mantenimiento)
- [10. Comprobaciones antes de publicar](#10-comprobaciones-antes-de-publicar)
- [11. Problemas frecuentes](#11-problemas-frecuentes)

## 1. Accesos y responsabilidades

Antes de comenzar, reúne:

- [ ] Copia del repositorio en una cuenta que el cliente pueda administrar.
- [ ] Acceso al alojamiento elegido y al proveedor del dominio, cuando vayas a publicar.
- [ ] PDF y fotos originales para alojarlos sin depender de recursos de la plataforma anterior.
- [ ] Acceso a las cuentas de los terceros que decidas utilizar, solo si vas a conectarlos.
- [ ] Confirmación de la rama del repositorio que publica el sitio y cómo volver a una versión anterior.

No necesitas una cuenta de Lovable ni contratar una base de datos para el escenario de entrega. Tampoco necesitas una API privada para mostrar textos, imágenes o PDF locales.

| Servicio | Para qué sirve | Cuándo se necesita |
| --- | --- | --- |
| Repositorio Git | Guardar y compartir versiones | Para colaboración y despliegues desde código |
| Alojamiento del cliente | Mostrar el sitio en Internet | Al publicar |
| Proveedor del dominio | Dirección propia y renovación | Si utilizas dominio propio |
| Calendario del cliente | Reservar llamadas | Si habilitas agenda |
| Plataforma de video | Reproducir videos insertados | Si mantienes videos externos |
| CRM, formulario, automatización o API elegida | Recibir contactos o realizar otras acciones | Solo si el cliente solicita esa integración |

**Dominio de referencia:** https://www.shefagrowthpartners.com. Copiar el código no transfiere el dominio ni lo conecta a un nuevo alojamiento; el titular debe autorizar su configuración. La dirección definitiva la determina el cliente.

## 2. Administrar con cualquier agente de IA

Puedes usar el agente de programación que prefieras, ya sea dentro de un editor, en una aplicación de escritorio o en un servicio que admita repositorios. Los nombres de los botones varían según la herramienta; busca opciones equivalentes a **Abrir carpeta**, **Conectar repositorio** o **Adjuntar archivos**. No requiere ninguna operación en Lovable.

**Importante:** no todos los chats de IA pueden editar archivos o ejecutar el sitio. Un agente con acceso autorizado a la carpeta puede realizar cambios; un chat sin ese acceso solo puede darte instrucciones. El agente tampoco recibe acceso al dominio ni a cuentas de terceros por leer el repositorio.

### Paso 1. Preparar el proyecto para el agente

1. Obtén la copia del código siguiendo la sección 7. No comiences con una carpeta vacía ni le pidas recrear el sitio desde cero.
2. Abre la carpeta que contiene `package.json` en la herramienta elegida, o conecta el repositorio del equipo receptor con los permisos mínimos necesarios.
3. Si solo puedes adjuntar archivos, entrega el README y los archivos relevantes para el cambio. Si envías un ZIP, excluye `.env`, `.env.local`, otros archivos con credenciales, datos personales, `.git`, `node_modules` y `dist`. Para preparar una copia segura, solicita ayuda al responsable si no sabes identificar esos archivos.
4. Confirma que estás trabajando en una copia o rama de prueba, no en una rama que publique automáticamente el sitio.
5. No pegues contraseñas, claves privadas ni registros de clientes en el chat. Cuando haga falta configurar una credencial, pide instrucciones para introducirla en el lugar seguro del servicio correspondiente.

### Paso 2. Copiar y enviar este prompt de inicio

Abre una conversación nueva con el agente. Copia todo el bloque siguiente y envíalo después de abrir la carpeta o proporcionar los archivos:

```text
Actúa como asistente de mantenimiento de este proyecto existente de Shefa Growth Partners. Soy una persona no desarrolladora. Explícame los pasos en español, con instrucciones breves y resultados que pueda comprobar.

Contexto:
- El proyecto se administrará y publicará sin utilizar Lovable. No propongas esa plataforma como requisito.
- El sitio es bilingüe español/inglés y utiliza React, TypeScript, Vite, Tailwind CSS y shadcn/ui. Confirma el estado real leyendo los archivos; no reconstruyas ni cambies de tecnología el proyecto.
- No hay una base de datos conectada prevista para esta entrega. Las integraciones son opcionales: el cliente elige sus terceros y APIs. No des por activa ninguna conexión ni exijas un proveedor concreto.
- El código puede contener referencias heredadas a un servicio de datos. Distingue lo que encuentres en archivos del funcionamiento esperado sin conexión.
- Conserva el diseño, ambos idiomas, los videos, los PDF y la acción actual de los botones salvo que solicite cambiarlos.

Primera tarea: ayúdame a preparar e iniciar el proyecto localmente sin depender de la plataforma anterior ni publicar nada. No cambies el contenido comercial.
1. Lee README.md, package.json y la configuración de Vite. Respeta las instrucciones del repositorio si existen.
2. Indica qué acceso tienes: lectura, edición de archivos, ejecución de comandos o navegador. Si no puedes abrir archivos o ejecutar algo, dilo y guíame; no afirmes que lo hiciste.
3. Pregunta si uso Windows, macOS o Linux solo si no puedes determinarlo. Comprueba Node.js y npm o indícame cómo hacerlo.
4. Identifica imports, inicializaciones, variables, llamadas y recursos heredados que dependan del servicio anterior. No uses sus credenciales ni envíes solicitudes a ese servicio. Propón el cambio mínimo para que la página arranque sin una base de datos. Explica qué ocurrirá con el formulario y pide mi aprobación antes de modificarlo: descarga sin captura o conexión a un tercero elegido por mí. No simules que los contactos se guardaron. Si requiere cambios, espera mi autorización antes de continuar con el arranque.
5. Después de resolver los bloqueos aprobados, si puedes ejecutar comandos en un entorno local autorizado, instala con npm ci e inicia con npm run dev. Si no puedes, dame un comando por paso, dónde escribirlo y qué debería aparecer. No cambies dependencias ni archivos de bloqueo para ocultar errores.
6. Usa la dirección local que indique Vite; este proyecto utiliza normalmente el puerto 8080. Explica cómo abrir el sitio, detenerlo y reiniciarlo.
7. Comprueba, si dispones de navegador, que la página carga, permite cambiar idioma y abre el calendario. No envíes formularios ni reserves citas sin mi permiso porque podrían utilizar servicios reales. Si no puedes comprobarlo, dame una lista de verificaciones manuales.
8. Si encuentras errores, explica su impacto y propone el cambio mínimo antes de aplicarlo. No migres datos, no elimines archivos, no cambies DNS, no publiques y no envíes cambios al repositorio sin mi autorización.

Al terminar, resume: cómo abrir el sitio, qué dependencias heredadas eliminaste con autorización o quedan pendientes, qué verificaste realmente y qué integraciones opcionales no están configuradas. Después espera mi solicitud de cambio.
```

### Paso 3. Revisar la respuesta y encender el sitio

- El agente debe reconocer que recibió **un proyecto existente**, indicar si puede ejecutar los pasos y darte una dirección local o instrucciones para obtenerla.
- Si pide credenciales de la plataforma anterior para iniciar el sitio, recuerda que debe preparar funcionamiento sin esa dependencia. Si eliges conectar un tercero, utiliza su configuración real y nunca entregues claves privadas en el chat.
- Si no puede ejecutar comandos, sigue las instrucciones de la sección 7 y comparte únicamente el mensaje de error necesario, sin credenciales ni datos personales.
- Abre la dirección local y comprueba ambos idiomas. Ver la página no confirma que los datos se envíen a ningún tercero.

### Paso 4. Pedir cambios concretos

Solicita un cambio por vez, con el texto exacto o una captura sin datos personales. Puedes copiar esta plantilla y sustituir los campos entre corchetes:

```text
En el proyecto existente, cambia únicamente [sección o elemento].
Resultado esperado: [describe lo que quieres ver o hacer].
Texto en español: [texto exacto, si aplica].
Texto en inglés: [texto exacto, si aplica].
Conserva el resto del diseño, las acciones de los botones y las integraciones.
Antes de editar, lee los archivos afectados y explica brevemente el cambio.
Después, revisa el resultado en ambos idiomas y en móvil/computadora si tienes navegador, y ejecuta las comprobaciones pertinentes disponibles.
Indica qué verificaste y qué no pudiste verificar. No publiques ni envíes cambios al repositorio sin mi autorización.
```

No envíes los corchetes como contenido definitivo del sitio. Si no tienes la traducción, pide primero al agente una propuesta y revísala antes de aplicarla.

### Paso 5. Revisar, guardar y publicar por separado

1. Revisa el cambio en la dirección local, en español e inglés, y comprueba los botones afectados.
2. Pide al agente un resumen de los archivos cambiados y de las comprobaciones realizadas. Para ver la versión de publicación, utiliza `npm run build` y después `npm run preview`, como explica la sección 7.
3. Guarda o envía los cambios mediante el procedimiento acordado con el responsable del repositorio. Confirma si ese envío activa una publicación automática antes de autorizarlo.
4. Publica desde el alojamiento del equipo receptor siguiendo la sección 8. La edición local, el envío de archivos y la publicación son pasos diferentes.
5. Comprueba el resultado en el dominio público y conserva la posibilidad de volver a la versión anterior.

**Servicios externos:** no se incluye un panel propio para administrarlos ni almacenamiento de contactos garantizado. Si conectas un tercero, utiliza su panel para consultar resultados. El agente no debe prometer una conexión activa solo por haber editado archivos.

## 3. Dónde cambiar cada elemento

Esta tabla ayuda a localizar los archivos en tu editor o a indicárselos al agente:

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
| Referencias heredadas al servicio de datos; no son requisitos de la entrega | `src/integrations/supabase/` y `supabase/migrations/` |

Mantén los colores mediante los tokens existentes y los textos en ambos idiomas. Cambiar el botón compartido no modifica necesariamente todos los botones: revisa también navegación, encabezado, botón móvil y sección final.

## 4. Calendario, videos, idiomas y guía

### Calendly

Como referencia heredada, el calendario insertado en el código utiliza:

https://calendly.com/juan-medrano-shefagrowthpartners/30min

- Para modificar horarios, duración o avisos: administra el evento en Calendly.
- Para sustituir el evento: pide al agente que cambie `BOOKING_URL` en `src/components/BookingModal.tsx`. Si eliges otra plataforma, debe adaptar también la inserción y comprobarla. No es obligatorio utilizar Calendly.
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

El flujo heredado intenta guardar un registro antes de mostrar el botón de descarga. Sin una conexión válida no debe considerarse operativo. El cliente puede elegir descarga directa sin captura o un formulario conectado a su tercero. Esa adaptación requiere cambios de código y no se realiza al editar este README. La transición posterior a la oferta tampoco confirma que el navegador haya terminado de guardar el PDF.

## 5. Formularios e integraciones

**No hay una base de datos conectada prevista para esta entrega.** Por defecto, no prometas que se guardan contactos, se envían correos o se crean registros en un CRM. El formulario heredado exige nombre, correo y teléfono y aún contiene una llamada de escritura a un cliente de datos: debe adaptarse antes de utilizarlo en este escenario.

El cliente puede elegir:

- **Sin captura:** facilitar el PDF sin recoger información. El agente debe retirar la dependencia de guardado y comprobar descarga y oferta posterior.
- **Formulario de un tercero:** insertar o conectar la solución elegida por el cliente.
- **API o automatización:** conectar el formulario con un CRM, correo u otro servicio elegido. Una base de datos propia no es obligatoria si el destino recibe y administra los datos.

### Cómo pedir una integración al agente

Copia la plantilla y completa los campos antes de enviarla:

```text
Quiero conectar [nombre del servicio elegido] para [resultado deseado].
Datos que necesito enviar: [campos necesarios].
Acción al completarse: [descarga, confirmación u otra acción].
Consulta la documentación oficial de ese servicio y explícame cuentas, permisos, costes y configuración necesarios. No utilices Lovable ni conectes una base de datos salvo que yo lo pida.
No reutilices credenciales ni conexiones heredadas. No pongas claves privadas en el navegador, en el repositorio ni en el chat. Si la integración necesita un servidor o función segura, propón una opción compatible con mi alojamiento y espera mi aprobación.
Antes de implementarla, confirma el alcance. Después prueba con datos ficticios autorizados, verifica el resultado en el servicio de destino y documenta cómo desactivar la integración. No muestres éxito si el envío falla.
```

Una clave configurada no basta para activar una integración. HighLevel es solo una posible elección, no un requisito ni una conexión confirmada. No recojas datos personales si no existe un destino y un uso claramente definidos.

## 6. Administrar el repositorio

El repositorio del cliente es el lugar donde se conservan los archivos y su historial. No se utilizará sincronización con Lovable para administrar el proyecto.

- Trabaja en un repositorio y una cuenta controlados por el cliente. Si recibes un repositorio con automatizaciones previas, pide al responsable que revise y desactive las que no se utilizarán.
- Usa una rama de prueba para cambios importantes; una rama es una versión separada donde puedes revisar cambios antes de incorporarlos al sitio público.
- Confirma qué rama utiliza el alojamiento y si publicar es automático al enviar cambios.
- No uses envíos forzados ni borres el historial para resolver un conflicto: pide ayuda al responsable.
- Una copia ZIP no conserva sincronización: tendrás que entregar los archivos modificados o configurar Git.
- Guarda versiones antes de editar y revisa los cambios antes de enviarlos.

Enviar archivos al repositorio y publicar el sitio son acciones distintas, salvo que el alojamiento tenga una publicación automática configurada.

## 7. Ejecutar y editar en tu computadora

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

### Paso 3. Revisar que la copia no dependa de servicios heredados

No configures una base de datos ni credenciales de la plataforma anterior para satisfacer este paso. Abre el proyecto con el agente y utiliza el prompt de la sección 2.

El agente debe revisar las referencias heredadas, proponer cómo desacoplarlas y esperar autorización para cambiar el código. El cliente elige el comportamiento del formulario según la sección 5. Si aparece un error de conexión al iniciar, no basta con quitar el archivo `.env`: una inicialización importada puede seguir bloqueando la página.

**Antes de continuar:** confirma que la página puede arrancar sin esas conexiones y que ningún formulario envía datos al destino anterior. Este README no hace esa limpieza por sí solo. Si el código recibido todavía la requiere, el arranque queda pendiente de esa adaptación, no de contratar un servicio.

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

**Resultado esperado:** aparece la página de Shefa Growth Partners; puedes cambiar el idioma y abrir el calendario. Los videos y el calendario externos necesitan Internet; cualquier formulario conectado necesitará además su integración configurada. Si aparecen errores o una pantalla en blanco, revisa la sección 11 antes de continuar.

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

### Variables de configuración —solo si una integración las necesita

Para el escenario sin servicios de datos, no debes introducir claves de una base de datos. Primero debe resolverse la dependencia heredada indicada en el paso 3.

Si eliges conectar un tercero, pide al agente que documente únicamente las variables necesarias para esa integración y dónde configurarlas. En tu computadora, las variables públicas pueden guardarse en `.env.local`, junto a `package.json`; en el alojamiento, usa su panel de configuración. Tras cambiarlas, reinicia el sitio local o vuelve a generar la publicación.

**Todo valor con prefijo `VITE_` puede llegar al navegador.** Nunca lo uses para contraseñas, tokens privados o claves de servicio. Los secretos deben configurarse en el servidor o función segura elegidos por el cliente, no en el sitio estático. No copies valores de la configuración heredada como parte de una conexión nueva.

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

## 8. Publicar con el alojamiento elegido

El cliente puede elegir cualquier alojamiento compatible con un sitio React + Vite estático. No se utilizará Lovable para publicar, configurar el dominio ni administrar integraciones.

### Preparación inicial

Solicita al agente o al responsable estos pasos:

1. Completar y probar el funcionamiento sin referencias al servicio anterior. Alojar las fotos y recursos necesarios en archivos del cliente o en un servicio elegido por él.
2. Conectar el repositorio del cliente a su alojamiento; Netlify, Vercel o Cloudflare Pages son ejemplos, no requisitos.
3. Configurar Node.js 22, instalación `npm ci`, generación `npm run build` y carpeta publicada `dist`.
4. Configurar solo las variables de las integraciones elegidas, si existen. No añadir claves de una base de datos por defecto.
5. Permitir que las rutas de la aplicación devuelvan `index.html` al recargar, sin reemplazar los PDF ni otros archivos existentes.
6. Comprobar la dirección de prueba del alojamiento: textos, imágenes, ambos idiomas, videos, agenda y descarga según el comportamiento acordado.
7. Activar HTTPS y conectar el dominio desde su proveedor siguiendo las instrucciones del alojamiento. Revisar los registros existentes antes de cambiar DNS para no afectar otros servicios, como correo.
8. Si se eligieron integraciones, verificar los envíos en el tercero correspondiente con datos ficticios autorizados.

Un sitio estático no protege una clave privada: cualquier integración que la necesite requiere un servicio seguro adicional elegido por el cliente.

### Publicaciones siguientes

1. Haz el cambio y revísalo localmente.
2. Ejecuta las comprobaciones pertinentes y `npm run build`.
3. Envía los cambios a la rama acordada o entrega `dist` mediante el procedimiento del alojamiento.
4. Comprueba si debes pulsar un botón de publicación o si se inicia automáticamente al enviar los cambios.
5. Abre el dominio público y revisa el resultado; conoce cómo restaurar la publicación anterior.

### Lo que debe quedar documentado para el cliente

- Dirección publicada, alojamiento, titular y acceso administrativo.
- Repositorio, rama de publicación y si publica automáticamente.
- Pasos para publicar y restaurar una versión.
- Lista de terceros elegidos, propósito, titular de la cuenta y costes conocidos.
- Variables requeridas y lugar seguro donde se configuran, sin registrar sus valores privados.
- Comportamiento del formulario sin integración y, si se conecta, dónde comprobar los resultados.

**Alcance:** este README documenta el escenario independiente. No ha retirado dependencias del código, conectado terceros, publicado una nueva copia ni modificado el dominio.

## 9. Seguridad, respaldos y mantenimiento

- Limita permisos del repositorio, alojamiento y terceros; activa verificación en dos pasos cuando exista.
- No incluyas secretos ni datos personales en commits, capturas o chats.
- Conserva versiones del código y copias de PDF y fotos originales.
- Revisa los archivos `.asset.json`: pueden apuntar a recursos externos. Para independencia completa, el agente debe incorporar o reemplazar esas referencias con recursos controlados por el cliente y comprobarlos.
- No contrates ni conectes una base de datos por defecto. Si el cliente decide hacerlo, configura permisos y protección de los datos con una persona técnica.
- Revisa periódicamente enlaces, disponibilidad del calendario, videos, dependencias y renovación del dominio.
- Si conectas un tercero, documenta cómo desactivarlo y, cuando proceda, cómo exportar o eliminar sus datos.
- Volver a una versión anterior del sitio no revierte acciones ya realizadas en un tercero.

## 10. Comprobaciones antes de publicar

- [ ] Textos correctos en español e inglés.
- [ ] Carga inicial probada con idioma de navegador español y con inglés.
- [ ] Diseño sin superposiciones en móvil y en computadoras de pantalla pequeña.
- [ ] Botones principales abren el calendario correcto.
- [ ] Videos reproducibles en ambos idiomas.
- [ ] PDF correcto en cada idioma y descarga comprobada cuando el formulario esté accesible.
- [ ] Arranque sin una conexión de datos heredada ni solicitudes al servicio anterior.
- [ ] Sin integración, el formulario no promete ni simula guardar contactos.
- [ ] Si el cliente eligió un tercero, envío probado y resultado confirmado allí.
- [ ] Fotos y demás recursos disponibles desde ubicaciones controladas por el cliente.
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
| No hay registros de formularios | Sin destino conectado no hay almacenamiento; si deseas captura, elige un tercero y solicita la integración |
| La página local cambió, pero el dominio no | Revisa la publicación en el alojamiento del cliente, su rama y la caché del navegador |
| Calendario vacío o con error | Enlace directo, disponibilidad del evento, permisos y posibles bloqueadores del navegador |
| Video no disponible | Identificador, privacidad del video y permiso de inserción en YouTube |
| PDF devuelve 404 | Nombre exacto, mayúsculas/minúsculas, ruta en `PDF_URLS` y publicación del archivo |
| El formulario no avanza | Puede conservar una llamada de guardado heredada; pide al agente adaptarlo al modo sin captura o al tercero elegido |
| El contacto no aparece en el tercero elegido | Confirma que la integración se implementó y que la solicitud se recibió; una clave configurada no basta |
| Una ruta externa devuelve 404 al recargar | Configura el fallback de la aplicación a `index.html` en el alojamiento |
| La página exige configuración del servicio anterior | No inventes valores: pide al agente desacoplar la inicialización y las llamadas heredadas antes de ejecutar sin conexión |

## Documentación de referencia

- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/docs)
- [GitHub Desktop](https://docs.github.com/en/desktop)
- [Vite: generación y publicación de un sitio estático](https://vite.dev/guide/static-deploy.html)
- Documentación oficial del alojamiento y de las APIs que el cliente elija.

**Alcance de esta guía:** define cómo administrar la entrega sin Lovable y sin asumir una base de datos conectada. Señala las referencias heredadas que necesitan adaptación; no certifica su eliminación ni el estado de publicación, DNS o integraciones externas. En esta actualización solo se modifica documentación.
