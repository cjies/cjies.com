import React from 'react';
import styled from 'styled-components';

import PortfolioItem from './PortfolioItem';

import PORTFOLIOS, { PortfolioType, PortfolioItemType } from 'data/portfolios';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;

  list-style: none;
  padding: 0;
  margin: 0;
`;

type Props = {
  activatedPortfolioType: PortfolioType;
  shouldShowMore: boolean;
  onItemClick: (
    portfolioItem: PortfolioItemType
  ) => (event: React.MouseEvent<HTMLLIElement>) => void;
};

function PortfolioList({
  activatedPortfolioType,
  shouldShowMore,
  onItemClick,
}: Props) {
  const [defaultItemAmount, setDefaultItemAmount] = React.useState(3);

  /**
   * Calculate the initial porfolio item amount,
   * show less in small device
   */
  const handleItemAmountCalculate = () => {
    const itemAmount = window.innerWidth < 640 ? 3 : 6;
    setDefaultItemAmount(itemAmount);
  };

  React.useEffect(() => {
    handleItemAmountCalculate(); // Initialize item amount
    window.addEventListener('resize', handleItemAmountCalculate);

    return () => {
      window.removeEventListener('resize', handleItemAmountCalculate);
    };
  }, []);

  // Reverse and filter by activated type
  const filteredPortfolioItems = [...PORTFOLIOS]
    .reverse()
    .filter(
      (portfolio) =>
        activatedPortfolioType === 'ALL' ||
        portfolio.type === activatedPortfolioType
    );

  // Filter by item amount
  const displayedPortfolioItems = shouldShowMore
    ? filteredPortfolioItems
    : filteredPortfolioItems.slice(0, defaultItemAmount);

  return (
    <List>
      {displayedPortfolioItems.map((portfolioItem) => (
        <PortfolioItem
          key={portfolioItem.title}
          title={portfolioItem.title}
          description={portfolioItem.description}
          coverImage={portfolioItem.coverImage}
          onClick={onItemClick(portfolioItem)}
        />
      ))}
    </List>
  );
}

export default PortfolioList;
