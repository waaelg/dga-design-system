---
layout: home

hero:
  name: DGA Design System
  text: Saudi DGA design system
  tagline: CSS utilities, components, and optional JavaScript for government digital services.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/installation
    - theme: alt
      text: View Components
      link: /components/button

features:
  - icon: 🎨
    title: Design tokens
    details: Colors, typography, spacing, grid, radius, and width/height utilities aligned with DGA guidelines.
  - icon: 🧩
    title: UI components
    details: Buttons, alerts, forms, navbar, cards, tables, and more — CSS-first with optional JavaScript.
  - icon: 🌐
    title: RTL & Arabic
    details: Built for Arabic government websites with IBM Plex Sans Arabic and RTL-friendly patterns.
  - icon: ⚡
    title: Web components
    details: Use interactive `<dga-*>` elements in any framework, or legacy JS classes when needed.
---

## Quick links

| Topic | Link |
|-------|------|
| Install the npm package | [Installation](/getting-started/installation) |
| Interactive behavior | [JavaScript API](/getting-started/javascript-api) |
| `<dga-*>` custom elements | [Web Components](/getting-started/web-components) |
| Right-to-left setup | [RTL & Arabic](/getting-started/rtl-arabic) |
| Color system | [Colors](/foundations/colors) |
| Layout | [Grid & Flex](/foundations/grid) |

```bash
npm install @waaelg/dga-design-system
```

```js
import '@waaelg/dga-design-system/style.css';
import '@waaelg/dga-design-system'; // registers <dga-*> web components
```
