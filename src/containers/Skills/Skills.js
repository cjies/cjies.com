import React from 'react';

import styles from './skills.scss';
import { Section } from 'components';

// Data
import { skills } from 'static/data/secret-agents.json';


class Skills extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <Section
        name="SKILLS"
        background="stable"
        title="Top Skills"
        styles={styles}>
        <ul className={styles['skills-list']}>
          {skills.map((item, i) =>
            <li key={i} className={styles['skills-item']}>
              <div className={styles['skills-icon']}>
                <i className={item.icon} />
              </div>
              <h2 className={styles['skills-title']}>{item.title}</h2>
              <p className={styles['skills-description']}>{item.description}</p>
            </li>
          )}
        </ul>

      </Section>
    );
  }
}

export default Skills;
