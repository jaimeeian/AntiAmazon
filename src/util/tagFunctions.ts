/**
 * Represents a node in the Contentful GraphQL schema.
 */
interface Node {
    title: string
    slug: string
    tags: string[]
}

/**
 * Returns an array of all of the unique tags across all case studies.
 * @param {Node[]} nodes All of the case study nodes, retrieved via a `allContentfulCaseStudy`
 * GraphQL query
 */
export const getAllUniqueTags = (nodes: Node[]) => {
    return nodes.reduce((allTags: string[], node) => {
        let uniqueTags = []
        for (const tag of node.tags) {
            if (!allTags?.includes(tag)) {
                uniqueTags = [...uniqueTags, tag]
            }
        }
        return [...allTags, ...uniqueTags]
    }, [])
}
/**
 * Returns an array of objects corresponding to every tag and their related topics.
 * @param {string[]} tags All of the unique tags throughout the case studies. Should be the result of
 * the getAllUniqueTags() function.
 * @param {Node[]} nodes All of the case study nodes, retrieved via a `allContentfulCaseStudy`
 * GraphQL query
 */
export const getAllTopicsByTag = (tags: string[], nodes: Node[]) => {
    return tags.map(tag => {
        return {
            tag,
            topics: nodes.filter(node => node.tags.includes(tag))
        }
    }
)}