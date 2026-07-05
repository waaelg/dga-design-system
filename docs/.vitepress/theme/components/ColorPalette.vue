<script setup lang="ts">
import { computed } from "vue";
import {
  COLOR_PALETTES,
  COMPACT_SHADES,
  type ColorPaletteKey,
} from "../data/color-palettes";

const props = withDefaults(
  defineProps<{
    palette: ColorPaletteKey;
    compact?: boolean;
  }>(),
  { compact: false },
);

function isLight(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

const shades = computed(() => {
  const palette = COLOR_PALETTES[props.palette] ?? [];
  if (!props.compact) return palette;

  const allowed = COMPACT_SHADES[props.palette];
  if (!allowed) return palette;

  return palette.filter((entry) => allowed.includes(Number(entry.shade)));
});
</script>

<template>
  <div class="dga-color-palette" role="list">
    <div
      v-for="entry in shades"
      :key="`${palette}-${entry.shade}`"
      class="dga-color-swatch"
      role="listitem"
    >
      <div
        class="dga-color-swatch__chip"
        :class="{ 'is-light': isLight(entry.hex) }"
        :style="{ backgroundColor: entry.hex }"
        :title="`${entry.shade} · ${entry.hex}`"
      />
      <div class="dga-color-swatch__meta">
        <span class="dga-color-swatch__shade">{{ entry.shade }}</span>
        <code class="dga-color-swatch__hex">{{ entry.hex }}</code>
        <span v-if="entry.note" class="dga-color-swatch__note">{{ entry.note }}</span>
      </div>
    </div>
  </div>
</template>
