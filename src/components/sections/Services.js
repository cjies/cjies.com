import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './services.scss';
import Section from './Section';

// Data
import { services } from '../../../static/data/secret-agents.json';


class Services extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        name="SERVICES"
        background="stable"
        title="Services Provided"
        styles={styles}>
        <ul styleName="services-list">
          {services.map((item, i) =>
            <li key={i} styleName="services-item" >
              <div styleName="services-icon">
                <i className={item.icon} />
              </div>
              <h2 styleName="services-title">{item.title}</h2>
              <p styleName="services-description">{item.description}</p>
            </li>
          )}
        </ul>

      </Section>
    );
  }
}

export default CSSModules(Services, styles);
