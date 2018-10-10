// @flow
import React, { PureComponent } from 'react';
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

type State = {
  isSticky: boolean,
  isNavActivated: boolean,
};

class AppHeader extends PureComponent<{}, State> {
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
   */
  handleBodyScroll = (isScrollable: boolean) => {
    if (window.innerWidth < 640 && document.body) {
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
  handleLogoClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 640) {
      e.preventDefault();
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
            active={isNavActivated}
            onClose={this.handleMobileNavClose}
          />
        </HeaderContainer>
      </Header>
    );
  }
}

export default AppHeader;
