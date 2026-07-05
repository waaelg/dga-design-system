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

<Demo title="Preview">

<div class="dga-breadcrumb">
  <a class="dga-breadcrumb-item" href="#">Home</a>
  <a class="dga-breadcrumb-item" href="#">About</a>
  <a class="dga-breadcrumb-item" href="#" data-current="true">Our vision</a>
</div>

</Demo>

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
<div class="dga-breadcrumb">
  <a class="dga-breadcrumb-item" href="#">Home</a>
  <a class="dga-breadcrumb-item" href="#">About</a>
  <a class="dga-breadcrumb-item" data-current="true">Contact</a>
</div>
```

<Demo title="Preview">

<div class="dga-breadcrumb">
  <a class="dga-breadcrumb-item" href="#">Home</a>
  <a class="dga-breadcrumb-item" href="#">About</a>
  <a class="dga-breadcrumb-item" data-current="true">Contact</a>
</div>

</Demo>

---

## Accessibility

- Use `<nav aria-label="Breadcrumb">` wrapper in production
- Current page: `aria-current="page"` on the last link
- Ensure links are keyboard focusable

---

## Related

- [Link](./link.md)
