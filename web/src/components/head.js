import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return <Helmet title={`${title} | ${site.siteMetadata.title}`} />;
};

export default Head;
