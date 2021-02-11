import * as React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <>
      <Layout navPrimary={true}>
        <SEO />
        <Hero />
        <Projects />
      </Layout>
    </>
  );
};

export default IndexPage;
