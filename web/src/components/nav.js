import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const links = ['work', 'about', 'contact'];

const Nav = ({ navPrimary }) => {
  return (
    <>
      <Header navPrimary={navPrimary}>
        <NavBar>
          <Logo navPrimary={navPrimary}>
            <Link to="/">Nord</Link>
          </Logo>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <NavItem navPrimary={navPrimary} to={`/${link}`}>
                  {link}
                </NavItem>
              </li>
            ))}
          </ul>
        </NavBar>
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.div`
  display: flex;
  position: ${(props) => (props.navPrimary ? 'fixed' : 'static')};
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.navPrimary ? 'transparent' : '#fff')};
  min-height: 10vh;
  width: 100%;
  top: 0;
  z-index: 99;
`;

const Logo = styled.h1`
  font-weight: 900;
  text-transform: lowercase;

  a {
    text-decoration: none;
    color: ${(props) => (props.navPrimary ? '#fdfdfd' : '#212121')};
    transition: all 200ms ease;

    &:hover {
      color: rebeccapurple;
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    padding: 0 2rem;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  text-transform: lowercase;
  color: ${(props) => (props.navPrimary ? '#fdfdfd' : '#212121')};

  transition: all 200ms ease;

  &:hover {
    color: rebeccapurple;
  }
`;
