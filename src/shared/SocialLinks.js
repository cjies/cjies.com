// @flow
import React from 'react';
import styled from 'styled-components';

import SOCIAL_LINKS from 'data/social_links';

const Link = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: #b0b0b0;

  outline: 0;
  user-select: none;
  transition: color 0.5s ease-out, transform 0.3s ease-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #10318e;
    transform: scale(1.1, 1.1) translateY(-3px);
  }
`;

function SocialLinks({ ...props }: {}) {
  return (
    <div {...props}>
      {SOCIAL_LINKS.map(item => (
        <Link key={item.name} href={item.href} target="_blank">
          <i className={`${item.icon} fa-lg`} />
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
