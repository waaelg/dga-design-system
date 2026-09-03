export function resolveChartColor(color) {
  if (color.startsWith("#") || color.startsWith("var(")) {
    return color;
  }
  return `var(--${color})`;
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

export function renderPieChart(element, data = [], { hole = false } = {}) {
  if (!element) return;

  element.classList.add("dga-pie-chart");
  element.setAttribute("data-hole", hole ? "true" : "false");
  // The gradient now lives on an inner disc so the host can be a normal-flow
  // column (disc + labels), reserving its own space instead of relying on
  // absolutely-positioned labels.
  element.style.background = "";
  element.innerHTML = `<span class="dga-pie-chart__disc" style="background: ${generateChartGradient(
    data
  )}"></span>${generateChartLabelsHtml(data)}`;
}
