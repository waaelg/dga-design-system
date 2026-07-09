# Accordion

Expandable sections for FAQs and grouped content.

**Source:** `src/styles/components/accordion.scss`, `src/scripts/accordion.js`, `src/scripts/dga-accordion.js`  
**Demo:** VitePress live preview on this page  
**JavaScript:** Optional — web component or `DGAAccordion` class

---

## Option 1: Web component (recommended)

```html
<dga-accordion>
  <dga-accordion-item title="What is an accordion?">
    An accordion lets users expand and collapse sections of content.
  </dga-accordion-item>
  <dga-accordion-item title="How do I use it?" size="lg" open>
    Import the package once — no manual JS init required.
  </dga-accordion-item>
</dga-accordion>
```

<Demo title="Preview" client>

<dga-accordion>
  <dga-accordion-item title="What is an accordion?">
    An accordion lets users expand and collapse sections of content.
  </dga-accordion-item>
  <dga-accordion-item title="How do I use it?" size="lg" open>
    Import the package once — no manual JS init required.
  </dga-accordion-item>
</dga-accordion>

</Demo>

### `dga-accordion-item` attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `title` | — | Header label |
| `size` | `md` | `sm`, `md`, or `lg` |
| `open` | — | Present = expanded on load |

---

## Option 2: Legacy markup + DGAAccordion

```html
<div class="dga-acc" id="myAccordion">
  <div class="dga-acc-item">
    <button type="button" class="dga-acc-header" aria-expanded="false">
      <span>What is an accordion?</span>
    </button>
    <div class="dga-acc-content">
      <div class="dga-acc-body">
        An accordion lets users expand and collapse sections of content.
      </div>
    </div>
  </div>
  <div class="dga-acc-item">
    <button type="button" class="dga-acc-header" aria-expanded="false">
      <span>How do I use it?</span>
    </button>
    <div class="dga-acc-content">
      <div class="dga-acc-body">
        Import the package once — no manual JS init required.
      </div>
    </div>
  </div>
</div>
```

<Demo title="Preview" client>

<LegacyAccordionDemo />

</Demo>

```js
import { DGAAccordion } from '@waaelg/dga-design-system'
new DGAAccordion(document.getElementById('myAccordion'))
```

---

## HTML structure (legacy)

| Element | Class |
|---------|-------|
| Root | `dga-acc` |
| Item | `dga-acc-item` |
| Header (button) | `dga-acc-header` |
| Content wrapper | `dga-acc-content` |
| Body | `dga-acc-body` |

Open state: `dga-acc-item--active` on the item (added by JS).

---

## Header sizes

| Attribute | Height |
|-----------|--------|
| `data-size="sm"` | 40px |
| `data-size="md"` | 48px (default) |
| `data-size="lg"` | 56px |

```html
<button class="dga-acc-header" data-size="lg" aria-expanded="false">Large header</button>
```

<Demo title="Preview" client>

<LegacyAccordionDemo variant="sizes" />

</Demo>

Web component: `size="lg"` on `<dga-accordion-item>`.

---

## Behavior

- Click header to toggle
- Keyboard: Enter / Space on focused header
- Sets `aria-expanded` on the header
- Multiple panels can be open at once

---

## RTL

Chevron icon flips automatically in RTL. Optional: `dir="rtl"` on header.

---

## Accessibility

- Use `<button>` for headers, not `<div>`
- Set `aria-expanded="true"` / `"false"`
- Web component handles this automatically

---

## Related

- [Web Components](../getting-started/web-components.md)
- [JavaScript API](../getting-started/javascript-api.md)
