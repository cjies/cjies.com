import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './navigation.scss';
import { Link, Events } from 'react-scroll';


// Section Navi
import { navigation } from '../../../static/data/sections.json';

// @Events

export default class Navigation extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.scrollEvent.register('begin', (arg) => {
    //   // console.log('begin', arg);
    // });

    // this.scrollEvent.register('end', (arg) => {
    //   // console.log('end', arg);
    // });
  }

  componentWillUnmount() {
    // this.scrollEvent.remove('begin');
    // this.scrollEvent.remove('end');
  }

  render() {
    const scrollSmooth = true;
    const scrollSpy = false; // Waiting Refactor - 1/10
    return (
      <nav styleName={classNames('nav', { 'active': this.props.active })} >
       {navigation.map((item, i) =>
          <Link
            key={i}
            to={item.id}
            smooth={scrollSmooth}
            spy={scrollSpy}
            duration={500}
            className={styles['nav-item']} >
            <span>{item.name}</span>
          </Link>
       )}
      </nav>
    );
  }
}

export default CSSModules(Navigation, styles, {
  allowMultiple: true
});
