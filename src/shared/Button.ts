import * as React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  color?: 'primary' | 'secondary';
  small?: boolean;
  solid?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default styled.button<ButtonProps>`
  display: inline-block;
  background-color: transparent;
  border-radius: 0;
  border: 1px solid transparent;
  outline: 0;
  user-select: none;
  cursor: pointer;

  padding: 10px 20px;
  margin: 0 5px;
  font-weight: bold;
  text-align: center;
  transition: background 0.2s ease-out, color 0.1s ease-out;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    filter: contrast(1);
  }

  &:active {
    filter: contrast(2);
  }

  &[disabled] {
    opacity: 0.3;
    cursor: default;
    pointer-events: none;
  }

  /* Colors */
  ${({ color, solid }) => {
    switch (color) {
      case 'primary':
        return solid
          ? css`
              color: #fff;
              background-color: #171933;
              border-color: #171933;
            `
          : css`
              color: #171933;
              border-color: #171933;

              &:hover {
                color: #fff;
                background-color: #171933;
              }
            `;
      case 'secondary':
        return solid
          ? css`
              color: #fff;
              background-color: #343442;
              border-color: #343442;
            `
          : css`
              color: #343442;
              border-color: #343442;

              &:hover {
                color: #fff;
                background-color: #343442;
              }
            `;
      default:
        return solid
          ? css`
              color: #fff;
              background-color: #b0b0b0;
              border-color: #b0b0b0;
            `
          : css`
              color: #b0b0b0;
              border-color: #b0b0b0;

              &:hover {
                color: #fff;
                background-color: #b0b0b0;
              }
            `;
    }
  }}

  /* Small size */
  ${({ small }) =>
    small &&
    css`
      font-size: 0.78rem;
      padding: 7px 10px 5px;
    `}
`;
