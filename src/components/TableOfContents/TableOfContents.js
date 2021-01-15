import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SearchBar from '../SearchBar/SearchBar'

export default function TableOfContents() {
    const [ query, setQuery ] = useState('')
    const data = useStaticQuery(graphql`
    query {
        allContentfulTopic {
            edges {
                node {
                    title
                    body {
                        json
                    }
                    slug
                }
            }
        }
    }
    `)

    /**
     * Returns results that include query
     * @todo Return results through more sophisticated search methods, e.g.:
     *      - account for slight spelling mistakes
     *      - filter by tags in addition to title
     */
    const resultsToRender = data
        ? data.allContentfulTopic.edges.filter(edge => edge.node.title.toLowerCase().includes(query.toLowerCase()))
        : data.allContentfulTopic.edges

    return(
        <nav>
            <h2>Table of Contents</h2>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {
                    resultsToRender.map(edge => {
                        const { node } = edge
                        return(
                            <li key={node.title}>
                            <Link to={`/${node.slug}`} className="underline hover:text-blue-500">
                                {node.title}
                            </Link> 
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}