import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './about.scss';
import Section from '../Section/Section';


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
        <p styleName="text">
          Hello. My name is Ci Jie Tan. I am the front-end developer from
          Malaysia and staying in Taipei now. I love to make things simple.
          All I require is a pencil, a book, and a computer to occupy me
          all day. Ya! Of course, and a coffee too. Here is my linkedIn,
          welcome to connect me.
        </p>
      </Section>
    );
  }
}

export default CSSModules(About, styles);
