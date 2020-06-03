import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import Nav from "./nav"
import Seo from "./seo"
import Footer from "./footer"

const Layout = ({ children, title }) => {
  // const path = location.pathname
  return (
    <div className="wrapper">
      <Seo title={title} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
