import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import LayoutWithTOC from '../components/Layout/LayoutWithTOC'
import { getAllUniqueTags, getAllTopicsByTag } from '../util/tagFunctions'

export default function TableOfContentsPage() {
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
    const allTopicsByTag = getAllTopicsByTag(getAllUniqueTags(nodes), nodes)

    return (
        <LayoutWithTOC>
            <section className="prose">
                <h1>All articles</h1>
                {
                    allTopicsByTag.map(topic => {
                        const { tag, topics } = topic
                        return(
                            <div>
                                <h2 id={tag}>{tag[0].toUpperCase() + tag.slice(1, tag.length)}</h2>
                                <ul>
                                    {
                                        topics.map(t => 
                                            <li key={tag + t.title}>
                                                <Link to={'/' + t.slug}>{t.title}</Link>    
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
        </LayoutWithTOC>
    )
}