# Propuestas de diseño · Dra. Katia Sotelo

Prototipos de la página de inicio, en tres estilos:

- `estilo-calido/`: profesional cálido (propuesta 1)
- `estilo-elegante/`: lujo discreto (propuesta 2)
- `estilo-clasico/`: médico tradicional (propuesta 3) (azul marino y blanco, trato de «usted»)
- `index.html`: ya no es una portada; solo redirige a la propuesta 1 para que la raíz no dé error. Cada propuesta se envía con su propio enlace.

Son HTML y CSS estáticos, sin dependencias. Las fuentes están en `fonts/` (alojadas en local) y las páginas llevan `noindex` para que Google no las indexe.

## Imágenes de muestra

Las fotografías están en `img/` (WebP, recortadas al hueco y con versión pequeña para móvil, servidas con `srcset`). Son de muestra: en la web final irán fotos propias de la doctora. Todas proceden de [Pexels](https://www.pexels.com) y se usan bajo la [Pexels License](https://www.pexels.com/license/) (uso comercial permitido, sin atribución obligatoria; se indica por cortesía).

**Una sola doctora en las tres propuestas.** Todas las fotos de la doctora pertenecen a la misma serie de Antoni Shkraba, tomada en una consulta oftalmológica (lámpara de hendidura, montura de pruebas), con fotos distintas para la portada y para la sección sobre la doctora. Cada propuesta aplica un ajuste de color suave para encajar con su estilo: más cálido en la 1, cálido y en penumbra en la 2 y neutro y luminoso en la 3. Las demás imágenes reciben el mismo ajuste que las de su propuesta.

| Archivos en `img/` | Uso | Autor/a | Foto original |
| --- | --- | --- | --- |
| `p1-doctora-hero-*`, `avatar-p1-128` | Propuesta 1: portada y avatar de la cita | Antoni Shkraba | [pexels.com/photo/6749753](https://www.pexels.com/photo/6749753/) |
| `p1-trayectoria-*` | Propuesta 1: trayectoria | Antoni Shkraba | [pexels.com/photo/6749762](https://www.pexels.com/photo/6749762/) |
| `p1-cataratas-*` | Propuesta 1: cirugía de cataratas (paciente mujer en lámpara de hendidura) | Autoría en su página de Pexels | [pexels.com/photo/5752281](https://www.pexels.com/photo/5752281/) |
| `p1-parpados-*` | Propuesta 1: cirugía de párpados | Karolina Grabowska (Kaboompics) | [pexels.com/photo/8528483](https://www.pexels.com/photo/8528483/) |
| `p2-doctora-hero-*` | Propuesta 2: portada | Antoni Shkraba | [pexels.com/photo/6749788](https://www.pexels.com/photo/6749788/) |
| `p2-doctora-*`, `avatar-p2-128` | Propuesta 2: la doctora y avatar de la cita | Antoni Shkraba | [pexels.com/photo/6749767](https://www.pexels.com/photo/6749767/) |
| `p2-cataratas-*` | Propuesta 2: cirugía de cataratas (paciente mujer en autorrefractómetro) | Ksenia Chernaya | [pexels.com/photo/5201897](https://www.pexels.com/photo/5201897/) |
| `p2-parpados-*` | Propuesta 2: cirugía de párpados (mirada de mujer mayor) | Tony Zohari | [pexels.com/photo/34943056](https://www.pexels.com/photo/34943056/) |
| `p3-hero-*` | Propuesta 3: portada (la doctora junto a la lámpara de hendidura) | Antoni Shkraba | [pexels.com/photo/6749711](https://www.pexels.com/photo/6749711/) |
| `p3-doctora-*`, `avatar-p3-128` | Propuesta 3: sobre mí y avatar de la cita | Antoni Shkraba | [pexels.com/photo/6749714](https://www.pexels.com/photo/6749714/) |
| `p3-cataratas-*` | Propuesta 3: cirugía de cataratas (paciente mujer con foróptero) | Ksenia Chernaya | [pexels.com/photo/5201879](https://www.pexels.com/photo/5201879/) |
| `p3-parpados-*` | Propuesta 3: cirugía de párpados (mirada de mujer mayor) | BOOM Photography | [pexels.com/photo/12644996](https://www.pexels.com/photo/12644996/) |
| `p1-proceso-*` | Propuesta 1: módulo «proceso» (detalle del equipo) | Antoni Shkraba | [pexels.com/photo/6749788](https://www.pexels.com/photo/6749788/) |
| `p2-proceso-*` | Propuesta 2: módulo «proceso» (detalle del equipo) | Antoni Shkraba | [pexels.com/photo/6749711](https://www.pexels.com/photo/6749711/) |
| `p3-proceso-*` | Propuesta 3: módulo «proceso» (detalle del equipo) | Antoni Shkraba | [pexels.com/photo/6749753](https://www.pexels.com/photo/6749753/) |

Las imágenes `og-estilo-*.jpg` (1200×630) son capturas de la portada de cada propuesta para la vista previa en WhatsApp.

## Enlaces directos y vista previa en WhatsApp

Cada propuesta funciona sola y se envía con su propio enlace:

- `estilo-calido/` (propuesta 1)
- `estilo-elegante/` (propuesta 2)
- `estilo-clasico/` (propuesta 3)

Cada página lleva arriba una franja con el aviso «Propuesta de diseño · Las fotos y los datos son de ejemplo» y etiquetas Open Graph para que WhatsApp muestre una tarjeta con imagen (`img/og-estilo-calido.jpg`, `img/og-estilo-elegante.jpg`, `img/og-estilo-clasico.jpg`, 1200×630).

Las etiquetas `og:url` y `og:image` apuntan a `https://sheisdigitalab.github.io/propuestas-oftalmologia/`. Si el repositorio cambia de cuenta o de nombre, hay que actualizar esa dirección en las tres páginas. Las páginas mantienen `noindex`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo, `katia-propuestas`) y sube todo el contenido de esta carpeta a la raíz.
2. En el repositorio, ve a Settings → Pages.
3. En "Build and deployment", elige "Deploy from a branch", rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos la web estará en `https://TU-USUARIO.github.io/katia-propuestas/`.

Diseño: She is Digital Lab
