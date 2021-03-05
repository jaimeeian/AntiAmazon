import React from 'react'
import { Link } from 'gatsby'
import LayoutWithTOC from '../components/Layout/LayoutWithTOC'

export default function PageNotFound() {
    return(
        <LayoutWithTOC>
            <article className="container mx-auto prose">
                <h1>Page not found</h1>
                <p>We couldn’t find the page that you were looking for. Double check the URL you entered, then try again.</p>
                <p>Alternatively, you could:
                    <ul>
                        <li>
                            <Link to="/">Return to the main page</Link>
                        </li>
                        <li>
                            <Link to="/">Browse the list of all articles</Link>
                        </li>
                    </ul>
                </p>
            </article>
        </LayoutWithTOC>
        
    )
}