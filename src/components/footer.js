import React from "react"
import Moment from "react-moment"

const date = new Date()

const Footer = () => (
  <section className="section footer">
    <div className="container">
      <footer>
        <div className="columns">
          <div className="column has-text-centered has-text-left-tablet">
            <p>
              Ellis Sutehall &copy; <Moment format="YYYY">{date}</Moment>. Fast.
              Secure. Modern
            </p>
          </div>
          <div className="column has-text-right-tablet has-text-centered">
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
