import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './about.scss';
import Section from './Section';
import Social from '../button/Social';

import { about } from '../../../static/data/secret-agents.json';

// Avatar from LinkedIn & set size
const avatarSize = 300;
const avatar = about.avatar.replace(/{size}/g, avatarSize);


class About extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        name="ABOUT"
        background="light"
        title="Introduce Myself"
        styles={styles}>
        <ul styleName="about-list">
          <li styleName="about-avatar">
            <img src={avatar} styleName="avatar" />
          </li>
          <li styleName="about-text">
            <p styleName="text" dangerouslySetInnerHTML={{ __html: about.description }} />
          </li>
        </ul>
        <div styleName="about-link">
          <Social/>
        </div>
      </Section>
    );
  }
}

export default CSSModules(About, styles);
