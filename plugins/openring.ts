import { merge } from "lume/core/utils/object.ts";
import Site from "lume/core/site.ts";
import Parser from "npm:rss-parser";
import { convert } from "npm:html-to-text";

interface Options {
  cache: boolean | string,
  perSource: number,
  sources: string[],
  dataKey: string,
  htmlToText: object
}

interface Article {
  date?: string,
  url?: string,
  title?: string,
  content?: string,
  sourceUrl?: string,
  sourceTitle?: string
}

const parser = new Parser();

const defaultOptions: Options = {
  cache: true,
  perSource: 1,
  sources: [],
  dataKey: "openring",
  htmlToText: {
    selectors: [
      { selector: "a", format: "inline" },
      { selector: "img", format: "skip" },
      { selector: "picture", format: "skip" }
    ]
  }
}

export default function (userOptions: Partial<Options>) {
  const options = merge(defaultOptions, userOptions);

  return (site: Site) => {
    site.addEventListener("beforeBuild", async () => {
      const articles: Article[] = [];

      for (const source of options.sources) {
        articles.push(...await getItemsFromFeed(source, options));
      }

      site.data(options.dataKey, articles);
    });
  }
}

async function getItemsFromFeed(source: string, options: Options): Promise<Article[]> {
  const articles: Article[] = [];
  
  console.log(`📡 Fetching ${source}`);
  const feed = await parser.parseURL(source);

  for (const item of feed.items) {
    articles.push({
      title: item.title,
      url: item.link,
      date: item.pubDate,
      content: convert(item.summary, options.htmlToText) || convert(item.content, options.htmlToText),
      sourceTitle: feed.title,
      sourceUrl: feed.link
    })

    if (articles.length >= options.perSource) {
      break;
    }
  }

  return articles;
}