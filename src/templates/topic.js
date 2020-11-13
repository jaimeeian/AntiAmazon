import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

/**
 * Topic page component.
 * Retrieves data from Contentful via GraphQL and
 * returns the page as JSX.
 */
export default function Topic (){
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

    console.log(body.json)

    return(
        <div>
            <h1>{title}</h1>
            { documentToReactComponents(body.json) }
            <hr />
            <Link to="/">Back to the home page</Link>
        </div> 
    )
}