import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './hero.scss';
import Section from './Section';
import Button from '../Button/Button';

class Hero extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.goDown = this.goDown.bind(this);
  }

  goDown(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Section
        name="HOME"
        background="secondary"
        styles={styles}>
        <h1>MAKE SIMPLE.</h1>
        <p>Front End Developer</p>
        {/* <Button
          type="ghost"
          color="dark"
          onClick={this.goDown}>
          BUT MORE
        </Button> */}
        <a styleName="scroll-more">
          <i className="fa fa-angle-down fa-2x" />
        </a>
      </Section>
    );
  }
}

export default CSSModules(Hero, styles);
