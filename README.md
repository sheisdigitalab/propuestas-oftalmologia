# Propuestas de diseño · Dra. Katia Sotelo

Prototipos de la página de inicio, en tres estilos:

- `estilo-calido/`: profesional cálido (propuesta 1)
- `estilo-elegante/`: lujo discreto (propuesta 2)
- `estilo-clasico/`: médico tradicional (propuesta 3) (azul marino y blanco, trato de «usted»)
- `index.html`: portada para elegir entre las tres

Son HTML y CSS estáticos, sin dependencias. Las fuentes están en `fonts/` (alojadas en local) y las páginas llevan `noindex` para que Google no las indexe.

## Imágenes de muestra

Las fotografías están en `img/` (WebP, recortadas al hueco y con versión pequeña para móvil, servidas con `srcset`). Son de muestra: en la web final irán fotos propias de la doctora. Todas proceden de [Unsplash](https://unsplash.com) y se usan bajo la [Unsplash License](https://unsplash.com/license) (uso comercial permitido, sin atribución obligatoria; se indica por cortesía).

**Una sola doctora en las tres propuestas.** Para que la clienta compare estilos y no fotos, todas las imágenes de la doctora (portada, trayectoria / la doctora y avatar de la cita) salen de la misma fotografía con distintos recortes. Cada propuesta aplica un ajuste de color suave para encajar con su estilo: neutro y luminoso en la 1 y la 3, más cálido y en penumbra en la 2. Las imágenes de ojos y párpados reciben el mismo ajuste para mantener la coherencia.

| Archivos en `img/` | Uso | Autor/a | Foto original |
| --- | --- | --- | --- |
| `p1-doctora-hero-*`, `p1-trayectoria-*`, `avatar-p1-128` | Propuesta 1: portada, trayectoria y avatar de la cita | Humberto Chávez | [unsplash.com/photos/FVh_yqLR9eA](https://unsplash.com/photos/FVh_yqLR9eA) |
| `p2-doctora-hero-*`, `p2-doctora-*`, `avatar-p2-128` | Propuesta 2: portada, la doctora y avatar de la cita | Humberto Chávez | [unsplash.com/photos/FVh_yqLR9eA](https://unsplash.com/photos/FVh_yqLR9eA) |
| `p3-hero-*`, `p3-doctora-*`, `avatar-p3-128` | Propuesta 3: portada, sobre mí y avatar de la cita | Humberto Chávez | [unsplash.com/photos/FVh_yqLR9eA](https://unsplash.com/photos/FVh_yqLR9eA) |
| `p1-cataratas-*` | Propuesta 1: cirugía de cataratas | Amanda Dalbjörn | [unsplash.com/photos/fvInY-Gh7sc](https://unsplash.com/photos/fvInY-Gh7sc) |
| `p1-parpados-*` | Propuesta 1: cirugía de párpados | Roozbeh Badizadegan | [unsplash.com/photos/splQbzTnaW0](https://unsplash.com/photos/splQbzTnaW0) |
| `p2-cataratas-*` | Propuesta 2: cirugía de cataratas | Venti Views | [unsplash.com/photos/MHImssrygog](https://unsplash.com/photos/MHImssrygog) |
| `p2-parpados-*` | Propuesta 2: cirugía de párpados | Candice Picard | [unsplash.com/photos/Ms8YM2grLas](https://unsplash.com/photos/Ms8YM2grLas) |
| `p3-cataratas-*` | Propuesta 3: cirugía de cataratas | Amanda Dalbjörn | [unsplash.com/photos/UbJMy92p8wk](https://unsplash.com/photos/UbJMy92p8wk) |
| `p3-parpados-*` | Propuesta 3: cirugía de párpados | Dimitar Krastev | [unsplash.com/photos/0L6e2y-PaCY](https://unsplash.com/photos/0L6e2y-PaCY) |

## Enlaces directos y vista previa en WhatsApp

Cada propuesta funciona sola, sin pasar por la portada:

- `estilo-calido/` (propuesta 1)
- `estilo-elegante/` (propuesta 2)
- `estilo-clasico/` (propuesta 3)

Cada página lleva arriba una franja con el aviso «Propuesta de diseño · Las fotos y los datos entre corchetes son de ejemplo» y etiquetas Open Graph para que WhatsApp muestre una tarjeta con imagen (`img/og-estilo-calido.jpg`, `img/og-estilo-elegante.jpg`, `img/og-estilo-clasico.jpg`, 1200×630).

Las etiquetas `og:url` y `og:image` apuntan a `https://sheisdigitalab.github.io/propuestas-oftalmologia/`. Si el repositorio cambia de cuenta o de nombre, hay que actualizar esa dirección en las tres páginas. Las páginas mantienen `noindex`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo, `katia-propuestas`) y sube todo el contenido de esta carpeta a la raíz.
2. En el repositorio, ve a Settings → Pages.
3. En "Build and deployment", elige "Deploy from a branch", rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos la web estará en `https://TU-USUARIO.github.io/katia-propuestas/`.

Diseño: She is Digital Lab
