import React, { PureComponent } from 'react';
import styled from 'styled-components';

import PortfolioItem from './PortfolioItem';

import PORTFOLIOS from 'data/portfolios';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;

  list-style: none;
  padding: 0;
  margin: 0;
`;

class PortfolioList extends PureComponent {
  static defaultProps = {
    activatedPortfolioType: '',
    shouldShowMore: false,
    onItemClick: () => () => {},
  };

  state = {
    initialItemAmount: 3,
  };

  componentWillMount() {
    this.calculateInitialItemAmount(); // Initialize item amount
    window.addEventListener('resize', this.calculateInitialItemAmount);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateInitialItemAmount);
  }

  /**
   * Calculate the initial porfolio item amount,
   * show less in small device
   */
  calculateInitialItemAmount = () => {
    this.setState({
      initialItemAmount: window.innerWidth < 640 ? 3 : 6,
    });
  };

  render() {
    const { activatedPortfolioType, shouldShowMore, onItemClick } = this.props;
    const { initialItemAmount } = this.state;

    // Reverse and filter by activated type
    const filteredPortfolioItems = [...PORTFOLIOS]
      .reverse()
      .filter(
        portfolio =>
          activatedPortfolioType === 'ALL' ||
          portfolio.type === activatedPortfolioType
      );

    // Filter by initial amount
    const displayedPortfolioItems = shouldShowMore
      ? filteredPortfolioItems
      : filteredPortfolioItems.slice(0, initialItemAmount);

    return (
      <List>
        {displayedPortfolioItems.map(portfolioItem => (
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
}

export default PortfolioList;
