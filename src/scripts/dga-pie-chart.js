import {
  parseChartDataAttribute,
  renderPieChart,
} from "./shared/pie-chart.js";

class DGAPieChartElement extends HTMLElement {
  static get observedAttributes() {
    return ["data", "hole", "style-color"];
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  _render() {
    const chartData = parseChartDataAttribute(this.getAttribute("data"));
    const hole =
      this.hasAttribute("hole") && this.getAttribute("hole") !== "false";
    const styleColor =
      this.getAttribute("style-color") === "color" ? "color" : "brand";

    renderPieChart(this, chartData, { hole, styleColor });
  }
}

customElements.define("dga-pie-chart", DGAPieChartElement);
