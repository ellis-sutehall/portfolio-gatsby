import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
  query ProjectsQuery($slug: String!) {
    strapiProjects(slug: { eq: $slug }) {
      title
      summary
      body
      project_link
      github_link
      meta_description
      stacks {
        id
        technology
      }
      image {
        childImageSharp {
          fluid(maxWidth: 1344) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Project = ({ data }) => {
  const project = data.strapiProjects

  const techArr = []
  const values = Object.values(project.stacks)
  for (const value in values) {
    const tech = values[value]["technology"]
    techArr.push(tech)
  }

  let image = project.image
  const projectImage = () => {
    if (typeof image === "object" && image === null) {
      return (
        <div>
          <nav>
            <span>
              Back to <Link to="/projects">projects</Link>
            </span>
          </nav>
          <h1 className="title is-2 mono">Project: {project.title}</h1>
          <div className="content">
            {/* <ReactMarkdown source={project.summary} /> */}
          </div>
        </div>
      )
    } else if (typeof image === "object" && image !== null) {
      return (
        <div>
          <div className="columns">
            <div className="column">
              <nav>
                <span>
                  Back to <Link to="/projects">projects</Link>
                </span>
              </nav>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h1 className="title is-2 mono">Project: {project.title}</h1>
              <div className="content">
                {/* <ReactMarkdown source={project.summary} /> */}
              </div>
              <div className="hero">
                <Img fluid={project.image.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const projectLink = () => {
    if (project.project_link) {
      return (
        <a
          className="button is-primary is-outlined"
          href={project.project_link}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
          <span>{project.title}</span>
        </a>
      )
    } else {
      return false
    }
  }

  return (
    <Layout>
      <SEO title={project.title} description={project.meta_description} />
      <section className="section project">
        <div className="container">
          {projectImage()}
          <div className="tags">
            {techArr.map((tech, index) => (
              <span key={index} className={`${tech} tag`}>
                {tech}
              </span>
            ))}
          </div>
          <div className="buttons">
            {projectLink()}
            <a
              className="button is-primary is-outlined"
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="">
            <div className="content">
              <ReactMarkdown source={project.body} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project
