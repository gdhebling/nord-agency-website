import React from 'react';

import styled, { css } from 'styled-components';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import tw from 'twin.macro';

const FooterWrapper = styled.footer`
  ${tw`h-60v sm:h-40v flex flex-col sm:flex-row items-center justify-evenly py-12 bg-blueGray-100`}
`;

const FooterColumn = styled.div`
  ${tw`text-center m-2 sm:m-0 sm:text-left`}
`;

const FooterTitle = styled.h4`
  ${tw`text-2xl font-bold uppercase my-4`}
`;

const FooterItem = styled.p`
  ${tw`text-base my-2 mx-0`}
`;

const SocialMediaWrapper = styled(FooterColumn)`
  ${tw`flex my-4`}
`;

const StyledSocialMediaIcons = css`
  cursor: pointer;
  font-size: 2rem;
  margin: 0 0.5rem;
`;

const StyledFacebookIcon = styled(FaFacebookF)`
  ${StyledSocialMediaIcons}
`;
const StyledLinkedInIcon = styled(FaLinkedinIn)`
  ${StyledSocialMediaIcons}
`;
const StyledInstagramIcon = styled(FaInstagram)`
  ${StyledSocialMediaIcons}
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterItem>hei@nord.no</FooterItem>
        <FooterItem>+47 12 34 56 78</FooterItem>
      </FooterColumn>

      <FooterColumn>
        <FooterTitle>Visit Us</FooterTitle>
        <FooterItem>Tollbugata 8</FooterItem>
        <FooterItem>0152 Oslo, Norway</FooterItem>
      </FooterColumn>

      <SocialMediaWrapper>
        <StyledFacebookIcon />
        <StyledLinkedInIcon />
        <StyledInstagramIcon />
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
