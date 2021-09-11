import React from 'react';

import Section from 'shared/Section';
import Button from 'shared/Button';
import PortfolioTypeButtons from './PortfolioTypeButtons';
import PortfolioList from './PortfolioList';
import PortfolioModal from './PortfolioModal';

import { PORTFOLIO_SECTION } from 'data/sections';
import {
  PORTFOLIO_TYPES,
  PortfolioType,
  PortfolioItemType,
} from 'data/portfolios';

type Props = {};

type State = {
  activatedPortfolioType: PortfolioType;
  modalPortolioItem?: PortfolioItemType;
  modalBackdropX?: number;
  modalBackdropY?: number;
  isModalOpen: boolean;
  shouldShowMore: boolean;
};

class PortfolioSection extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activatedPortfolioType: PORTFOLIO_TYPES[0],
      modalPortolioItem: undefined,
      modalBackdropX: undefined,
      modalBackdropY: undefined,
      isModalOpen: false,
      shouldShowMore: false,
    };
  }

  modalOpenTimeout: ReturnType<typeof setTimeout> | null = null;
  modalCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  componentWillUnmount() {
    this.clearModalTimeouts();
  }

  /**
   * Clear `modalOpenTimeout` and `modalCloseTimeout`
   */
  clearModalTimeouts = () => {
    if (this.modalOpenTimeout) {
      clearTimeout(this.modalOpenTimeout);
    }

    if (this.modalCloseTimeout) {
      clearTimeout(this.modalCloseTimeout);
    }
  };

  /**
   * Show more portfolio items by type
   */
  handleMoreItemsShow = () => {
    this.setState({ shouldShowMore: true });
  };

  /**
   * Handle activated portfolio type change
   */
  handlePortfolioTypeChange = (activatedPortfolioType: PortfolioType) => {
    this.handleMoreItemsShow();
    this.setState({ activatedPortfolioType });
  };

  /**
   * Handle portfolio click then show details in modal
   */
  handleItemClick =
    (portfolioItem: PortfolioItemType) =>
    (e: React.MouseEvent<HTMLLIElement>) => {
      this.clearModalTimeouts();

      this.setState({
        modalPortolioItem: portfolioItem,
        modalBackdropX: e.clientX,
        modalBackdropY: e.clientY,
      });

      // Run modal opening animation
      this.modalOpenTimeout = setTimeout(() => {
        this.setState({ isModalOpen: true });
      }, 10);

      // Lock body scrolling
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
    };

  handleModalClose = (e: React.MouseEvent<HTMLElement>) => {
    this.clearModalTimeouts();

    this.setState({
      modalBackdropX: e.clientX,
      modalBackdropY: e.clientY,
      isModalOpen: false,
    });

    // Run modal closing animation
    this.modalCloseTimeout = setTimeout(() => {
      this.setState({
        modalPortolioItem: undefined,
        modalBackdropX: undefined,
        modalBackdropY: undefined,
      });
    }, 500);

    // Lock body scrolling
    if (document.body) {
      document.body.style.overflow = '';
    }
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
    const {
      activatedPortfolioType,
      modalPortolioItem,
      modalBackdropX,
      modalBackdropY,
      isModalOpen,
      shouldShowMore,
    } = this.state;

    return (
      <Section id={PORTFOLIO_SECTION.id} title={this.renderSectionTitle()}>
        <PortfolioList
          activatedPortfolioType={activatedPortfolioType}
          shouldShowMore={shouldShowMore}
          onItemClick={this.handleItemClick}
        />

        {!shouldShowMore && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={this.handleMoreItemsShow}>Show More</Button>
          </div>
        )}

        {modalPortolioItem && (
          <PortfolioModal
            open={isModalOpen}
            portfolioItem={modalPortolioItem}
            modalBackdropX={modalBackdropX}
            modalBackdropY={modalBackdropY}
            onClose={this.handleModalClose}
          />
        )}
      </Section>
    );
  }
}

export default PortfolioSection;
