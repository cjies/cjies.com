import React from 'react';
import styled from 'styled-components';

import Button from 'shared/Button';

import { PORTFOLIO_TYPES } from 'data/portfolios';

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

function PortfolioTypeButtons({ activatedType, onTypeChange, ...props }) {
  return (
    <ButtonsGroup>
      {PORTFOLIO_TYPES.map(portfolioType => (
        <Button
          key={portfolioType}
          color="secondary"
          isSmall
          isSolid={activatedType === portfolioType}
          onClick={() => onTypeChange(portfolioType)}
        >
          {portfolioType}
        </Button>
      ))}
    </ButtonsGroup>
  );
}

PortfolioTypeButtons.defaultProps = {
  activatedType: '',
  onTypeChange: () => {},
};

export default PortfolioTypeButtons;
