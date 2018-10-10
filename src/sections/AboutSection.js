// @flow
import React from 'react';
import styled from 'styled-components';

import Section from 'shared/Section';
import SocialLinks from 'shared/SocialLinks';

import { animFlipCoin } from 'shared/keyframes';

import { ABOUT_SECTION } from 'data/sections';
import { AVATAR, PARAGRAPH } from 'data/about_me';

const StyledSocialLinks = styled(SocialLinks)`
  margin-top: 10px;

  @media (max-width: 639px) {
    margin-top: 20px;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: 639px) {
    display: block;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  flex: 1;
  line-height: 1.8;
  padding-right: 30px;

  @media (max-width: 639px) {
    padding-right: 0;
    margin-top: 20px;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  overflow: hidden;
  user-select: none;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    animation: ${animFlipCoin} 1s forwards ease-in-out;
  }
`;

function AboutSection() {
  return (
    <Section id={ABOUT_SECTION.id} title={ABOUT_SECTION.title}>
      <AboutContainer>
        <Avatar src={AVATAR} alt="CJ" />
        <Paragraph>{PARAGRAPH}</Paragraph>
      </AboutContainer>
      <StyledSocialLinks />
    </Section>
  );
}

export default AboutSection;
