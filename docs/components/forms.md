# Forms

Input, select, textarea, and label components.

**Source:** `src/styles/components/input.scss`, `select.scss`, `textarea.scss`, `label.scss`  
**Demo:** VitePress live preview on this page  
**JavaScript required:** No

---

## Label

```html
<label for="field-id" class="dga-label">Text field</label>
```

<Demo title="Preview">

<label class="dga-label">Text field</label>

</Demo>

Always pair `for` with the control `id`.

---

## Text input

```html
<label for="dga-input" class="dga-label">Text field</label>
<input type="text" id="dga-input" class="dga-input" placeholder="Type here..." />
```

<Demo title="Preview">

<div>
  <label for="demo-input" class="dga-label">Text field</label>
  <input type="text" id="demo-input" class="dga-input" placeholder="Type here..." />
</div>

</Demo>

### Error state

```html
<input type="text" class="dga-input dga-input-error" aria-invalid="true" />
```

<Demo title="Preview">

<input type="text" class="dga-input dga-input-error" aria-invalid="true" value="Invalid value" />

</Demo>

| Class | Purpose |
|-------|---------|
| `dga-input` | Base input (40px height, full width) |
| `dga-input-error` | Red border and error underline |

---

## Select

```html
<label for="dga-select" class="dga-label">Dropdown</label>
<select id="dga-select" class="dga-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

<Demo title="Preview">

<div>
  <label for="demo-select" class="dga-label">Dropdown</label>
  <select id="demo-select" class="dga-select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

</Demo>

### Error state

```html
<select class="dga-select error" aria-invalid="true">...</select>
```

> Note: select uses class `error`, not `dga-select-error`.

---

## Textarea

```html
<label for="dga-textarea" class="dga-label">Message</label>
<textarea id="dga-textarea" class="dga-textarea" placeholder="Write your message..."></textarea>
```

<Demo title="Preview">

<div>
  <label for="demo-textarea" class="dga-label">Message</label>
  <textarea id="demo-textarea" class="dga-textarea" placeholder="Write your message..."></textarea>
</div>

</Demo>

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
    <label for="name" class="dga-label">Name</label>
    <input type="text" id="name" class="dga-input" />
  </div>
  <div>
    <label for="role" class="dga-label">Role</label>
    <select id="role" class="dga-select">
      <option>Citizen</option>
      <option>Employee</option>
    </select>
  </div>
  <div>
    <label for="message" class="dga-label">Message</label>
    <textarea id="message" class="dga-textarea"></textarea>
  </div>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-col dga-gap-3">
  <div>
    <label for="demo-name" class="dga-label">Name</label>
    <input type="text" id="demo-name" class="dga-input" />
  </div>
  <div>
    <label for="demo-role" class="dga-label">Role</label>
    <select id="demo-role" class="dga-select">
      <option>Citizen</option>
      <option>Employee</option>
    </select>
  </div>
  <div>
    <label for="demo-message" class="dga-label">Message</label>
    <textarea id="demo-message" class="dga-textarea"></textarea>
  </div>
</div>

</Demo>

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
