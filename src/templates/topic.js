import React from "react"
import {Link,graphql,useStaticQuery} from "gatsby"

export default function Topic (){
    const data = useStaticQuery(graphql`
    query(
        $slug: String
    ) {
        contentfulTopic(
            slug: {
                eq: $slug
            }
        ) {
              title
              body {
                json
              }
              slug
        }
      }
    `)
    const {
        title,
        body
    } = data.contentfulTopic
    return(
        <div> 
            <h1>{title}</h1>
        </div> 
    )
}