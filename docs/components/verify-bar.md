# Verify Bar

Saudi government official site verification banner.

**Source:** `src/styles/components/verifyBar.scss`, `src/scripts/verifyBar.js`, `src/scripts/dga-verify-bar.js`  
**Demo:** `verify-bar.html`, `index.html`  
**JavaScript:** Optional — web component or `DGAVerifyBar` class

---

## Option 1: Web component (recommended)

Import the package once — registers `<dga-verify-bar>` automatically:

```html
<dga-verify-bar></dga-verify-bar>
```

### Custom attributes

```html
<dga-verify-bar
  domain=".edu.sa"
  registration-number="20250105758"
  registration-link="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license">
</dga-verify-bar>
```

| Attribute | Default | Description |
|-----------|---------|-------------|
| `domain` | `.edu.sa` | Official domain suffix shown in copy |
| `registration-number` | `20250105758` | DGA registration number |
| `registration-link` | DGA Raqmi URL | Link to platform license |

No manual JS init required when using the web component.

---

## Option 2: Legacy markup + DGAVerifyBar

Requires fixed element IDs:

- `#dga-verify-bar`
- `#dga-verifyBtn`
- `#dga-verify-bar_content`

```js
import { DGAVerifyBar, DGAMenuDropDown } from '@waaelg/dga-design-on-sass'

const verifyBar = new DGAVerifyBar()
const menu = new DGAMenuDropDown()
verifyBar.menu = menu
menu.verifyBar = verifyBar
```

Use this when integrating with the legacy HTML structure in `index.html`.

---

## Styling

- Background: `dga-bg-gray-100`
- Toggle button: `dga-btn dga-btn-subtle dga-text-primary-500`
- Expandable panel with domain and HTTPS verification info
- Arabic copy by default

---

## Assets

The web component references SVG assets (`saudiFlag.svg`, `link-icon.svg`, etc.). Serve them from your app `public` folder or configure paths in your build.

---

## Related

- [Navbar](./navbar.md) — coordinate open/close with mobile menu
- [JavaScript API](../getting-started/javascript-api.md)
- [RTL & Arabic](../getting-started/rtl-arabic.md)
