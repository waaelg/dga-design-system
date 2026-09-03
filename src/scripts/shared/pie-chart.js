export function resolveChartColor(color) {
  if (color.startsWith("#") || color.startsWith("var(")) {
    return color;
  }
  return `var(--${color})`;
}

// Default color palettes, built from the package's existing --dga-* tokens.
// Figma "Style Color" property: "brand" (monochromatic Saudi-green ramp) and
// "color" (categorical multi-hue sequence). Tokens carry the `dga-` prefix so
// resolveChartColor() maps them to the real `--dga-*` custom properties.
const CHART_BRAND_RAMP = [
  "dga-primary-700",
  "dga-primary-600",
  "dga-primary-500",
  "dga-primary-400",
  "dga-primary-300",
  "dga-primary-200",
];

const CHART_COLOR_SEQUENCE = [
  "dga-gold-500",
  "dga-primary-300",
  "dga-warning-500",
  "dga-info-500",
  "dga-lavender-500",
  "dga-error-500",
];

// Brand ramp: spread N shades evenly across the ramp (1 = the middle shade),
// so few segments still span dark → light rather than clustering.
function brandPalette(count) {
  if (count <= 0) return [];
  const ramp = CHART_BRAND_RAMP;
  if (count === 1) return [ramp[Math.floor((ramp.length - 1) / 2)]];
  return Array.from({ length: count }, (_, i) =>
    ramp[Math.round((i * (ramp.length - 1)) / (count - 1))]
  );
}

// Categorical sequence: take the fixed order, cycling if more than defined.
function colorPalette(count) {
  return Array.from(
    { length: Math.max(count, 0) },
    (_, i) => CHART_COLOR_SEQUENCE[i % CHART_COLOR_SEQUENCE.length]
  );
}

export function resolvePalette(styleColor, count) {
  return styleColor === "color" ? colorPalette(count) : brandPalette(count);
}

export function generateChartGradient(data = []) {
  const gradientParts = data.map(
    (segment) =>
      `${resolveChartColor(segment.color)} ${segment.from} ${segment.to}`
  );
  return `conic-gradient(${gradientParts.join(", ")})`;
}

export function generateChartLabelsHtml(data = []) {
  const labels = data
    .map(
      (segment) =>
        `<span class="dga-pie-chart__label"><span class="dga-pie-chart__circle" style="background-color: ${resolveChartColor(
          segment.color
        )}"></span>${segment.label}</span>`
    )
    .join("");

  return `<div class="dga-pie-chart__labels">${labels}</div>`;
}

export function parseChartDataAttribute(value) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    console.warn("dga-pie-chart: invalid data attribute JSON");
    return [];
  }
}

export function renderPieChart(
  element,
  data = [],
  { hole = false, styleColor = "brand" } = {}
) {
  if (!element) return;

  // Auto-assign colors from the theme palette; an explicit segment `color`
  // always wins, so existing data keeps working unchanged.
  const style = styleColor === "color" ? "color" : "brand";
  const palette = resolvePalette(style, data.length);
  const resolvedData = data.map((segment, i) => ({
    ...segment,
    color: segment.color || palette[i] || "dga-primary-500",
  }));

  element.classList.add("dga-pie-chart");
  element.setAttribute("data-hole", hole ? "true" : "false");
  element.setAttribute("data-style-color", style);
  // The gradient now lives on an inner disc so the host can be a normal-flow
  // column (disc + labels), reserving its own space instead of relying on
  // absolutely-positioned labels.
  element.style.background = "";
  element.innerHTML = `<span class="dga-pie-chart__disc" style="background: ${generateChartGradient(
    resolvedData
  )}"></span>${generateChartLabelsHtml(resolvedData)}`;
}
