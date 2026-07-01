import { AccordionController } from "./shared/accordion-controller.js";
import { escapeHtml } from "./shared/escape-html.js";

class DGAAccordionItemElement extends HTMLElement {
  static get observedAttributes() {
    return ["title", "size", "open"];
  }

  connectedCallback() {
    if (!this._bodyContent) {
      this._bodyContent = this.innerHTML.trim();
    }
    this._render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  _render() {
    const title = this.getAttribute("title") || "";
    const size = this.getAttribute("size") || "md";
    const isOpen = this.hasAttribute("open");
    const body = this._bodyContent || "";

    this.innerHTML = `
      <div class="dga-acc-item${isOpen ? " dga-acc-item--active" : ""}">
        <button class="dga-acc-header" data-size="${escapeHtml(size)}" aria-expanded="${isOpen ? "true" : "false"}">
          <span>${escapeHtml(title)}</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">${body}</div>
        </div>
      </div>
    `;
  }
}

class DGAAccordionElement extends HTMLElement {
  constructor() {
    super();
    this._controller = null;
  }

  connectedCallback() {
    this.classList.add("dga-acc");
    this._controller?.destroy();
    this._controller = new AccordionController(this);
  }

  disconnectedCallback() {
    this._controller?.destroy();
    this._controller = null;
  }
}

customElements.define("dga-accordion-item", DGAAccordionItemElement);
customElements.define("dga-accordion", DGAAccordionElement);
