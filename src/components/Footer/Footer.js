import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Footer() {
    return(
        <div className="bg-gray-700 text-white mt-8">
            <ul className="list-none p-8">
                <li className="font-bold mb-4">Anti-Amazon shopper</li>
                <li><Link to='/about' className="underline hover:text-blue-500">About us</Link></li>
                <li className="mb-4"><Link to='/' className="underline hover:text-blue-500">The Case against Amazon</Link></li>
                <li>created by xxx 2020</li>
                <li><a href='https://github.com/jaimeeian/AntiAmazon' className="underline hover:text-blue-500">Github</a></li>
            </ul>
        </div>

    )
}