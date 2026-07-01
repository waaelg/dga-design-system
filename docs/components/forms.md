# Forms

Input, select, textarea, and label components.

**Source:** `src/styles/components/input.scss`, `select.scss`, `textarea.scss`, `label.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## Label

```html
<label for="field-id" class="dga-label">حقل نص عادي</label>
```

Always pair `for` with the control `id`.

---

## Text input

```html
<label for="dga-input" class="dga-label">حقل نص عادي</label>
<input type="text" id="dga-input" class="dga-input" />
```

### Error state

```html
<input type="text" class="dga-input dga-input-error" aria-invalid="true" />
```

| Class | Purpose |
|-------|---------|
| `dga-input` | Base input (40px height, full width) |
| `dga-input-error` | Red border and error underline |

---

## Select

```html
<label for="dga-select" class="dga-label">قائمة منسدلة</label>
<select id="dga-select" class="dga-select">
  <option>خيار 1</option>
  <option>خيار 2</option>
</select>
```

### Error state

```html
<select class="dga-select error" aria-invalid="true">...</select>
```

> Note: select uses class `error`, not `dga-select-error`.

---

## Textarea

```html
<label for="dga-textarea" class="dga-label">رسالة</label>
<textarea id="dga-textarea" class="dga-textarea"></textarea>
```

### Error state

```html
<textarea class="dga-textarea dga-textarea-error" aria-invalid="true"></textarea>
```

Min height: 96px. Resizable by default.

---

## Full form example

```html
<div class="dga-d-flex dga-flex-col dga-gap-3">
  <div>
    <label for="name" class="dga-label">الاسم</label>
    <input type="text" id="name" class="dga-input" />
  </div>
  <div>
    <label for="role" class="dga-label">الدور</label>
    <select id="role" class="dga-select">
      <option>مواطن</option>
      <option>موظف</option>
    </select>
  </div>
  <div>
    <label for="message" class="dga-label">الرسالة</label>
    <textarea id="message" class="dga-textarea"></textarea>
  </div>
</div>
```

---

## States

All form controls support:

- **Hover** — darker border
- **Focus** — bottom accent line + shadow
- **Active** — partial underline + gray background
- **Error** — red border (see classes above)

---

## Accessibility

- Always use `<label class="dga-label">` with matching `for` / `id`
- Set `aria-invalid="true"` on error fields
- Add error message text linked with `aria-describedby`

---

## Related

- [Label](./forms.md#label) · [Button](./button.md)
