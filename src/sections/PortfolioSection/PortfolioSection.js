import React, { PureComponent } from 'react';

import Section from 'shared/Section';
import Button from 'shared/Button';
import PortfolioTypeButtons from './PortfolioTypeButtons';
import PortfolioList from './PortfolioList';

import { PORTFOLIO_SECTION } from 'data/sections';
import { PORTFOLIO_TYPES } from 'data/portfolios';

class PortfolioSection extends PureComponent {
  state = {
    activatedPortfolioType: PORTFOLIO_TYPES[0],
    shouldShowMore: false,
  };

  /**
   * Show more portfolio items by type
   */
  handleMoreItemsShow = () => {
    this.setState({ shouldShowMore: true });
  };

  /**
   * Handle activated portfolio type change
   *
   * @param {String} activatedPortfolioType - one of PORTFOLIO_TYPES
   */
  handlePortfolioTypeChange = activatedPortfolioType => {
    this.handleMoreItemsShow();
    this.setState({ activatedPortfolioType });
  };

  /**
   * Render title with <PortfolioTypeButtons>
   */
  renderSectionTitle() {
    const { activatedPortfolioType } = this.state;

    return (
      <>
        {PORTFOLIO_SECTION.title}
        <PortfolioTypeButtons
          activatedType={activatedPortfolioType}
          onTypeChange={this.handlePortfolioTypeChange}
        />
      </>
    );
  }

  render() {
    const { activatedPortfolioType, shouldShowMore } = this.state;

    return (
      <Section id={PORTFOLIO_SECTION.id} title={this.renderSectionTitle()}>
        <PortfolioList
          activatedPortfolioType={activatedPortfolioType}
          shouldShowMore={shouldShowMore}
        />

        {!shouldShowMore && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={this.handleMoreItemsShow}>Show More</Button>
          </div>
        )}
      </Section>
    );
  }
}

export default PortfolioSection;
