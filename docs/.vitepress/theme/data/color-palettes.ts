export type ColorShade = {
  shade: number | string;
  hex: string;
  note?: string;
};

export type ColorPaletteKey =
  | "gray"
  | "primary"
  | "gold"
  | "lavender"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "semantic";

export const COLOR_PALETTES: Record<ColorPaletteKey, ColorShade[]> = {
  gray: [
    { shade: 25, hex: "#fcfcfd" },
    { shade: 50, hex: "#f9fafb" },
    { shade: 100, hex: "#f3f4f6" },
    { shade: 200, hex: "#e5e7eb", note: "Borders" },
    { shade: 300, hex: "#d2d6db" },
    { shade: 400, hex: "#9da4ae" },
    { shade: 500, hex: "#6c737f" },
    { shade: 600, hex: "#4d5761", note: "Muted text" },
    { shade: 700, hex: "#384250", note: "Secondary text" },
    { shade: 800, hex: "#1f2a37" },
    { shade: 900, hex: "#111927" },
    { shade: 950, hex: "#0d121c", note: "Primary text" },
  ],
  primary: [
    { shade: 25, hex: "#f7fdf9" },
    { shade: 50, hex: "#f3fcf6" },
    { shade: 100, hex: "#dff6e7" },
    { shade: 200, hex: "#b8eacb" },
    { shade: 300, hex: "#88d8ad" },
    { shade: 400, hex: "#54c08a" },
    { shade: 500, hex: "#25935f", note: "Saudi Green" },
    { shade: 600, hex: "#1b8354", note: "Hover" },
    { shade: 700, hex: "#166a45", note: "Active" },
    { shade: 800, hex: "#14573a", note: "Brand text" },
    { shade: 900, hex: "#104631" },
    { shade: 950, hex: "#092a1e" },
  ],
  gold: [
    { shade: 25, hex: "#fffef7" },
    { shade: 50, hex: "#fffef2" },
    { shade: 100, hex: "#fffce6" },
    { shade: 200, hex: "#fcf3bd" },
    { shade: 300, hex: "#fae996" },
    { shade: 400, hex: "#f7d54d" },
    { shade: 500, hex: "#f5bd02", note: "Main gold" },
    { shade: 600, hex: "#dba102", note: "Hover" },
    { shade: 700, hex: "#b87b02" },
    { shade: 800, hex: "#945c01" },
    { shade: 900, hex: "#6e3c00" },
    { shade: 950, hex: "#472400" },
  ],
  lavender: [
    { shade: 25, hex: "#fefcff" },
    { shade: 50, hex: "#f9f5fa" },
    { shade: 100, hex: "#f2e9f5" },
    { shade: 200, hex: "#e1cce8" },
    { shade: 300, hex: "#ccadd9" },
    { shade: 400, hex: "#a57bba" },
    { shade: 500, hex: "#80519f", note: "Main lavender" },
    { shade: 600, hex: "#6d428f" },
    { shade: 700, hex: "#532d75" },
    { shade: 800, hex: "#3d1d5e" },
    { shade: 900, hex: "#281047" },
    { shade: 950, hex: "#16072e" },
  ],
  error: [
    { shade: 25, hex: "#fffbfa" },
    { shade: 50, hex: "#fef3f2", note: "Error BG" },
    { shade: 100, hex: "#fee4e2" },
    { shade: 200, hex: "#fecdca" },
    { shade: 300, hex: "#fda29b" },
    { shade: 400, hex: "#f97066" },
    { shade: 500, hex: "#f04438", note: "Main error" },
    { shade: 600, hex: "#d92d20", note: "Error text" },
    { shade: 700, hex: "#b42318" },
    { shade: 800, hex: "#912018" },
    { shade: 900, hex: "#7a271a" },
    { shade: 950, hex: "#55160c" },
  ],
  warning: [
    { shade: 25, hex: "#fffcf5" },
    { shade: 50, hex: "#fffaeb", note: "Warning BG" },
    { shade: 100, hex: "#fef0c7" },
    { shade: 200, hex: "#fedf89" },
    { shade: 300, hex: "#fec84b" },
    { shade: 400, hex: "#fdb022" },
    { shade: 500, hex: "#f79009", note: "Main warning" },
    { shade: 600, hex: "#dc6803", note: "Warning text" },
    { shade: 700, hex: "#b54708" },
    { shade: 800, hex: "#93370d" },
    { shade: 900, hex: "#7a2e0e" },
    { shade: 950, hex: "#4e1d09" },
  ],
  info: [
    { shade: 25, hex: "#f5faff" },
    { shade: 50, hex: "#ecfdf3", note: "Info BG" },
    { shade: 100, hex: "#d1e9ff" },
    { shade: 200, hex: "#b2ddff" },
    { shade: 300, hex: "#84caff" },
    { shade: 400, hex: "#53b1fd" },
    { shade: 500, hex: "#2e90fa", note: "Main info" },
    { shade: 600, hex: "#1570ef", note: "Info text" },
    { shade: 700, hex: "#175cd3" },
    { shade: 800, hex: "#1849a9" },
    { shade: 900, hex: "#194185" },
    { shade: 950, hex: "#102a56" },
  ],
  success: [
    { shade: 25, hex: "#f6fef9" },
    { shade: 50, hex: "#ecfdf3", note: "Success BG" },
    { shade: 100, hex: "#dcfae6" },
    { shade: 200, hex: "#abefc6" },
    { shade: 300, hex: "#75e0a7" },
    { shade: 400, hex: "#47cd89" },
    { shade: 500, hex: "#17b26a", note: "Main success" },
    { shade: 600, hex: "#079455", note: "Success text" },
    { shade: 700, hex: "#067647" },
    { shade: 800, hex: "#085d3a" },
    { shade: 900, hex: "#074d31" },
    { shade: 950, hex: "#053321" },
  ],
  semantic: [
    { shade: "Primary", hex: "#25935f", note: "Saudi Green 500" },
    { shade: "Gold", hex: "#f5bd02", note: "Secondary 500" },
    { shade: "Error", hex: "#f04438", note: "Red 500" },
    { shade: "Warning", hex: "#f79009", note: "Orange 500" },
    { shade: "Info", hex: "#2e90fa", note: "Blue 500" },
    { shade: "Success", hex: "#17b26a", note: "Green 500" },
  ],
};

export const COMPACT_SHADES: Partial<Record<ColorPaletteKey, number[]>> = {
  gray: [25, 50, 200, 600, 700, 950],
  primary: [500, 600, 700, 800],
  gold: [500, 600],
};
