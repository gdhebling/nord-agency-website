// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nord Agency by gdhebling',
    titleTemplate: '%s · Nord Agency by gdhebling · Oslo, Norway',
    description: 'Nord Agency Website',
    author: '@gdhebling',
    siteUrl: 'https://nord-agency-gdhebling.netlify.app/',
    image: '/images/website-thumbnail.png',
    twitterUsername: '@gdhebling',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nord agency · Gui Hebling · Front-End Web Developer · Oslo, Norway`,
        short_name: `nord agency @gdhebling`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        background_color: `#0f172a`,
        theme_color: `#0f172a`,
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
