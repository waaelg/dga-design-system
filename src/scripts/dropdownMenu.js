class DGAMenuDropdown {
  constructor(options = {}) {
    this.navbar = options.navbar || document.querySelector(".dga-navbar");
    this.navbarTop = this.navbar.getBoundingClientRect().top + window.scrollY;
    this.navbarHeight = this.navbar.getBoundingClientRect().height;
    this.menu = this.navbar?.querySelector(".dga-menu");
    this.toggler = this.navbar?.querySelector(".dga-navbar-toggler");
    this.menuItems = this.navbar?.querySelectorAll(
      ".dga-menu-item.dga-has-dropdown"
    );

    if (!this.navbar || !this.menu) {
      console.warn("DGA Navbar elements not found");
      return;
    }

    this.init();
  }

  init() {
    this.handleResize();
    this.bindEvents();
  }

  bindEvents() {
    // Dropdown menu items
    this.menuItems.forEach((item) => {
      item.addEventListener("click", (e) => this.toggleDropdown(e));
    });

    // Mobile menu toggler
    this.toggler?.addEventListener("click", (e) => this.toggleMobileMenu(e));

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => this.closeAllDropdowns(e));

    // Handle window resize
    window.addEventListener("resize", () => this.handleResize());

    // Keyboard accessibility
    this.menuItems.forEach((item) => {
      item.addEventListener("keydown", (e) => this.handleKeyboard(e));
    });
  }

  toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    const menuItem = e.currentTarget;
    const listItem = menuItem.parentElement;
    const isActive = listItem.classList.contains("active");

    // Close all other dropdowns
    this.closeAllDropdowns();

    // Toggle current dropdown
    if (!isActive) {
      listItem.classList.add("active");
      menuItem.classList.add("dga-menu-item-selected");
      menuItem.setAttribute("aria-expanded", "true");
    }
  }

  toggleMobileMenu(e) {
    e.stopPropagation();

    this.menu.classList.toggle("dga-menu-open");
    if (this.menu.classList.contains("dga-menu-open")) {
      document.body.classList.add("no-scroll");
      this.menu.style.height = `calc(100vh - ${this.navbarHeight}px - ${this.navbarTop}px)`;
    } else {
      document.body.classList.remove("no-scroll");
      this.menu.style.height = `0px`;
    }
    this.menu.style.top = `${this.navbarTop + this.navbarHeight}px`;

    const isOpen = this.menu.classList.contains("dga-menu-open");
    this.toggler.setAttribute("aria-expanded", isOpen);
    this.toggler.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  }

  closeAllDropdowns(e) {
    // Don't close if clicking inside dropdown content
    if (e && e.target.closest(".dga-dropdown-content")) {
      return;
    }

    const activeItems = this.navbar.querySelectorAll(".dga-menu > li.active");
    activeItems.forEach((item) => {
      item.classList.remove("active");
      const menuItem = item.querySelector(".dga-menu-item");
      menuItem?.classList.remove("dga-menu-item-selected");
      menuItem?.setAttribute("aria-expanded", "false");
    });
  }

  handleKeyboard(e) {
    // Close dropdown on Escape
    if (e.key === "Escape") {
      this.closeAllDropdowns();
      e.currentTarget.focus();
    }

    // Toggle on Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.toggleDropdown(e);
    }
  }

  handleResize() {
    const width = window.innerWidth;

    // Remove size classes
    document.body.classList.remove(
      "size_desktop",
      "size_tablet",
      "size_mobile"
    );

    // Add appropriate size class
    if (width > 769) {
      document.body.classList.add("size_desktop");
      this.closeAllDropdowns();
      this.menu.classList.remove("dga-menu-open");
      document.body.classList.remove("no-scroll");
    } else if (width <= 769 && width > 375) {
      document.body.classList.add("size_tablet");
    } else {
      document.body.classList.add("size_mobile");
    }
  }

  // Public method to destroy the component
  destroy() {
    this.menuItems.forEach((item) => {
      item.removeEventListener("click", this.toggleDropdown);
      item.removeEventListener("keydown", this.handleKeyboard);
    });

    this.toggler?.removeEventListener("click", this.toggleMobileMenu);
    document.removeEventListener("click", this.closeAllDropdowns);
    window.removeEventListener("resize", this.handleResize);
  }
}

export default DGAMenuDropdown;
