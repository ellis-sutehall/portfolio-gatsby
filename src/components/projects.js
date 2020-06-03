import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Projects = ({ projects }) => {
  return (
    <div className="grid">
      {projects.map((project, index) => (
        <div key={index} className="grid-item">
          <Link className="project-link" to={`/project/${project.node.slug}`}>
            <div className="card">
              <div className="card-image">
                <Img
                  fluid={project.node.thumbnail.childImageSharp.fluid}
                  alt={`Project: ${project.node.title}`}
                  objectFit="cover"
                />
              </div>
              <div className="card-content">
                <h2 className="title is-4 mono">{project.node.title}</h2>
                <h4>{project.node.summary}</h4>
              </div>
              <div className="tags">
                {project.node.stacks.map((tech, index) => (
                  <span key={index} className={`${tech["technology"]} tag`}>
                    {tech["technology"] === "rest_api"
                      ? "rest api"
                      : tech["technology"]}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects
