import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './resume.scss';
import Section from './Section';

// data
import { resumes } from '../../../static/data/secret-agents.json';


class Resume extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        name="RESUME"
        background="stable"
        title="Resume"
        styles={styles}>
        <ul styleName="resume-list">
          {resumes.map((item, i) =>
            <li
              key={i}
              styleName="resume-item">
              <div styleName="resume-label">
                <p>{item.duration}</p>
              </div>
              <div styleName="resume-text">
                <h2>{item.title}</h2>
                <h4>{item.unit}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          )}
        </ul>
      </Section>
    );
  }
}

export default CSSModules(Resume, styles);
