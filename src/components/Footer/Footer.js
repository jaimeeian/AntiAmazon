import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
    return(
        <div className="bg-primary text-white">
            <p className="font-bold">Anti-Amazon shopper</p>

            <p><Link to='/' className="underline hover:text-blue-500">About us</Link></p>

            <p><Link to='/' className="underline hover:text-blue-500">The Case against Amazon</Link></p>
            
            <p>created by xxx 2020</p>

            <p><Link to='/' className="underline hover:text-blue-500">Github</Link></p>
        </div>

    )
}