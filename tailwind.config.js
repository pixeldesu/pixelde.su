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
  safelist: [
    "h-fit",
  ],
};
