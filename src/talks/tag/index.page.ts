export const layout = "layouts/tags/talk.njk"

export default function* ({ tagData, search }) {
    const posts = search.pages("type=talk", "order date=desc");

    const tags = Array.from(posts)
        .map((post) => post.tags)
        .flat()
        .filter((value, index, array) => array.indexOf(value) === index)

    for (const tag of tags) {
        yield {
            url: `/talks/tag/${tag}/`,
            title: tagData.global[tag]?.name ? `All talks tagged with ${tagData.global[tag].name}` : `All talks tagged with ${tag}`,
            talks: search.pages(`type=talk ${tag}`, "order date=desc"),
            tag
        }
    }
}