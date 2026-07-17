// ============================================================
// articulo.js — Fase 04: DOM y JavaScript
// ============================================================
// Este script demuestra los siguientes conceptos de la Fase 04:
// - Selección de elementos con getElementById y querySelector
// - Event listener real (click) sobre un botón existente
// - Manipulación del DOM para mostrar/ocultar el aside de
//   "artículos relacionados" en las páginas de artículo
//
// Funciona sobre el botón #toggle-aside y el aside
// con id="aside-relacionados" en arm-arquitectura.html.
// ============================================================

// CONCEPTO: getElementById — selecciona el botón de toggle
var botonToggle = document.getElementById("toggle-aside");

// CONCEPTO: querySelector — selecciona el aside de artículos relacionados
var asideRelacionados = document.querySelector("#aside-relacionados");

// ──────────────────────────────────────────────────────
// Event listener: mostrar/ocultar el aside al hacer click
// ──────────────────────────────────────────────────────

if (botonToggle && asideRelacionados) {
  // CONCEPTO: addEventListener — event listener real (click) sobre elemento existente
  botonToggle.addEventListener("click", function () {
    // Verificar si el aside está visible u oculto
    var estaOculto = asideRelacionados.hidden;

    // Alternar visibilidad usando el atributo booleano hidden
    asideRelacionados.hidden = !estaOculto;

    // Actualizar el texto del botón para reflejar el estado actual
    if (asideRelacionados.hidden) {
      botonToggle.textContent = "Mostrar artículos relacionados";
      botonToggle.setAttribute("aria-expanded", "false");
    } else {
      botonToggle.textContent = "Ocultar artículos relacionados";
      botonToggle.setAttribute("aria-expanded", "true");
    }
  });
}
