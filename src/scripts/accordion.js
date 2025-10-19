export default class Accordion {
  constructor(element) {
    this.accordion = element;
    this.headers = this.accordion.querySelectorAll(".dga-acc-header");
    this.init();
  }

  init() {
    // Event delegation: add listener to accordion container
    this.accordion.addEventListener("click", (e) => {
      const header = e.target.closest(".dga-acc-header");
      if (header) {
        this.toggle(header);
      }
    });

    // Keyboard support
    this.headers.forEach((header) => {
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggle(header);
        }
      });
    });
  }

  toggle(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains("dga-acc-item--active");

    // Optional: Close other items (comment out for multiple open)
    // this.closeAll();

    // Toggle current item
    if (isActive) {
      this.close(item);
    } else {
      this.open(item);
    }
  }

  open(item) {
    item.classList.add("dga-acc-item--active");
    const header = item.querySelector(".dga-acc-header");
    header.setAttribute("aria-expanded", "true");
  }

  close(item) {
    item.classList.remove("dga-acc-item--active");
    const header = item.querySelector(".dga-acc-header");
    header.setAttribute("aria-expanded", "false");
  }

  closeAll() {
    this.accordion.querySelectorAll(".dga-acc-item").forEach((item) => {
      this.close(item);
    });
  }
}
