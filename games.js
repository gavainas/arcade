/*
  Catálogo de Neon Arcade.
  Fuente única de verdad: la home, el buscador y los filtros se arman desde acá.

  Para sumar un juego: agregá un objeto al final de NEON_GAMES y corré
  `node tools/thumbs.js` para generar su miniatura. No hace falta tocar el HTML.

  Campos:
    id         slug único (= nombre del archivo sin .html)
    titulo     nombre visible
    archivo    ruta del .html jugable
    emoji      fallback visual si todavía no hay miniatura
    categoria  clave de NEON_CATEGORIAS
    tags       palabras sueltas para el buscador
    desc       una o dos frases, se muestra en la tarjeta
    controles  cómo se juega (teclado / táctil)
    fecha      alta en el catálogo (YYYY-MM-DD), ordena "Nuevos"
    origen     "propio" (hecho acá) | "externo" (de terceros)
    autor      a quién se le atribuye
    licencia   licencia del juego
    fuente     URL de origen. Sólo para los externos.

  Sobre los externos: `autor` + `licencia` + `fuente` NO son decorativos. Casi todas
  las licencias libres (MIT, Apache, CC-BY…) exigen mantener la atribución visible,
  así que `game.html` la muestra siempre. La etiqueta "DE AFUERA" de la grilla, en
  cambio, es sólo informativa y se apaga con MOSTRAR_ORIGEN en index.html.
*/
(function (root) {
  "use strict";

  var CATEGORIAS = {
    arcade:   { nombre: "Arcade",   emoji: "🕹️", color: "#27e8ff" },
    accion:   { nombre: "Acción",   emoji: "💥", color: "#ff4d5e" },
    puzzle:   { nombre: "Puzzle",   emoji: "🧩", color: "#8a4bff" },
    logica:   { nombre: "Lógica",   emoji: "🧠", color: "#39ff9e" },
    palabras: { nombre: "Palabras", emoji: "🔤", color: "#ffd23b" },
    mental:   { nombre: "Mental",   emoji: "⚡", color: "#ff2bd6" },
    deportes: { nombre: "Deportes", emoji: "🏆", color: "#ff9838" },
    reflejos: { nombre: "Reflejos", emoji: "🎯", color: "#4b7bff" }
  };

  var GAMES = [
    {
      id: "serpiente-neon", titulo: "Serpiente Neón", archivo: "serpiente-neon.html",
      emoji: "🐍", categoria: "arcade", tags: ["snake", "clasico", "supervivencia"],
      desc: "Snake con portales en los bordes y frutas especiales: dorada con turbo, hielo que frena y corte que achica la cola.",
      controles: "Flechas / WASD o deslizá el dedo", fecha: "2026-07-21",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "rompebloques", titulo: "Rompebloques", archivo: "rompebloques.html",
      emoji: "🧱", categoria: "arcade", tags: ["breakout", "clasico", "paleta", "powerups"],
      desc: "Breakout con power-ups: multi-bola, paleta gigante y bola de fuego. Rompé todos los bloques y subí de nivel.",
      controles: "Mouse, flechas o deslizá el dedo", fecha: "2026-07-22",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "knight-quest", titulo: "Knight Quest", archivo: "knight-quest.html",
      emoji: "♞", categoria: "arcade", tags: ["ajedrez", "runner", "saltos"],
      desc: "Runner de ajedrez: saltá en L como el caballo, esquivá a las piezas que te persiguen y subí lo más alto posible.",
      controles: "Toque o teclado", fecha: "2026-06-25",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "invasion-neon", titulo: "Invasión Neón", archivo: "invasion-neon.html",
      emoji: "👾", categoria: "accion", tags: ["shooter", "space invaders", "oleadas", "jefe"],
      desc: "Space invaders con oleadas cada vez más rápidas y un jefe con barra de vida cada 3 oleadas.",
      controles: "Flechas + espacio, o toque", fecha: "2026-07-23",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "asteroides", titulo: "Asteroides", archivo: "asteroides.html",
      emoji: "☄️", categoria: "accion", tags: ["shooter", "nave", "espacio", "inercia"],
      desc: "Nave con inercia y rotación real: volá las rocas antes de que te choquen y mirá cómo se parten en pedazos más chicos.",
      controles: "Flechas / WASD + espacio, o toque", fecha: "2026-07-25",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "2048-neon", titulo: "2048 Neón", archivo: "2048-neon.html",
      emoji: "🔢", categoria: "puzzle", tags: ["numeros", "deslizar", "fusion"],
      desc: "Deslizá y fusioná fichas iguales hasta llegar a 2048. Con teclado o swipe.",
      controles: "Flechas o deslizá el dedo", fecha: "2026-07-29",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "bloques-neon", titulo: "Bloques Neón", archivo: "bloques-neon.html",
      emoji: "🟣", categoria: "puzzle", tags: ["piezas", "caida", "lineas", "tetromino"],
      desc: "Piezas que caen estilo tetromino: armá líneas completas antes de que lleguen al tope.",
      controles: "Flechas + espacio, o deslizá", fecha: "2026-07-28",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "laberinto", titulo: "Laberinto", archivo: "laberinto.html",
      emoji: "🌀", categoria: "puzzle", tags: ["maze", "linterna", "contrarreloj", "memoria"],
      desc: "Laberintos generados al azar con una linterna de visión limitada, contra reloj. Memorizá el camino antes de que se acabe el tiempo.",
      controles: "Flechas / WASD o deslizá", fecha: "2026-08-01",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "vector-pilot", titulo: "Vector Pilot", archivo: "vector-pilot.html",
      emoji: "🚀", categoria: "puzzle", tags: ["fisica", "gravedad", "nave", "vectores"],
      desc: "Puzzle de física vectorial: aplicá impulsos con dirección y magnitud, dominá la gravedad y guiá la nave hasta el portal.",
      controles: "Mouse o dedo", fecha: "2026-07-06",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "buscaminas", titulo: "Buscaminas", archivo: "buscaminas.html",
      emoji: "💣", categoria: "logica", tags: ["minas", "banderitas", "clasico", "deduccion"],
      desc: "Buscaminas clásico con 3 dificultades, primer click siempre seguro y banderitas con toque largo o click derecho.",
      controles: "Click / toque (largo = bandera)", fecha: "2026-07-30",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "nonograma", titulo: "Nonograma", archivo: "nonograma.html",
      emoji: "🎨", categoria: "logica", tags: ["picross", "pistas", "dibujo", "deduccion"],
      desc: "Picross: pintá las celdas según las pistas numéricas y revelá el dibujo oculto. 8 niveles de 5×5 a 12×12.",
      controles: "Click / toque", fecha: "2026-08-02",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "4-en-linea", titulo: "4 en Línea", archivo: "4-en-linea.html",
      emoji: "🔴", categoria: "logica", tags: ["connect four", "cpu", "2 jugadores", "estrategia"],
      desc: "Cuatro en línea contra una CPU con 3 niveles de dificultad (minimax con poda alfa-beta), o de a dos en el mismo dispositivo.",
      controles: "Click / toque", fecha: "2026-08-04",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "sopa-letras", titulo: "Sopa de Letras", archivo: "sopa-letras.html",
      emoji: "🔤", categoria: "palabras", tags: ["niños", "buscar", "temas", "arrastrar"],
      desc: "Sopa de letras para los más chicos: 6 temas, 6 niveles (incluidos los que giran), pistas y sonido.",
      controles: "Arrastrá el dedo o el mouse", fecha: "2026-07-21",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "palabra-secreta", titulo: "Palabra Secreta", archivo: "palabra-secreta.html",
      emoji: "📗", categoria: "palabras", tags: ["wordle", "adivinar", "racha", "5 letras"],
      desc: "Estilo Wordle en español: adiviná la palabra de 5 letras en 6 intentos. Modo infinito con racha guardada.",
      controles: "Teclado en pantalla o físico", fecha: "2026-08-05",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "ahorcado", titulo: "Ahorcado Neón", archivo: "ahorcado.html",
      emoji: "🪢", categoria: "palabras", tags: ["categorias", "adivinar", "letras"],
      desc: "Ahorcado con categorías (animales, países, comida) y un muñeco de neón que se dibuja con cada error.",
      controles: "Teclado o click", fecha: "2026-08-06",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "tipeo-turbo", titulo: "Tipeo Turbo", archivo: "tipeo-turbo.html",
      emoji: "⌨️", categoria: "palabras", tags: ["tipeo", "velocidad", "teclado", "combos"],
      desc: "Palabras que caen del cielo: tipeá la primera letra para apuntar a una y completala antes de que toque el piso.",
      controles: "Teclado", fecha: "2026-08-08",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "anagramas", titulo: "Anagramas", archivo: "anagramas.html",
      emoji: "🔀", categoria: "palabras", tags: ["anagrama", "contrarreloj", "letras", "vidas"],
      desc: "Las letras están desordenadas: armá la palabra antes de que se acabe el tiempo. 3 vidas y palabras cada vez más largas.",
      controles: "Click / toque o teclado", fecha: "2026-08-09",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "brain-test", titulo: "Big Brain", archivo: "brain-test.html",
      emoji: "🧠", categoria: "mental", tags: ["calculo", "memoria", "vision", "contrarreloj"],
      desc: "Desafíos rápidos de cálculo, memoria, visión y lógica contra reloj. ¿Qué tan grande es tu cerebro?",
      controles: "Click / toque", fecha: "2026-06-26",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "memoria", titulo: "Memoria Neón", archivo: "memoria.html",
      emoji: "🃏", categoria: "mental", tags: ["memotest", "parejas", "cartas", "contrarreloj"],
      desc: "Memotest contra reloj: encontrá las parejas antes de que se acabe el tiempo. Cada nivel trae más cartas y menos segundos.",
      controles: "Click / toque", fecha: "2026-07-31",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "head-soccer", titulo: "Neon Heads", archivo: "head-soccer.html",
      emoji: "⚽", categoria: "deportes", tags: ["futbol", "2 jugadores", "cpu", "cabezazos"],
      desc: "Fútbol cabezón: 1 jugador contra la CPU o 2 jugadores. Cabezazos, saltos y patadas al arco.",
      controles: "WASD + flechas, o toque", fecha: "2026-06-26",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "pong-turbo", titulo: "Pong Turbo", archivo: "pong-turbo.html",
      emoji: "🏓", categoria: "deportes", tags: ["pong", "paletas", "2 jugadores", "powerups"],
      desc: "Pong contra la CPU o de a 2, con power-ups que agrandan o achican las paletas y curvan la pelota.",
      controles: "Mouse, W/S y flechas, o dedo", fecha: "2026-07-24",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },

    {
      id: "cambio-color", titulo: "Cambio de Color", archivo: "cambio-color.html",
      emoji: "🌀", categoria: "reflejos", tags: ["un boton", "colores", "aros", "timing"],
      desc: "Un solo toque para saltar. Cruzá los aros que giran pasando únicamente por el color de tu bolita.",
      controles: "Click, espacio o toque", fecha: "2026-07-22",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "cruza-la-avenida", titulo: "Cruzá la Avenida", archivo: "cruza-la-avenida.html",
      emoji: "🐸", categoria: "reflejos", tags: ["frogger", "trafico", "carriles", "esquivar"],
      desc: "Estilo Frogger: cruzá carriles de tráfico neón cada vez más rápidos y llegá a la meta sin que te pisen.",
      controles: "Flechas / WASD o deslizá", fecha: "2026-07-27",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "torre", titulo: "Torre", archivo: "torre.html",
      emoji: "🗼", categoria: "reflejos", tags: ["apilar", "timing", "combos", "precision"],
      desc: "Apilá bloques que se mueven como un péndulo: lo que sobresale se corta. Encadená bloques perfectos para no perder ancho.",
      controles: "Click, espacio o toque", fecha: "2026-08-03",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    }
  ];

  root.NEON_CATEGORIAS = CATEGORIAS;
  root.NEON_GAMES = GAMES;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { NEON_GAMES: GAMES, NEON_CATEGORIAS: CATEGORIAS };
  }
})(typeof window !== "undefined" ? window : globalThis);
