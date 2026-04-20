export default class DGAAlert {
  constructor(root = document) {
    this.root = root;
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.init();
  }

  init() {
    this.root.addEventListener("click", this.handleCloseClick);
  }

  handleCloseClick(event) {
    const closeButton = event.target.closest("[data-alert-close]");
    if (!closeButton) {
      return;
    }

    const alert = closeButton.closest(".dga-alert");
    if (alert) {
      alert.style.display = "none";
    }
  }

  destroy() {
    this.root.removeEventListener("click", this.handleCloseClick);
  }
}
