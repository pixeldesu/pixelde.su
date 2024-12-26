import typography from "npm:@tailwindcss/typography";
import plugin from "npm:tailwindcss/plugin.js";

export default {
  mode: "jit",
  darkMode: ["variant", [
    "@media (prefers-color-scheme: dark) { &:not(.light *) }",
    "&:is(.dark *)",
  ]],
  plugins: [
    typography,
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("group-hocus", [
        ":merge(.group):hover &",
        ":merge(.group):focus &",
      ]);
    }),
  ],
  theme: {
    extend: {
      animation: {
        "spin-speed-1x": "spin 15s linear infinite",
        "spin-speed-2x": "spin 20s linear infinite",
        "spin-speed-3x": "spin 25s linear infinite",
        "spin-speed-4x": "spin 30s linear infinite",
        "spin-speed-5x": "spin 35s linear infinite",
      },
    },
  },
  safelist: [
    "text-6xl",
    "opacity-50",
    "h-fit",
    "motion-safe:animate-spin-speed-1x",
    "motion-safe:animate-spin-speed-2x",
    "motion-safe:animate-spin-speed-3x",
    "motion-safe:animate-spin-speed-4x",
    "motion-safe:animate-spin-speed-5x",
    "origin-center",
  ],
};
