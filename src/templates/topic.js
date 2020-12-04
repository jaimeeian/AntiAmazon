import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/Layout/Layout'
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
        }
      }
    `)

    const {
        title,
        body
    } = data.contentfulTopic

    return(
        <Layout>
            <h1>{title}</h1>
            { documentToReactComponents(body.json) }
            <hr />
            <OtherTopics />
            <Link to="/">Back to the home page</Link>
        </Layout> 
    )
}