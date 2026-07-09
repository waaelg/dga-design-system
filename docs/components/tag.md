# Tag

Compact labels for status, categories, and metadata.

**Source:** `src/styles/components/tag.scss`  
**Demo:** VitePress live preview on this page  
**JavaScript required:** No

---

## Basic tag

```html
<span class="dga-tag">Default tag</span>
```

<Demo title="Preview">

<span class="dga-tag">Default tag</span>

</Demo>

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
<span class="dga-tag" data-variant="success">Success tag</span>
<span class="dga-tag" data-variant="info">Info tag</span>
<span class="dga-tag" data-variant="warning">Warning tag</span>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-wrap dga-gap-2 dga-align-items-center">
  <span class="dga-tag">Default tag</span>
  <span class="dga-tag" data-variant="success">Success tag</span>
  <span class="dga-tag" data-variant="info">Info tag</span>
  <span class="dga-tag" data-variant="warning">Warning tag</span>
</div>

</Demo>

---

## Modifiers

| Attribute | Effect |
|-----------|--------|
| `data-outline="true"` | Outlined border |
| `data-rounded="true"` | Pill shape |
| `data-icononly="true"` | Circle icon only (no text) |

```html
<span class="dga-tag" data-outline="true">Outlined tag</span>
<span class="dga-tag" data-outline="true" data-rounded="true">Rounded outlined</span>
<span class="dga-tag" data-variant="warning" data-rounded="true" data-icononly="true"></span>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-wrap dga-gap-2 dga-align-items-center">
  <span class="dga-tag" data-outline="true">Outlined tag</span>
  <span class="dga-tag" data-outline="true" data-rounded="true">Rounded outlined</span>
  <span class="dga-tag" data-variant="warning" data-rounded="true" data-icononly="true"></span>
</div>

</Demo>

---

## Combined example

```html
<div class="dga-d-flex dga-flex-wrap dga-gap-2 dga-align-items-center">
  <span class="dga-tag" data-outline="true">Outlined tag</span>
  <span class="dga-tag">Default tag</span>
  <span class="dga-tag" data-variant="success">Success tag</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span class="dga-tag" data-variant="info" data-rounded="true">Info tag</span>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-wrap dga-gap-2 dga-align-items-center">
  <span class="dga-tag" data-outline="true">Outlined tag</span>
  <span class="dga-tag">Default tag</span>
  <span class="dga-tag" data-variant="success">Success tag</span>
  <div class="dga-divider" data-variant="primary" data-direction="v"></div>
  <span class="dga-tag" data-variant="info" data-rounded="true">Info tag</span>
</div>

</Demo>

---

## RTL

Icon position flips with `[dir="rtl"]` on parent or `dir="rtl"` on the tag.

---

## Related

- [Divider](./divider.md)
