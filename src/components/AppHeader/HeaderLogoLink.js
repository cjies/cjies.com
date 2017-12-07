import React from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: inline-block;
  height: 100%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;

function HeaderLogoLink({ imgSrc, ...props }) {
  return (
    <LogoLink {...props}>
      <LogoImg src={imgSrc} alt="logo" />
    </LogoLink>
  );
}

export default HeaderLogoLink;
