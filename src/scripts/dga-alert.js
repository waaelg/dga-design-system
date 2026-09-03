import { escapeHtml } from "./shared/escape-html.js";

const DEFAULT_VARIANT = "info-color";

class DGAAlertElement extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "title", "dismissible"];
  }

  constructor() {
    super();
    this._bodyContent = null;
    this._boundDismiss = this._handleDismiss.bind(this);
  }

  connectedCallback() {
    if (this._bodyContent == null) {
      this._bodyContent = this.innerHTML.trim();
    }
    this._render();
  }

  disconnectedCallback() {
    this._closeButton?.removeEventListener("click", this._boundDismiss);
  }

  attributeChangedCallback() {
    // On upgrade, attributeChangedCallback can fire before connectedCallback.
    // Don't render until the original slotted content has been captured,
    // otherwise _render() would overwrite it with an empty body.
    if (this._bodyContent == null) return;
    if (this.isConnected) this._render();
  }

  _render() {
    const variant = this.getAttribute("variant") || DEFAULT_VARIANT;
    const title = this.getAttribute("title") || "";
    const dismissible = this.hasAttribute("dismissible");
    const body = this._bodyContent || "";

    this.classList.add("dga-alert");
    this.setAttribute("data-variant", variant);

    const titleHtml = title
      ? `<h4 class="dga-alert-title">${escapeHtml(title)}</h4>`
      : "";

    const closeHtml = dismissible
      ? `<button class="dga-alert-close" type="button" data-alert-close aria-label="Dismiss alert">×</button>`
      : "";

    this.innerHTML = `
      <span class="dga-alert-icon" aria-hidden="true"></span>
      <div class="dga-alert-content">
        ${titleHtml}
        <div class="dga-alert-body">${body}</div>
      </div>
      ${closeHtml}
    `;

    this._closeButton = this.querySelector("[data-alert-close]");
    this._closeButton?.removeEventListener("click", this._boundDismiss);
    this._closeButton?.addEventListener("click", this._boundDismiss);
  }

  _handleDismiss() {
    this.style.display = "none";
    this.dispatchEvent(
      new CustomEvent("dga-alert-dismiss", { bubbles: true, composed: true })
    );
  }
}

customElements.define("dga-alert", DGAAlertElement);
