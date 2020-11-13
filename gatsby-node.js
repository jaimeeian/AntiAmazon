const path = require("path")

module.exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions 
    const template = path.resolve("./src/templates/topic.js")
    const response = await graphql(`
    query MyQuery {
        allContentfulTopic {
          edges {
            node {
              title
              body {
                json
              }
              slug
            }
          }
        }
      }`)
      response.data.allContentfulTopic.edges.forEach(edge => {
          createPage({
              component: template, 
              path: `/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug 
              }
          })
        })
}