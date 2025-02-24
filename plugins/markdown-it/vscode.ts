// deno-lint-ignore-file no-explicit-any
// ^- NOTE: No idea for the typing of markdown-it plugin context, so we disable this check

// Cache object for frontmatter line counts so we only reload files once
const FRONTMATTER_LINE_CACHE: Record<string, number> = {};

function markdownItVscode(md: any) {
  // Override the default paragraph renderer
  const defaultRender = md.renderer.rules.paragraph_open ||
    function (
      tokens: Record<number, any>,
      idx: number,
      options: any,
      _env: any,
      self: any,
    ) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.paragraph_open = function (
    tokens: Record<number, any>,
    idx: number,
    options: any,
    env: any,
    self: any,
  ) {
    const token = tokens[idx];
    const filePath = env.data.page.src.entry.src || "";

    // FIXME: This is extremely ugly, having to reload the file to get the full context to
    //        calculate the line number offset for the frontmatter. For some reason this is
    //        pretty fast however, so I'll let it slide for now.
    if (!FRONTMATTER_LINE_CACHE[filePath]) {
      FRONTMATTER_LINE_CACHE[filePath] = countFrontMatterLines(
        Deno.readTextFileSync(filePath),
      );
    }
    const lineNumber = FRONTMATTER_LINE_CACHE[filePath] +
      (token.map ? token.map[0] : 1);

    // Create a wrapper element with context to open the file in VS Code
    const clickableElementStart =
      `<div data-vscode-file="${filePath}:${lineNumber}:1">`;

    return clickableElementStart +
      defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.paragraph_close = function (
    tokens: Record<number, any>,
    idx: number,
    options: any,
    _env: any,
    self: any,
  ) {
    return self.renderToken(tokens, idx, options) + "</div>";
  };
}

function countFrontMatterLines(content: string) {
  const frontMatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontMatterPattern);
  if (match) {
    return match[0].split("\n").length;
  }
  return 0;
}

export default function () {
  return function (site: Lume.Site) {
    site.hooks.addMarkdownItPlugin(markdownItVscode);
  };
}
