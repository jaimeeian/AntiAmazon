import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classNames from 'classnames'

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

    const tagResultsToRender = data
    /**
     * @return Classes for the tabs.
     * @param {boolean} isActive a boolean that evaluates to true when the current tab is active.
     */
    const tabClasses = (isActive) => classNames(
        `p-2 border-b-2 border-transparent`,
        !isActive && `hover:border-blue-400 hover:bg-gray-300`,
        isActive && `border-blue-600 text-blue-600`
    )

    return(
        <nav className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by topic..." />
            <div className="flex justify-around">
                <button 
                    className={tabClasses(activeTab === 'articles')}
                    onClick={() => setActiveTab('articles')}
                >
                    Articles</button>
                <button 
                    className={tabClasses(activeTab === 'tags')}
                    onClick={() => setActiveTab('tags')}
                >
                    Tags</button>
            </div>
            {
                activeTab === 'articles' &&
                <div id="articles-toc">
                    <div>
                        <ul className="list-none space-y-4">
                        {
                            resultsToRender 
                                ? resultsToRender.map(edge => {
                                        const { node } = edge
                                        const { title, slug, tags } = node
                                        return(
                                            <li key={title}>
                                                <Link 
                                                    to={`/${slug}`} 
                                                    className="underline text-blue-500 block"
                                                >
                                                    {title}
                                                </Link>
                                                {
                                                    tags.map((tag, i) => 
                                                        <Link
                                                            key={title + tag}
                                                            className="inline-block text-sm text-gray-600 hover:text-blue-500"
                                                            to="/"
                                                        >
                                                            { tag + (i < tags.length - 1 ? ', ' : '') }
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
                </div>
            }
            {
                activeTab === 'tags' &&
                <div id="tags-toc">

                </div>
            }
        </nav>
    )
}