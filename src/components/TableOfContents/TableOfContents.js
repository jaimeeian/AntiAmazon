import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SearchBar from '../SearchBar/SearchBar'

export default function TableOfContents() {
    const [ query, setQuery ] = useState('')

    const exampleSearchResults = ['An article', 'Another article', 'A third article']

    const searchResults = useStaticQuery(graphql`
    query MyQuery ($query: String) {
        allContentfulTopic(filter: {title: {eq: $query}}) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
      
    `)

    return(
        <nav>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {
                    query && exampleSearchResults.map(result => {
                        return(
                            <li>
                                <Link to="/" className="text-blue-500 hover:underline">{result}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}