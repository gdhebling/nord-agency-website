import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import heroImg from '../images/hero-image.jpg';
import textImg from '../images/hero-text-background.jpg';

const HeroDiv = styled.div`
  ${tw`flex items-center justify-center h-100v w-full bg-cover m-0`}
  background: url(${heroImg}) 50% 58% no-repeat;
`;

const HeroImageWrapper = styled.div`
  ${tw`flex items-center justify-center`}
`;

const HeroText = styled.h1`
  ${tw`text-7xl sm:text-9xl sm:leading-75p sm:py-4 font-bold uppercase text-center whitespace-pre-wrap `}

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
