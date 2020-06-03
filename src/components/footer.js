import React from "react"

const Footer = () => (
  <section className="section footer">
    <div className="container">
      <footer>
        <div className="columns">
          <div className="column has-text-centered has-text-left-desktop">
            <p>Ellis Sutehall 2020</p>
          </div>
          <div className="column has-text-right-desktop has-text-centered">
            <p>
              Built with{" "}
              <a href="https://strapi.io/" rel="noreferrer" target="_blank">
                Strapi
              </a>{" "}
              and{" "}
              <a
                href="https://www.gatsbyjs.org/"
                rel="noreferrer"
                target="_blank"
              >
                Gatsby
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </section>
)

export default Footer
