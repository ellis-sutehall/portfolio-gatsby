import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank You" />
    <section className="section">
      <div className="container">
        <h1 className="title is-1 mono">Thank you for your email</h1>
        <p>
          I will get back to you as soon as I can. In the meantime, checkout my{" "}
          <a href="/projects">projects</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default ThankYou
