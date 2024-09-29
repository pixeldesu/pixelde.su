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
import robots from "lume/plugins/robots.ts";
import feed from "lume/plugins/feed.ts";
import nano from "npm:cssnano";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.copy("assets/img");
site.copy("assets/slides");

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
  query: "type=blog index=true post_draft=false",
  info: {
    title: "pixeldesu's blog",
    description: "Personal and technical ramblings and write-ups from pixeldesu",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

site.use(feed({
  output: ["/talks/posts.rss", "/talks/posts.json"],
  query: "type=talk index=true",
  info: {
    title: "pixeldesu's blog",
    description: "Sessions and talks presented by pixeldesu at various events",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

site.use(robots({
  disallow: ["GPTBot", "GPTBot-User", "Google-Extended", "PerplexityBot", "claudebot", "ClaudeBot"]
}))

site.hooks.addPostcssPlugin(nano);

const commitCmd = new Deno.Command("git", { args: ["rev-parse", "HEAD"] });
const { stdout } = await commitCmd.output();
const commitHash = new TextDecoder().decode(stdout);

site.data("commit", commitHash);
site.filter("hostname", (url) => (new URL(url)).hostname, false);

export default site;
