import { renderLineChart } from "./shared/line-chart.js";

export default class DGALineChart {
  constructor(element, config = {}) {
    this.chart = element;
    this.config = config;
    this.render();
  }

  render() {
    let rtl = false;
    try {
      rtl = getComputedStyle(this.chart).direction === "rtl";
    } catch {
      /* detached */
    }
    renderLineChart(this.chart, { rtl, ...this.config });
  }

  update(config = {}) {
    this.config = { ...this.config, ...config };
    this.render();
  }
}
