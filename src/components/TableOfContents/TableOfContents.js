import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classNames from 'classnames'

import SearchBar from '../SearchBar/SearchBar'
import Tags from './Tags/Tags'
import { getAllUniqueTags } from '../../util/tagFunctions'

export default function TableOfContents() {
    const [ query, setQuery ] = useState('')
    const [ activeTab, setActiveTab ] = useState('articles')

    const data = useStaticQuery(graphql`
    query {
        allContentfulTopic {
            nodes {
                title
                slug
                tags
            }
        }
    }
    `)

    const { nodes } = data.allContentfulTopic

    /**
     * Returns results that include query
     * @todo Return results through more sophisticated search methods, e.g.:
     *      - account for slight spelling mistakes
     *      - filter by tags in addition to title
     */
    const resultsToRender = data
        ? nodes.filter(node => 
            node.title.toLowerCase().includes(query.toLowerCase()))
        : nodes

    /**
     * @return Classes for the tabs.
     * @param {boolean} isActive a boolean that evaluates to true when the current tab is active.
     */
    const tabClasses = (isActive) => classNames(
        `py-2 px-8 border-b-2 border-transparent text-align-center`,
        !isActive && `hover:border-blue-400 hover:bg-gray-300`,
        isActive && `border-blue-600 text-blue-600`
    )

    const allTags = getAllUniqueTags(nodes)

    return(
        <nav className="space-y-4 max-w-md">
            <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
            <Link to="/toc" className="block text-sm">Browse all articles</Link>
            <SearchBar value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by topic..." />
            {
                query && 
                    <ul className="list-none space-y-2">{
                        resultsToRender && resultsToRender.length > 0 ? resultsToRender.map(node => {
                            const { title, slug, tags } = node
                            return(
                                <li
                                    key={title}
                                    className="rounded bg-gray-300 p-4"
                                >
                                    <Link 
                                        to={`/${slug}`} 
                                        className="underline text-blue-500 block"
                                    >
                                        {title}
                                    </Link>
                                    <Tags tags={tags} title={title} />
                                </li>
                            )
                        }) : <em className="text-gray-600 break-all">We couldn't find any articles matching "{query}".</em>
                        }
                    </ul>
            }
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
                            nodes.map(node => {
                                const { title, slug, tags } = node
                                return(
                                    <li key={title}>
                                        <Link 
                                            to={`/${slug}`} 
                                            className="underline text-blue-500 block"
                                        >
                                            {title}
                                        </Link>
                                        <Tags tags={tags} title={title} />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            }
            {
                activeTab === 'tags' &&
                <div id="tags-toc">
                    <ul>
                        {
                            allTags.map(tag =>
                                <li key={`toc-${tag}`}>
                                    <Link
                                        to={`/toc#${tag}`}
                                        className="underline text-blue-500 block"
                                    >
                                        {tag}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    
                </div>
            }
        </nav>
    )
}