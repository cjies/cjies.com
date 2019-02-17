// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Waves from './Waves';
import ScrollMore from './ScrollMore';

import { HOME_SECTION, ABOUT_SECTION } from 'data/sections';

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #171933;
`;

const HeroTitle = styled.h1`
  margin-bottom: 10px;
`;

function HomeSection() {
  const [isWavesPaused, setIsWavesPaused] = useState(false);

  /**
   * Stop wave animation after scrolled to certain position
   */
  const handleWindowScroll = () => {
    setIsWavesPaused(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [null]);

  return (
    <Section id={HOME_SECTION.id}>
      <HeroTitle>MAKE SIMPLE.</HeroTitle>
      <p>Front End Developer</p>

      <Waves pause={isWavesPaused} />
      <ScrollMore href={`#${ABOUT_SECTION.id}`} />
    </Section>
  );
}

export default HomeSection;
