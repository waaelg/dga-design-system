import "./styles/main.scss";
import DGAAccordion from "./scripts/accordion.js";
import DGAAlert from "./scripts/alert.js";
import DGAChart from "./scripts/chart.js";
import DGABarChart from "./scripts/chart-bar.js";
import DGALineChart from "./scripts/chart-line.js";
import DGACodeSnippet from "./scripts/codeSnippet.js";
import DGAMenuDropDown from "./scripts/dropdownMenu.js";
import DGAVerifyBar from "./scripts/verifyBar.js";
import { DGA_WEB_COMPONENTS_REGISTERED } from "./scripts/register-web-components.js";

// Keep web component registration in the published bundle.
void DGA_WEB_COMPONENTS_REGISTERED;

// Export components
export { DGAAccordion };
export { DGAAlert };
export { DGAChart };
export { DGABarChart };
export { DGALineChart };
export { DGACodeSnippet };
export { DGAMenuDropDown };
export { DGAVerifyBar };
export { DGA_WEB_COMPONENTS_REGISTERED };
