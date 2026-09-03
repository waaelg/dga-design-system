import { parseLineConfig, renderLineChart } from "./shared/line-chart.js";

class DGALineChartElement extends HTMLElement {
  static get observedAttributes() {
    return [
      "data",
      "style-color",
      "max",
      "x-label",
      "y-label",
      "show-legend",
      "show-x-label",
      "show-y-label",
      "show-content",
    ];
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  _bool(name) {
    const v = this.getAttribute(name);
    return v === null ? true : v !== "false";
  }

  _render() {
    const { categories, series } = parseLineConfig(this.getAttribute("data"));
    let rtl = false;
    try {
      rtl = getComputedStyle(this).direction === "rtl";
    } catch {
      /* SSR / detached */
    }
    renderLineChart(this, {
      categories,
      series,
      rtl,
      styleColor:
        this.getAttribute("style-color") === "color" ? "color" : "brand",
      max: this.getAttribute("max"),
      xLabel: this.getAttribute("x-label") || "",
      yLabel: this.getAttribute("y-label") || "",
      showLegend: this._bool("show-legend"),
      showXLabel: this._bool("show-x-label"),
      showYLabel: this._bool("show-y-label"),
      showContent: this._bool("show-content"),
    });
  }
}

customElements.define("dga-line-chart", DGALineChartElement);
