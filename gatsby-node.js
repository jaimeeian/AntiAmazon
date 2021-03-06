/* Import the path module */
const path = require("path")

/* Use Gatsby's createPages API to dynamically create
 * pages on the site for every topic  
*/
module.exports.createPages = async ({ graphql, actions }) => {
    // Help get the necessary data to call createPages
    const { createPage } = actions 
    const template = path.resolve("./src/templates/topic.js")

    // Query the topics from Contentful
    const response = await graphql(`
      query MyQuery {
        allContentfulTopic {
          nodes {
            title
            body {
              json
            }
            slug
            tags
          }
        }
      }
      `)

      // Create pages for every node in the Topic content type
      response.data.allContentfulTopic.nodes.forEach(node => {
          createPage({
            component: template,  // the page template to use
            path: `/${node.slug}`, // the slug to create the page at
            context: {
                slug: node.slug,
            }
          })
      })
}