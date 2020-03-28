import * as React from 'react';
import styled from 'styled-components';

import { animArrowBounce } from 'shared/keyframes';

const Icon = styled.i`
  animation: 2s ${animArrowBounce} 2 ease-out;
  animation-delay: 2s;
`;

const Link = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px;
  text-align: center;
  cursor: pointer;

  &:hover {
    ${Icon} {
      animation-iteration-count: infinite;
      animation-delay: 0s;
      animation-play-state: running;
    }
  }
`;

type ScrollMoreProps = {
  href: string;
};

function ScrollMore(props: ScrollMoreProps) {
  return (
    <Link {...props}>
      <Icon className="fa fa-angle-down fa-2x" />
    </Link>
  );
}

export default ScrollMore;
