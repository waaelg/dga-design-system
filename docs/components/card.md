# Card

Container for grouped content with optional icon and footer.

**Source:** `src/styles/components/card.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## Basic card

```html
<div class="dga-card">
  <div class="dga-card-icon">
    <img src="/DGA-logo-icon.svg" alt="" />
  </div>
  <div class="dga-card-content">
    <h3 class="dga-card-title">Card title</h3>
    <div class="dga-card-body">
      <p>Card body content goes here.</p>
    </div>
  </div>
</div>
```

<Demo title="Preview">

<div class="dga-card">
  <div class="dga-card-icon">
    <img src="/DGA-logo-icon.svg" alt="" />
  </div>
  <div class="dga-card-content">
    <h3 class="dga-card-title">Card title</h3>
    <div class="dga-card-body">
      <p>Card body content goes here.</p>
    </div>
  </div>
</div>

</Demo>

---

## Structure

| Element | Class | Required |
|---------|-------|----------|
| Root | `dga-card` | Yes |
| Icon area | `dga-card-icon` | Optional |
| Content | `dga-card-content` | Yes |
| Title | `dga-card-title` | Optional |
| Body | `dga-card-body` | Optional |
| Footer | `dga-card-footer` | Optional |

Footer inner classes: `.footer-text`, `.footer-actions`

---

## Variants

Set `data-variant` on the root:

| Value | Style |
|-------|-------|
| `default` | Shadow (`dga-shadow-md`) — default when omitted |
| `stroke` | Border, no shadow |
| `noshadow` | No shadow, no border |

```html
<div class="dga-card" data-variant="stroke">
  <div class="dga-card-content">
    <div class="dga-card-title">Card title</div>
    <div class="dga-card-body">Card body content goes here.</div>
  </div>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-col dga-gap-3">
  <div class="dga-card">
    <div class="dga-card-content">
      <div class="dga-card-title">Default (shadow)</div>
      <div class="dga-card-body">Card with default shadow variant.</div>
    </div>
  </div>
  <div class="dga-card" data-variant="stroke">
    <div class="dga-card-content">
      <div class="dga-card-title">Stroke</div>
      <div class="dga-card-body">Card with border, no shadow.</div>
    </div>
  </div>
  <div class="dga-card" data-variant="noshadow">
    <div class="dga-card-content">
      <div class="dga-card-title">No shadow</div>
      <div class="dga-card-body">Flat card without shadow or border.</div>
    </div>
  </div>
</div>

</Demo>

---

## With utility spacing

```html
<div class="dga-card dga-p-4" data-variant="stroke">
  ...
</div>
```

---

## Related

- [Spacing](../foundations/spacing.md)
- [Border radius](../foundations/radius.md)
