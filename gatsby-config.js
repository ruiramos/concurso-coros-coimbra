module.exports = {
  siteMetadata: {
    title: `IV Concurso de Coros Coimbra`,
    description: `26 e 27 de setembro de 2026 – Sala D. Afonso Henriques, Antiga Igreja Convento São Francisco`,
    author: `@ruimramos`,
    siteUrl: `https://concursocoroscoimbra.com`,
    image: `/og-image.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coros`,
        path: `${__dirname}/src/content/coros`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IV Concurso de Coros Coimbra`,
        short_name: `Coros Coimbra`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#56c8e5`,
        display: `minimal-ui`,
        icon: `src/images/icon-iv.png`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
