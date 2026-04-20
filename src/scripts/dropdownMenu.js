class DGAMenuDropdown {
  constructor(options = {}) {
    this.navbar = options.navbar || document.querySelector(".dga-navbar");
    this.verifyBar = options.verifyBar || null;

    if (!this.navbar) {
      console.warn("DGA Navbar elements not found");
      return;
    }

    this.navbarTop = this.navbar.getBoundingClientRect().top + window.scrollY;
    this.navbarHeight = this.navbar.getBoundingClientRect().height;
    this.menu = this.navbar.querySelector(".dga-menu");
    this.toggler = this.navbar.querySelector(".dga-navbar-toggler");
    this.menuItems = this.navbar.querySelectorAll(".dga-menu-item.dga-has-dropdown");

    if (!this.menu) {
      console.warn("DGA Menu element not found");
      return;
    }

    this.boundToggleDropdown = (e) => this.toggleDropdown(e);
    this.boundToggleMobileMenu = (e) => this.toggleMobileMenu(e);
    this.boundCloseAllDropdowns = (e) => this.closeAllDropdowns(e);
    this.boundHandleResize = () => this.handleResize();
    this.boundHandleKeyboard = (e) => this.handleKeyboard(e);

    this.init();
  }

  get isActive() {
    return this.isMobileMenuOpen() || this.isNormalDropdownOpen();
  }

  init() {
    this.handleResize();
    this.bindEvents();
  }

  bindEvents() {
    // Dropdown menu items
    this.menuItems.forEach((item) => {
      item.addEventListener("click", this.boundToggleDropdown);
    });

    // Mobile menu toggler
    this.toggler?.addEventListener("click", this.boundToggleMobileMenu);

    // Close dropdowns when clicking outside
    document.addEventListener("click", this.boundCloseAllDropdowns);

    // Handle window resize
    window.addEventListener("resize", this.boundHandleResize);

    // Keyboard accessibility
    this.menuItems.forEach((item) => {
      item.addEventListener("keydown", this.boundHandleKeyboard);
    });
  }

  toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    // Close verify bar when opening menu
    if (this.verifyBar && this.verifyBar.isOpen) {
      this.verifyBar.closePanel();
    }

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

      listItem.querySelector(".dga-dropdown").style.top = `${this.navbarHeight + this.navbarTop
        }px`;
    }
  }

  toggleMobileMenu(e) {
    e.stopPropagation();

    // Close verify bar when opening menu
    if (this.verifyBar && this.verifyBar.isOpen) {
      this.verifyBar.closePanel();
    }

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

  // Public method to close menu programmatically (without event)
  closeMenu() {
    // Close all dropdowns
    this.closeAllDropdowns();

    // Close mobile menu if open
    if (this.isMobileMenuOpen()) {
      this.menu.classList.remove("dga-menu-open");
      document.body.classList.remove("no-scroll");
      this.menu.style.height = `0px`;
      this.toggler.setAttribute("aria-expanded", "false");
      this.toggler.setAttribute("aria-label", "Open menu");
    }
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
      item.removeEventListener("click", this.boundToggleDropdown);
      item.removeEventListener("keydown", this.boundHandleKeyboard);
    });

    this.toggler?.removeEventListener("click", this.boundToggleMobileMenu);
    document.removeEventListener("click", this.boundCloseAllDropdowns);
    window.removeEventListener("resize", this.boundHandleResize);
  }

  isMobileMenuOpen() {
    return this.menu?.classList.contains("dga-menu-open");
  }

  isNormalDropdownOpen() {
    return this.navbar.querySelectorAll(".dga-menu > li.active").length > 0;
  }
}

export default DGAMenuDropdown;
