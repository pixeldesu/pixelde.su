import { format } from "jsr:@std/datetime";

export default function (title: string) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  const date = format(new Date(), "yyyy-MM-dd");

  return {
    path: `/blog/${date}-${slug}.md`,
    content: {
      title: title,
      description: `Post about ${title}`,
      tags: [],
      content: "Page content",
    },
  };
}
