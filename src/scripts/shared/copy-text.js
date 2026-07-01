export async function copyText(text) {
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

export const COPY_ICON_SVG = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <rect x="9" y="9" width="11" height="11" rx="2" stroke-width="1.75"></rect>
  <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" stroke-width="1.75" stroke-linecap="round"></path>
</svg>`;

export async function markCopyButtonCopied(copyButton, resetMs = 1200) {
  const previousLabel = copyButton.getAttribute("aria-label") || "Copy code";
  copyButton.setAttribute("aria-label", "Copied");
  copyButton.setAttribute("data-copied", "true");

  window.setTimeout(() => {
    copyButton.setAttribute("aria-label", previousLabel);
    copyButton.setAttribute("data-copied", "false");
  }, resetMs);
}
