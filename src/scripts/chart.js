import {
  generateChartGradient,
  generateChartLabelsHtml,
  renderPieChart,
} from "./shared/pie-chart.js";

export default class DGAChart {
  constructor(element, data = []) {
    this.chart = element;
    this.data = data;
    this.init();
  }

  init() {
    const hole = this.chart.getAttribute("data-hole") === "true";
    const styleColor =
      this.chart.getAttribute("data-style-color") === "color"
        ? "color"
        : "brand";
    renderPieChart(this.chart, this.data, { hole, styleColor });
  }

  generateGradient() {
    return generateChartGradient(this.data);
  }

  generateLabels() {
    return generateChartLabelsHtml(this.data);
  }
}
