// ============================================================
// canvas-demo.js — Fase 04: Canvas API básico
// ============================================================
// Este script demuestra los siguientes conceptos de la Fase 04:
// - Obtención del contexto 2D con getContext("2d")
// - Dibujo básico: rectángulo (fillRect), línea (lineTo),
//   y texto (fillText)
//
// Dibuja un badge visual simple de "Synnergy Lab" sobre el
// canvas definido en about.html, demostrando que el canvas
// está vivo y responde a JavaScript.
// ============================================================

// CONCEPTO: Canvas API — obtener el canvas y su contexto 2D
var canvas = document.getElementById("canvas-synnergy");

if (canvas) {
  // CONCEPTO: getContext("2d") — obtener el contexto de dibujo 2D
  var ctx = canvas.getContext("2d");

  if (ctx) {
    // ── Fondo del badge ──
    // CONCEPTO: fillRect — dibujar un rectángulo relleno
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ── Borde decorativo ──
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 3;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    // ── Línea divisoria ──
    // CONCEPTO: lineTo — dibujar una línea
    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(canvas.width - 20, 50);
    ctx.strokeStyle = "#0f3460";
    ctx.lineWidth = 2;
    ctx.stroke();

    // ── Texto principal ──
    // CONCEPTO: fillText — dibujar texto sobre el canvas
    ctx.fillStyle = "#e94560";
    ctx.font = "bold 20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Synnergy Lab", canvas.width / 2, 38);

    // ── Texto secundario ──
    ctx.fillStyle = "#16213e";
    ctx.fillStyle = "#a8a8b3";
    ctx.font = "14px sans-serif";
    ctx.fillText("Software · IA · Marketing", canvas.width / 2, 72);
  }
}
