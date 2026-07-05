# Navbar

Responsive navigation with dropdown menus and mobile toggle.

**Source:** `src/styles/components/navbar.scss`  
**Demo:** `index.html` (header)  
**JavaScript required:** Yes — `DGAMenuDropDown`

---

## HTML structure

```html
<div dir="rtl">
  <nav class="dga-navbar dga-px-3" role="navigation" aria-label="Main navigation">
    <a class="dga-navbar-brand" href="#">
      <img src="/logo.svg" alt="Site name" />
    </a>

    <ul class="dga-menu">
      <li>
        <a class="dga-menu-item" href="#">Link</a>
      </li>
      <li>
        <a class="dga-menu-item dga-has-dropdown" href="#" role="button"
           aria-expanded="false" aria-haspopup="true">
          Home
        </a>
        <div class="dga-dropdown">
          <div class="dga-dropdown-content">
            <ul>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

    <button class="dga-navbar-toggler" type="button" aria-label="Open menu" aria-expanded="false">
      <!-- hamburger icon -->
    </button>
  </nav>
</div>
```

<Demo title="Preview" client>

<NavbarDemo />

</Demo>

> **Note:** The navbar is designed for **`dir="rtl"`** (Saudi government sites). Dropdown chevrons and menu layout follow RTL. Initialize `DGAMenuDropDown` for interactive dropdowns.

---

## Classes

| Class | Purpose |
|-------|---------|
| `dga-navbar` | Root nav container (72px height) |
| `dga-navbar-brand` | Logo / brand link |
| `dga-menu` | Horizontal menu list |
| `dga-menu-item` | Nav link |
| `dga-has-dropdown` | Item with dropdown chevron |
| `dga-menu-item-with-icon` | Item with trailing icon |
| `dga-menu-icon` | Icon inside menu item |
| `dga-dropdown` | Dropdown panel |
| `dga-dropdown-content` | Dropdown inner content |
| `dga-dropdwon-title` | Section title in dropdown (note spelling in source) |
| `dga-navbar-toggler` | Mobile menu button |

---

## JavaScript

```js
import { DGAMenuDropDown, DGAVerifyBar } from '@waaelg/dga-design-system'

const menu = new DGAMenuDropDown({
  navbar: document.querySelector('.dga-navbar'),
})

// Optional: coordinate with verify bar
const verifyBar = new DGAVerifyBar()
verifyBar.menu = menu
menu.verifyBar = verifyBar
```

Handles desktop dropdowns, mobile slide-out menu, keyboard, and resize.

---

## Accessibility

- `role="navigation"` and `aria-label` on `<nav>`
- Dropdown triggers: `role="button"`, `aria-expanded`, `aria-haspopup`
- Toggler: `aria-label`, update `aria-expanded` when open

---

## Related

- [Verify bar](./verify-bar.md)
- [JavaScript API](../getting-started/javascript-api.md)
