// ============================================================
// index.js — Fase 04: DOM y JavaScript
// ============================================================
// Este script demuestra los siguientes conceptos de la Fase 04:
// - Selección de elementos con querySelectorAll y querySelector
// - Lectura de atributos data-* con .dataset
// - document.createElement + appendChild para insertar contenido
// - innerHTML para insertar contenido con markup HTML
// - textContent para insertar texto plano
//
// Se ejecuta sobre la lista de artículos recientes en index.html,
// leyendo data-category y data-date de cada artículo y generando
// badges visibles de categoría y una leyenda dinámica de filtros.
// ============================================================

// CONCEPTO: querySelectorAll — selecciona todos los artículos con data-category
const articulosConCategoria = document.querySelectorAll("[data-category]");

// CONCEPTO: querySelector — selecciona el contenedor de la leyenda de categorías
const seccionArticulos = document.querySelector("[aria-labelledby='articulos-recientes']");

// ──────────────────────────────────────────────────────
// 1. Insertar badges de categoría en cada artículo
//    usando createElement + appendChild y textContent
// ──────────────────────────────────────────────────────

// CONCEPTO: .dataset — lectura de atributos data-* personalizados
articulosConCategoria.forEach(function (li) {
  var categoria = li.dataset.category;
  var fecha = li.dataset.date;

  // CONCEPTO: document.createElement + appendChild — crea un badge de categoría
  var badge = document.createElement("span");
  // CONCEPTO: textContent — inserta texto plano, sin interpretar HTML
  badge.textContent = " [" + categoria + "]";
  badge.setAttribute("aria-label", "Categoría: " + categoria);
  li.appendChild(badge);

  // Crear un segundo badge con la fecha si existe
  if (fecha) {
    var badgeFecha = document.createElement("small");
    badgeFecha.textContent = " — " + fecha;
    li.appendChild(badgeFecha);
  }
});

// ──────────────────────────────────────────────────────
// 2. Insertar una leyenda dinámica de categorías únicas
//    usando innerHTML para incluir markup HTML
// ──────────────────────────────────────────────────────

// Recoger categorías únicas
var categoriasUnicas = [];
articulosConCategoria.forEach(function (li) {
  var cat = li.dataset.category;
  if (categoriasUnicas.indexOf(cat) === -1) {
    categoriasUnicas.push(cat);
  }
});

// CONCEPTO: innerHTML — inserta contenido con markup HTML (a diferencia de textContent)
if (seccionArticulos && categoriasUnicas.length > 0) {
  var leyenda = document.createElement("p");
  leyenda.id = "leyenda-categorias";
  leyenda.innerHTML = "<strong>Categorías disponibles:</strong> " +
    categoriasUnicas.join(", ") + ".";
  // Insertar la leyenda después del h2
  var h2 = seccionArticulos.querySelector("h2");
  if (h2 && h2.nextSibling) {
    seccionArticulos.insertBefore(leyenda, h2.nextSibling);
  } else {
    seccionArticulos.appendChild(leyenda);
  }
}
