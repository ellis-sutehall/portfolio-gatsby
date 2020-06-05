import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
// import { motion } from "framer-motion"

export const data = graphql`
  query {
    strapiHomePage {
      name
      location
      summary
      occupation
      photo {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// const variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// }

const IndexPage = ({ data }) => {
  const home = data.strapiHomePage
  return (
    <Layout title="Home">
      <section className="section home has-text-centered">
        <div className="columns">
          <div className="column">
            <h1 className="title is-2 mono">{home.name}</h1>
            <h2 className="title is-2 mono">&#60; {home.occupation} /&#62;</h2>
            <h6 className="title is-6 mono">{home.location}</h6>
            <div className="photo">
              <Img
                className="profile-img"
                fluid={home.photo.childImageSharp.fluid}
                alt={home.name}
              />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ReactMarkdown source={home.summary} />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-quarter-desktop">
            <Link to="/contact" className="button is-primary is-fullwidth">
              Hire me
            </Link>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-quarter-desktop">
            <div className="columns is-mobile ">
              <div className="column is-half">
                <Link
                  to="/projects"
                  className="button is-secondary is-fullwidth"
                >
                  Projects
                </Link>
              </div>
              <div className="column is-half">
                <Link to="/about" className="button is-secondary is-fullwidth">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
