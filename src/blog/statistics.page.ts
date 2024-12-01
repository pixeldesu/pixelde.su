export const layout = "layouts/statistics.vto";

export const type = "page";

export default function* ({ search }) {
  const posts = Array.from(
    search.pages("type=blog post_draft=false", "order date=desc"),
  );
  const totalPostCount = posts.length;
  let totalWordCount = 0;
  let totalMinutes = 0;

  const longestPosts = posts;
  longestPosts.sort((a, b) => b.readingInfo.words - a.readingInfo.words);

  posts.forEach((post) => {
    totalMinutes += post.readingInfo.minutes;
    totalWordCount += post.readingInfo.words;
  });

  const statistics = {
    totalPostCount,
    totalWordCount,
    totalMinutes,
    longestPost: longestPosts[0],
    shortestPost: longestPosts.at(-1),
  };

  yield {
    url: "/blog/statistics/",
    title: "Statistics",
    statistics,
  };
}
