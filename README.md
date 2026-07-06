# 🕹️ Neon Arcade

Colección de minijuegos para navegador, hechos en HTML5 + Canvas (sin dependencias).

**Jugar:** abrí `index.html` (el portal) o entrá a cada juego directamente.

## Juegos

| Juego | Archivo | Descripción |
|-------|---------|-------------|
| 🚀 Vector Pilot | [`vector-pilot.html`](vector-pilot.html) | Puzzle mobile-first de física vectorial: aplicá impulsos, dominá la gravedad y llegá al portal. |
| ♞ Knight Quest | [`knight-quest.html`](knight-quest.html) | Runner de ajedrez: saltá en L y esquivá a las piezas que te persiguen. |
| 🧠 Big Brain | [`brain-test.html`](brain-test.html) | Desafíos rápidos de cálculo, memoria, visión y lógica. |
| ⚽ Neon Heads | [`head-soccer.html`](head-soccer.html) | Fútbol cabezón para uno o dos jugadores. |

## Vector Pilot

- Control táctil y con mouse.
- Impulsos con dirección y magnitud visibles.
- Inercia, gravedad vertical y campos gravitatorios.
- Cinco niveles iniciales.
- Mejor resultado guardado en `localStorage`.
- Sin dependencias ni recursos externos.

El prompt maestro para continuar el desarrollo está en [`VECTOR_PILOT_PROMPT.md`](VECTOR_PILOT_PROMPT.md).

## Agregar un juego nuevo

1. Sumá `mi-juego.html` en la raíz.
2. Duplicá una tarjeta `.card.live` en `index.html` apuntando al nuevo archivo.

Todo es estático: se puede hostear en GitHub Pages, Vercel, Netlify o cualquier servidor de archivos.