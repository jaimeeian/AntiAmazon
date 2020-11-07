import React from "react"
import {graphql, Link, useStaticQuery  } from "gatsby"

export default function Home() {

  const data = useStaticQuery(graphql`
  query {
    allContentfulContentType {
      edges {
        node {
          name
          description
        }
      }
    }
  }
  `)
  console.log(data)
  return(
    <div>
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
    </div>
  )
}