# Breadcrumb

Navigation trail showing the current page hierarchy.

**Source:** `src/styles/components/breadcrumb.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## HTML

```html
<div class="dga-breadcrumb">
  <a class="dga-breadcrumb-item" href="/">Home</a>
  <a class="dga-breadcrumb-item" href="/about">About</a>
  <a class="dga-breadcrumb-item" href="/vision" data-current="true">Our vision</a>
</div>
```

---

## Classes

| Class | Purpose |
|-------|---------|
| `dga-breadcrumb` | Flex container |
| `dga-breadcrumb-item` | Each crumb link |
| `data-current="true"` | Current (last) item — muted color |

---

## RTL

Separator chevron flips automatically when `dir="rtl"` is on a parent:

```html
<div class="dga-breadcrumb" dir="rtl">
  <a class="dga-breadcrumb-item" href="#">الرئيسية</a>
  <a class="dga-breadcrumb-item" data-current="true">رؤيتنا</a>
</div>
```

---

## Accessibility

- Use `<nav aria-label="Breadcrumb">` wrapper in production
- Current page: `aria-current="page"` on the last link
- Ensure links are keyboard focusable

---

## Related

- [Link](./link.md)
