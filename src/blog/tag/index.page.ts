export const layout = "layouts/tags/blog.njk"

export const type = "page"

export default function* ({ globalTags, search }) {
    const posts = search.pages("type=blog post_draft=false", "order date=desc");

    const tags = Array.from(posts)
        .map((post) => post.tags)
        .flat()
        .filter((value, index, array) => array.indexOf(value) === index)

    for (const tag of tags) {
        yield {
            url: `/blog/tag/${tag}/`,
            title: globalTags[tag]?.name ? `All posts tagged with ${globalTags[tag].name}` : `All posts tagged with ${tag}`,
            articles: search.pages(`type=blog post_draft=false ${tag}`, "order date=desc"),
            tag
        }
    }
}