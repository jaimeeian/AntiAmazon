import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

export default function About() {
    return(
        <Layout>
            <article className="container mx-auto prose">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex dignissimos modi ipsa dolorum distinctio, nihil dicta nisi quod! Iusto impedit, sed reiciendis quisquam assumenda nihil esse officiis nulla exercitationem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex dignissimos modi ipsa dolorum distinctio, nihil dicta nisi quod! Iusto impedit, sed reiciendis quisquam assumenda nihil esse officiis nulla exercitationem!</p>
            </article>
        </Layout>
    )
}