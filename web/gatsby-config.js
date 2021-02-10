// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nord Agency by gdhebling',
    titleTemplate: '%s · Nord Agency by gdhebling · Oslo, Norway',
    description: 'Nord Agency Website',
    author: '@gdhebling',
    siteUrl: 'https://gdhebling.com',
    image: '/images/website-thumbnail.png',
    twitterUsername: '@gdhebling',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
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
        background_color: `#34495E`,
        theme_color: `#34495E`,
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
