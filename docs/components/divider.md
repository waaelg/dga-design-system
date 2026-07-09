# Divider

Horizontal or vertical separator lines.

**Source:** `src/styles/components/divider.scss`  
**Demo:** VitePress live preview on this page  
**JavaScript required:** No

---

## Horizontal divider

```html
<div class="dga-divider" data-variant="primary" data-direction="h"></div>
```

<Demo title="Preview">

<div class="dga-divider" data-variant="primary" data-direction="h"></div>

</Demo>

Default is horizontal if `data-direction` is omitted (height 1px, width 192px max 90%).

---

## Vertical divider

```html
<div class="dga-divider" data-variant="primary" data-direction="v"></div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-gap-3 dga-align-items-center" style="height: 3rem;">
  <span>Left</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span>Right</span>
</div>

</Demo>

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

<Demo title="Preview">

<div class="dga-d-flex dga-gap-2 dga-align-items-center">
  <span class="dga-tag">Tag 1</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span class="dga-tag" data-variant="success">Tag 2</span>
</div>

</Demo>

---

## Related

- [Tag](./tag.md)
