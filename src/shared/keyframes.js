// @flow
import { keyframes } from 'styled-components';

// -------------------------------------
//   Arrow Bounce
// -------------------------------------

export const animArrowBounce = keyframes`
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

// -------------------------------------
//   Flip Coin
// -------------------------------------

export const animFlipCoin = keyframes`
  0% {
    transform: rotateY(0) translateY(0);
  }
  20% {
    transform: rotateY(0) translateY(-5px);
  }
  40% {
    transform: rotateY(0) translateY(0);
  }
  50% {
    transform: rotateY(-130deg) translateY(-5px);
  }
  100% {
    transform: rotateY(-720deg) translateY(0);
  }
`;

// -------------------------------------
//   Slides Up
// -------------------------------------

export const animSlidesUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
