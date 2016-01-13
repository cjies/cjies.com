import React from 'react';
import CSSModules from 'react-css-modules';

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
  }
npm
  render() {
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
            styleName="portfolio-item">
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

      </Section>
    );
  }
}

export default CSSModules(Portfolio, styles);
