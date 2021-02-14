import React from 'react';
import tw, { styled } from 'twin.macro';

const AboutHome = () => {
  return (
    <AboutWrapper>
      <TitleAbout>
        We are a digital agency based <br /> in Oslo, Norway.
      </TitleAbout>
      <SubtitleAbout>
        Turning ideas into a reality that shapes the <br /> future of digital
        products.
      </SubtitleAbout>
      <AboutUsBtn>read more about us</AboutUsBtn>
    </AboutWrapper>
  );
};

export default AboutHome;

const AboutWrapper = styled.div`
  ${tw`container h-full sm:h-70v mx-auto p-8 flex flex-col items-center justify-center text-center`}
`;

const TitleAbout = styled.h2`
  ${tw`text-5xl font-bold text-blueGray-900`}
`;
const SubtitleAbout = styled.p`
  ${tw`text-2xl mt-6`}
`;

const AboutUsBtn = styled.a`
  ${tw`text-lg font-bold mt-6 underline transition cursor-pointer hover:text-blueGray-500`}
`;
