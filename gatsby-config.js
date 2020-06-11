require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Ellis Sutehall's Portfolio",
    description: "Portfolio site for Ellis Sutehall",
    author: "Ellis Sutehall",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-169202316-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          // "article",
          // "category",
          "projects",
          "basic-pages",
        ],
        singleTypes: ["home-page", "work-landing"],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#494850",
        theme_color: "#494850",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}
