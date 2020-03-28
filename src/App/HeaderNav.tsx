import * as React from 'react';
import styled, { css } from 'styled-components';

import SECTIONS from 'data/sections';

import { animSlidesUp } from 'shared/keyframes';

const NavLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 100%;
  padding: 10px 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 639px) {
    width: 100%;
    flex: 0 1 80px;
  }
`;

const CloseLink = styled(NavLink)`
  height: auto;
  display: none;

  @media (max-width: 639px) {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;

    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
`;

type NavProps = {
  active: boolean;
};

const Nav = styled.nav<NavProps>`
  margin-left: auto;
  height: 100%;
  font-size: 0.78rem;
  display: flex;

  @media (max-width: 639px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    flex-direction: column;
    justify-content: center;
    padding-bottom: 80px;

    text-align: center;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.98);

    /* Hide as default */
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-out;

    /* Activated state */
    ${({ active }) =>
      active &&
      css`
        opacity: 1;
        pointer-events: auto;

        ${NavLink} {
          opacity: 0;
          animation: ${animSlidesUp} 0.2s ease-out forwards;
        }

        ${CloseLink} {
          opacity: 1;
          transition-delay: 0.5s;
        }
      `}
  }
`;

type Props = {
  active: boolean;
  onClose: () => void;
};

function HeaderNav({ active, onClose, ...props }: Props) {
  const transitionTime = 0.1;
  let animationDelay = 0.02;

  return (
    <Nav active={active} {...props}>
      {SECTIONS.map((item, i) => {
        if (i > 0) {
          animationDelay += transitionTime;
        }

        return (
          <NavLink
            key={item.id}
            href={`#${item.id}`}
            style={{ animationDelay: `${animationDelay}s` }}
            onClick={onClose}
          >
            {item.nav}
          </NavLink>
        );
      })}

      <CloseLink onClick={onClose}>
        <i className="fa fa-close fa-2x" />
      </CloseLink>
    </Nav>
  );
}

export default HeaderNav;
