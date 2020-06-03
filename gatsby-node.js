/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        basicpages: allStrapiBasicPages {
          edges {
            node {
              slug
              strapiId
            }
          }
        }
        projects: allStrapiProjects {
          edges {
            node {
              slug
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create pages
  // const articles = result.data.articles.edges
  // const categories = result.data.categories.edges
  const projects = result.data.projects.edges
  const basicpages = result.data.basicpages.edges

  // articles.forEach((article, index) => {
  //   createPage({
  //     path: `/article/${article.node.strapiId}`,
  //     component: require.resolve("./src/templates/article.js"),
  //     context: {
  //       id: article.node.strapiId,
  //     },
  //   })
  // })

  // categories.forEach((category, index) => {
  //   createPage({
  //     path: `/category/${category.node.strapiId}`,
  //     component: require.resolve("./src/templates/category.js"),
  //     context: {
  //       id: category.node.strapiId,
  //     },
  //   })
  // })

  projects.forEach((project, index) => {
    createPage({
      path: `/project/${project.node.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id: project.node.strapiId,
        slug: project.node.slug,
      },
    })
  })

  basicpages.forEach((page, index) => {
    createPage({
      path: `${page.node.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.node.strapiId,
        slug: page.node.slug,
      },
    })
  })
}
