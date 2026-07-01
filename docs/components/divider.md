# Divider

Horizontal or vertical separator lines.

**Source:** `src/styles/components/divider.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## Horizontal divider

```html
<div class="dga-divider" data-variant="primary" data-direction="h"></div>
```

Default is horizontal if `data-direction` is omitted (height 1px, width 192px max 90%).

---

## Vertical divider

```html
<div class="dga-divider" data-variant="primary" data-direction="v"></div>
```

Width 1px, height 192px max 90%. Use between inline items (e.g. tags).

---

## Variants

| `data-variant` | Color |
|----------------|-------|
| `secondary` | Gray (`$dga-gray-300`) |
| `primary` | Saudi green (`$dga-sa-600`) |

---

## Example with tags

```html
<div class="dga-d-flex dga-gap-2 dga-align-items-center">
  <span class="dga-tag">Tag 1</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span class="dga-tag">Tag 2</span>
</div>
```

---

## Related

- [Tag](./tag.md)
