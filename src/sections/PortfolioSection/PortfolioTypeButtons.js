// @flow
import React from 'react';
import styled from 'styled-components';

import Button from 'shared/Button';

import { PORTFOLIO_TYPES, type PortfolioType } from 'data/portfolios';

const ButtonsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  @media (max-width: 639px) {
    width: 100%;
    margin-top: 20px;

    ${Button} {
      margin-top: 10px;
    }
  }
`;

type Props = {
  activatedType: string,
  onTypeChange: (portfolioType: PortfolioType) => void,
};

function PortfolioTypeButtons({
  activatedType,
  onTypeChange,
  ...props
}: Props) {
  return (
    <ButtonsGroup>
      {PORTFOLIO_TYPES.map((portfolioType: PortfolioType) => (
        <Button
          small
          key={portfolioType}
          color="secondary"
          solid={activatedType === portfolioType}
          onClick={() => onTypeChange(portfolioType)}
        >
          {portfolioType}
        </Button>
      ))}
    </ButtonsGroup>
  );
}

export default PortfolioTypeButtons;
