import { escapeHtml } from "./shared/escape-html.js";

const DEFAULT_ASSETS = {
  "flag-src": "saudiFlag.svg",
  "link-icon-src": "link-icon.svg",
  "lock-icon-src": "square-lock-password.svg",
  "logo-src": "DGA-logo-icon.svg",
};

class DGAVerifyBarElement extends HTMLElement {
  static get observedAttributes() {
    return [
      "registration-number",
      "registration-link",
      "domain",
      "assets-base",
      "flag-src",
      "link-icon-src",
      "lock-icon-src",
      "logo-src",
    ];
  }

  constructor() {
    super();
    this.isOpen = false;
    this._btn = null;
    this._content = null;
    this._wrapper = null;
    this._boundToggle = () => (this.isOpen ? this._close() : this._open());
  }

  connectedCallback() {
    this._render();
  }

  disconnectedCallback() {
    this._btn?.removeEventListener("click", this._boundToggle);
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  _render() {
    const regNumber = escapeHtml(
      this.getAttribute("registration-number") || "20250105758",
    );
    const regLinkRaw =
      this.getAttribute("registration-link") ||
      "https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license";
    const regLink = escapeHtml(this._normalizeLink(regLinkRaw));
    const domain = escapeHtml(this.getAttribute("domain") || ".edu.sa");

    const flagSrc = escapeHtml(this._imageSrc("flag-src"));
    const linkIconSrc = escapeHtml(this._imageSrc("link-icon-src"));
    const lockIconSrc = escapeHtml(this._imageSrc("lock-icon-src"));
    const logoSrc = escapeHtml(this._imageSrc("logo-src"));

    this.innerHTML = `
      <div id="dga-verify-bar" class="dga-bg-gray-100 closed">
      <div class="dga-container dga-py-2">
        <div id="dga-verify-bar_bar" class="dga-row">
          <div class="dga-col">
            <div class="dga-d-flex dga-align-items-center dga-gap-2">
              <span><img src="${flagSrc}" alt="علم المملكة العربية السعودية" /></span>
              <span class="dga-text-sm">موقع حكومي رسمي تابع لحكومة المملكة العربية السعودية</span>
              <span>
                <button id="dga-verifyBtn" class="dga-btn dga-btn-subtle dga-text-primary-500" data-verify-toggle aria-expanded="false">
                  كيف تتحقق
                </button>
              </span>
            </div>
          </div>
        </div>

        <div id="dga-verify-bar_content" class="dga-row dga-pt-10 dga-pb-8" data-verify-content style="display: ${this.isOpen ? "flex" : "none"};">
          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="${linkIconSrc}" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  روابط المواقع الالكترونية الرسمية السعودية تنتهي بـ
                  <span class="dga-text-primary-500">${domain}</span>
                </h3>
                <p>
                  جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة
                  العربية السعودية تنتهي بـ ${domain}
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="${lockIconSrc}" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  المواقع الالكترونية الحكومية تستخدم بروتوكول
                  <span class="dga-text-primary-500">HTTPS</span> للتشفير و الأمان.
                </h3>
                <p>
                  المواقع الالكترونية الآمنة في المملكة العربية السعودية تستخدم
                  بروتوكول HTTPS للتشفير.
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-12">
            <div class="dga-d-flex dga-align-items-center dga-gap-3 dga-bg-white dga-text-md dga-rounded-md dga-py-2 dga-px-7">
              <img src="${logoSrc}" alt="شعار هيئة الحكومة الرقمية" />
              مسجل لدى هيئة الحكومة الرقمية برقم :
              <a href="${regLink}" class="dga-link">${regNumber}</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    `;

    this._btn?.removeEventListener("click", this._boundToggle);
    this._wrapper = this.querySelector("#dga-verify-bar");
    this._btn = this.querySelector("[data-verify-toggle]");
    this._content = this.querySelector("[data-verify-content]");
    this._btn?.addEventListener("click", this._boundToggle);
  }

  _imageSrc(attributeName) {
    const override = this.getAttribute(attributeName);
    if (override) return override;

    const defaultFile = DEFAULT_ASSETS[attributeName];
    const base = this.getAttribute("assets-base") || "/";
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;

    return `${normalizedBase}${defaultFile}`;
  }

  _open() {
    this._content.style.display = "flex";
    this.isOpen = true;
    this._btn?.setAttribute("aria-expanded", "true");
    this._wrapper?.classList.replace("closed", "opend");
  }

  _close() {
    this._content.style.display = "none";
    this.isOpen = false;
    this._btn?.setAttribute("aria-expanded", "false");
    this._wrapper?.classList.replace("opend", "closed");
  }

  _normalizeLink(value) {
    try {
      return new URL(value, window.location.href).href;
    } catch {
      return "#";
    }
  }
}

customElements.define("dga-verify-bar", DGAVerifyBarElement);
