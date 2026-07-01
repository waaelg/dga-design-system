export class AccordionController {
  constructor(root) {
    this.root = root;
    this.handleClick = this.handleClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.init();
  }

  init() {
    this.root.addEventListener("click", this.handleClick);
    this.root.addEventListener("keydown", this.handleKeydown);
  }

  handleClick(event) {
    const header = event.target.closest(".dga-acc-header");
    if (header && this.root.contains(header)) {
      this.toggle(header);
    }
  }

  handleKeydown(event) {
    const header = event.target.closest(".dga-acc-header");
    if (!header || !this.root.contains(header)) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.toggle(header);
    }
  }

  toggle(header) {
    const item = header.parentElement;
    if (!item) return;

    if (item.classList.contains("dga-acc-item--active")) {
      this.close(item);
    } else {
      this.open(item);
    }
  }

  open(item) {
    item.classList.add("dga-acc-item--active");
    item.querySelector(".dga-acc-header")?.setAttribute("aria-expanded", "true");
  }

  close(item) {
    item.classList.remove("dga-acc-item--active");
    item.querySelector(".dga-acc-header")?.setAttribute("aria-expanded", "false");
  }

  closeAll() {
    this.root.querySelectorAll(".dga-acc-item").forEach((item) => {
      this.close(item);
    });
  }

  destroy() {
    this.root.removeEventListener("click", this.handleClick);
    this.root.removeEventListener("keydown", this.handleKeydown);
  }
}
