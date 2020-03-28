import * as React from 'react';
import styled from 'styled-components';

import Logo from 'images/logo.png';

const LogoLink = styled.a`
  display: inline-block;
  height: 100%;
  padding: 13px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 639px) {
    width: 100%;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;

type HeaderLogoLinkProps = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

function HeaderLogoLink(props: HeaderLogoLinkProps) {
  return (
    <LogoLink {...props}>
      <LogoImg src={Logo} alt="logo" />
    </LogoLink>
  );
}

export default HeaderLogoLink;
