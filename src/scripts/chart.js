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
    renderPieChart(this.chart, this.data, { hole });
  }

  generateGradient() {
    return generateChartGradient(this.data);
  }

  generateLabels() {
    return generateChartLabelsHtml(this.data);
  }
}
