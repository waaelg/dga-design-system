import { copyText, markCopyButtonCopied } from "./shared/copy-text.js";

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
      const codeElement = inlineSnippet.querySelector(
        ".dga-code-snippet-inline__content"
      );
      textToCopy = codeElement?.textContent?.trim() || "";
    } else if (multilineSnippet) {
      const codeElement = multilineSnippet.querySelector(
        ".dga-code-snippet-multiline__code code"
      );
      textToCopy = codeElement?.textContent || "";
    }

    if (!textToCopy) return;

    const copied = await copyText(textToCopy);
    if (!copied) return;

    await markCopyButtonCopied(copyButton);
  }

  destroy() {
    this.root.removeEventListener("click", this.handleCopyClick);
  }
}
