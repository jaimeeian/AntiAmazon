import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

/**
 * @todo Implement "tag system" for posts
 * Assign relevant tags to each post in Contentful, e.g. "Bezos", "labor rights", "working conditions"
 *      Maybe derive tags from a pre-defined set of categories that we think would be appropriate
 * Then, query similar posts via GraphQL
 * https://significa.co/blog/advanced-blog-system-in-gatsby
 * https://nimblewebdeveloper.com/blog/gatsby-generate-related-posts-at-build-time
 * https://khalilstemmler.com/articles/gatsby-related-posts-component/
 * 
 * Simple implementation: list up to four related posts that are NOT the current post
 */
export default function OtherTopics({ tags }) {

    // const data = useStaticQuery(graphql`
    //     query (
    //         $tags: [String!]!
    //     ) {
    //         allContentfulTopic(filter: {tags: {eq: $tags}}) {
    //             edges {
    //                 node {
    //                     title
    //                     tags
    //                 }
    //             }
    //         }
    //     }
    // `)

    const placeholderOfOtherTopics = [
        '/', '/', '/', '/', '/', 
    ]
    return(
        <aside>
            <h2>Other topics</h2>
            <ul className="text-blue-600 space-y-3">
                {
                    placeholderOfOtherTopics.map(topic => {
                        return(
                            <li>
                                <Link to={topic} className="underline hover:text-blue-500">This is a link</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}