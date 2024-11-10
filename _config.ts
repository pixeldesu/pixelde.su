import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
// import minifyHTML from "lume/plugins/minify_html.ts";
import terser from "lume/plugins/terser.ts";
import date from "lume/plugins/date.ts";
import readInfo from "lume/plugins/reading_info.ts";
import robots from "lume/plugins/robots.ts";
import feed from "lume/plugins/feed.ts";
import inline from "lume/plugins/inline.ts";
import openring from "lume_openring/mod.ts";
import nano from "npm:cssnano";

import tailwindOptions from "./tailwind.config.js";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.copy("assets/img");
site.copy("assets/slides");
site.copy("assets/svg");

site.use(esbuild({
  options: {
    bundle: false,
  },
}));
site.use(date());
site.use(readInfo());
site.use(sitemap());
site.use(tailwindcss({
  options: tailwindOptions,
}));
site.use(postcss());
// site.use(minifyHTML());
site.use(terser());

site.use(inline({
  copyAttributes: [
    /^data-/,
    /^aria-/,
  ],
}));

site.use(feed({
  output: ["/blog/posts.rss", "/blog/posts.json"],
  query: "type=blog index=true post_draft=false",
  info: {
    title: "pixeldesu's blog",
    description:
      "Personal and technical ramblings and write-ups from pixeldesu",
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
  disallow: [
    "GPTBot",
    "GPTBot-User",
    "Google-Extended",
    "PerplexityBot",
    "claudebot",
    "ClaudeBot",
  ],
}));

site.use(openring({
  sources: [
    "https://damien.zone/feed/",
    "https://resir014.xyz/posts/rss.xml",
    "https://seirdy.one/posts/atom.xml",
    "https://volpeon.ink/notebook/index.xml",
    "https://hugo.md/index.xml",
    "https://qtea.me/posts.xml",
    "https://xeiaso.net/blog.rss",
    "https://chronovore.dev/posts/feed.rss",
    "https://87flowers.com/rss.xml",
  ],
}));

site.hooks.addPostcssPlugin(nano);

const commitCmd = new Deno.Command("git", { args: ["rev-parse", "HEAD"] });
const { stdout } = await commitCmd.output();
const commitHash = new TextDecoder().decode(stdout);

site.data("commit", commitHash);

site.data("currentYear", new Date().getFullYear());

site.filter("hostname", (url) => (new URL(url)).hostname, false);

site.filter("shuffle", <T>(array: T[] = []) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
});

site.filter(
  "cut",
  (array, length, startIndex = 0) => array.slice(startIndex, length),
);

site.filter(
  "truncate",
  (string, length, suffix = "...") => `${string.substring(0, length)}${suffix}`,
);

site.filter(
  "filterByTag",
  (array: (Partial<{ tags: string[] }>)[], tag: string) =>
    array.filter((item) => item.tags?.includes(tag)),
);

site.filter(
  "filterNoTags",
  (array: (Partial<{ tags: string[] }>)[]) =>
    array.filter((item) => !item.tags),
);

export default site;
