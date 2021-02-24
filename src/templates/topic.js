import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar/SearchBar'
import OtherTopics from '../components/OtherTopics/OtherTopics'
import Tags from '../components/TableOfContents/Tags/Tags'

const HomeLink = () => <Link to="/" className="inline-block text-blue-500 hover:underline">&larr; Back to home</Link>

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
            <HomeLink />
            <SearchBar />
            <article className="prose container mx-auto">
                <h1>{title}</h1>
                Tags: <Tags tags={tags} title={title} />
                { documentToReactComponents(body.json) }
            </article>
            <hr />
            <OtherTopics current={title} tags={tags}  />
            <HomeLink />
        </Layout> 
    )
}