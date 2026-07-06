# Prompt maestro — Vector Pilot

Construí y evolucioná **Vector Pilot**, un videojuego mobile-first de física vectorial para navegador, dentro de este repositorio.

## Objetivo del juego
El jugador controla una nave aplicando impulsos vectoriales. Debe arrastrar desde la nave para definir dirección y magnitud, soltar para aplicar el impulso y llegar al portal con la menor cantidad posible de vectores.

## Stack y restricciones
- HTML5, CSS y JavaScript puro.
- Canvas 2D.
- Sin frameworks ni dependencias externas.
- Debe funcionar abriendo directamente el archivo HTML.
- Mobile-first, compatible con touch y mouse.
- Mantener el estilo visual neon del portal `index.html`.
- No romper los demás minijuegos.

## Mecánicas obligatorias
- Vector de impulso visible mientras se arrastra.
- Dirección y magnitud proporcionales al gesto.
- Inercia real: la nave conserva velocidad.
- Aceleración gravitatoria configurable.
- Planetas con atracción gravitatoria.
- Obstáculos o cuerpos con colisión.
- Portal de llegada.
- Límite de impulsos por nivel.
- Reinicio rápido.
- Progresión de niveles.
- Guardar mejor resultado por nivel en `localStorage`.

## Experiencia de usuario
- Partidas cortas de 20 a 60 segundos.
- Controles entendibles sin tutorial largo.
- Feedback visual claro para trayectoria, velocidad, impacto y victoria.
- Vibración en mobile cuando sea posible.
- Interfaz legible en pantallas chicas.
- Sin scroll, zoom accidental ni selección de texto durante el juego.

## Física
Implementar la simulación en unidades coherentes con delta time:
- `velocidad += aceleración * dt`
- `posición += velocidad * dt`
- gravedad puntual aproximada por `a = G / distancia²`
- limitar singularidades usando una distancia mínima
- usar un `dt` máximo para evitar saltos al volver de segundo plano

## Contenido inicial
Crear al menos 10 niveles con dificultad creciente:
1. Movimiento sin gravedad.
2. Gravedad vertical suave.
3. Un planeta atractivo.
4. Dos planetas.
5. Cuerpo repulsivo.
6. Obstáculos estrechos.
7. Portal móvil.
8. Combustible o impulsos muy limitados.
9. Corrientes de viento espacial.
10. Nivel final que combine todas las mecánicas.

## Mejoras deseadas
- Vista previa punteada de trayectoria antes de soltar.
- Sistema de 1 a 3 estrellas según cantidad de impulsos.
- Selector de niveles.
- Sonidos generados con Web Audio, sin archivos externos.
- Partículas y efectos de propulsión.
- Modo desafío diario determinista usando la fecha como semilla.
- Diseño de niveles mediante objetos JavaScript fáciles de editar.

## Criterios de aceptación
- El juego carga sin errores en consola.
- Se puede completar cada nivel.
- Funciona con un dedo en iPhone y Android.
- Funciona con mouse en desktop.
- Mantiene 60 FPS en dispositivos modernos.
- No usa assets remotos.
- Todo el código queda documentado y ordenado.
- Actualizar `README.md` cuando se agreguen funciones relevantes.

Antes de terminar:
1. Revisá colisiones y límites de pantalla.
2. Probá reinicio y cambio de nivel.
3. Verificá que el gesto táctil no desplace la página.
4. Confirmá que los mejores puntajes persisten.
5. Dejá el juego listo para publicar en GitHub Pages.