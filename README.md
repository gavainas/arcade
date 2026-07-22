# 🕹️ Neon Arcade

Colección de minijuegos para navegador, hechos en HTML5 + Canvas (sin dependencias).

**Jugar:** abrí `index.html` (el portal) o entrá a cada juego directamente.

## Juegos

| Juego | Archivo | Descripción |
|-------|---------|-------------|
| 🐍 Serpiente Neón | [`serpiente-neon.html`](serpiente-neon.html) | Snake con portales en los bordes y frutas especiales (dorada con turbo, hielo que frena, corte que achica la cola). |
| 🧱 Rompebloques | [`rompebloques.html`](rompebloques.html) | Breakout con power-ups: multi-bola, paleta gigante y bola de fuego. |
| 🔤 Sopa de Letras | [`sopa-letras.html`](sopa-letras.html) | Sopa de letras para niños: temas (animales, frutas, colores…), 3 niveles, pistas y sonido. |
| 🚀 Vector Pilot | [`vector-pilot.html`](vector-pilot.html) | Puzzle mobile-first de física vectorial: aplicá impulsos, dominá la gravedad y llegá al portal. |
| ♞ Knight Quest | [`knight-quest.html`](knight-quest.html) | Runner de ajedrez: saltá en L y esquivá a las piezas que te persiguen. |
| 🧠 Big Brain | [`brain-test.html`](brain-test.html) | Desafíos rápidos de cálculo, memoria, visión y lógica. |
| ⚽ Neon Heads | [`head-soccer.html`](head-soccer.html) | Fútbol cabezón para uno o dos jugadores. |

## Sopa de Letras

Pensado para los más chicos:

- 6 temas de palabras: animales, frutas, colores, vehículos, cuerpo y naturaleza (o "sorpresa").
- 6 niveles:
  - **Fácil** (8×8), **Medio** (10×10, con diagonales) y **Difícil** (12×12, en cualquier dirección).
  - **Hiper** (🌀): cada letra gira sobre sí misma como un reloj; al encontrar la palabra se frenan.
  - **Trompo** (🎡): gira toda la sopa en bloque, manteniendo el orden de las letras.
  - **Ciclón** (🌪️): los dos efectos a la vez — gira todo el tablero y cada letra.
- Selección deslizando el dedo o el mouse, con trazo resaltador para cada palabra (que sigue pegado a las letras aunque todo gire).
- Botón de pista, sonido opcional, cronómetro y mejor tiempo por nivel en `localStorage`.
- Palabras sin acentos ni Ñ para que sea fácil de leer. Sin dependencias.

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