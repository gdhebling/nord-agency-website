import * as React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';

const WorkPage = () => {
  return (
    <>
      <Layout navPrimary={false}>
        <SEO title="Our Work" />
        <h1>Work Page</h1>
        <Projects />
      </Layout>
    </>
  );
};

export default WorkPage;
