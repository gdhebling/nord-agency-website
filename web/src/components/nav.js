import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  width: 100%;
  z-index: 99;
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

const Logo = styled.h1`
  font-weight: 900;
  text-transform: lowercase;

  a {
    text-decoration: none;
    color: #fdfdfd;
    transition: all 200ms ease;

    &:hover {
      color: rebeccapurple;
    }
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  text-transform: lowercase;
  color: #fdfdfd;

  transition: all 200ms ease;

  &:hover {
    color: rebeccapurple;
  }
`;

const Nav = () => {
  return (
    <>
      <Header>
        <NavBar>
          <Logo>
            <Link to="/">Nord</Link>
          </Logo>
          <ul>
            <li>
              <NavItem to="/work">Work</NavItem>
            </li>
            <li>
              <NavItem to="/about">About</NavItem>
            </li>
            <li>
              <NavItem to="/contact">Contact</NavItem>
            </li>
          </ul>
        </NavBar>
      </Header>
    </>
  );
};

export default Nav;
