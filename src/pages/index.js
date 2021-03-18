import React from "react"
import { ThemeContext } from '../state/ThemeContext'
// Import components
import LayoutWithTOC from "../components/Layout/LayoutWithTOC"

/**
 * Home page.
 */
export default function Home() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)
  /** @todo add Contentful page for home page introduction, then query it here */
  return(
    <LayoutWithTOC>
      <article className="prose md:col-span-2">
        <h1>The Case Against Amazon</h1>
        <a href="/copy">Check out this page!</a>
        <p>By the way, this is probably what the home page of the website will be.</p>
        <p>We're doing a lot of cool things here!</p>
        <button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
          Toggle dark mode
        </button>
      </article>
    </LayoutWithTOC>
  )
}