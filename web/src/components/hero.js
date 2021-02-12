import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-image.jpg';
import textImg from '../images/hero-text-background.jpg';

const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${heroImg}) 50% 55% no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  max-width: 3000px;
  margin: 0;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.h1`
  font-size: 9rem;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  white-space: pre-wrap;
  line-height: 75%;

  background: url(${textImg}) 50% 30% no-repeat;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
`;

const Hero = () => {
  return (
    <HeroDiv>
      <HeroImageWrapper>
        <HeroText>{`Ideas\n that\n Inspire`}</HeroText>
      </HeroImageWrapper>
    </HeroDiv>
  );
};

export default Hero;
