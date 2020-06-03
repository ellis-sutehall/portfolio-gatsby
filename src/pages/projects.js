import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import ProjectsComponent from "../components/projects"
import Layout from "../components/layout"

const ProjectsLanding = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiWorkLanding {
        title
        summary
      }
      allStrapiProjects(sort: { fields: Order, order: ASC }) {
        edges {
          node {
            title
            summary
            body
            project_link
            slug
            github_link
            strapiId
            Order
            stacks {
              technology
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 660) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projectslanding = data.strapiWorkLanding
  return (
    <Layout title="Projects">
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title is-1 mono">{projectslanding.title}</h1>
            <div className="content">
              <ReactMarkdown source={projectslanding.summary} />
            </div>
          </div>
        </div>
      </section>
      <section className="section projects">
        <div className="container">
          <ProjectsComponent projects={data.allStrapiProjects.edges} />
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsLanding
