import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import OtherTopics from '../components/OtherTopics/OtherTopics'

/**
 * Topic page component.
 * Returns a topic page using data queried from Contentful.
 */
export default function Topic() {
    const data = useStaticQuery(graphql`
    query(
        $slug: String
    ) {
        contentfulTopic(
            slug: {
                eq: $slug
            }
        ) {
            title
            body {
                json
            }
            slug
            tags
        }
      }
    `)

    const {
        title,
        body,
        tags
    } = data.contentfulTopic

    /** @todo create SEO component containing title and description metadata */
    return(
        <Layout className="space-y-8">
            <Link to="/" className="inline-block text-blue-500 hover:underline">&larr; Back to home</Link>
            <SearchBar />
            <article className="prose">
                <h1>{title}</h1>
                <span className="text-sm">Tags: </span>
                {
                    tags.map((tag, i) => 
                        <Link 
                            key={`topic-tag--${tag}`} 
                            to="/" 
                            className="inline text-sm text-blue-500 hover:underline"
                        >
                            { tag + (i < tags.length - 1 ? ', ' : '') }
                        </Link> 
                    )
                }
                { documentToReactComponents(body.json) }
            </article>
            <hr />
            <OtherTopics current={title} tags={tags}  />
            <Link to="/" className="inline-block my-4 hover:text-blue-500">&larr; Back to home</Link>
        </Layout> 
    )
}