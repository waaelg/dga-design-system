import { inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Demo from "./components/Demo.vue";
import DgaPieChart from "./components/DgaPieChart.vue";
import DgaVerifyBar from "./components/DgaVerifyBar.vue";
import LegacyAccordionDemo from "./components/LegacyAccordionDemo.vue";
import NavbarDemo from "./components/NavbarDemo.vue";
import ColorPalette from "./components/ColorPalette.vue";
import "@ds/style.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("Demo", Demo);
    app.component("DgaPieChart", DgaPieChart);
    app.component("DgaVerifyBar", DgaVerifyBar);
    app.component("LegacyAccordionDemo", LegacyAccordionDemo);
    app.component("NavbarDemo", NavbarDemo);
    app.component("ColorPalette", ColorPalette);

    if (inBrowser) {
      router.onAfterRouteChange = (to) => {
        if (typeof window.gtag === "function") {
          window.gtag("config", "G-CDT8FK2DL2", {
            page_path: to,
          });
        }
      };
    }
  },
};
