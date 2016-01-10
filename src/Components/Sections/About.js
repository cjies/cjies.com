import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './about.scss';
import Section from './Section';
import Social from '../Social/Social';


// Avatar from LinkedIn
const avatarSize = 300;
const avatar = 'https://media.licdn.com/mpr/mpr/shrinknp_' + avatarSize + '_' + avatarSize + '/' +
               'AAEAAQAAAAAAAAcAAAAAJDRmMzllMTI3LTA2NjUtNDM1Mi04MjgwLWJmMTIxMzMyNTY0OQ.jpg';


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
            <p styleName="text">
              Hello. My name is CJies Tan. I am the front-end developer from
              Malaysia and staying in Taipei now. And I also the Web Designer and EDM lover 📻💛
              I love to make things simple. All I require is a mac, a book, and a pencil to occupy me
              all day. Ya! Of course, and a coffee too. Nice to meet you.
            </p>
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
