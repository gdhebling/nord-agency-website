import { Link } from 'gatsby';
import React from 'react';
import tw, { styled, css } from 'twin.macro';

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

const Header = styled.div(({ navPrimary }) => [
  tw`flex absolute bg-transparent justify-between items-center top-0 z-50 w-full h-24 px-6 `,

  !navPrimary && tw`static bg-white`,
]);

const Logo = styled.h1(({ navPrimary }) => [
  tw`font-black text-2xl text-blueGray-50 lowercase transition`,

  css`
    a {
      ${tw`no-underline`}
    }

    &:hover {
      ${tw`text-blueGray-400`}
    }
  `,

  !navPrimary && tw`text-blueGray-900`,
]);

const NavBar = styled.nav`
  ${tw`flex justify-between items-center w-full p-4`};

  ul {
    ${tw`flex`}
  }
`;

const NavItem = styled(Link)(({ navPrimary }) => [
  tw`no-underline font-bold text-base lowercase px-6 text-blueGray-50 transition`,

  css`
    &:hover {
      ${tw`text-blueGray-400`}
    }
  `,

  !navPrimary && tw`text-blueGray-900`,
]);
