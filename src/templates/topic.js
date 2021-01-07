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
        <Layout>
            <Link to="/" className="inline-block mb-4 hover:text-blue-500">&larr; Back to home</Link>
            <SearchBar className="mb-4" />
            <h1>{title}</h1>
            { documentToReactComponents(body.json) }
            <hr />
            <OtherTopics tags={tags} />
            <Link to="/">Back to the home page</Link>
        </Layout> 
    )
}