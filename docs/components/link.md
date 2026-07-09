# Link

Styled anchor links for inline navigation.

**Source:** `src/styles/components/link.scss`  
**Demo:** VitePress live preview on this page  
**JavaScript required:** No

---

## Basic link

```html
<a href="#" class="dga-link">Link</a>
```

<Demo title="Preview">

<a href="#" class="dga-link" onclick="return false;">Link</a>

</Demo>

Saudi green color (`$dga-sa-600`), underline on hover.

---

## Variants

| Attribute | Effect |
|-----------|--------|
| (default) | No underline until hover |
| `data-variant="inline"` | Always underlined |

```html
<a href="#" class="dga-link" data-variant="inline">Inline link</a>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-col dga-gap-2 dga-align-items-start">
  <a href="#" class="dga-link" onclick="return false;">Default link</a>
  <a href="#" class="dga-link" data-variant="inline" onclick="return false;">Inline link</a>
</div>

</Demo>

---

## States

- **Hover** — lighter green + underline
- **Active** — darker green + underline
- **Focus** — bottom border accent

---

## Accessibility

- Use descriptive link text (not "click here")
- External links: add `rel="noopener"` and indicate opens in new tab if needed

---

## Related

- [Breadcrumb](./breadcrumb.md)
- [Button](./button.md) — for actions use `<button>`, not links
