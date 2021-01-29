module.exports = {
  siteMetadata: {
    title: 'Agency Website',
    // siteUrl: "https://contentfulgatsbywebsite.gtsb.io/",
    description: 'Nord Agency Website',
    author: 'Gui Hebling @gdhebling',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'tl7t3jln',
        dataset: 'production',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
