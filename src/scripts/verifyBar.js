export default class DGAVerifyBar {
  constructor(options = {}) {
    this.isOpen = false;
    this.verifyBar = document.getElementById("dga-verify-bar");
    this.menu = options.menu || null; // Fixed typo: was "mneu"

    this.btn = document.getElementById("dga-verifyBtn");
    this.content = document.getElementById("dga-verify-bar_content");
    this.init();
  }

  init() {
    this.btn.addEventListener("click", () => {
      if (this.isOpen) {
        this.closePanel();
      } else {
        this.openPanel();
      }
    });
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
  }

  closePanel() {
    this.content.style.display = "none";
    this.isOpen = false;
    this.verifyBar.classList.add("closed");
    this.verifyBar.classList.remove("opend");
  }
}
