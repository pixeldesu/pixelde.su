import { format } from "jsr:@std/datetime";

export default function (event: string, title: string) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  const date = format(new Date(), "yyyy-MM-dd");

  return {
    path: `/talks/${date}-${slug}.md`,
    content: {
      title: title,
      description: `Talk about ${title} at ${event}`,
      tags: [],
      event: event,
      urls: [],
      downloads: [],
      content: "Page content",
    },
  };
}
