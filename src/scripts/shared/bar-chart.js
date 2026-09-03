import { resolveChartColor } from "./pie-chart.js";
import { escapeHtml } from "./escape-html.js";

// Default series palettes for the bar chart, from existing --dga-* tokens.
// "brand" (default) matches the DGA Figma sample: greens + a light gray.
const BAR_BRAND_SEQUENCE = [
  "dga-primary-700",
  "dga-primary-400",
  "dga-gray-200",
  "dga-primary-500",
  "dga-primary-300",
  "dga-gray-400",
];

const BAR_COLOR_SEQUENCE = [
  "dga-gold-500",
  "dga-primary-300",
  "dga-warning-500",
  "dga-info-500",
  "dga-lavender-500",
  "dga-error-500",
];

export function resolveBarPalette(styleColor, count) {
  const seq =
    styleColor === "color" ? BAR_COLOR_SEQUENCE : BAR_BRAND_SEQUENCE;
  return Array.from(
    { length: Math.max(count, 0) },
    (_, i) => seq[i % seq.length]
  );
}

// Round an axis maximum up to a "nice" value and pick a matching tick step,
// targeting roughly `targetTicks` intervals.
export function niceScale(max, targetTicks = 8) {
  const safeMax = max > 0 ? max : 1;
  const rawStep = safeMax / targetTicks;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const norm = rawStep / mag;
  let step;
  if (norm <= 1) step = 1;
  else if (norm <= 2) step = 2;
  else if (norm <= 2.5) step = 2.5;
  else if (norm <= 5) step = 5;
  else step = 10;
  step *= mag;
  const niceMax = Math.ceil(safeMax / step) * step;
  return { step, niceMax };
}

export function parseBarConfig(value) {
  if (!value) return { categories: [], series: [] };
  try {
    const parsed = JSON.parse(value);
    return {
      categories: Array.isArray(parsed.categories) ? parsed.categories : [],
      series: Array.isArray(parsed.series) ? parsed.series : [],
    };
  } catch {
    console.warn("dga-bar-chart: invalid data attribute JSON");
    return { categories: [], series: [] };
  }
}

export function renderBarChart(element, config = {}) {
  if (!element) return;

  const {
    categories = [],
    series = [],
    styleColor = "brand",
    max = null,
    showLegend = true,
    showXLabel = true,
    showYLabel = true,
    xLabel = "",
    yLabel = "",
  } = config;

  const style = styleColor === "color" ? "color" : "brand";
  const palette = resolveBarPalette(style, series.length);
  const colors = series.map((s, i) =>
    resolveChartColor(s.color || palette[i] || "dga-primary-500")
  );

  const totals = categories.map((_, ci) =>
    series.reduce((sum, s) => sum + (Number(s.values?.[ci]) || 0), 0)
  );
  const dataMax = Math.max(1, ...totals);
  const { step, niceMax } = niceScale(Number(max) > 0 ? Number(max) : dataMax);

  const ticks = [];
  for (let t = niceMax; t >= 0; t -= step) ticks.push(Math.round(t));

  const legendHtml = showLegend
    ? `<div class="dga-bar-chart__legend">${series
        .map(
          (s, i) =>
            `<span class="dga-bar-chart__legend-item"><span class="dga-bar-chart__legend-dot" style="background:${colors[i]}"></span>${escapeHtml(
              s.label ?? ""
            )}</span>`
        )
        .join("")}</div>`
    : "";

  const yAxisHtml = `<div class="dga-bar-chart__y-axis">${ticks
    .map((t) => `<span class="dga-bar-chart__y-tick">${t}</span>`)
    .join("")}</div>`;

  const gridlinesHtml = `<div class="dga-bar-chart__gridlines">${ticks
    .map(() => `<span class="dga-bar-chart__gridline"></span>`)
    .join("")}</div>`;

  const barsHtml = `<div class="dga-bar-chart__bars">${categories
    .map((cat, ci) => {
      const total = totals[ci];
      const barHeight = (total / niceMax) * 100;
      const segs = series
        .map((s, si) => {
          const v = Number(s.values?.[ci]) || 0;
          const h = total > 0 ? (v / total) * 100 : 0;
          return `<span class="dga-bar-chart__seg" style="height:${h}%;background:${colors[si]}"></span>`;
        })
        .join("");
      return `<div class="dga-bar-chart__col"><div class="dga-bar-chart__bar" style="height:${barHeight}%">${segs}</div></div>`;
    })
    .join("")}</div>`;

  const xAxisHtml = `<div class="dga-bar-chart__x-axis">${categories
    .map((c) => `<span class="dga-bar-chart__x-tick">${escapeHtml(c)}</span>`)
    .join("")}</div>`;

  const yTitleHtml =
    showYLabel && yLabel
      ? `<div class="dga-bar-chart__axis-title dga-bar-chart__axis-title--y">${escapeHtml(
          yLabel
        )}</div>`
      : "";

  const xTitleHtml =
    showXLabel && xLabel
      ? `<div class="dga-bar-chart__axis-title dga-bar-chart__axis-title--x">${escapeHtml(
          xLabel
        )}</div>`
      : "";

  element.classList.add("dga-bar-chart");
  element.setAttribute("data-style-color", style);
  element.innerHTML = `
    ${legendHtml}
    <div class="dga-bar-chart__frame">
      ${yTitleHtml}
      <div class="dga-bar-chart__plot-wrap">
        ${yAxisHtml}
        <div class="dga-bar-chart__plot">
          ${gridlinesHtml}
          ${barsHtml}
        </div>
        <span class="dga-bar-chart__spacer"></span>
        ${xAxisHtml}
      </div>
      ${xTitleHtml}
    </div>
  `;
}
