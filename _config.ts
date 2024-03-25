import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.copy("assets/img");

site.use(esbuild());
site.use(nunjucks());
site.use(sitemap());
site.use(tailwindcss({
  options: tailwindOptions,
}));
site.use(postcss());
site.use(minifyHTML());

export default site;
