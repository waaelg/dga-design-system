export default class DGAVerifyBar {
  constructor(options = {}) {
    this.isOpen = false;
    this.verifyBar = document.getElementById("dga-verify-bar");
    this.menu = options.menu || null; // Fixed typo: was "mneu"

    this.btn = document.getElementById("dga-verifyBtn");
    this.content = document.getElementById("dga-verify-bar_content");
    this.boundToggle = () => {
      if (this.isOpen) {
        this.closePanel();
      } else {
        this.openPanel();
      }
    };

    if (!this.verifyBar || !this.btn || !this.content) {
      console.warn("DGA Verify Bar elements not found");
      return;
    }

    this.init();
  }

  init() {
    this.btn.addEventListener("click", this.boundToggle);
  }

  openPanel() {
    // Close menu if it's open
    if (this.menu && this.menu.isActive) {
      this.menu.closeMenu(); // Use the new public method
    }

    this.content.style.display = "flex";
    this.isOpen = true;
    this.verifyBar.classList.add("opend");
    this.verifyBar.classList.remove("closed");
    this.btn?.setAttribute("aria-expanded", "true");
  }

  closePanel() {
    this.content.style.display = "none";
    this.isOpen = false;
    this.verifyBar.classList.add("closed");
    this.verifyBar.classList.remove("opend");
    this.btn?.setAttribute("aria-expanded", "false");
  }

  destroy() {
    this.btn?.removeEventListener("click", this.boundToggle);
  }
}
