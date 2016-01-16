import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './intersection.scss';
import Section from './Section';

import CoverBackground from '../../../static/img/intersection-bg.jpg';

class Intersection extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const parralaxEffect = true;
    const backgroundOverlay = true;
    return (
      <Section
        name="INTERSECTION"
        background="dark"
        backgroundImage={CoverBackground}
        backgroundBlur={0}
        backgroundOverlay={backgroundOverlay}
        parallax={parralaxEffect}
        styles={styles}>
        <h1 styleName="text">Hello Taipei.</h1>
      </Section>
    );
  }
}

export default CSSModules(Intersection, styles);
