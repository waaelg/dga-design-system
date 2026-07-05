<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const navbar = ref<HTMLElement | null>(null);
let menu: { destroy?: () => void } | null = null;

onMounted(async () => {
  const { DGAMenuDropDown } = await import("@ds/index.js");
  if (navbar.value) {
    menu = new DGAMenuDropDown({ navbar: navbar.value });
  }
});

onBeforeUnmount(() => {
  menu?.destroy?.();
});
</script>

<template>
  <div dir="rtl" class="dga-navbar-demo">
    <nav
      ref="navbar"
      class="dga-navbar dga-px-3"
      role="navigation"
      aria-label="Main navigation"
    >
      <a class="dga-navbar-brand" href="#" @click.prevent>
        <img src="/logo.svg" alt="DGA Design System" />
      </a>

      <ul class="dga-menu">
        <li>
          <a class="dga-menu-item" href="#" @click.prevent>Link</a>
        </li>
        <li>
          <a
            class="dga-menu-item dga-has-dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            @click.prevent
          >
            Home
          </a>
          <div class="dga-dropdown">
            <div class="dga-dropdown-content">
              <ul>
                <li><a href="#" @click.prevent>Link</a></li>
                <li><a href="#" @click.prevent>Link</a></li>
                <li><a href="#" @click.prevent>Link</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <button
        class="dga-navbar-toggler"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>
