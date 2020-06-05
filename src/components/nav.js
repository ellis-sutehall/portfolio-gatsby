import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiBasicPages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  const handleOnClick = () => {
    document.body.classList.toggle("menu-is-open")
    document.querySelector(".navbar-burger").classList.toggle("is-active")
  }

  const closeMenu = () => {
    if (document.body.classList.contains("menu-is-open")) {
      document.body.classList.remove("menu-is-open")
    }
  }

  return (
    <header>
      <button
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        onClick={handleOnClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link className="title is-6 mono" to="/">
              Ellis Sutehall
            </Link>
          </div>
          <div className="main-nav">
            <Link className="navbar-item" to="/" onClick={closeMenu}>
              &#60; home /&#62;
            </Link>
            <Link className="navbar-item" to="/projects" onClick={closeMenu}>
              &#60; projects /&#62;
            </Link>
            {data.allStrapiBasicPages.edges.map((page, index) => (
              <Link
                className="navbar-item"
                key={index}
                to={`/${page.node.slug}`}
                onClick={closeMenu}
              >
                &#60; {page.node.title} /&#62;
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
