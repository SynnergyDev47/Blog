// ============================================================
// contacto.js — Fase 04: DOM y JavaScript
// ============================================================
// Este script demuestra los siguientes conceptos de la Fase 04:
// - Selección de elementos con getElementById y querySelector
// - Event listener real (input) sobre un elemento existente
// - textContent para actualizar texto plano
// - Integración con aria-live="polite" existente de Fase 03
//
// Conecta el slider de urgencia (input type="range") con el
// párrafo de estado del formulario que ya tiene aria-live="polite",
// para que los lectores de pantalla anuncien el cambio en vivo.
// ============================================================

// CONCEPTO: getElementById — selecciona el slider de urgencia por su id
var sliderUrgencia = document.getElementById("urgencia");

// CONCEPTO: querySelector — selecciona el párrafo de estado con aria-live
var estadoFormulario = document.querySelector("#estado-formulario");

// ──────────────────────────────────────────────────────
// Event listener: actualizar texto en vivo con el valor
// del slider de urgencia
// ──────────────────────────────────────────────────────

if (sliderUrgencia && estadoFormulario) {
  // Mostrar el valor inicial al cargar la página
  // CONCEPTO: textContent — inserta texto plano sin interpretar HTML
  estadoFormulario.textContent = "Nivel de urgencia seleccionado: " + sliderUrgencia.value + " de 10";

  // CONCEPTO: addEventListener — event listener real sobre elemento existente
  // El evento "input" se dispara con cada movimiento del slider,
  // actualizando el aria-live="polite" que anuncia cambios a lectores de pantalla
  sliderUrgencia.addEventListener("input", function () {
    estadoFormulario.textContent = "Nivel de urgencia seleccionado: " + this.value + " de 10";
  });
}
