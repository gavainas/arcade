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
      emoji: "🔀", categoria: "palabras", tags: ["anagrama", "letras", "contrarreloj", "vocabulario"],
      desc: "Letras desordenadas contra reloj: tocá las fichas para armar la palabra en el orden correcto antes de que se acabe el tiempo.",
      controles: "Click / toque o teclado", fecha: "2026-08-10",
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
    },
    {
      id: "simon-neon", titulo: "Simón Neón", archivo: "simon-neon.html",
      emoji: "🎵", categoria: "mental", tags: ["simon", "secuencias", "memoria", "sonido"],
      desc: "Repetí secuencias de luces y sonidos cada vez más largas. Un paso mal y se corta la racha.",
      controles: "Click / toque, o teclado (Q W A S / flechas)", fecha: "2026-08-10",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "el-impostor", titulo: "El Impostor", archivo: "el-impostor.html",
      emoji: "🔍", categoria: "mental", tags: ["vision", "atencion", "grilla", "contrarreloj"],
      desc: "Una figura de la grilla gira distinto a todas las demás: encontrala antes de que se acabe el tiempo. Cada ronda la diferencia es más sutil y la grilla crece.",
      controles: "Click / toque, o flechas + Enter", fecha: "2026-08-12",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "alas-neon", titulo: "Alas Neón", archivo: "alas-neon.html",
      emoji: "🚁", categoria: "reflejos", tags: ["flappy", "un boton", "torres", "reflejos"],
      desc: "Estilo flappy: tocá para aletear y pasá entre las torres de neón. El hueco se achica y la velocidad sube con cada punto.",
      controles: "Click, espacio o toque", fecha: "2026-08-13",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "salto-infinito", titulo: "Salto Infinito", archivo: "salto-infinito.html",
      emoji: "🦘", categoria: "reflejos", tags: ["plataformas", "doodle jump", "resortes", "altura"],
      desc: "Rebotá de plataforma en plataforma hacia arriba sin caerte. Plataformas móviles, resortes y otras que se rompen al pisarlas.",
      controles: "Flechas / A D, o arrastrá", fecha: "2026-08-14",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "topos-neon", titulo: "Topos Neón", archivo: "topos-neon.html",
      emoji: "🔨", categoria: "reflejos", tags: ["whack-a-mole", "topos", "bombas", "combo"],
      desc: "Whack-a-mole: golpeá los topos que se asoman de sus pozos antes de que se escondan y evitá las bombas. Combo por aciertos seguidos, contra reloj.",
      controles: "Click / toque, o teclado 1-9", fecha: "2026-08-15",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "ruta-neon", titulo: "Ruta Neón", archivo: "ruta-neon.html",
      emoji: "🏎️", categoria: "deportes", tags: ["carreras", "top-down", "trafico", "combustible", "turbo"],
      desc: "Carrera top-down: esquivá el tráfico, juntá bidones de combustible antes de quedarte tirado y agarrá los rayos de turbo para acelerar a fondo.",
      controles: "Flechas / A D, o arrastrá el dedo", fecha: "2026-08-16",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "geometria-imposible", titulo: "Geometría Imposible", archivo: "geometria-imposible.html",
      emoji: "📐", categoria: "reflejos", tags: ["geometry dash", "runner", "pinchos", "checkpoints", "ritmo"],
      desc: "Runner rítmico estilo geometry dash: saltá los pinchos sin frenar. Las banderas doradas son checkpoints que te devuelven una vida.",
      controles: "Click, espacio o toque", fecha: "2026-08-17",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "defensa-neon", titulo: "Defensa Neón", archivo: "defensa-neon.html",
      emoji: "🛡️", categoria: "logica", tags: ["tower defense", "torretas", "oleadas", "estrategia"],
      desc: "Tower defense: colocá torretas junto al camino serpenteante para frenar oleadas de invasores cada vez más duras. Mejorá tus torretas con el oro que ganás.",
      controles: "Click / toque, 1-3 elige torreta, espacio inicia oleada", fecha: "2026-08-18",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "rebote-estelar", titulo: "Rebote Estelar", archivo: "rebote-estelar.html",
      emoji: "🎯", categoria: "reflejos", tags: ["peggle", "fisica", "clavijas", "rebotes", "combos"],
      desc: "Estilo Peggle: apuntá y disparás la bola para encadenar rebotes en las clavijas y limpiar todo el tablero. Atrapala en la cesta para no gastarla y sumá bolas extra con las clavijas doradas.",
      controles: "Mouse / arrastrá el dedo apunta, click o toque dispara", fecha: "2026-08-19",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "gemas-neon", titulo: "Gemas Neón", archivo: "gemas-neon.html",
      emoji: "💎", categoria: "puzzle", tags: ["match-3", "gemas", "combos", "bombas", "cascadas"],
      desc: "Match-3 neón: intercambiá gemas vecinas para armar líneas de 3 o más y llegar al puntaje meta antes de quedarte sin movimientos. Las líneas de 4 crean bombas que explotan al combinarse.",
      controles: "Click / toque para elegir y swapear, o arrastrá; flechas + Enter con teclado", fecha: "2026-08-20",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "burbujas-neon", titulo: "Burbujas Neón", archivo: "burbujas-neon.html",
      emoji: "🫧", categoria: "puzzle", tags: ["bubble shooter", "puntería", "colores", "cadenas"],
      desc: "Bubble shooter: apuntá y disparás burbujas de colores para juntar 3 o más iguales y hacerlas estallar. Las que quedan sin conexión al techo también caen, y cada tantos disparos baja una fila nueva.",
      controles: "Mouse o dedo apunta, click/soltar dispara; flechas + espacio con teclado", fecha: "2026-08-21",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "bodega-neon", titulo: "Bodega Neón", archivo: "bodega-neon.html",
      emoji: "📦", categoria: "logica", tags: ["sokoban", "cajas", "empujar", "niveles"],
      desc: "Sokoban neón: empujá las cajas hasta las plataformas doradas sin trabarte en un rincón. 8 niveles con dificultad creciente, deshacer y contador de movidas.",
      controles: "Flechas / WASD o deslizá el dedo; cruceta táctil y deshacer en pantalla", fecha: "2026-08-22",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "pinball-neon", titulo: "Pinball Neón", archivo: "pinball-neon.html",
      emoji: "🕹️", categoria: "arcade", tags: ["pinball", "flippers", "fisica", "bumpers", "combos"],
      desc: "Pinball con flippers y lanzador de resorte: metela en juego, encadená bumpers y slingshots para sumar combo, y encendé los 3 bumpers en la misma bola para ganar una bola extra. 3 bolas por partida.",
      controles: "Flechas / A D mueven los flippers, mantené ESPACIO para cargar el lanzador; botones en pantalla en mobile", fecha: "2026-08-23",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "duelo-tanques", titulo: "Duelo de Tanques", archivo: "duelo-tanques.html",
      emoji: "💥", categoria: "accion", tags: ["artilleria", "tanques", "turnos", "viento", "terreno destructible"],
      desc: "Duelo de artillería por turnos: ajustá ángulo y potencia, tené en cuenta el viento y volále el tanque a la CPU antes de que te vuele a vos. El terreno se destruye con cada impacto y hay un misil especial por ronda.",
      controles: "Flechas / botones ajustan ángulo y potencia; ESPACIO o DISPARAR tira; E arma el misil especial", fecha: "2026-08-24",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "corte-neon", titulo: "Corte Neón", archivo: "corte-neon.html",
      emoji: "🔪", categoria: "reflejos", tags: ["fruit ninja", "corte", "combo", "bombas"],
      desc: "Fruit Ninja neón: arrastrá el dedo o el mouse para cortar las figuras que vuelan por el aire antes de que caigan, encadená combos cortando varias en el mismo trazo y evitá las bombas: cortar una termina la partida.",
      controles: "Arrastrá el dedo o el mouse; o flechas/WASD para moverte y ESPACIO para cortar", fecha: "2026-08-25",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "frascos-neon", titulo: "Frascos Neón", archivo: "frascos-neon.html",
      emoji: "🧪", categoria: "logica", tags: ["water sort", "frascos", "colores", "ordenar"],
      desc: "Water sort: tocá un frasco para elegirlo y otro para verter, sólo si coincide el color de arriba o está vacío. Ordená cada color en su propio frasco. 8 niveles generados al azar, siempre resolubles, con deshacer y contador de movidas.",
      controles: "Click / toque para elegir y verter; flechas + Enter con teclado", fecha: "2026-08-26",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "sudoku-neon", titulo: "Sudoku Neón", archivo: "sudoku-neon.html",
      emoji: "🧩", categoria: "logica", tags: ["sudoku", "numeros", "logica", "grilla"],
      desc: "Sudoku clásico: completá la grilla 9×9 sin repetir números en ninguna fila, columna o cuadrante. 4 dificultades generadas al azar (siempre con solución única), modo lápiz para anotar candidatos y pistas limitadas.",
      controles: "Click / toque en una celda + numpad en pantalla; flechas y teclas 1-9 con teclado, N para notas", fecha: "2026-08-27",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "solitario-neon", titulo: "Solitario Neón", archivo: "solitario-neon.html",
      emoji: "♠️", categoria: "logica", tags: ["solitario", "klondike", "cartas", "mazo"],
      desc: "Solitario Klondike con mazo de 52 cartas: armá las 4 fundaciones por palo desde el As y movés secuencias descendentes de colores alternados entre las 7 columnas. Robo de a una carta con reciclado del descarte, deshacer, cronómetro y autocompletar cuando ya no quedan cartas boca abajo.",
      controles: "Click / toque para elegir y jugar, doble toque manda una carta al palo; flechas + Enter con teclado", fecha: "2026-08-28",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "golf-neon", titulo: "Golf Neón", archivo: "golf-neon.html",
      emoji: "⛳", categoria: "deportes", tags: ["minigolf", "fisica", "punteria", "hoyos"],
      desc: "Minigolf de 6 hoyos: arrastrá desde la bola como una honda para apuntar y soltá para pegarle. Arena que frena, agua que penaliza, muros, postes elásticos y hasta un obstáculo que se mueve solo.",
      controles: "Arrastrá el dedo o el mouse desde la bola; flechas ajustan y ESPACIO pega con teclado", fecha: "2026-08-29",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "batalla-naval", titulo: "Batalla Naval Neón", archivo: "batalla-naval.html",
      emoji: "🚢", categoria: "logica", tags: ["batalla naval", "estrategia", "turnos", "flota", "deduccion"],
      desc: "Batalla naval por turnos: disparale al mar enemigo para hundir su flota antes de que hundan la tuya. Flotas nuevas al azar en cada partida, 3 niveles de dificultad de la CPU (la difícil caza en línea tras cada acierto) y récord de menos disparos para ganar.",
      controles: "Click / toque en el mar enemigo para disparar; flechas + ESPACIO con teclado", fecha: "2026-08-30",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "damas-neon", titulo: "Damas Neón", archivo: "damas-neon.html",
      emoji: "⚫", categoria: "logica", tags: ["damas", "checkers", "tablero", "cpu", "2 jugadores", "estrategia"],
      desc: "Damas clásicas: movés en diagonal y capturás saltando las fichas rivales (captura obligatoria, en cadena); llegá al fondo para coronar dama y moverte en las 4 diagonales. Contra una CPU con 3 dificultades (minimax con poda alfa-beta) o de a dos en el mismo dispositivo.",
      controles: "Click / toque para elegir ficha y destino; flechas + Enter con teclado", fecha: "2026-08-31",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "otelo-neon", titulo: "Otelo Neón", archivo: "otelo-neon.html",
      emoji: "🟢", categoria: "logica", tags: ["otelo", "reversi", "othello", "tablero", "cpu", "2 jugadores", "estrategia"],
      desc: "Otelo (Reversi) clásico en tablero 8×8: colocá una ficha para encerrar fichas rivales entre la tuya y otra propia (en línea o diagonal) y volteá todas las que quedan en el medio. Sin movimientos posibles, pasás el turno; gana quien tenga más fichas al llenarse el tablero. Contra una CPU con 3 dificultades (minimax con poda alfa-beta) o de a dos en el mismo dispositivo.",
      controles: "Click / toque en una casilla resaltada; flechas + Enter con teclado", fecha: "2026-09-01",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "embotellamiento-neon", titulo: "Embotellamiento Neón", archivo: "embotellamiento-neon.html",
      emoji: "🚗", categoria: "logica", tags: ["rush hour", "autos", "deslizar", "trafico", "niveles"],
      desc: "Rush Hour neón: deslizá los autos y camiones por la grilla de 6×6 (cada uno sólo en su sentido, horizontal o vertical) para abrirle paso al auto rojo hasta la salida. 8 niveles generados al azar y siempre resolubles, con deshacer y contador de movidas.",
      controles: "Arrastrá un vehículo, o tocalo/elegí su número y usá las flechas", fecha: "2026-09-02",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "mahjong-neon", titulo: "Mahjong Neón", archivo: "mahjong-neon.html",
      emoji: "🀄", categoria: "logica", tags: ["mahjong", "fichas", "parejas", "capas", "solitario"],
      desc: "Mahjong solitario: fichas apiladas en varias capas, sólo se levantan las que están libres (nada encima y un costado abierto). Tocá dos iguales para sacarlas y limpiá todo el tablero. 4 niveles con capas crecientes, siempre resolubles, con deshacer, pista y barajar.",
      controles: "Click / toque para elegir y emparejar; flechas + Enter con teclado", fecha: "2026-09-04",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "apagon-neon", titulo: "Apagón Neón", archivo: "apagon-neon.html",
      emoji: "💡", categoria: "logica", tags: ["lights out", "luces", "grilla", "logica"],
      desc: "Lights Out neón: tocá una luz para prenderla/apagarla a ella y a sus vecinas (arriba, abajo, izquierda, derecha) y apagá todo el panel para ganar. 8 niveles con grillas crecientes (3×3 a 7×7) generados al azar y siempre resolubles, con deshacer y contador de movidas.",
      controles: "Click / toque; flechas + Enter con teclado", fecha: "2026-09-05",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "codigo-neon", titulo: "Código Neón", archivo: "codigo-neon.html",
      emoji: "🔐", categoria: "logica", tags: ["mastermind", "deduccion", "colores", "codigo"],
      desc: "Mastermind neón: la máquina esconde un código de colores y vos proponés combinaciones, usando pistas de posición y color exactos para descifrarlo antes de quedarte sin intentos. 3 dificultades con más colores y espacios.",
      controles: "Click / toque en la paleta; teclas 1-8 + Enter con teclado", fecha: "2026-09-06",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "flujo-neon", titulo: "Flujo Neón", archivo: "flujo-neon.html",
      emoji: "🔗", categoria: "logica", tags: ["flow", "cables", "caminos", "conexion", "grilla"],
      desc: "Flow: conectá cada par de puntos del mismo color trazando un cable sin cruzarte con otro camino. Ganás cuando cubrís todas las celdas del tablero. 8 niveles con grillas y cantidad de colores crecientes, generados al azar y siempre resolubles, con deshacer y contador de trazos.",
      controles: "Arrastrá el dedo o el mouse desde un punto hasta su pareja; teclas 1-9 eligen color y flechas extienden el cable", fecha: "2026-09-07",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "generala-neon", titulo: "Generala Neón", archivo: "generala-neon.html",
      emoji: "🎲", categoria: "mental", tags: ["generala", "yahtzee", "dados", "azar", "2 jugadores"],
      desc: "Generala clásica: tirá los 5 dados hasta 3 veces por turno, guardá los que te sirvan y anotá el resultado en la planilla de 10 categorías. 1 jugador contra tu propio récord, o de a dos pasando el turno en el mismo dispositivo.",
      controles: "Click / toque en los dados para guardarlos y en la planilla para anotar; teclas 1-5 guardan, espacio tira", fecha: "2026-09-08",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "bolos-neon", titulo: "Bolos Neón", archivo: "bolos-neon.html",
      emoji: "🎳", categoria: "deportes", tags: ["bowling", "bolos", "carril", "chuzo", "spare"],
      desc: "Bolos con tiro a tiempo: frenás la barra de potencia y después la de efecto para tirar la bola por el carril y buscar el chuzo. 10 frames con el sistema de puntaje real de bolos (chuzos y spares suman los tiros extra), y récord guardado.",
      controles: "Tocá el canvas dos veces por tiro (potencia y efecto); espacio con teclado", fecha: "2026-09-09",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "veintiuno-neon", titulo: "Veintiuno Neón", archivo: "veintiuno-neon.html",
      emoji: "♦️", categoria: "mental", tags: ["blackjack", "cartas", "casino", "apuestas", "dealer"],
      desc: "Blackjack neón: pedí cartas para acercarte a 21 sin pasarte y ganale al dealer, que planta en 17. Apostá fichas, doblá la apuesta con tus dos primeras cartas y el blackjack natural (As + figura) paga 3 a 2.",
      controles: "Click / toque en fichas y botones; teclas 1-4 apuestan, H/S/D juegan, Enter avanza", fecha: "2026-09-10",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "ritmo-neon", titulo: "Ritmo Neón", archivo: "ritmo-neon.html",
      emoji: "🎧", categoria: "reflejos", tags: ["ritmo", "musica", "carriles", "combo", "precision"],
      desc: "Las notas caen por 4 carriles: tocá el botón o la tecla del carril justo cuando la nota llegue a la línea. 3 dificultades con más BPM y densidad, combo con multiplicador y nota final S/A/B/C/D según tu precisión.",
      controles: "Teclado D F J K o flechas; o tocá los botones de carril en pantalla", fecha: "2026-09-11",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "crucigrama-neon", titulo: "Crucigrama Neón", archivo: "crucigrama-neon.html",
      emoji: "📝", categoria: "palabras", tags: ["crucigrama", "palabras cruzadas", "pistas", "grilla"],
      desc: "Crucigrama clásico: resolvé las pistas horizontales y verticales para completar la grilla, generada al azar entrelazando palabras que comparten letras. 3 dificultades con más palabras y menos pistas, cronómetro y récord de mejor tiempo por dificultad.",
      controles: "Tocá una celda y escribí (toca de nuevo para cambiar de dirección); teclado y flechas también andan", fecha: "2026-09-12",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "devora-neon", titulo: "Devora Neón", archivo: "devora-neon.html",
      emoji: "👻", categoria: "arcade", tags: ["comecocos", "laberinto", "fantasmas", "persecucion"],
      desc: "Laberinto tipo comecocos: recorré el tablero comiendo todos los puntos mientras esquivás a los fantasmas neón que te persiguen. Las píldoras de las esquinas los vuelven vulnerables por unos segundos, ¡comételos para puntos extra! Niveles con más fantasmas y más velocidad.",
      controles: "Flechas / WASD o los botones en pantalla; deslizá el dedo en el canvas", fecha: "2026-09-13",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "cajas-neon", titulo: "Cajas Neón", archivo: "cajas-neon.html",
      emoji: "🔲", categoria: "logica", tags: ["dots and boxes", "puntos y cajas", "lineas", "estrategia", "2 jugadores"],
      desc: "Puntos y Cajas: por turnos trazá una línea entre dos puntos vecinos de la grilla; si completás los 4 lados de una caja te la quedás y jugás de nuevo. Tablero de 4×4 (16 cajas); gana quien tenga más al terminarse las líneas. Contra una CPU con 3 dificultades (la difícil sacrifica cajas a propósito para no perder el control de la partida) o de a dos en el mismo dispositivo.",
      controles: "Click / toque cerca de una línea para dibujarla; flechas + Enter con teclado", fecha: "2026-09-15",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "curling-neon", titulo: "Curling Neón", archivo: "curling-neon.html",
      emoji: "🥌", categoria: "deportes", tags: ["curling", "hielo", "efecto", "barrida", "2 jugadores", "cpu"],
      desc: "Curling: arrastrá hacia atrás desde la piedra para apuntar y definir la potencia, soltá para lanzarla sobre el hielo. Elegí el efecto (izquierda/derecha) antes de tirar para curvarla, y mantené presionado mientras se desliza para barrerla y estirar su recorrido. Chocá las piedras rivales para sacarlas de la zona de puntos. 4 piedras por jugador y por end; al terminar el end anota quien tenga piedras más cerca del centro (sólo las que estén más cerca que la mejor piedra rival). Partida a 4 ends contra la CPU, con récord de mejor diferencia guardado.",
      controles: "Arrastrá y soltá para lanzar (o flechas + ESPACIO); mantené presionado o ESPACIO para barrer; Q/E cambian el efecto", fecha: "2026-09-16",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "hockey-neon", titulo: "Hockey Neón", archivo: "hockey-neon.html",
      emoji: "🏒", categoria: "deportes", tags: ["air hockey", "fisica", "reflejos", "cpu"],
      desc: "Air hockey: movés tu paleta libremente por tu mitad de la mesa (arrastrando el dedo o el mouse, o con WASD/flechas) y le metés el disco a la CPU antes de que te lo meta a vos. El disco rebota en las paredes y se frena de a poco por fricción. 3 dificultades de CPU (más rápida y con mejor anticipación cuanto más difícil). Partidas a 7 goles, con récord del mejor tiempo para ganar guardado por dificultad.",
      controles: "Arrastrá el dedo o el mouse por tu mitad de la mesa; o WASD / flechas", fecha: "2026-09-17",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "billar-neon", titulo: "Billar Neón", archivo: "billar-neon.html",
      emoji: "🎱", categoria: "deportes", tags: ["billar", "pool", "fisica", "punteria", "troneras", "solitario"],
      desc: "Billar solitario: arrastrá hacia atrás desde la bola blanca para apuntar y definir la potencia, soltá para tirar. Meté las 9 bolas numeradas en las 6 troneras de la mesa usando la menor cantidad de tiros posible; meter varias en el mismo tiro suma combo, pero si la blanca cae en una tronera es falta y perdés una vida. Niveles infinitos con troneras cada vez más chicas, y récord de puntaje guardado.",
      controles: "Arrastrá desde la bola blanca; o flechas para apuntar + mantené ESPACIO para cargar y soltá para tirar", fecha: "2026-09-18",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "basquet-neon", titulo: "Básquet Neón", archivo: "basquet-neon.html",
      emoji: "🏀", categoria: "deportes", tags: ["basquet", "basketball", "tiros libres", "fisica", "puntaje", "arcade"],
      desc: "Tiros libres contra el reloj: arrastrá hacia atrás desde la pelota para apuntar y definir la potencia, soltá para tirarla al aro antes de que se acaben los 60 segundos. Los tiros cerca del aro valen 2 puntos y los de atrás de la línea valen 3; si encestás sin tocar el aro sumás +1 de bonus (SWISH). Cada enceste te regala un segundo extra y sube tu racha, que multiplica los puntos del próximo tiro; fallar corta la racha. Récord de mejor puntaje guardado.",
      controles: "Arrastrá desde la pelota; o flechas para el ángulo/potencia + ESPACIO para tirar", fecha: "2026-09-19",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "quince-neon", titulo: "Quince Neón", archivo: "quince-neon.html",
      emoji: "🧮", categoria: "logica", tags: ["15 puzzle", "sliding puzzle", "numeros", "deslizar", "niveles"],
      desc: "El clásico juego del 15: deslizá las fichas numeradas hacia el hueco vacío hasta ordenarlas todas en fila, de izquierda a derecha y de arriba abajo. 8 niveles con grillas crecientes (3×3 a 6×6), siempre resolubles porque se generan barajando con movimientos legales desde la posición ordenada, con deshacer, contador de movidas y cronómetro con récord guardado por nivel.",
      controles: "Click / toque en una ficha pegada al hueco; o flechas para deslizar en esa dirección", fecha: "2026-09-20",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "hanoi-neon", titulo: "Hanói Neón", archivo: "hanoi-neon.html",
      emoji: "🗿", categoria: "logica", tags: ["torres de hanoi", "discos", "puzzle", "logica", "niveles"],
      desc: "Torre de Hanói: tocá una torre para levantar su disco de arriba y tocá otra para soltarlo ahí, sin poner nunca un disco grande sobre uno más chico. Mové toda la pila desde la torre 1 hasta la torre 3 (la meta). 8 niveles de 3 a 10 discos, con contador de movidas comparado contra el óptimo matemático (2^n-1), deshacer y cronómetro con récord guardado por nivel.",
      controles: "Click / toque: tocá la torre de origen y después la de destino; o teclas 1/2/3", fecha: "2026-09-21",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "misiles-neon", titulo: "Misiles Neón", archivo: "misiles-neon.html",
      emoji: "🚀", categoria: "accion", tags: ["missile command", "defensa", "torres", "puntería", "oleadas"],
      desc: "Missile Command: defendé tus 6 ciudades lanzando misiles interceptores desde 3 bases antiaéreas hacia donde apuntes; el interceptor explota ahí y destruye todo misil enemigo que cruce la nube. Munición limitada por base (se recarga al superar la oleada); oleadas cada vez más numerosas y rápidas, y desde la oleada 4 algunos misiles se dividen en dos en pleno vuelo. Puntaje por cada misil derribado más bonus de fin de oleada por ciudades y munición sobrevivientes, con récord guardado.",
      controles: "Click / toque en la pantalla; o flechas/WASD para mover la mira + ESPACIO para disparar", fecha: "2026-09-22",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "ciclos-neon", titulo: "Ciclos de Luz", archivo: "ciclos-neon.html",
      emoji: "🏍️", categoria: "arcade", tags: ["tron", "motos de luz", "estelas", "supervivencia", "2 jugadores", "cpu"],
      desc: "Motos de luz estilo Tron: dejan una estela sólida detrás que se convierte en pared; esquivá tu propia estela, la del rival y los bordes de la arena el mayor tiempo posible (y no podés girar 180°). Contra una CPU con 3 dificultades (la difícil calcula qué dirección te deja más área libre para intentar encerrarte) o de a dos en el mismo dispositivo. La velocidad sube con cada ronda, con racha de rondas ganadas seguidas y récord guardado por dificultad.",
      controles: "Flechas o WASD mueven tu moto; en 2 jugadores, J1 usa WASD y J2 las flechas; también hay cruceta táctil en pantalla", fecha: "2026-09-23",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "trivia-neon", titulo: "Trivia Neón", archivo: "trivia-neon.html",
      emoji: "🎓", categoria: "mental", tags: ["trivia", "preguntas", "cultura general", "quiz", "contrarreloj"],
      desc: "Quiz de opción múltiple: respondé preguntas de cultura general (geografía, ciencia, historia, entretenimiento, deportes, naturaleza) antes de que se acabe el tiempo. Las rachas de aciertos multiplican el puntaje, tenés 3 comodines por partida (50/50, saltar pregunta y tiempo extra, uno de cada uno) y 3 vidas: fallar o dejar correr el reloj te cuesta una. 3 dificultades que acortan el tiempo por pregunta y suben la proporción de preguntas difíciles, con récord de puntaje guardado por dificultad.",
      controles: "Click / toque en una opción, o teclas 1-4", fecha: "2026-09-24",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "dardos-neon", titulo: "Dardos Neón", archivo: "dardos-neon.html",
      emoji: "🎯", categoria: "deportes", tags: ["dardos", "darts", "501", "puntería", "cpu", "2 jugadores"],
      desc: "Dardos 301 a doble: mantené presionado sobre el tablero para apuntar — un aro de precisión palpita alrededor de la mira — y soltá cuando esté chico para clavarla justo ahí; grande, y el dardo se desvía. Turnos de 3 dardos: restá lo que anotás hasta llegar justo a 0 con un doble o el centro dorado (bullseye); si te pasás, llegás a 1, o no cerrás con doble, se anula todo el turno. Contra una CPU con 3 dificultades (mejor puntería cuanto más difícil) o de a dos en el mismo dispositivo, con récord de menos dardos para cerrar la partida guardado por dificultad.",
      controles: "Mantené presionado (mouse/touch) o ESPACIO para apuntar y soltá para tirar, flechas mueven la mira", fecha: "2026-09-25",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    },
    {
      id: "gomoku-neon", titulo: "Gomoku Neón", archivo: "gomoku-neon.html",
      emoji: "⚪", categoria: "logica", tags: ["gomoku", "cinco en linea", "five in a row", "tablero", "cpu", "2 jugadores", "estrategia"],
      desc: "Cinco en línea sobre un tablero de intersecciones de 15×15: por turnos colocá una ficha en cualquier cruce libre y ganá alineando 5 fichas propias seguidas en horizontal, vertical o diagonal. Sin capturas: sólo importa quién arma la línea primero, y si se llena el tablero sin ganador es empate. Contra una CPU con 3 dificultades (detecta jugadas ganadoras y bloqueos inmediatos, y en las más altas busca con minimax y poda alfa-beta sobre una heurística de amenazas) o de a dos en el mismo dispositivo.",
      controles: "Click / toque en una intersección; flechas + Enter con teclado", fecha: "2026-09-26",
      origen: "propio", autor: "Neon Arcade", licencia: "MIT"
    }
  ];

  root.NEON_CATEGORIAS = CATEGORIAS;
  root.NEON_GAMES = GAMES;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { NEON_GAMES: GAMES, NEON_CATEGORIAS: CATEGORIAS };
  }
})(typeof window !== "undefined" ? window : globalThis);
