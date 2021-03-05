import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'

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

    /**
     * Returns an array of all of the unique tags across the topic nodes.
     */
    const allTags = nodes.reduce((allTags, node) => {
        let uniqueTags = []
        for (const tag of node.tags) {
            if (!allTags?.includes(tag)) {
                uniqueTags = [...uniqueTags, tag]
            }
        }
        return [...allTags, ...uniqueTags]
    }, [])

    const allTopicsByTag = allTags.map(tag => {
        return {
            tag,
            topics: nodes.filter(node => node.tags.includes(tag))
        }
    })

    return (
        <Layout>
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
                                                <Link to={t.slug}>{t.title}</Link>    
                                            </li>
                                        )
                                    }
                                </ul>
                                
                            </div>
                        )
                        
                    })
                }
            </section>
            
        </Layout>
    )
}