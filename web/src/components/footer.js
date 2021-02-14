import React from 'react';

import styled, { css } from 'styled-components';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import tw from 'twin.macro';

const FooterWrapper = styled.footer`
  ${tw`h-60v sm:h-40v flex flex-col sm:flex-row items-center justify-evenly py-12 bg-blueGray-100`}
`;

const FooterColumn = styled.div`
  ${tw`text-center m-2 sm:m-0 sm:text-left flex flex-col`}
`;

const FooterTitle = styled.h4`
  ${tw`text-2xl font-bold uppercase my-4`}
`;

const FooterItem = styled.p`
  ${tw`text-base my-2 mx-0`}
`;

const ContactInfo = styled.a`
  ${tw`text-base my-2 mx-0 transition cursor-pointer hover:text-blueGray-500`}
`;

const SocialMediaWrapper = styled(FooterColumn)`
  ${tw`flex my-4 flex-row`}
`;

const StyledSocialMediaIcons = css`
  ${tw`text-3xl mx-2 transition cursor-pointer hover:text-blueGray-500`}
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
        <ContactInfo href="mailto:hei@nord.no?subject=Hei, Nord!">
          hei@nord.no
        </ContactInfo>
        <ContactInfo href="tel:+4712345678">+47 12 34 56 78</ContactInfo>
      </FooterColumn>

      <FooterColumn>
        <FooterTitle>Visit Us</FooterTitle>
        <FooterItem>Tollbugata 8</FooterItem>
        <FooterItem>0152 Oslo, Norway</FooterItem>
      </FooterColumn>

      <SocialMediaWrapper>
        <StyledFacebookIcon />
        <StyledInstagramIcon />
        <StyledLinkedInIcon />
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
