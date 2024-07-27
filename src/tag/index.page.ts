export const layout = "layouts/tags/tag.njk"

export const type = "page"

export default function* ({ tagData, podcasts, projects, search }) {
    const tags = search.values("tags");

    for (const tag of tags) {
        const articles = search.pages(`type=blog post_draft=false ${tag}`, "order date=desc")

        const tagProjects = projects
            .filter((project) => project.tags.includes(tag))

        const tagPodcasts = podcasts
            .filter((podcast) => podcast.tags.includes(tag))

        const talks = search.pages(`type=talk ${tag}`, "order date=desc")

        yield {
            url: `/tag/${tag}/`,
            title: tagData.global[tag]?.name ? `Everything tagged with ${tagData.global[tag].name}` : `Everything tagged with ${tag}`,
            talks,
            articles,
            projects: tagProjects,
            podcasts: tagPodcasts,
            tag,
            count: articles.length + tagProjects.length + tagPodcasts.length + talks.length
        }
    }
}