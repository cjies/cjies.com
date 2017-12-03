import React from 'react';
import styled, { keyframes } from 'styled-components';

function ScrollMore({ ...props }) {
  return (
    <a {...props}>
      <i className="icon fa fa-angle-down fa-2x" />
    </a>
  );
}

const arrowBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: scale(1, 1) translateY(0);
  }

  40% {
    transform: scale(1.3, 1.3) translateY(-20px);
  }

  60% {
    transform: scale(1.1, 1.1) translateY(-10px);
  }
`;

export default styled(ScrollMore)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px;
  text-align: center;
  cursor: pointer;

  &,
  &:hover {
    .icon {
      animation: 2s ${arrowBounce} 2 ease-out;
      animation-delay: 2s;
    }
  }

  &:hover {
    .icon {
      animation-iteration-count: infinite;
      animation-delay: 0s;
      animation-play-state: running;
    }
  }
`;
