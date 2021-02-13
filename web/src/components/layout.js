import React from 'react';
import Nav from './nav';
import styled from 'styled-components';
import { GlobalStyles } from 'twin.macro';

// import GlobalStyle from '../theme/globalStyles';
import Footer from './footer';

const Main = styled.main``;

const Layout = ({ children, navPrimary }) => {
  return (
    <>
      <GlobalStyles />
      <Nav navPrimary={navPrimary} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
