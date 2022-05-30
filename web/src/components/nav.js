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
          <NavItemsWrapper>
            {/* <ul>
              {links.map((link) => (
                <li key={link}>
                  <NavItem navPrimary={navPrimary} to={`/${link}`}>
                    {link}
                  </NavItem>
                </li>
              ))}
            </ul> */}
          </NavItemsWrapper>
        </NavBar>
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.div(({ navPrimary }) => [
  tw`flex absolute bg-transparent justify-between items-center top-0 z-50 w-full h-20v sm:h-10v px-6 `,

  !navPrimary && tw`static bg-white`,
]);

const Logo = styled.h1(({ navPrimary }) => [
  tw`font-black text-2xl sm:text-3xl text-blueGray-50 lowercase transition`,

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
  ${tw`flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full h-full p-4`};

  ul {
    ${tw`flex`}
  }
`;

const NavItemsWrapper = styled.div`
  ${tw`my-6`}
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
