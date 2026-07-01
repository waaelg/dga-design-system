# Tag

Compact labels for status, categories, and metadata.

**Source:** `src/styles/components/tag.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## Basic tag

```html
<span class="dga-tag">تاق افتراضي</span>
```

Use `<span class="dga-tag">` — includes a default info icon on the left (LTR) or right (RTL).

---

## Variants

| `data-variant` | Color |
|----------------|-------|
| (default) | Gray |
| `success` | Green |
| `info` | Blue |
| `warning` | Orange |

```html
<span class="dga-tag" data-variant="success">تاق نجاح</span>
<span class="dga-tag" data-variant="info">تاق معلومة</span>
<span class="dga-tag" data-variant="warning">تاق تحذير</span>
```

---

## Modifiers

| Attribute | Effect |
|-----------|--------|
| `data-outline="true"` | Outlined border |
| `data-rounded="true"` | Pill shape |
| `data-icononly="true"` | Circle icon only (no text) |

```html
<span class="dga-tag" data-outline="true">تاق بحدود</span>
<span class="dga-tag" data-outline="true" data-rounded="true">تاق مدور بحدود</span>
<span class="dga-tag" data-variant="warning" data-rounded="true" data-icononly="true"></span>
```

---

## Combined example

```html
<div class="dga-d-flex dga-flex-wrap dga-gap-2 dga-align-items-center">
  <span class="dga-tag" data-outline="true">تاق بحدود</span>
  <span class="dga-tag">تاق افتراضي</span>
  <span class="dga-tag" data-variant="success">تاق نجاح</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span class="dga-tag" data-variant="info" data-rounded="true">تاق معلومة</span>
</div>
```

---

## RTL

Icon position flips with `[dir="rtl"]` on parent or `dir="rtl"` on the tag.

---

## Related

- [Divider](./divider.md)
