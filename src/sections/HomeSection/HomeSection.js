// @flow
import React, { PureComponent } from 'react';
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

type State = {
  isWavesPaused: boolean,
};

class HomeSection extends PureComponent<{}, State> {
  state = {
    isWavesPaused: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    if (window.scrollY > 30) {
      this.setState({ isWavesPaused: true });
    } else {
      this.setState({ isWavesPaused: false });
    }
  };

  render() {
    const { isWavesPaused } = this.state;

    return (
      <Section id={HOME_SECTION.id}>
        <HeroTitle>MAKE SIMPLE.</HeroTitle>
        <p>Front End Developer</p>

        <Waves pause={isWavesPaused} />
        <ScrollMore href={`#${ABOUT_SECTION.id}`} />
      </Section>
    );
  }
}

export default HomeSection;
