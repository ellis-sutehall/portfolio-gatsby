import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import ContactForm from "../components/contact-form"
// import Img from "gatsby-image"

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
  let description
  if (path === "/contact") {
    description =
      "Please feel free to get in toucht to discuss a potential project, a site update or any other query you might have."
  } else {
    description =
      "I am web developer with a focus on front-end living and working in Cambridge, UK. I have over 8 years experience in web development with 2 of those years working in an agency."
  }
  return (
    <Layout>
      <SEO title={page.title} description={description} />
      <section className="section">
        <div className="container">
          <h1 className="title is-1 mono">{page.title}</h1>
          {path === "/contact" ? (
            <div className="columns contact">
              <div className="column is-half">
                <div className="content">
                  <ReactMarkdown source={page.body} />
                </div>
              </div>
              <div className="column is-half">
                <ContactForm />
              </div>
            </div>
          ) : (
            <div className="columns">
              {/* <div className="column is-3">
                <Img
                  fluid={page.image_desktop.childImageSharp.fluid}
                  objectFit="cover"
                  alt="Ellis Sutehall"
                />
              </div> */}
              <div className="column is-9">
                <div className="content">
                  <ReactMarkdown source={page.body} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Page
