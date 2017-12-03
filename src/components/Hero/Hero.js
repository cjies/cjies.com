import React, { Component } from 'react';
import styled from 'styled-components';

import HeroWaves from './HeroWaves';
import ScrollMore from './ScrollMore';

class Hero extends Component {
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
    const { className } = this.props;
    const { isWavesPaused } = this.state;

    return (
      <div className={className} id="home">
        <h1>MAKE SIMPLE.</h1>
        <p>Front End Developer</p>

        <HeroWaves isWavesPaused={isWavesPaused} />
        <ScrollMore href="#about" />
      </div>
    );
  }
}

export default styled(Hero)`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #171933;

  h1 {
    margin-bottom: 10px;
  }
`;
