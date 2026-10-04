# Café Neruda · Menú NFC

Proyecto estático, sin dependencias ni compilación, para GitHub Pages. El menú interactivo funciona también abriendo `index.html` directamente. La dirección y el teléfono proceden del sitio oficial; productos y precios del PDF de nueve páginas proporcionado.

## Archivos

- `index.html`: estructura, encabezado, contacto y visor.
- `styles.css`: colores en `:root`, diseño y adaptación móvil.
- `script.js`: navegación, Intersection Observer, selección por zona de lectura y transición de fotos.
- `menu-data.js`: **fuente utilizada por la web**. Cambiar productos, descripciones, categorías, precios y fotografías aquí.
- `menu-data.json`: copia de referencia de la transcripción inicial; no se carga en la página.
- `images/`: fotos WebP recortadas del PDF, sin imágenes generadas.
- `inventario.csv`: revisión de 129 filas con precios/variantes y página fuente.
- `menu-original.pdf`: respaldo y alternativa sin JavaScript.
- `REVISION.md`: fuentes, limitaciones y comprobaciones.

## Publicación en GitHub Pages

1. Crea un repositorio público, por ejemplo `cafe-neruda-menu`.
2. Extrae el ZIP. Sube **el contenido de la carpeta `cafe-neruda` a la raíz** del repositorio. `index.html` debe estar en la raíz, no dentro de otra carpeta.
3. En **Settings → Pages → Build and deployment**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. Espera a que termine el despliegue. Copia la URL que GitHub muestra en Pages y comprueba el menú en tu teléfono. Habitualmente tendrá la forma `https://TU-USUARIO.github.io/cafe-neruda-menu/`.
5. Graba esa URL como registro NDEF de tipo URI/URL en la etiqueta NFC, por ejemplo con NFC Tools. Escanea la tarjeta para verificarla.
6. Mantén la URL estable: podrás modificar el menú sin reprogramar las tarjetas. No bloquees las etiquetas permanentemente antes de probarlas.

No necesitas un backend, API, credenciales, npm ni un dominio propio. Los recursos usan rutas relativas para funcionar bajo la subcarpeta del repositorio. El NFC guarda la URL, no el HTML.

## Cambiar el menú

Cada categoría en `MENU` tiene `id`, `name`, `page`, `note` e `items`. Cada producto necesita un `id` único, `name`, `price`, `description`, `variants`, `image` y `sourcePage`. Copia un objeto existente para agregar otro producto. Usa un número para el precio, sin `$`; puedes usar `"Según peso"`. Para productos con opciones deja `price: null` y completa `variants`.

Para una nueva fotografía, guarda un WebP en `images/` y cambia `image: null` por `image: "images/nombre.webp"`. Recomendado: 800–1200 px, encuadre vertical/cuadrado y menos de 200 KB. Identifica el platillo real antes de asignar su foto. Si una imagen falla, el visor muestra fotografía pendiente en lugar de un recurso roto. Solo se solicita la foto activa y, cuando existe, la del siguiente producto. Las 23 fotografías no asignadas no se descargan al recorrer el menú.

Para reutilizar: sustituye `MENU`, nombre/contacto en HTML, favicon, fotos y colores de `styles.css`. Respeta los identificadores únicos y las rutas relativas. Elimina el respaldo PDF de este restaurante y enlaza el del nuevo.

## Diseño y uso

Computadoras/tablets: lista a la izquierda y foto fija a la derecha. Teléfonos hasta 599 px: visor fijo compacto con nombre/precio a la izquierda y foto a la derecha, con la lista debajo. Las categorías están siempre accesibles mediante desplazamiento horizontal. Se respetan las preferencias de movimiento reducido, el teclado y el zoom de texto. No hay pedidos ni cobros: es un menú de consulta.

Antes de lanzarlo al público, confirma los importes con Café Neruda y completa las fotografías pendientes. El proyecto está preparado para publicarse; este entregable no crea un repositorio ni proporciona una URL de GitHub ya desplegada.
