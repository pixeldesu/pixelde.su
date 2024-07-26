export const layout = "layouts/tags/blog.njk"

export const type = "page"

export default function* ({ tagData, search }) {
    const posts = search.pages("type=blog post_draft=false", "order date=desc");

    const tags = Array.from(posts)
        .map((post) => post.tags)
        .flat()
        .filter((value, index, array) => array.indexOf(value) === index)

    for (const tag of tags) {
        yield {
            url: `/blog/tag/${tag}/`,
            title: tagData.global[tag]?.name ? `All posts tagged with ${tagData.global[tag].name}` : `All posts tagged with ${tag}`,
            articles: search.pages(`type=blog post_draft=false ${tag}`, "order date=desc"),
            tag
        }
    }
}