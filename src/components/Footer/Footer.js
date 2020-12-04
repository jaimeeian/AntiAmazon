import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
    return(
        <span>
            <strong>Anti-Amazon shopper</strong>

            <p><Link to='/' className="underline hover:text-blue-500">About us</Link></p>

            <p><Link to='/' className="underline hover:text-blue-500">The Case against Amazon</Link></p>
            
            <p>created by xxx 2020</p>

            <p><Link to='/' className="underline hover:text-blue-500">Github</Link></p>
        </span>

    )
}