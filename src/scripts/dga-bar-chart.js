import { parseBarConfig, renderBarChart } from "./shared/bar-chart.js";

class DGABarChartElement extends HTMLElement {
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
    const { categories, series } = parseBarConfig(this.getAttribute("data"));
    renderBarChart(this, {
      categories,
      series,
      styleColor:
        this.getAttribute("style-color") === "color" ? "color" : "brand",
      max: this.getAttribute("max"),
      xLabel: this.getAttribute("x-label") || "",
      yLabel: this.getAttribute("y-label") || "",
      showLegend: this._bool("show-legend"),
      showXLabel: this._bool("show-x-label"),
      showYLabel: this._bool("show-y-label"),
    });
  }
}

customElements.define("dga-bar-chart", DGABarChartElement);
