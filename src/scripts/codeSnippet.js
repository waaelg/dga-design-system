export default class DGACodeSnippet {
  constructor(root = document) {
    this.root = root;
    this.handleCopyClick = this.handleCopyClick.bind(this);
    this.init();
  }

  init() {
    this.root.addEventListener("click", this.handleCopyClick);
  }

  async handleCopyClick(event) {
    const copyButton = event.target.closest(
      ".dga-code-snippet-inline__copy, .dga-code-snippet-multiline__copy"
    );
    if (!copyButton) return;

    const inlineSnippet = copyButton.closest(".dga-code-snippet-inline");
    const multilineSnippet = copyButton.closest(".dga-code-snippet-multiline");

    let textToCopy = "";
    if (inlineSnippet) {
      const codeElement = inlineSnippet.querySelector(".dga-code-snippet-inline__content");
      textToCopy = codeElement?.textContent?.trim() || "";
    } else if (multilineSnippet) {
      const codeElement = multilineSnippet.querySelector(".dga-code-snippet-multiline__code code");
      textToCopy = codeElement?.textContent || "";
    }

    if (!textToCopy) return;

    const copied = await this.copyText(textToCopy);
    if (!copied) return;

    const previousLabel = copyButton.getAttribute("aria-label") || "Copy code";
    copyButton.setAttribute("aria-label", "Copied");
    copyButton.setAttribute("data-copied", "true");

    window.setTimeout(() => {
      copyButton.setAttribute("aria-label", previousLabel);
      copyButton.setAttribute("data-copied", "false");
    }, 1200);
  }

  async copyText(text) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_error) {
      // Fallback below for restricted clipboard environments.
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  }

  destroy() {
    this.root.removeEventListener("click", this.handleCopyClick);
  }
}
