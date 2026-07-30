# Neon Arcade · Instrucciones para Claude

## Idioma

**Siempre en español (rioplatense).** Esto aplica a todo:

- Las respuestas y mensajes de cada sesión.
- Los mensajes de commit.
- Los issues, comentarios y descripciones de PR en GitHub.
- Las notificaciones de las rutinas programadas (el resumen dentro de
  `<routine_summary>` va en español).
- Los textos dentro de los juegos (ya era la regla del arcade).

No hace falta que el usuario lo vuelva a pedir en cada corrida.

## El proyecto

Colección de minijuegos de navegador en HTML5 + Canvas, sin dependencias.
El portal es `index.html` y cada juego es un `.html` auto-contenido.

- Estética neón: `#27e8ff` (cian), `#ff2bd6` (rosa), `#8a4bff` (violeta) sobre fondo oscuro.
- Mobile-first: todo tiene que ser jugable con **teclado y** con touch/mouse.
- Pantalla de inicio, game over, puntaje y récord en `localStorage`.

## Rutina diaria

`PLAN_JUEGOS.md` es el panel de control: cada corrida toma la primera fila
⏳ Pendiente, programa ese juego y lo publica.

**Un juego no está terminado hasta estar live en <https://gavainas.github.io/arcade/>.**
GitHub Pages sirve desde la rama `main`, así que la corrida tiene que:

1. Commitear el juego + `index.html` + `README.md` + `PLAN_JUEGOS.md` (fila ✅).
2. Pushear a la rama de trabajo.
3. **Llevar los cambios a `main` y pushear `main`** — este paso es el que publica.
4. Verificar que el juego aparece en la URL del portal.

Ver "Publicación obligatoria" en `PLAN_JUEGOS.md` para el detalle.
