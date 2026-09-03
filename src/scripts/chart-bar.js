import { renderBarChart } from "./shared/bar-chart.js";

export default class DGABarChart {
  constructor(element, config = {}) {
    this.chart = element;
    this.config = config;
    this.render();
  }

  render() {
    renderBarChart(this.chart, this.config);
  }

  update(config = {}) {
    this.config = { ...this.config, ...config };
    this.render();
  }
}
