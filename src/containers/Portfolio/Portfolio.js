import React from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'reducers/modules/portfolio';

import styles from './portfolio.scss';
const cx = classNames.bind(styles);

import { Section, Button } from 'components';
import PortfolioModal from './Portfolio-Modal';

// Mobile Detect
import mobileDetect from 'mobile-detect';
const md = new mobileDetect(window.navigator.userAgent);

// Portfolio Data
import { portfolios, portfolioTypes } from 'static/data/secret-agents.json';
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

        <div className={styles['portfolio-filter']}>
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

        <ul className={styles['portfolio-list']}>
          {visiblePortfolios().map((item, i) => (
            <li
              key={i}
              className={cx('portfolio-item', { hover })}
              onClick={this.showModal.bind(this, item)}>
              <img className={styles['portfolio-cover-image']}
                src={require(`../../../static/${item.image.cover}`)} />
              <div className={styles['portfolio-title']}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <span className={styles['portfolio-expand']}>
                <i className="fa fa-expand fa-lg" />
              </span>
            </li>
          ))}
        </ul>

        {(() => {
          // Show More Button
          if (!showMore) {
            return (
              <div className={styles['portfolio-show-more']}>
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
)(Portfolio);
