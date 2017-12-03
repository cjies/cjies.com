import React from 'react';
import styled from 'styled-components';

function HeaderLogoLink({ imgSrc, ...props }) {
  return (
    <a {...props}>
      <img src={imgSrc} alt="logo" />
    </a>
  );
}

export default styled(HeaderLogoLink)`
  display: inline-block;
  height: 100%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  img {
    height: 100%;
    width: auto;
  }
`;
