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

Puzzle mobile-first de física vectorial: arrastrá desde la nave para definir un
vector de impulso (dirección + magnitud), soltá para lanzarla y llegá al portal
usando la menor cantidad de impulsos.

### Cómo se juega

- **Un dedo:** tocá cerca de la nave, arrastrá y soltá. La flecha y la línea
  punteada muestran hacia dónde y con cuánta fuerza vas a salir.
- **Vista previa de trayectoria:** mientras arrastrás, una guía punteada predice
  el recorrido teniendo en cuenta gravedad, planetas y viento.
- **Pocos impulsos:** cada nivel tiene un límite. Menos impulsos = más estrellas
  (⭐ a ⭐⭐⭐).

### Características

- **10 niveles** con dificultad creciente + **selector de niveles** con progreso.
- **Desafío diario** determinista: el mismo nivel para todo el mundo según la fecha.
- Mecánicas: inercia real, gravedad vertical configurable, **planetas atractivos**,
  **cuerpos repulsivos**, **obstáculos**, **portal móvil** y **corrientes de viento**.
- **Sistema de 1 a 3 estrellas** y mejor marca por nivel en `localStorage`.
- **Vista previa punteada** de la trayectoria antes de lanzar.
- **Sonidos con Web Audio** (sin archivos) y botón de silencio.
- **Partículas** de propulsión, impacto y victoria; vibración en mobile.
- **Tutorial interactivo** en el primer nivel.
- **Pausa automática** al cambiar de pestaña o minimizar.
- Física con *delta time*, independiente de la tasa de cuadros (~60 FPS).
- Controles que **no desplazan la página** (sin scroll, zoom ni selección).
- Sin imágenes, fuentes ni recursos remotos: funciona abriendo el `.html`.

### Física (resumen)

`velocidad += aceleración · dt` y `posición += velocidad · dt`. La gravedad
puntual usa `a = G / distancia²` con una distancia mínima para evitar fuerzas
infinitas, `dt` acotado para no saltar al volver de segundo plano y subpasos para
colisiones fiables a alta velocidad.

### Editar y agregar niveles

Los niveles son objetos JavaScript al principio del `<script>` (constante
`LEVELS`), fáciles de leer y modificar. Cada uno define `ship`, `goal`,
`gravity`, `planets`, `walls`, `winds`, `par` (impulsos ideales) y `max`. Para
sumar un nivel, agregá un objeto al arreglo.

El prompt maestro para continuar el desarrollo está en [`VECTOR_PILOT_PROMPT.md`](VECTOR_PILOT_PROMPT.md).

## Agregar un juego nuevo

1. Sumá `mi-juego.html` en la raíz.
2. Duplicá una tarjeta `.card.live` en `index.html` apuntando al nuevo archivo.

Todo es estático: se puede hostear en GitHub Pages, Vercel, Netlify o cualquier servidor de archivos.
