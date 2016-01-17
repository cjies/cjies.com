import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/modules/portfolio';

import styles from './portfolio.scss';
import Section from './Section';
import Button from '../button/Button';
import PortfolioModal from './Portfolio-Modal';

// Mobile Detect
import mobileDetect from 'mobile-detect';
const md = new mobileDetect(window.navigator.userAgent);

// Portfolio Data
import { portfolios, portfolioTypes } from '../../../static/data/secret-agents.json';
const reversedPortfolios = portfolios.reverse();

class Portfolio extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.showMore = this.showMore.bind(this);
    this.setItemLimit = this.setItemLimit.bind(this);
  }

  componentWillMount() {
    // Set Item Limit
    this.setItemLimit();
    window.addEventListener('resize', this.setItemLimit);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setItemLimit);
  }

  setItemLimit() {
    // If mobile show less
    if (window.innerWidth <= 640) {
      this.props.setLimit(3);
    } else {
      this.props.setLimit(6);
    }

    // Disable transition in mobile
    if (md.mobile()) {
      this.props.disableHover();
    } else {
      this.props.enableHover();
    }
  }

  setFilter(filterType) {
    this.showMore();
    this.props.setFilter(filterType);
  }

  showMore() {
    this.props.showMore();
  }

  showModal(item, event) {
    event.persist();
    this.props.showModal(item, event.clientX, event.clientY);
    document.body.style.overflow = 'hidden';
  }

  render() {
    const { filterType, showMore, itemLimit, hover } = this.props.portfolio;
    // Filter out the type
    const visiblePortfolios = () => {
      switch (filterType) {
        // Show all
        case 'ALL':
          // If have limitation
          if (!showMore) {
            return reversedPortfolios.filter((item, i) => {
              return i < itemLimit;
            });
          }
          return reversedPortfolios;
        // Show filtered item
        default:
          return reversedPortfolios.filter((item, i) => {
            // If have limitation
            if (!showMore) {
              return i < itemLimit && item.type === filterType;
            }
            return item.type === filterType;
          });
      }
    };

    return (
      <Section
        name="PORTFOLIO"
        background="light"
        title="My Portfolio"
        styles={styles}>

        <div styleName="portfolio-filter">
          {portfolioTypes.map((item, i) => (
            <Button
              key={i}
              type="ghost"
              size="small"
              color="secondary"
              active={filterType === item.type ? true : false}
              onClick={this.setFilter.bind(this, item.type)}>
              {item.name}
            </Button>
          ))}
        </div>

        <ul styleName="portfolio-list">
          {visiblePortfolios().map((item, i) => (
            <li
              key={i}
              styleName={classNames('portfolio-item', { hover })}
              onClick={this.showModal.bind(this, item)}>
              <img styleName="portfolio-cover-image"
                src={require('../../../static/' + item.image.cover)} />
              <div styleName="portfolio-title">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <span styleName="portfolio-expand">
                <i className="fa fa-expand fa-lg" />
              </span>
            </li>
          ))}
        </ul>

        {(() => {
          // Show More Button
          if (!showMore) {
            return (
              <div styleName="portfolio-show-more">
                <Button
                  type="ghost"
                  color="gray"
                  onClick={this.showMore}>
                  Show More
                </Button>
              </div>
            );
          }
        })()}

        <PortfolioModal />

      </Section>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Portfolio, styles, {
  allowMultiple: true
}));
