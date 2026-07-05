import { defineConfig } from "vitepress";
import { resolve } from "node:path";

export default defineConfig({
  title: "DGA Design System",
  description:
    "Official documentation for @waaelg/dga-design-system — Saudi DGA utilities, components, and JavaScript.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Getting Started", link: "/getting-started/installation" },
      { text: "Foundations", link: "/foundations/colors" },
      { text: "Components", link: "/components/button" },
      { text: "Changelog", link: "/changelog" },
      {
        text: "npm",
        link: "https://www.npmjs.com/package/@waaelg/dga-design-system",
      },
      {
        text: "GitHub",
        link: "https://github.com/waaelg/dga-design-system",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/getting-started/installation" },
          { text: "JavaScript API", link: "/getting-started/javascript-api" },
          { text: "Web Components", link: "/getting-started/web-components" },
          { text: "RTL & Arabic", link: "/getting-started/rtl-arabic" },
        ],
      },
      {
        text: "Foundations",
        items: [
          { text: "Colors", link: "/foundations/colors" },
          { text: "Colors cheatsheet", link: "/foundations/colors-cheatsheet" },
          { text: "Color swatches", link: "/foundations/colors-swatches" },
          { text: "Typography", link: "/foundations/typography" },
          { text: "Spacing", link: "/foundations/spacing" },
          { text: "Grid & Flex", link: "/foundations/grid" },
          { text: "Width & Height", link: "/foundations/width-height" },
          { text: "Border radius", link: "/foundations/radius" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Alert", link: "/components/alert" },
          { text: "Accordion", link: "/components/accordion" },
          { text: "Navbar", link: "/components/navbar" },
          { text: "Card", link: "/components/card" },
          { text: "Forms", link: "/components/forms" },
          { text: "Table", link: "/components/table" },
          { text: "Breadcrumb", link: "/components/breadcrumb" },
          { text: "Link", link: "/components/link" },
          { text: "Tag", link: "/components/tag" },
          { text: "Divider", link: "/components/divider" },
          { text: "Code snippet", link: "/components/code-snippet" },
          { text: "Pie chart", link: "/components/chart" },
          { text: "Verify bar", link: "/components/verify-bar" },
          { text: "Avatar", link: "/components/avatar" },
        ],
      },
      {
        text: "Meta",
        items: [{ text: "Changelog", link: "/changelog" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/waaelg/dga-design-system",
      },
    ],

    footer: {
      message: "MIT Licensed — Wael Alghamdi",
      copyright: "Digital Government Authority (DGA) design patterns",
    },

    search: {
      provider: "local",
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("dga-"),
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        "@ds": resolve(__dirname, "../../dist"),
      },
    },
  },
});
