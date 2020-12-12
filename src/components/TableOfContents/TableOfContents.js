import React, { useState } from "react"
import { Link } from "gatsby"

import SearchBar from '../SearchBar/SearchBar'

export default function TableOfContents() {
    const [ query, setQuery ] = useState('')

    const exampleSearchResults = ['An article', 'Another article', 'A third article']

    return(
        <nav>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {
                    query && exampleSearchResults.map(result => {
                        return(
                            <li>
                                <Link to="/" className="text-blue-500 hover:underline">result</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}