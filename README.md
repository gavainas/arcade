# 🕹️ Neon Arcade

Colección de minijuegos para navegador, hechos en HTML5 + Canvas (sin dependencias).

**Jugar:** abrí `index.html` (el portal) o entrá a cada juego directamente.

## Juegos

| Juego | Archivo | Descripción |
|-------|---------|-------------|
| 🐍 Serpiente Neón | [`serpiente-neon.html`](serpiente-neon.html) | Snake con portales en los bordes y frutas especiales (dorada con turbo, hielo que frena, corte que achica la cola). |
| 🧱 Rompebloques | [`rompebloques.html`](rompebloques.html) | Breakout con power-ups: multi-bola, paleta gigante y bola de fuego. |
| 🌀 Cambio de Color | [`cambio-color.html`](cambio-color.html) | Un botón: saltá y cruzá los aros que giran pasando sólo por el color de tu bolita. |
| 🔤 Sopa de Letras | [`sopa-letras.html`](sopa-letras.html) | Sopa de letras para niños: temas (animales, frutas, colores…), 3 niveles, pistas y sonido. |
| 🚀 Vector Pilot | [`vector-pilot.html`](vector-pilot.html) | Puzzle mobile-first de física vectorial: aplicá impulsos, dominá la gravedad y llegá al portal. |
| ♞ Knight Quest | [`knight-quest.html`](knight-quest.html) | Runner de ajedrez: saltá en L y esquivá a las piezas que te persiguen. |
| 🧠 Big Brain | [`brain-test.html`](brain-test.html) | Desafíos rápidos de cálculo, memoria, visión y lógica. |
| ⚽ Neon Heads | [`head-soccer.html`](head-soccer.html) | Fútbol cabezón para uno o dos jugadores. |
| 👾 Invasión Neón | [`invasion-neon.html`](invasion-neon.html) | Space invaders con oleadas progresivas y un jefe con barra de vida cada 3 oleadas. |
| 🏓 Pong Turbo | [`pong-turbo.html`](pong-turbo.html) | Pong vs CPU o de a 2, con power-ups que agrandan/achican paletas y curvan la pelota. |
| ☄️ Asteroides | [`asteroides.html`](asteroides.html) | Nave con inercia y rotación; las rocas se parten en pedazos más chicos al dispararles. |
| 🐸 Cruzá la Avenida | [`cruza-la-avenida.html`](cruza-la-avenida.html) | Estilo Frogger: cruzá carriles de tráfico neón cada vez más rápido y llegá a la meta. |
| 🟣 Bloques Neón | [`bloques-neon.html`](bloques-neon.html) | Piezas que caen estilo tetromino: armá líneas completas antes de que lleguen al tope. |
| 🔢 2048 Neón | [`2048-neon.html`](2048-neon.html) | Deslizá y fusioná fichas iguales hasta llegar a 2048, con teclado o swipe. |
| 💣 Buscaminas | [`buscaminas.html`](buscaminas.html) | Buscaminas clásico con 3 dificultades, primer click siempre seguro y banderitas con toque largo en mobile o click derecho. |
| 🃏 Memoria Neón | [`memoria.html`](memoria.html) | Memotest contra reloj: encontrá las parejas de cartas antes de que se acabe el tiempo; cada nivel trae más cartas y menos segundos. |
| 🌀 Laberinto | [`laberinto.html`](laberinto.html) | Laberintos generados al azar con una linterna de visión limitada, contra reloj; el laberinto crece y el tiempo aprieta en cada nivel. |
| 🎨 Nonograma | [`nonograma.html`](nonograma.html) | Picross: pintá las celdas según las pistas numéricas y revelá el dibujo oculto. 8 niveles de 5×5 a 12×12, con vidas, tiempo y mejores marcas. |
| 🗼 Torre | [`torre.html`](torre.html) | Apilá bloques que se mueven como un péndulo; lo que sobresale se corta. Alineá bloques perfectos para encadenar combos y no perder ancho. |
| 🔴 4 en Línea | [`4-en-linea.html`](4-en-linea.html) | Cuatro en línea contra una CPU con 3 niveles de dificultad (minimax con poda alfa-beta), o de a dos jugadores en el mismo dispositivo. |
| 📗 Palabra Secreta | [`palabra-secreta.html`](palabra-secreta.html) | Estilo Wordle en español: adiviná la palabra de 5 letras en 6 intentos, con teclado en pantalla y físico. Modo infinito con racha y mejor racha en `localStorage`. |
| 🪢 Ahorcado Neón | [`ahorcado.html`](ahorcado.html) | Ahorcado con categorías (animales, países, comida): adiviná la palabra letra por letra antes de que el muñeco de neón se complete, con 6 errores permitidos. |
| ⌨️ Tipeo Turbo | [`tipeo-turbo.html`](tipeo-turbo.html) | Palabras que caen del cielo: tipeá la primera letra para apuntar a una y completala antes de que toque el piso. Niveles, combos y velocidad creciente. |

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

## Cómo está armado el portal

Son tres piezas:

| Archivo | Qué hace |
|---------|----------|
| [`games.js`](games.js) | El catálogo. Única fuente de verdad. |
| [`index.html`](index.html) | La home: destacado, buscador, filtros y grilla. |
| [`game.html`](game.html) | El marco donde se juega: `game.html?id=torre`. |

El catálogo vive en **`games.js`**: `index.html` arma el destacado, los filtros por
categoría, el buscador y la grilla leyendo ese archivo. No hay tarjetas escritas a mano
en el HTML.

**`game.html?id=<id>`** es la página de juego. Carga el `.html` del juego en un `<iframe>`
y le pone alrededor el marco del portal: título, categoría, controles, pantalla completa,
reiniciar y una fila de juegos relacionados. Así el jugador termina una partida y tiene
otros cuatro juegos ahí mismo, en vez de quedar en un callejón sin salida.

Los juegos **no se modifican** para entrar al marco: como el iframe es del mismo origen,
`game.html` le inyecta una regla CSS que esconde el `← ARCADE` propio del juego, que ahí
adentro queda redundante. Los archivos sueltos (`torre.html`) siguen funcionando directo,
así que los links viejos no se rompen.

> Sobre `file://`: si abrís el portal con doble click desde el disco, el navegador trata
> cada archivo como un origen distinto y bloquea ese ajuste — el juego anda igual, sólo
> queda visible su link de volver duplicado. Servido por HTTP (GitHub Pages o
> `python3 -m http.server`) funciona como corresponde.

Cada juego declara `id`, `titulo`, `archivo`, `categoria`, `tags`, `desc`, `controles`,
`fecha`, y los campos de atribución `origen` / `autor` / `licencia` / `fuente`.

### Juegos de terceros

El catálogo mezcla juegos propios con juegos de otra gente. Los externos llevan
`origen: "externo"` más `autor`, `licencia` y `fuente`, y con eso la home les pone la
etiqueta **DE AFUERA** y `game.html` muestra el bloque de atribución. Esa atribución no
es decorativa: las licencias libres exigen mantenerla visible, así que se muestra siempre
(la etiqueta de la grilla, en cambio, se apaga con `MOSTRAR_ORIGEN` en `index.html`).

Para sumar uno:

1. **Chequeá la licencia.** Tiene que permitir redistribución (MIT, Apache, CC-BY, GPL…).
   Ojo con los assets: a veces el código es libre pero la música o los sprites no.
2. **Copiá el juego al repo** como un `.html` más. No lo embebas por URL remota: el iframe
   de `game.html` es del mismo origen a propósito, y `tools/thumbs.js` abre los archivos
   por `file://`.
3. **Pegá el aviso de copyright adentro del archivo.** Casi todas las licencias lo piden en
   cada copia, y acá el `.html` viaja solo, sin el `LICENSE` de al lado.
4. **Anotá los cambios** que le hagas al original en un comentario arriba de todo, así se
   puede re-sincronizar con upstream más adelante.
5. Agregá la entrada en `games.js` y corré `node tools/thumbs.js <id>`.

Hasta ahora hay dos:

| Juego | Autor | Licencia | Original |
|---|---|---|---|
| [Solitario](solitario.html) | Justin Hatzimalis | MIT | [repo](https://github.com/jhatzimalis/solitaire) |
| [Clumsy Bird](clumsy-bird/index.html) | Ellison Leão | GPL-3.0 | [repo](https://github.com/ellisonleao/clumsy-bird) |

Si el juego son varios archivos, va en su propia carpeta y `archivo` apunta adentro
(`clumsy-bird/index.html`). El `LICENSE` del original se conserva ahí mismo: la GPL pide
que quien reciba el juego pueda llegar a su código y a su licencia, y en un sitio estático
eso se cumple solo, porque lo que servimos **es** el código.

> Dato útil: los juegos que cargan assets por XHR (los que usan un motor, como melonJS)
> tiran errores de CORS si abrís el `.html` con doble click, porque `file://` no tiene
> origen. Servido por HTTP andan bien. Para probarlos, `python3 -m http.server`.

Las miniaturas de `thumbs/` se generan solas con **[`tools/thumbs.js`](tools/thumbs.js)**:
abre cada juego en un Chromium headless, entra al gameplay y saca la foto.

Salen en **WebP**, que pesa la mitad que el JPEG equivalente. Como Playwright sólo
exporta png y jpeg, el script saca un png y lo recodifica con el canvas del propio
Chromium: no hace falta instalar nada. Son lo más pesado de la home por lejos, así que
si algún día hay que adelgazar el sitio, es acá y no en el código.

```bash
node tools/thumbs.js              # sólo las que falten
node tools/thumbs.js --force      # regenerar todas
node tools/thumbs.js torre 2048-neon   # sólo esos juegos
```

Algunos juegos necesitan ayuda para llegar al gameplay (menús dentro del canvas, botones
que aparecen recién al elegir dificultad, partidas que terminan solas en un segundo). Eso
se configura por juego en el objeto `OVERRIDES` del script.

El portal guarda en `localStorage` cuántas veces abriste cada juego, para ordenar por
"Más jugados" y armar la fila "Seguí jugando". No se manda nada a ningún servidor.

## Agregar un juego nuevo

1. Sumá `mi-juego.html` en la raíz (un solo archivo autocontenido, sin dependencias).
2. Agregá su entrada al final de `NEON_GAMES` en `games.js`.
3. Corré `node tools/thumbs.js` para generar la miniatura.

No hace falta tocar `index.html` ni `game.html`: la tarjeta, la página de juego y los
relacionados salen solos del catálogo. Todo es estático: se puede hostear en GitHub Pages,
Vercel, Netlify o cualquier servidor de archivos.