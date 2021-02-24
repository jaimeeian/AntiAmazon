import React from "react"

// Import components
import Layout from "../components/Layout/Layout"
import TableOfContents from "../components/TableOfContents/TableOfContents"

/**
 * Home page.
 */
export default function Home() {
  /** @todo add Contentful page for home page introduction, then query it here */
  return(
    <Layout>
      <div className="grid md:grid-cols-3 gap-2">
        <article className="prose md:col-span-2">
          <h1>The Case Against Amazon</h1>
          <a href="/copy">Check out this page!</a>
          <p>By the way, this is probably what the home page of the website will be.</p>
          <p>We're doing a lot of cool things here!</p>
        </article>
        <div className="md:col-span-1">
          <TableOfContents />
        </div>
      </div>
      
    </Layout>
  )
}