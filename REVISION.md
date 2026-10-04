# Análisis y revisión del menú

## Fuentes

- https://cafeneruda.godaddysites.com/ consultado el 3 de octubre de 2026 (hora de México). Expone nombre, teléfono, domicilio y secciones Menú/Promociones; la extracción web no expone el catálogo completo ni sus precios.
- `menu-original.pdf`, proporcionado por el usuario: nueve páginas de imágenes; fuente principal del catálogo. Se revisaron visualmente las nueve páginas. El PDF no contiene texto extraíble.

## Estructura incluida

| Página | Categorías | Productos/grupos |
|---|---|---:|
| 1 | Entradas | 10 |
| 2 | Tapas, Tacos | 6 |
| 3 | Baguettes, Hamburguesas | 7 |
| 4 | Pastas, Ensaladas | 10 |
| 5 | Parrilla Neruda | 6 |
| 6 | Crepa salada, Dulces, Postres | 9 |
| 7 | Bebidas calientes, Especiales, Tés | 14 |
| 8 | Frappés | 8 |
| 9 | Cerveza, Aguas, Destilados, Coctelería | 48 |
| Total | 19 categorías | 118 |

Se conservan sabores como opciones dentro de un mismo grupo. El inventario tiene 129 filas al separar las variantes de precio. No hay una categoría Desayunos en el PDF, por lo que no se agregó.

## Particularidades de la fuente

- Pulpo al chimichurri: el precio es **según peso**, sin importe numérico.
- Maestro Dobel figura dos veces en la página 9 a $130. Se conserva una entrada y se registra aquí la duplicación.
- `Limonada Pepino/Hie` aparece abreviada de ese modo; no se expandió a un ingrediente supuesto.
- Chelada 5, Michelada 10 y Clamatada 15 se conservan como preparaciones con sus importes. El PDF no aclara expresamente si son adicionales al precio de la cerveza; confirmar con el restaurante.
- Se respetan los nombres publicados (Macalan, Buchanans, Filadelphia, Ristreto, etc.) y no se añaden descripciones ausentes. Solo se normalizaron mayúsculas, espacios y algunos acentos.
- Las descripciones de las ensaladas Arrachera y Salmón son iguales en el PDF; se conservaron.
- Los precios corresponden al PDF entregado, no a una confirmación de vigencia del restaurante.

## Fotografías

27 fotografías se recortaron del PDF y se guardaron como WebP. El ambiente (página 9, foto superior) se usa en el encabezado. Tres fotos cuyo contenido es identificable se asignaron: tabla de quesos (página 1, inferior), pulpo (página 5, central), salmón (página 5, inferior). Estas asignaciones se basan en identificación visual, no en rótulos de la fuente; conviene que el restaurante las confirme.

**115 productos/grupos tienen fotografía pendiente.** Todos están identificados en `inventario.csv`. No se asignaron las restantes 23 fotografías de producto: el PDF no identifica de forma suficiente qué variante, sabor o preparación representan. Los archivos `pagina-N-foto-M.webp` conservan página y posición vertical (1 superior, 2 central, 3 inferior). No se presentan como fotos de productos no verificados. Ninguna foto fue generada con IA.

Para completar la experiencia visual hace falta: fotografías identificadas de los productos pendientes, confirmación de las tres asociaciones visuales y, si se desea sustituir el nombre tipográfico del encabezado, el logotipo original. El nombre del encabezado es texto estilizado, no una reproducción del logotipo oficial.

## Comprobaciones

- Se cotejaron nombres, precios, notas, sabores y variantes contra las nueve páginas.
- JavaScript verificado sintácticamente; rutas internas e imágenes locales verificadas.
- Proyecto sin dependencias remotas. Las fotos no identificadas se muestran como pendientes, nunca como otra comida.
- Se incluye alternativa PDF cuando JavaScript está desactivado.
- El estado de las pruebas de navegador se registra al final de este documento.

### Resultado de pruebas de navegador

Chromium automatizado: 320, 390, 768 y 1440 px de ancho; 118 productos renderizados en cada tamaño, sin errores JavaScript, respuestas HTTP fallidas ni desbordamiento horizontal. Se verificaron los 19 saltos de categoría con movimiento reducido y la selección por scroll de los 118 productos en 390 px: cero discrepancias. Se comprobó carga de fotografía real, y se revisaron visualmente capturas de teléfono y escritorio. No sustituye la prueba física de escaneo NFC, pendiente hasta que exista una URL pública. No se ha realizado un despliegue en una cuenta de GitHub.

Guía de publicación contrastada con https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site .
