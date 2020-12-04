import React, { useState } from "react"
import { Link } from "gatsby"

function SearchBar({ value, onChange }) {
    return(
        <input type="text" classname="" value={value} onChange={onChange} placeholder="search here..." />
    )
}

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
                                <Link to="/">result</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}