import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function OtherTopics({ current, tags }) {
    const data = useStaticQuery(graphql`
        query topicsByTags {
            allContentfulTopic {
                edges {
                    node {
                        tags
                        slug
                        title
                    }
                }
            }
        }
    `)

    /**
     * Returns an array of 0-3 pages whose tags match the current page's tags.
     * @todo: should probably rewrite the filter() callback function to be declarative
     */
    const otherTopics = data.allContentfulTopic.edges.filter(({node}) => {
        for (const tag of tags) {
            if (!(node.title === current) && node.tags.includes(tag)) return true
        }
        return false
    }).map(edge => ({ slug: edge.node.slug, title: edge.node.title }))
      .slice(0, 3)

    return(
        <aside>
            <h2 className="text-2xl font-bold">Other topics</h2>
            <ul className="text-blue-600 space-y-3">
                {
                    otherTopics.map(topic => 
                        <li key={`other-topic--${topic.slug}`}>
                            <Link to={'/' + topic.slug} className="underline hover:text-blue-500">
                                {topic.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}