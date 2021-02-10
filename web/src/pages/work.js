import * as React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';

const WorkPage = () => {
  return (
    <>
      <Layout>
        <SEO />
        <h1>Work Page</h1>
        <Projects />
      </Layout>
    </>
  );
};

export default WorkPage;
