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

No `new DGAChart()` required. Update the `data` attribute to re-render.

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

Default size: 150×150px, centered with `margin: 0 auto`.

---

## Data shape

| Field | Description |
|-------|-------------|
| `label` | Legend text |
| `from` | Segment start (e.g. `0%`) |
| `to` | Segment end (e.g. `40%`) |
| `color` | Hex (`#2d7a5a`), CSS var (`var(--dga-primary-100)`), or token name (`primary-100`) |

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
