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

`dga-label` is `display: block` with 6px bottom margin. Always pair `for` with the control `id`.

---

## Text input

Use on `<input>` elements only — styles target `input.dga-input`.

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

| Property | Value |
|----------|-------|
| Class | `dga-input` on `<input>` |
| Height | 40px |
| Width | 100% |
| Padding | 16px inline (`$dga-spacing-xl`) |
| Border radius | 6px |
| Default border | `$dga-gray-400` |

### States

| State | Behavior |
|-------|----------|
| **Hover** | Border turns black |
| **Focus** | Bottom underline animates to full width (2px), border `$dga-gray-800`, `box-shadow` |
| **Active** | Partial bottom underline (35%), background `$dga-gray-100` |

### Error state

```html
<input type="text" class="dga-input dga-input-error" aria-invalid="true" />
```

<Demo title="Preview">

<input type="text" class="dga-input dga-input-error" aria-invalid="true" value="Invalid value" />

</Demo>

| Class | Purpose |
|-------|---------|
| `dga-input` | Base input |
| `dga-input-error` | Red border + red bottom underline |

On **active**, error fields revert to gray border and light gray background (same as default active state).

---

## Select

Use on `<select>` elements — styles target `select.dga-select`. Includes a built-in chevron icon.

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

| Property | Value |
|----------|-------|
| Height | 40px |
| Width | 100% |
| Default border | `$dga-gray-300` |
| Chevron | Left side at 16px (`background-position: left 1rem center`) |

### States

| State | Behavior |
|-------|----------|
| **Hover** | Border `$dga-gray-500` |
| **Focus** | 2px bottom border `$dga-gray-800`, `box-shadow` |

Select does **not** use the animated bottom underline that text inputs have.

### Error state

```html
<select class="dga-select error" aria-invalid="true">...</select>
```

> Note: select uses class `error`, not `dga-select-error`. Error border stays red on hover and focus.

---

## Textarea

Use on `<textarea>` elements — styles target `textarea.dga-textarea`.

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

| Property | Value |
|----------|-------|
| Min height | 96px |
| Width | 100% |
| Default border | `$dga-gray-300` |

### States

Same animated bottom underline as text input: full width on **focus**, 35% on **active**, gray background on **active**.

### Error state

```html
<textarea class="dga-textarea dga-textarea-error" aria-invalid="true"></textarea>
```

Resizable by default.

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

## States summary

| Control | Hover | Focus | Active | Error class |
|---------|-------|-------|--------|-------------|
| **Input** | Black border | Full bottom underline + shadow | 35% underline + gray bg | `dga-input-error` |
| **Select** | Gray-500 border | 2px bottom border + shadow | — | `error` |
| **Textarea** | Black border | Full bottom underline + shadow | 35% underline + gray bg | `dga-textarea-error` |

---

## Accessibility

- Always use `<label class="dga-label">` with matching `for` / `id`
- Set `aria-invalid="true"` on error fields
- Add error message text linked with `aria-describedby`

---

## Related

- [Label](./forms.md#label) · [Button](./button.md)
