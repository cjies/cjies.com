import React from 'react';

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
        <ul className={styles['services-list']}>
          {services.map((item, i) =>
            <li key={i} className={styles['services-item']}>
              <div className={styles['services-icon']}>
                <i className={item.icon} />
              </div>
              <h2 className={styles['services-title']}>{item.title}</h2>
              <p className={styles['services-description']}>{item.description}</p>
            </li>
          )}
        </ul>

      </Section>
    );
  }
}

export default Services;
