import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './portfolio.scss';
import Section from './Section';
import Button from '../Button/Button';

// Data
import { portfolioData } from '../../../static/data/portfolio.json';

class Portfolio extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        name="PORTFOLIO"
        background="light"
        title="My Portfolio"
        styles={styles}>

        <div styleName="portfolio-filter">
          <Button type="ghost" size="small" color="gray" active="true">ALL</Button>
          <Button type="ghost" size="small" color="gray">WEB</Button>
          <Button type="ghost" size="small" color="gray">DESIGN</Button>
          <Button type="ghost" size="small" color="gray">PHOTOGRAPHY</Button>
        </div>

        <ul styleName="portfolio-list">
        {portfolioData.map((item, i) => (
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
