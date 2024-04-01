import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import terser from "lume/plugins/terser.ts";
import date from "lume/plugins/date.ts";
import readInfo from "lume/plugins/reading_info.ts";
import feed from "lume/plugins/feed.ts";
import nano from "npm:cssnano";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.copy("assets/img");

site.use(esbuild());
site.use(nunjucks());
site.use(date());
site.use(readInfo());
site.use(sitemap());
site.use(tailwindcss({
  options: tailwindOptions,
}));
site.use(postcss());
site.use(minifyHTML());
site.use(terser());

site.use(feed({
  output: ["/blog/posts.rss", "/blog/posts.json"],
  query: "type=blog index=true",
  info: {
    title: "pixeldesu's blog",
    description: "Personal and technical ramblings and write-ups from pixeldesu",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

site.hooks.addPostcssPlugin(nano);

export default site;
