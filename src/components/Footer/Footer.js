import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
    return(
        <div className="bg-gray-700 text-white">
            <ul className="list-none p-8">
                <li className="font-bold">Anti-Amazon shopper</li>

                <li className='space-y-8'><Link to='/' className="underline hover:text-blue-500">About us</Link></li>

                <li><Link to='/' className="underline hover:text-blue-500">The Case against Amazon</Link></li>
                
                <li>created by xxx 2020</li>

                <li><Link to='/' className="underline hover:text-blue-500">Github</Link></li>
            </ul>
        </div>

    )
}