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

// Data
import { portfolios } from '../../../static/data/secret-agents.json';

class Portfolio extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    // this.expandItem = this.expandItem.bind(this);
  }

  showDetail(item, event) {
    event.persist();
    this.props.showDetail(item, event.clientX, event.clientY);
    document.body.style.overflow = 'hidden';
  }

  hideDetail() {
    this.props.hideDetail();
    document.body.style.overflow = '';
  }

  render() {
    // Portfolio Detail Style
    const detailStyle = {
      left: this.props.detail.clientX,
      top: this.props.detail.clientY
    };
    return (
      <Section
        name="PORTFOLIO"
        background="light"
        title="My Portfolio"
        styles={styles}>

        <div styleName="portfolio-filter">
          <Button type="ghost" size="small" color="secondary" active="true">ALL</Button>
          <Button type="ghost" size="small" color="secondary">WEB</Button>
          <Button type="ghost" size="small" color="secondary">DESIGN</Button>
          <Button type="ghost" size="small" color="secondary">PHOTOGRAPHY</Button>
        </div>

        <ul styleName="portfolio-list">
        {portfolios.map((item, i) => (
          <li
            key={i}
            styleName="portfolio-item"
            onClick={this.showDetail.bind(this, item)}>
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

        <div
          styleName={classNames('portfolio-detail-backdrop', { 'active': this.props.detail.show })}
          onClick={this.hideDetail.bind(this)}
          style={detailStyle} />

      </Section>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    detail: state.portfolio
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
