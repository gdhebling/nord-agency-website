import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer``;

const FooterColumn = styled.div``;

const FooterTitle = styled.h4``;

const FooterItem = styled.p``;

const FooterSocialMedia = styled.div``;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <FooterTitle>Footer</FooterTitle>
        <FooterItem>email</FooterItem>
        <FooterItem>phone</FooterItem>
      </FooterColumn>

      <FooterColumn>
        <FooterTitle>Footer</FooterTitle>
        <FooterItem>email</FooterItem>
        <FooterItem>phone</FooterItem>
      </FooterColumn>

      <FooterColumn>
        <FooterSocialMedia>f i li</FooterSocialMedia>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
