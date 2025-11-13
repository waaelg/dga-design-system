export default class DGAVerifyBar {
  constructor() {
    this.open = false;
    this.verifyBar = document.getElementById("dga-verify-bar");
    this.btn = document.getElementById("dga-verifyBtn");
    this.content = document.getElementById("dga-verify-bar_content");
    this.init();
  }

  init() {
    this.btn.addEventListener("click", () => {
      if (this.open) {
        this.content.style.display = "none";
        this.open = false;
        this.verifyBar.classList.add("closed");
        this.verifyBar.classList.remove("opend");
      } else {
        this.content.style.display = "flex";
        this.open = true;
        this.verifyBar.classList.add("opend");
        this.verifyBar.classList.remove("closed");
      }
    });
  }
}
