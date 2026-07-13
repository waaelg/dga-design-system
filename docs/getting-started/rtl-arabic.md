# RTL & Arabic

The DGA design system targets Saudi government websites. Arabic and RTL are first-class.

---

## HTML setup

```html
<html lang="ar" dir="rtl">
```

| Attribute | Value | Purpose |
|-----------|-------|---------|
| `lang` | `ar` | Arabic language |
| `dir` | `rtl` | Right-to-left layout |

For bilingual pages, set `dir` on a wrapper instead of `<html>`:

```html
<div dir="rtl" lang="ar">
  <!-- Arabic content -->
</div>
```

---

## Font

**IBM Plex Sans Arabic** loads automatically with the stylesheet:

```scss
body {
  font-family: "IBM Plex Sans Arabic", sans-serif;
}
```

No extra font import is required when using `@waaelg/dga-design-system/style.css`.

---

## Logical properties

Components use logical CSS where possible (`border-inline-start`, `text-align: start`) so they work in both RTL and LTR.

| Physical | Logical (preferred) |
|----------|---------------------|
| `dga-text-left` | `dga-text-start` |
| `dga-text-right` | `dga-text-end` |
| `dga-pl-*` | works; axis follows direction |

---

## Button icons

Use `dga-btn__icon` for icons inside buttons. In RTL, icon placement follows flex direction.

```html
<button class="dga-btn dga-btn-primary dga-btn-md">
  الاجراء الرئيسي
  <img class="dga-btn__icon" src="arrow.svg" alt="" />
</button>
```

---

## Grid and flex

Grid and flex utilities are direction-aware when using `start` / `end`:

```html
<div class="dga-d-flex dga-justify-content-start dga-gap-4">
  <button class="dga-btn dga-btn-primary">زر</button>
</div>
```

---

## Verify bar

The Saudi government verification bar is Arabic by default. Use `<dga-verify-bar>` (recommended) or plain HTML + `DGAVerifyBar` — see [Verify bar](../components/verify-bar.md).

---

## Related

- [Installation](./installation.md)
- [Typography](../foundations/typography.md)
- [Grid](../foundations/grid.md)
