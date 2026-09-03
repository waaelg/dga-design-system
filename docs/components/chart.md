# Pie Chart

CSS conic-gradient pie / donut chart with labels.

**Source:** `src/styles/components/chart--pie.scss`, `src/scripts/chart.js`, `src/scripts/dga-pie-chart.js`  
**Demo:** VitePress live preview on this page  
**JavaScript:** Optional — web component or `DGAChart` class

---

## Option 1: Web component (recommended)

```html
<dga-pie-chart
  data='[
    {"label":"Item 1","from":"0%","to":"40%","color":"var(--dga-primary-100)"},
    {"label":"Item 2","from":"40%","to":"70%","color":"var(--dga-gray-200)"},
    {"label":"Item 3","from":"70%","to":"100%","color":"var(--dga-primary-700)"}
  ]'>
</dga-pie-chart>
```

<Demo title="Preview" client>

<DgaPieChart variant="pie" />

</Demo>

### Donut

```html
<dga-pie-chart hole data='[{"label":"A","from":"0%","to":"35%","color":"var(--dga-primary-100)"},{"label":"B","from":"35%","to":"65%","color":"var(--dga-gray-200)"},{"label":"C","from":"65%","to":"100%","color":"var(--dga-primary-700)"}]'></dga-pie-chart>
```

<Demo title="Preview" client>

<DgaPieChart variant="donut" />

</Demo>

### Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data` | `[]` | JSON array of segments (see data shape) |
| `hole` | `false` | Present = donut (white center) |
| `style-color` | `brand` | Default palette used when a segment omits `color`: `brand` (Saudi-green ramp) or `color` (categorical) |

No `new DGAChart()` required. Update the `data` attribute to re-render.

Segments may omit `color` — they are then auto-colored from the theme palette (see [Color palettes](#color-palettes)):

```html
<dga-pie-chart style-color="color"
  data='[{"label":"A","from":"0%","to":"50%"},{"label":"B","from":"50%","to":"100%"}]'>
</dga-pie-chart>
```

---

## Option 2: Legacy markup + DGAChart

```html
<!-- Full pie -->
<div id="chart1" class="dga-pie-chart" data-hole="false"></div>

<!-- Donut -->
<div id="chart2" class="dga-pie-chart" data-hole="true"></div>
```

```js
import { DGAChart } from '@waaelg/dga-design-system'

const data = [
  { label: 'Item 1', from: '0%', to: '40%', color: 'var(--dga-primary-100)' },
  { label: 'Item 2', from: '40%', to: '70%', color: 'var(--dga-gray-200)' },
  { label: 'Item 3', from: '70%', to: '100%', color: 'var(--dga-primary-700)' },
]

new DGAChart(document.getElementById('chart1'), data)
```

| Attribute | Effect |
|-----------|--------|
| `data-hole="false"` | Solid pie |
| `data-hole="true"` | Donut (white center) |
| `data-style-color="color"` | Use the categorical palette (default is `brand`) |

Default size: 150×150px. The chart is a flex column (disc + legend below).

---

## Data shape

| Field | Description |
|-------|-------------|
| `label` | Legend text |
| `from` | Segment start (e.g. `0%`) |
| `to` | Segment end (e.g. `40%`) |
| `color` | *Optional.* Hex (`#2d7a5a`), CSS var (`var(--dga-primary-100)`), or a DGA token **with the `dga-` prefix** (`dga-primary-100`). Omit to auto-assign from the theme palette. |

---

## Color palettes

When a segment has no `color`, it is filled from the palette chosen by
`style-color` (web component) / `data-style-color` (legacy):

**`brand`** (default) — a monochromatic Saudi-green ramp, spread across the
segments so even a few slices span dark → light. One segment uses
`primary-500`.

**`color`** — a categorical sequence (cycles after 6):

| # | Token |
|---|-------|
| 1 | `gold-500` |
| 2 | `primary-300` |
| 3 | `warning-500` |
| 4 | `info-500` |
| 5 | `lavender-500` |
| 6 | `error-500` |

An explicit `color` on a segment always overrides the palette.

---

## Generated markup

JS builds, inside the `.dga-pie-chart` host (a flex column):

- `.dga-pie-chart__disc` — the circle, with `background: conic-gradient(...)` applied inline
- `.dga-pie-chart__labels` — the legend below the circle, holding `.dga-pie-chart__label` items with `.dga-pie-chart__circle` swatches (wraps when space is tight)

---

## Related

- [Web Components](../getting-started/web-components.md)
- [JavaScript API](../getting-started/javascript-api.md)
- [Colors](../foundations/colors.md)
