import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import HeaderLogoLink from './HeaderLogoLink';
import HeaderNav from './HeaderNav';

import { HOME_SECTION } from 'data/sections';

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

  /**
   * Prevent body scroll when mobile navigation is activated
   *
   * @param {Boolean} isScrollable
   */
  handleBodyScroll = isScrollable => {
    if (window.innerWidth < 640) {
      document.body.style.overflow = isScrollable ? '' : 'hidden';
    }
  };

  /**
   * Deactivate mobile nav
   */
  handleMobileNavClose = () => {
    this.handleBodyScroll(true);
    this.setState({ isNavActivated: false });
  };

  /**
   * Toggle activated state of mobile nav
   */
  handleLogoClick = event => {
    if (window.innerWidth < 640) {
      event.preventDefault();
    }

    this.setState(({ isNavActivated }) => {
      this.handleBodyScroll(isNavActivated);

      return {
        isNavActivated: !isNavActivated,
      };
    });
  };

  render() {
    const { isSticky, isNavActivated } = this.state;

    return (
      <Header isSticky={isSticky}>
        <HeaderContainer>
          <HeaderLogoLink
            href={`#${HOME_SECTION.id}`}
            onClick={this.handleLogoClick}
          />
          <HeaderNav
            isActivated={isNavActivated}
            onClose={this.handleMobileNavClose}
          />
        </HeaderContainer>
      </Header>
    );
  }
}

export default AppHeader;
