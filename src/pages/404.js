import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <div className="container">
        <h1>Not Found</h1>
        <p>You just found a page that doesn&#39;t exist....</p>
        <a href="/" className="button is-primary">
          Home
        </a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
