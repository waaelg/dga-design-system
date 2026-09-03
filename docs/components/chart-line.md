# Line Chart

Line / area chart (inline SVG) with an auto-scaled Y-axis, gridlines, legend,
and axis titles. Series are independent (not stacked); an optional area fill
sits under each line. RTL-aware.

**Source:** `src/styles/components/chart--line.scss`, `src/scripts/chart-line.js`, `src/scripts/dga-line-chart.js`
**JavaScript:** Web component or `DGALineChart` class

---

## Option 1: Web component (recommended)

```html
<dga-line-chart
  y-label="Active users"
  x-label="Month"
  data='{
    "categories": ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
    "series": [
      { "label": "Series 1", "values": [540,600,590,580,560,600,620,660,720] },
      { "label": "Series 2", "values": [400,470,450,440,420,470,500,520,500] },
      { "label": "Series 3", "values": [150,250,240,200,130,220,280,350,450] }
    ]
  }'>
</dga-line-chart>
```

Wrap in `dir="rtl"` for right-to-left (the Y-axis moves to the right and the
categories are drawn right-to-left).

### Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data` | `{}` | `{ categories: string[], series: [{ label, values, color? }] }` |
| `style-color` | `brand` | Palette when a series omits `color`: `brand` (green ramp) or `color` (categorical) |
| `show-content` | `true` | Set `"false"` for lines only (no area fill) |
| `max` | *(auto)* | Fix the Y-axis maximum; omit to auto-scale |
| `y-label` | — | Y-axis title |
| `x-label` | — | X-axis title |
| `show-legend` | `true` | Set `"false"` to hide the legend |
| `show-y-label` | `true` | Set `"false"` to hide the Y-axis title |
| `show-x-label` | `true` | Set `"false"` to hide the X-axis title |

---

## Option 2: DGALineChart class

```js
import { DGALineChart } from '@waaelg/dga-design-system'

new DGALineChart(document.getElementById('chart'), {
  categories: ['Jan', 'Feb', 'Mar'],
  series: [
    { label: 'Series 1', values: [540, 600, 590] },
    { label: 'Series 2', values: [400, 470, 450] },
  ],
  yLabel: 'Active users',
  xLabel: 'Month',
  showContent: true,
})
```

Config keys mirror the attributes (camelCase): `categories`, `series`, `max`,
`yLabel`, `xLabel`, `styleColor`, `showContent`, `showLegend`, `showXLabel`,
`showYLabel`.

---

## Colors

Each line is auto-colored from the `style-color` palette unless it sets its own
`color`. `brand` (default) is a Saudi-green ramp (`primary-700`, `primary-500`,
`primary-300`, …); `color` is the categorical sequence (`gold-500`,
`primary-300`, `warning-500`, `info-500`, `lavender-500`, `error-500`).

---

## Related

- [Pie chart](./chart.md) · [Bar chart](./chart-bar.md)
- [Colors](../foundations/colors.md)
