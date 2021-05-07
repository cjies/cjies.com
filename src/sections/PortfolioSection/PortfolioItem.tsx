import React from 'react';
import styled, { css } from 'styled-components';
import InApp from 'detect-inapp';

const inapp = new InApp(navigator.userAgent || navigator.vendor);

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
`;

const ItemTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px;
  color: #fff;
  pointer-events: none;

  > * {
    z-index: 9;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease-out, transform 0.5s ease-out;
  }

  h2,
  p {
    display: block;
    margin: 0;
    line-height: 1.5;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* Faded Background */
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-out;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const ExpandButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
`;

type ItemContainerProps = {
  isHoverable: boolean;
};

const ItemContainer = styled.div<ItemContainerProps>`
  position: relative;
  height: 100%;
  min-height: 200px;
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  overflow: hidden;

  /* Hoverable state */
  ${({ isHoverable }) =>
    isHoverable &&
    css`
      transition: transform 0.3s ease-out, background 0.5s ease-out;

      &:hover {
        z-index: 99;
        transform: scale(1.02);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
      }

      &:hover ${CoverImage} {
        transform: scale(1.1) translateX(-5px) translateY(10px);
        transition: transform 10s ease-out;
      }

      &:hover ${ItemTitle} {
        pointer-events: auto;

        > * {
          opacity: 1;
          transform: translateY(0);
        }

        &:before {
          opacity: 1;
        }

        p {
          transition-delay: 0.2s;
        }
      }

      &:hover ${ExpandButton} {
        opacity: 1;
        transition: opacity 1s ease-out;
        transition-delay: 0.3s;
      }
    `}
`;

const Item = styled.li`
  flex: 0 0 33.33%;
  padding: 5px;
  margin-bottom: 10px;
  user-select: none;

  @media (max-width: 1023px) {
    flex-basis: 50%;
  }

  @media (max-width: 639px) {
    flex-basis: 100%;
  }
`;

type PortfolioItemProps = {
  title: string;
  description: string;
  coverImage: string;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const PortfolioItem = ({
  title,
  description,
  coverImage,
  onClick,
}: PortfolioItemProps) => (
  <Item onClick={onClick}>
    <ItemContainer isHoverable={!inapp.isMobile}>
      <CoverImage src={coverImage} />
      <ItemTitle>
        <h2>{title}</h2>
        <p>{description}</p>
      </ItemTitle>
      <ExpandButton>
        <i className="fa fa-expand fa-lg" />
      </ExpandButton>
    </ItemContainer>
  </Item>
);

export default PortfolioItem;
