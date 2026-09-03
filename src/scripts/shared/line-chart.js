import { resolveChartColor } from "./pie-chart.js";
import { niceScale, parseBarConfig } from "./bar-chart.js";
import { escapeHtml } from "./escape-html.js";

export { parseBarConfig as parseLineConfig };

const LINE_BRAND_SEQUENCE = [
  "dga-primary-700",
  "dga-primary-500",
  "dga-primary-300",
  "dga-primary-600",
  "dga-primary-400",
  "dga-primary-200",
];

const LINE_COLOR_SEQUENCE = [
  "dga-gold-500",
  "dga-primary-300",
  "dga-warning-500",
  "dga-info-500",
  "dga-lavender-500",
  "dga-error-500",
];

export function resolveLinePalette(styleColor, count) {
  const seq =
    styleColor === "color" ? LINE_COLOR_SEQUENCE : LINE_BRAND_SEQUENCE;
  return Array.from(
    { length: Math.max(count, 0) },
    (_, i) => seq[i % seq.length]
  );
}

export function renderLineChart(element, config = {}) {
  if (!element) return;

  const {
    categories = [],
    series = [],
    styleColor = "brand",
    max = null,
    showLegend = true,
    showXLabel = true,
    showYLabel = true,
    showContent = true,
    xLabel = "",
    yLabel = "",
    rtl = false,
  } = config;

  const style = styleColor === "color" ? "color" : "brand";
  const palette = resolveLinePalette(style, series.length);
  const colors = series.map((s, i) =>
    resolveChartColor(s.color || palette[i] || "dga-primary-500")
  );

  // Independent (non-stacked) lines: axis max spans the largest single value.
  let dataMax = 1;
  for (const s of series) {
    for (const v of s.values || []) dataMax = Math.max(dataMax, Number(v) || 0);
  }
  const { step, niceMax } = niceScale(Number(max) > 0 ? Number(max) : dataMax);

  const ticks = [];
  for (let t = 0; t <= niceMax; t += step) ticks.push(Math.round(t));

  // SVG geometry (viewBox units; scales responsively via width:100%).
  const W = 600;
  const H = 300;
  const padL = rtl ? 16 : 44;
  const padR = rtl ? 44 : 16;
  const padT = 12;
  const padB = 28;
  const xLeft = padL;
  const xRight = W - padR;
  const yTop = padT;
  const yBottom = H - padB;
  const plotW = xRight - xLeft;
  const plotH = yBottom - yTop;
  const n = categories.length;

  const xAt = (i) => {
    const frac = n <= 1 ? 0.5 : i / (n - 1);
    return rtl ? xRight - frac * plotW : xLeft + frac * plotW;
  };
  const yAt = (v) => yBottom - (Math.max(0, Number(v) || 0) / niceMax) * plotH;

  const gridHtml = ticks
    .map((t) => {
      const y = yBottom - (t / niceMax) * plotH;
      const lx = rtl ? xRight + 6 : xLeft - 6;
      const anchor = rtl ? "start" : "end";
      return (
        `<line x1="${xLeft}" y1="${y.toFixed(1)}" x2="${xRight}" y2="${y.toFixed(
          1
        )}" class="dga-line-chart__grid"/>` +
        `<text x="${lx}" y="${(y + 4).toFixed(
          1
        )}" text-anchor="${anchor}" class="dga-line-chart__tick">${t}</text>`
      );
    })
    .join("");

  const xLabelsHtml = categories
    .map(
      (c, i) =>
        `<text x="${xAt(i).toFixed(1)}" y="${(yBottom + 18).toFixed(
          1
        )}" text-anchor="middle" class="dga-line-chart__xtick">${escapeHtml(
          c
        )}</text>`
    )
    .join("");

  const seriesHtml = series
    .map((s, si) => {
      const pts = categories.map((_, i) => [xAt(i), yAt(s.values?.[i])]);
      if (pts.length === 0) return "";
      const line = pts
        .map((p, idx) => `${idx === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
        .join(" ");
      let area = "";
      if (showContent) {
        const first = pts[0];
        const last = pts[pts.length - 1];
        area = `<path d="${line} L${last[0].toFixed(1)} ${yBottom} L${first[0].toFixed(
          1
        )} ${yBottom} Z" style="fill:${colors[si]};fill-opacity:.12;stroke:none"/>`;
      }
      const stroke = `<path d="${line}" style="fill:none;stroke:${colors[si]};stroke-width:2;stroke-linejoin:round;stroke-linecap:round"/>`;
      return area + stroke;
    })
    .join("");

  const svg = `<svg viewBox="0 0 ${W} ${H}" class="dga-line-chart__svg" preserveAspectRatio="xMidYMid meet" role="img">${gridHtml}${seriesHtml}${xLabelsHtml}</svg>`;

  const legendHtml = showLegend
    ? `<div class="dga-line-chart__legend">${series
        .map(
          (s, i) =>
            `<span class="dga-line-chart__legend-item"><span class="dga-line-chart__legend-dot" style="background:${colors[i]}"></span>${escapeHtml(
              s.label ?? ""
            )}</span>`
        )
        .join("")}</div>`
    : "";

  const yTitleHtml =
    showYLabel && yLabel
      ? `<div class="dga-line-chart__axis-title dga-line-chart__axis-title--y">${escapeHtml(
          yLabel
        )}</div>`
      : "";

  const xTitleHtml =
    showXLabel && xLabel
      ? `<div class="dga-line-chart__axis-title dga-line-chart__axis-title--x">${escapeHtml(
          xLabel
        )}</div>`
      : "";

  element.classList.add("dga-line-chart");
  element.setAttribute("data-style-color", style);
  element.innerHTML = `
    ${legendHtml}
    <div class="dga-line-chart__frame">
      ${yTitleHtml}
      <div class="dga-line-chart__plot">${svg}</div>
      ${xTitleHtml}
    </div>
  `;
}
