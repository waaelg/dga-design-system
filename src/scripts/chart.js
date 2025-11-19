export default class DGAChart {
  constructor(element, data = []) {
    this.chart = element;
    this.data = data;
    this.init();
  }
  init() {
    this.chart.style.background = this.generateGradient();
    this.chart.innerHTML += this.generateLabels();
  }

  generateGradient() {
    // we need build style property lik: background: conic-gradient(#2d7a5a 0% 40%, #52b788 40% 70%, #95d5b2 70% 100%);
    let gradientParts = this.data.map(
      (segment) =>
        `${this.resolveColor(segment.color)} ${segment.from} ${segment.to}`
    );
    return `conic-gradient(${gradientParts.join(", ")})`;
  }

  resolveColor(color) {
    // If it starts with #, it's a hex color - use directly
    if (color.startsWith("#")) {
      return color;
    }

    // If it starts with var(, it's already a CSS variable - use directly
    if (color.startsWith("var(")) {
      return color;
    }

    // Otherwise, treat it as a CSS variable name
    // Convert "primary-100" to "var(--primary-100)"
    return `var(--${color})`;
  }
  generateLabels() {
    let prefix = "<div class='dga-pie-chart__labels'>";
    let suffix = "</div>";
    let labels = this.data.map((segment) => {
      return `<span class="dga-pie-chart__label"><span class="dga-pie-chart__circle" style="background-color: ${this.resolveColor(
        segment.color
      )}"></span>${segment.label}</span>`;
    }, "");
    return prefix + labels.join("") + suffix;
  }
}
