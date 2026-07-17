// ============================================================
// web-components.js — Fase 04: Web Components básicos
// ============================================================
// Este script demuestra los siguientes conceptos de la Fase 04:
// - Custom Element: clase que extiende HTMLElement
// - Shadow DOM: this.attachShadow({ mode: "open" })
// - <slot> para contenido proyectado
// - customElements.define() para registrar el componente
//
// Define un componente <synnergy-quote> reutilizable que muestra
// una cita destacada con estilos encapsulados en Shadow DOM.
// Se usa dentro de artículos para resaltar frases clave.
//
// Uso en HTML:
//   <synnergy-quote author="Aurelio Crespo">
//     La diferencia no está solo en benchmarks, sino en cómo
//     cada arquitectura gestiona tu flujo de trabajo diario.
//   </synnergy-quote>
// ============================================================

// CONCEPTO: Web Component — clase que extiende HTMLElement
class SynnergyQuote extends HTMLElement {
  constructor() {
    super();

    // CONCEPTO: Shadow DOM — attachShadow crea un DOM encapsulado
    // con estilos que no afectan al resto de la página
    var shadow = this.attachShadow({ mode: "open" });

    // Leer el atributo author si existe
    var author = this.getAttribute("author") || "";

    // ── Plantilla del componente ──
    // Los estilos viven dentro del Shadow DOM y son la única
    // excepción a "cero estilos" porque el Shadow DOM los
    // encapsula — no afectan al documento principal
    shadow.innerHTML =
      '<style>' +
        ':host {' +
          'display: block;' +
          'border-left: 4px solid #e94560;' +
          'padding: 12px 16px;' +
          'margin: 16px 0;' +
          'background: #f8f8fa;' +
        '}' +
        'blockquote {' +
          'margin: 0;' +
          'font-style: italic;' +
        '}' +
        'cite {' +
          'display: block;' +
          'margin-top: 8px;' +
          'font-size: 0.9em;' +
          'color: #555;' +
        '}' +
      '</style>' +
      '<blockquote>' +
        // CONCEPTO: <slot> — proyecta el contenido hijo del componente
        '<slot></slot>' +
        (author ? '<cite>— ' + author + '</cite>' : '') +
      '</blockquote>';
  }
}

// CONCEPTO: customElements.define — registra el Custom Element
// para que el navegador lo reconozca como etiqueta válida
customElements.define("synnergy-quote", SynnergyQuote);
