#!/usr/bin/env node
/*
  Genera las miniaturas del catálogo en thumbs/<id>.jpg.

  Abre cada juego en un Chromium headless, intenta entrar al gameplay
  (clickea el botón de inicio si lo hay), espera a que la pantalla tenga
  algo interesante y saca la foto.

  Uso:
    node tools/thumbs.js            # sólo los que faltan
    node tools/thumbs.js --force    # regenera todos
    node tools/thumbs.js torre 2048-neon   # sólo esos ids
*/
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "thumbs");

// Ancho angosto a propósito: los juegos son mobile-first (max-width ~460-560px),
// así que a 480px el contenido ocupa toda la tarjeta en vez de flotar en el medio.
const VIEWPORT = { width: 480, height: 400 };
const SCALE = 1.5;

/*
  Ajustes por juego. `steps` es una secuencia de clicks:
    "selector"              -> clickea ese elemento del DOM
    { canvas: [fx, fy] }    -> clickea el canvas en esa fracción (0-1) de su caja,
                               para menús que se dibujan adentro del canvas
    []                      -> no clickear nada: se captura la portada
*/
const OVERRIDES = {
  // El menú de Knight Quest está dibujado dentro del canvas: no hay nada que
  // seleccionar por DOM, así que le pegamos al botón "MODO ARCADE" por posición.
  "knight-quest": { steps: [{ canvas: [0.5, 0.57] }], wait: 2800 },
  // El botón JUGAR arranca oculto hasta que elegís dificultad.
  "4-en-linea": { steps: ['[data-diff="facil"]', "#startBtn"], wait: 1400 },
  "nonograma": { steps: [".lvl-card"], wait: 1600 },
  "sopa-letras": { steps: ["#playBtn"], wait: 2600 },
  "head-soccer": { steps: [".btn"], wait: 3200 },
  "vector-pilot": { steps: [".btn"], wait: 2200 },
  "buscaminas": { steps: [".btn"], wait: 1600 },
  // Muere en menos de un segundo sin nadie a los controles, así que va la portada.
  "cambio-color": { steps: [], wait: 900 },
  // La linterna deja la pantalla casi negra, así que va la portada.
  "laberinto": { steps: [], wait: 900 },
  // Cae solo y choca rápido sin nadie aleteando: va la portada con las torres detrás.
  "alas-neon": { steps: [], wait: 900 },
  // Los que caen solos necesitan un ratito para que aparezcan cosas en pantalla.
  "tipeo-turbo": { wait: 3400 },
  "cruza-la-avenida": { wait: 2600 },
  "invasion-neon": { wait: 2600 },
  "asteroides": { wait: 2600 },
  "serpiente-neon": { wait: 3000 },
  "bloques-neon": { wait: 3600 },
  // Apilamos un par de bloques para que la miniatura no sea una torre vacía.
  "torre": {
    steps: ["#startBtn", { canvas: [0.5, 0.5] }, { canvas: [0.5, 0.5] }],
    wait: 1200
  }
};

const DEFAULT_STEPS = ["#startBtn", "#playBtn", ".btn", "button"];
const DEFAULT_WAIT = 2200;

function loadCatalog() {
  const mod = require(path.join(ROOT, "games.js"));
  return mod.NEON_GAMES;
}

function findChromium() {
  // Playwright normalmente lo resuelve solo vía PLAYWRIGHT_BROWSERS_PATH.
  // Si no, buscamos el chromium instalado en el sistema.
  try {
    const base = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
    const dirs = fs
      .readdirSync(base)
      .filter((d) => /^chromium-\d+$/.test(d))
      .sort();
    if (dirs.length) {
      const exe = path.join(base, dirs[dirs.length - 1], "chrome-linux", "chrome");
      if (fs.existsSync(exe)) return exe;
    }
  } catch (_) {
    /* usamos el default de playwright */
  }
  return undefined;
}

function requirePlaywright() {
  try {
    return require("playwright");
  } catch (_) {
    // Instalado global en este entorno; lo resolvemos por npm root -g.
    const globalRoot = execSync("npm root -g", { encoding: "utf8" }).trim();
    return require(path.join(globalRoot, "playwright"));
  }
}

async function clickCanvas(page, [fx, fy]) {
  const canvas = page.locator("canvas").first();
  const box = await canvas.boundingBox();
  if (!box) throw new Error("no se encontró el canvas");
  await canvas.click({ position: { x: box.width * fx, y: box.height * fy } });
}

async function shoot(page, game) {
  const cfg = OVERRIDES[game.id] || {};
  const waitMs = cfg.wait || DEFAULT_WAIT;
  // Sin override usamos la cascada de selectores: se clickea el primero visible.
  const explicit = Array.isArray(cfg.steps);
  const steps = explicit ? cfg.steps : DEFAULT_STEPS;

  await page.goto("file://" + path.join(ROOT, game.archivo), {
    waitUntil: "load"
  });
  await page.waitForTimeout(500);

  for (const step of steps) {
    try {
      if (typeof step === "object" && step.canvas) {
        await clickCanvas(page, step.canvas);
      } else {
        const el = page.locator(step).first();
        if (!(await el.isVisible({ timeout: 250 }))) {
          if (explicit) continue;
          continue;
        }
        await el.click({ timeout: 1000 });
        // La cascada por defecto se corta con el primer botón que ande;
        // una secuencia explícita se ejecuta entera.
        if (!explicit) break;
      }
      await page.waitForTimeout(350);
    } catch (err) {
      if (explicit) throw new Error(`paso "${JSON.stringify(step)}": ${err.message}`);
    }
  }

  await page.waitForTimeout(waitMs);

  const out = path.join(OUT_DIR, game.id + ".jpg");
  await page.screenshot({ path: out, type: "jpeg", quality: 80 });
  return out;
}

(async () => {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const only = args.filter((a) => !a.startsWith("--"));

  const games = loadCatalog().filter((g) => (only.length ? only.includes(g.id) : true));
  if (!games.length) {
    console.error("No hay juegos que coincidan con:", only.join(", "));
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const { chromium } = requirePlaywright();
  const browser = await chromium.launch({ executablePath: findChromium() });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
    reducedMotion: "no-preference"
  });

  let hechas = 0,
    saltadas = 0,
    fallidas = 0;

  for (const game of games) {
    const dest = path.join(OUT_DIR, game.id + ".jpg");
    if (!force && fs.existsSync(dest)) {
      saltadas++;
      continue;
    }
    const page = await context.newPage();
    const errores = [];
    page.on("pageerror", (e) => errores.push(e.message));
    try {
      await shoot(page, game);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`✓ ${game.id.padEnd(20)} ${String(kb).padStart(4)} kb` +
        (errores.length ? `  ⚠ ${errores.length} error(es) de JS` : ""));
      hechas++;
    } catch (err) {
      console.error(`✗ ${game.id.padEnd(20)} ${err.message}`);
      fallidas++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\n${hechas} generadas · ${saltadas} ya existían · ${fallidas} fallaron`);
  process.exit(fallidas ? 1 : 0);
})();
