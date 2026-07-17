# Fase 04 — DOM, JavaScript, Templates, SVG, Canvas, Web Components y Email HTML

## Estado actual del proyecto

El proyecto tiene 5 archivos HTML:
- `index.html` — página principal con lista de artículos
- `about.html` — perfil de Aurelio Crespo
- `contacto.html` — formulario de contacto (ya referencia `js/contacto.js` con `defer`)
- `articles/arm-arquitectura.html` — artículo técnico ARM vs x86
- `articles/mi-primer-articulo.html` — artículo introductorio

No existe carpeta `js/` todavía. Hay carpetas `images/` y `media/` con placeholders.

---

## Decisiones de organización y justificación

### 1. Dónde va cada concepto (en archivo existente vs nuevo)

| Concepto | Archivo destino | Razón |
|---|---|---|
| **data-\* atributos + script de filtrado** | `index.html` + `js/index.js` | La lista de artículos recientes es el lugar natural para `data-category`, `data-date` — y el script que los lee para mostrar etiquetas |
| **SVG inline decorativo** | `index.html` (nav) | Un ícono de flecha en los enlaces de navegación — donde ya hay nav con enlaces |
| **SVG inline informativo** | `about.html` (header) | Un logo simple de Synnergy Lab junto al nombre — aporta identidad y tiene sentido semántico |
| **Event listener: range → aria-live** | `contacto.html` + `js/contacto.js` | El range de urgencia y el `aria-live="polite"` ya existen desde Fase 03 — el listener actualiza el texto en vivo |
| **Event listener: toggle aside** | `articles/arm-arquitectura.html` + `js/articulo.js` | El aside de "Artículos relacionados" es candidato perfecto para mostrar/ocultar con un botón |
| **createElement + appendChild** | `js/index.js` | El script inserta dinámicamente badges de categoría leídos desde `data-*` |
| **innerHTML vs textContent** | `js/contacto.js` | `textContent` para actualizar el valor de urgencia (texto plano), `innerHTML` se demuestra en `js/index.js` para insertar la leyenda de filtro con markup |
| **getElementById, querySelector, querySelectorAll** | Distribuido en los 3 JS files | Al menos 2 métodos distintos en cada script |
| **iframe** | `articles/arm-arquitectura.html` | Incrustar un video de YouTube sobre ARM — coherente con el contenido del artículo |
| **embed** | `about.html` | Un PDF de portfolio/CV — coherente con la página de perfil |
| **object** | `about.html` | Un recurso con fallback — junto al embed, en la sección de perfil |
| **Canvas** | `about.html` + `js/canvas-demo.js` | Un canvas que dibuja un badge simple de "Synnergy Lab" — coherente con la sección "Sobre este sitio" |
| **Web Component (cita destacada)** | `js/web-components.js` + usado en `articles/arm-arquitectura.html` | Un `<synnergy-quote>` con Shadow DOM y slot — encaja como cita destacada dentro del artículo técnico |
| **Templates Jinja2/Liquid** | `docs/templates-ejemplo.html` | Archivo nuevo de documentación — no tiene lugar lógico en ningún HTML existente; es puramente ilustrativo |
| **Email newsletter** | `docs/email-newsletter.html` | Archivo nuevo — las reglas de email son incompatibles con el resto del proyecto, necesita su propio archivo |

### 2. Estructura de archivos nuevos

```
blog-synnergy/
├── js/
│   ├── index.js              ← data-*, createElement, innerHTML, filtrado
│   ├── contacto.js           ← range listener, textContent, aria-live
│   ├── articulo.js           ← toggle aside, event listener
│   ├── canvas-demo.js        ← Canvas 2D API
│   └── web-components.js     ← Custom Element <synnergy-quote>
├── docs/
│   ├── templates-ejemplo.html ← Documentación Jinja2/Liquid (no funcional)
│   └── email-newsletter.html  ← HTML de email con tablas e inline styles
└── (archivos HTML existentes modificados)
```

> [!IMPORTANT]
> La carpeta `docs/` se crea nueva porque los dos archivos que contiene son **documentación/ejemplo**, no páginas del sitio. Separarlos evita confundirlos con contenido funcional.

### 3. Archivos HTML existentes que se modifican

#### [MODIFY] [index.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/index.html)
- Agregar `data-category` y `data-date` a los `<li>` de artículos recientes (mínimo 3 → agregar un tercer artículo ficticio en la lista para tener 3 data-*)
- Agregar SVG inline decorativo en la navegación (flecha junto a "Inicio")
- Agregar `<script defer src="js/index.js">` en `<head>`

#### [MODIFY] [about.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/about.html)
- Agregar SVG inline del logo Synnergy Lab en el header (con `role="img"` y `<title>`)
- Agregar `<embed>` para un PDF de portfolio en la sección de contacto/perfil
- Agregar `<object>` con data y contenido de fallback
- Agregar `<canvas>` con id, width, height en la sección "Sobre este sitio"
- Agregar `<script defer src="js/canvas-demo.js">` en `<head>`

#### [MODIFY] [contacto.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/contacto.html)
- El `<script defer src="js/contacto.js">` ya existe en línea 42 ✓
- No se modifica el HTML — el JS opera sobre elementos existentes

#### [MODIFY] [articles/arm-arquitectura.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/articles/arm-arquitectura.html)
- Agregar un botón antes del aside para "Mostrar/ocultar artículos relacionados"
- Agregar `<iframe>` con video de YouTube sobre ARM con `title` descriptivo y `loading="lazy"`
- Agregar el Web Component `<synnergy-quote>` como cita destacada dentro del artículo
- Agregar `<script defer src="../js/articulo.js">` y `<script defer src="../js/web-components.js">`

### 4. Archivos nuevos

#### [NEW] [js/index.js](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/js/index.js)
- Usa `querySelectorAll` para seleccionar `[data-category]`
- Usa `document.createElement` + `appendChild` para crear badges de categoría
- Usa `innerHTML` para insertar una leyenda de categorías

#### [NEW] [js/contacto.js](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/js/contacto.js)
- Usa `getElementById` para seleccionar el range de urgencia
- Usa `querySelector` para seleccionar el `#estado-formulario`
- Agrega `input` event listener al range para actualizar `textContent` en el aria-live

#### [NEW] [js/articulo.js](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/js/articulo.js)
- Selecciona el botón de toggle y el aside
- Agrega `click` event listener para mostrar/ocultar el aside

#### [NEW] [js/canvas-demo.js](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/js/canvas-demo.js)
- Obtiene el canvas con `getElementById`
- Usa `getContext("2d")` para dibujar un rectángulo y texto "Synnergy Lab"

#### [NEW] [js/web-components.js](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/js/web-components.js)
- Define `SynnergyQuote` que extiende `HTMLElement`
- Usa `this.attachShadow({ mode: "open" })`
- Contiene un `<slot>` para contenido proyectado
- Se registra con `customElements.define("synnergy-quote", SynnergyQuote)`

#### [NEW] [docs/templates-ejemplo.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/docs/templates-ejemplo.html)
- Comentarios claros de que es documentación, no código ejecutable
- Ejemplo Jinja2 con `{% extends %}`, `{% block %}`, `{% for %}`, `{{ variable }}`
- Ejemplo Liquid con `{% include %}`, `{% for %}`, `{{ variable }}`
- Aplicados al caso real: generación de la lista de artículos de index.html

#### [NEW] [docs/email-newsletter.html](file:///c:/Users/synne/My%20Drive/Repos%20GitHub/Blog/blog-synnergy/docs/email-newsletter.html)
- Comentario al inicio explicando la excepción a las reglas del proyecto
- Layout basado en `<table>`, ancho 600px
- Estilos inline con `style=""`
- Contenido realista: newsletter del blog Synnergy

---

## Verificación

### Validación automática
- Cada concepto marcado con `<!-- CONCEPTO: -->` o `// CONCEPTO:`
- Ningún JS inline en atributos HTML
- Todos los JS en archivos `.js` separados, con comentarios explicativos
- El Web Component se renderiza con Shadow DOM y slot al abrir la página

### Validación manual sugerida
- Abrir `index.html` en navegador → verificar que aparecen badges de categoría dinámicos
- Abrir `contacto.html` → mover el slider de urgencia → verificar que el texto del `aria-live` se actualiza
- Abrir `articles/arm-arquitectura.html` → click en "Mostrar/ocultar" → el aside se muestra/oculta; la cita destacada `<synnergy-quote>` aparece con su Shadow DOM
- Abrir `about.html` → el canvas muestra un dibujo simple
- Verificar que `docs/email-newsletter.html` tiene layout de tablas e inline styles
