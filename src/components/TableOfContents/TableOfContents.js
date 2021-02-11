import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SearchBar from '../SearchBar/SearchBar'

export default function TableOfContents() {
    const [ query, setQuery ] = useState('')
    const [ activeTab, setActiveTab ] = useState('articles')
    const data = useStaticQuery(graphql`
    query {
        allContentfulTopic {
            edges {
                node {
                    title
                    slug
                    tags
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

    const tabClass = `border-b-1 hover:border-blue-400 hover:text-blue-400`
    const inactiveTabClass = `border-transparent`
    const activeTabClass = `border-blue-600 text-blue-600`

    return(
        <nav className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by topic..." />
            <div className="flex justify-around">
                <div className={tabClass + (activeTab === 'articles' ? activeTabClass : inactiveTabClass) } onClick={() => setActiveTab('articles')}>Articles</div>
                <div className={tabClass + (activeTab === 'tags' ? activeTabClass : inactiveTabClass) } onClick={() => setActiveTab('tags')}>Tags</div>
            </div>
            <div>
                <ul className="list-none space-y-4">
                {
                    resultsToRender 
                        ? resultsToRender.map(edge => {
                                const { node } = edge
                                return(
                                    <li key={node.title}>
                                        <Link to={`/${node.slug}`} className="underline text-blue-500 block">
                                            {node.title}
                                        </Link>
                                        {
                                            node.tags.map((tag, i) => 
                                                <Link className="inline-block text-sm text-gray-600 hover:text-blue-500">
                                                    { tag + (i < node.tags.length - 1 ? ', ' : '') }
                                                </Link> 
                                            )
                                        }
                                    </li>
                                )
                            })
                        : <em className="text-gray-600">We couldn't find anything matching your search query.</em>
                }
                </ul>
            </div>
            
        </nav>
    )
}