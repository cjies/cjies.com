import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import HeaderLogoLink from './HeaderLogoLink';
import HeaderNav from './HeaderNav';

import { HOME_SECTION } from 'data/sections';
import Logo from 'images/logo.png';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 54px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ededed;

  z-index: 100;
  transition: opacity 0.3s ease-out;

  ${({ isSticky }) =>
    !isSticky &&
    css`
      opacity: 0;
      pointer-events: none;
    `};
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 980px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 639px) {
    justify-content: center;
  }
`;

class AppHeader extends Component {
  state = {
    isSticky: false,
    isNavActivated: false,
  };

  componentWillMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    if (window.scrollY > 30) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };

  render() {
    const { isSticky } = this.state;

    return (
      <Header isSticky={isSticky}>
        <HeaderContainer>
          <HeaderLogoLink imgSrc={Logo} href={`#${HOME_SECTION.id}`} />
          <HeaderNav />
        </HeaderContainer>
      </Header>
    );
  }
}

export default AppHeader;
