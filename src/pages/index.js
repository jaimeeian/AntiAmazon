import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

// Import components
import Layout from "../components/Layout/Layout"
import TableOfContents from "../components/TableOfContents/TableOfContents"

/**
 * Home page.
 */
export default function Home() {

  /**
   * @todo add Contentful page for home page introduction, then query it here
   */
  const data = useStaticQuery(graphql`
  query MyQuery {
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
  
  return(
    <Layout>
      <h3>Table of Contents</h3>
      <TableOfContents />
      <ul>
      {
        data.allContentfulTopic.edges.map(edge => {
          const node = edge.node
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
      <article>
        <h1>Welcome!</h1>
        <a href="/copy">Check out this page!</a>
        <p>By the way, this is probably what the home page of the website will be.</p>
        <p>We're doing a lot of cool things here!</p>
        
      </article>
      
    </Layout>
  )
}