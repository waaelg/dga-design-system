import {
  COPY_ICON_SVG,
  copyText,
  markCopyButtonCopied,
} from "./shared/copy-text.js";
import { escapeHtml } from "./shared/escape-html.js";

class DGACodeSnippetElement extends HTMLElement {
  static get observedAttributes() {
    return ["code", "multiline"];
  }

  constructor() {
    super();
    this._codeContent = null;
    this._boundCopy = this._handleCopy.bind(this);
  }

  connectedCallback() {
    if (this._codeContent == null) {
      this._codeContent =
        this.getAttribute("code")?.trim() || this.textContent?.trim() || "";
    }
    this._render();
  }

  disconnectedCallback() {
    this._copyButton?.removeEventListener("click", this._boundCopy);
  }

  attributeChangedCallback() {
    // On upgrade, attributeChangedCallback can fire before connectedCallback.
    // Don't render until the slotted code has been captured, otherwise
    // _render() would overwrite it (e.g. slotted code + a `multiline` attr).
    if (this._codeContent == null) return;
    if (this.isConnected) this._render();
  }

  _render() {
    const isMultiline = this.hasAttribute("multiline");
    const code =
      this.getAttribute("code")?.trim() || this._codeContent || "";

    if (isMultiline) {
      this.innerHTML = `
        <div class="dga-code-snippet-multiline">
          <div class="dga-code-snippet-multiline__body">
            <pre class="dga-code-snippet-multiline__code"><code>${escapeHtml(code)}</code></pre>
            <button type="button" class="dga-code-snippet-multiline__copy" aria-label="Copy code" data-copied="false">
              ${COPY_ICON_SVG}
            </button>
          </div>
        </div>
      `;
      this._copyButton = this.querySelector(".dga-code-snippet-multiline__copy");
    } else {
      this.innerHTML = `
        <div class="dga-code-snippet-inline">
          <div class="dga-code-snippet-inline__content">${escapeHtml(code)}</div>
          <button type="button" class="dga-code-snippet-inline__copy" aria-label="Copy code" data-copied="false">
            ${COPY_ICON_SVG}
          </button>
        </div>
      `;
      this._copyButton = this.querySelector(".dga-code-snippet-inline__copy");
    }

    this._copyButton?.removeEventListener("click", this._boundCopy);
    this._copyButton?.addEventListener("click", this._boundCopy);
  }

  async _handleCopy() {
    const code = this.getAttribute("code")?.trim() || this._codeContent || "";
    if (!code || !this._copyButton) return;

    const copied = await copyText(code);
    if (!copied) return;

    await markCopyButtonCopied(this._copyButton);
    this.dispatchEvent(
      new CustomEvent("dga-code-copy", { bubbles: true, composed: true })
    );
  }
}

customElements.define("dga-code-snippet", DGACodeSnippetElement);
