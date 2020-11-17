import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
  
  /**
   * @todo create page layout component
   */
  return(
    <div className="container mx-auto">
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
        <h1>Some HTML stuff</h1>
        <div>
          <h2>This heading and the next two paragraphs are all in a nested div.</h2>
          <p>It goes inside the parent <code>div</code> element.</p>
          <p>Note that this <code>div</code> doesn't have any special styles. <code>div</code> elements don't have any special meaning, their only real utility is to group other elements for the most part. So they don't get any special styling on their own.</p>
        </div>
        <div style={{ 'padding': '1rem', 'backgroundColor': 'yellow', 'border': '1px dotted black' }}>
          Now <em>this</em> is a <code>div</code> element with styles.
        </div>
        <section>
          <h3 style={{ color: 'green', 'fontFamily': 'sans-serif' }}>This is a h3 (Heading 3) element, on the other hand. H3s and other typography elements are often styled visually.</h3>
        </section>
      </article>
      
    </div>
  )
}