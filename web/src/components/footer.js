import React from 'react';
import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { FacebookF, Instagram, LinkedinIn } from '@styled-icons/fa-brands';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  height: 40vh;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem;
  display: flex;
  background: #f6f7fa;
`;

const FooterColumn = styled.div`
  text-align: left;
`;

const FooterTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 1rem 0;
`;

const FooterItem = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
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

/* const FooterSocialMedia = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${StyledIconBase} {
    margin: 0 0.2rem;
  }
`; */

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

      <FooterColumn>
        <StyledFacebookIcon />
        <StyledLinkedInIcon />
        <StyledInstagramIcon />
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
