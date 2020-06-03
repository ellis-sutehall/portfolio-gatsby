import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import ContactForm from "../components/contact-form"
import Img from "gatsby-image"

import Layout from "../components/layout"

export const query = graphql`
  query BasicPagesQuery($slug: String!) {
    strapiBasicPages(slug: { eq: $slug }) {
      title
      body
      slug
      image_desktop {
        childImageSharp {
          fluid(maxWidth: 336) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Page = ({ data, location }) => {
  const page = data.strapiBasicPages
  const path = location.pathname
  return (
    <Layout title={page.title}>
      <section className="section">
        <div className="container">
          <h1 className="title is-1 mono">{page.title}</h1>
          {path === "/contact" ? (
            <div className="content">
              <ReactMarkdown source={page.body} />
            </div>
          ) : (
            <div className="columns">
              <div className="column is-3">
                <Img
                  fluid={page.image_desktop.childImageSharp.fluid}
                  objectFit="cover"
                  alt="Ellis Sutehall"
                />
              </div>
              <div className="column is-9">
                <ReactMarkdown source={page.body} />
              </div>
            </div>
          )}
          {path === "/contact" && <ContactForm />}
        </div>
      </section>
    </Layout>
  )
}

export default Page
