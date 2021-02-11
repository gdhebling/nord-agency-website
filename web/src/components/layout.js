import React from 'react';
import Nav from './nav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyle from '../theme/globalStyles';
import Footer from './footer';

const Main = styled.main``;

const Layout = ({ children, navPrimary }) => {
  return (
    <>
      <GlobalStyle />
      <Nav navPrimary={navPrimary} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
