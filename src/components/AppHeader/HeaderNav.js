import React from 'react';
import styled from 'styled-components';

import SECTIONS from 'data/sections';

function HeaderNav({ ...props }) {
  const transitionTime = 0.1;
  let animationDelay = 0.02;

  return (
    <nav {...props}>
      {SECTIONS.map((item, i) => {
        if (i > 0) {
          animationDelay += transitionTime;
        }

        return (
          <a
            className="nav-item"
            key={item.id}
            href={`#${item.id}`}
            style={{
              animationDelay: `${animationDelay}s`,
            }}
          >
            {item.nav}
          </a>
        );
      })}
    </nav>
  );
}

export default styled(HeaderNav)`
  margin-left: auto;
  height: 100%;
  font-size: 11px;
  display: flex;

  .nav-item {
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;

    height: 100%;
    padding: 10px 16px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;
