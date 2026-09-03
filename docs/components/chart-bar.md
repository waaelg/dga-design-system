# Bar Chart

Stacked bar chart with an auto-scaled Y-axis, gridlines, legend, and axis
titles. CSS/flex based, RTL-aware.

**Source:** `src/styles/components/chart--bar.scss`, `src/scripts/chart-bar.js`, `src/scripts/dga-bar-chart.js`
**JavaScript:** Web component or `DGABarChart` class

---

## Option 1: Web component (recommended)

```html
<dga-bar-chart
  y-label="Active users"
  x-label="Month"
  data='{
    "categories": ["Jan","Feb","Mar","Apr","May","Jun"],
    "series": [
      { "label": "Series 1", "values": [150,350,80,120,250,240] },
      { "label": "Series 2", "values": [150,250,30,100,270,180] },
      { "label": "Series 3", "values": [130,180,20,100,160,140] }
    ]
  }'>
</dga-bar-chart>
```

Update any attribute to re-render. Wrap in `dir="rtl"` for right-to-left (the
Y-axis moves to the right and categories flow right-to-left).

### Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data` | `{}` | `{ categories: string[], series: [{ label, values, color? }] }` |
| `style-color` | `brand` | Palette when a series omits `color`: `brand` (green + gray) or `color` (categorical) |
| `max` | *(auto)* | Fix the Y-axis maximum; omit to auto-scale to a "nice" value |
| `y-label` | — | Y-axis title (e.g. `Active users`) |
| `x-label` | — | X-axis title (e.g. `Month`) |
| `show-legend` | `true` | Set `"false"` to hide the legend |
| `show-y-label` | `true` | Set `"false"` to hide the Y-axis title |
| `show-x-label` | `true` | Set `"false"` to hide the X-axis title |

---

## Option 2: DGABarChart class

```js
import { DGABarChart } from '@waaelg/dga-design-system'

new DGABarChart(document.getElementById('chart'), {
  categories: ['Jan', 'Feb', 'Mar'],
  series: [
    { label: 'Series 1', values: [150, 350, 80] },
    { label: 'Series 2', values: [150, 250, 30] },
  ],
  yLabel: 'Active users',
  xLabel: 'Month',
  styleColor: 'brand', // or 'color'
})
```

Config keys mirror the attributes (camelCase): `categories`, `series`, `max`,
`yLabel`, `xLabel`, `styleColor`, `showLegend`, `showXLabel`, `showYLabel`.

---

## Colors

Each series is auto-colored from the `style-color` palette unless it sets its
own `color` (hex, `var(--dga-*)`, or a `dga-*` token).

- **`brand`** (default): `primary-700`, `primary-400`, `gray-200`, … (Saudi
  green + light gray, matching the DGA sample).
- **`color`**: `gold-500`, `primary-300`, `warning-500`, `info-500`,
  `lavender-500`, `error-500` (cycles after 6).

---

## Related

- [Pie chart](./chart.md) · [Line chart](./chart-line.md)
- [Colors](../foundations/colors.md)
