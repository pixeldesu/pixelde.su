import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import terser from "lume/plugins/terser.ts";
import date from "lume/plugins/date.ts";
import readInfo from "lume/plugins/reading_info.ts";
import robots from "lume/plugins/robots.ts";
import feed from "lume/plugins/feed.ts";
import inline from "lume/plugins/inline.ts";
import attributes from "lume/plugins/attributes.ts";
import openring from "lume_openring/mod.ts";
import nano from "npm:cssnano";
import vscode from "./plugins/markdown-it/vscode.ts";

import sanitizeHtml from "npm:sanitize-html";

import tailwindOptions from "./tailwind.config.js";

import fetchFormSubmissions from "./scripts/fetch-form-submissions.ts";

const site = lume({
  src: "./src",
  emptyDest: false,
});

site.copy("assets/img");
site.copy("assets/slides");
site.copy("assets/svg");
site.copy("assets/misc");

site.remoteFile(
  "assets/css/vendor/parvus.css",
  "https://unpkg.com/parvus@2.6.0/dist/css/parvus.min.css",
);

site.remoteFile(
  "assets/js/vendor/parvus.js",
  "https://unpkg.com/parvus@2.6.0/dist/js/parvus.min.js",
);

site.remoteFile(
  "assets/css/vendor/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
);

site.remoteFile(
  "assets/js/vendor/leaflet.js",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
);

site.remoteFile(
  "assets/img/vendor/leaflet/marker-icon.png",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
);

site.remoteFile(
  "assets/img/vendor/leaflet/marker-icon-2x.png",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
);

site.remoteFile(
  "assets/img/vendor/leaflet/marker-shadow.png",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
);

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
site.use(minifyHTML());
site.use(terser());

site.use(inline({
  copyAttributes: [
    /^data-/,
    /^aria-/,
  ],
}));

site.use(attributes());

if (site.options.location.hostname === "localhost") {
  site.use(vscode());
}

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
    title: "pixeldesu's talks",
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
    "https://volpeon.ink/notebook/rss.xml",
    "https://hugo.md/index.xml",
    "https://qtea.me/posts.xml",
    "https://xeiaso.net/blog.rss",
    "https://chronovore.dev/posts/feed.rss",
    "https://87flowers.com/rss.xml",
    "https://flanger.dev/feed",
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
    array?.filter((item) => item.tags?.includes(tag)),
);

site.filter(
  "filterNoTags",
  (array: (Partial<{ tags: string[] }>)[]) =>
    array?.filter((item) => !item.tags),
);

site.filter(
  "sortDatebyDateDesc",
  (array: (Partial<{ date: string }>)[]) =>
    array?.toSorted((a, b) =>
      (new Date(b.date!)).valueOf() - (new Date(a.date!)).valueOf()
    ),
);

site.filter(
  "sortDatebyDateAsc",
  (array: (Partial<{ date: string }>)[]) =>
    array?.toSorted((a, b) =>
      (new Date(a.date!)).valueOf() - (new Date(b.date!)).valueOf()
    ),
);

site.filter(
  "filterEventInFuture",
  (array: (Partial<{ date: { end: Date } }>)[]) =>
    array.filter((event) => event.date!.end > (new Date())),
);

site.filter(
  "filterEventInPast",
  (array: (Partial<{ date: { start: Date } }>)[]) =>
    array.filter((event) => event.date!.start < (new Date())),
);

site.filter(
  "removeTrailingSlash",
  (url: string) => url.replace(/\/$/, ""),
);

site.filter(
  "removeProtocol",
  (url: string) => url.replace(/(^\w+:|^)\/\//, ""),
);

site.filter(
  "removeWWWSubdomain",
  (url: string) => url.replace(/^www\./, ""),
);

site.filter(
  "sanitize",
  (string: string) => sanitizeHtml(string),
);

site.script("fetch-form-submissions", async () => await fetchFormSubmissions());

export default site;
