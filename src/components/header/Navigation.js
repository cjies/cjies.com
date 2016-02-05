import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-scroll';

import styles from './navigation.scss';
const cx = classNames.bind(styles);

// Section Navi
import { sections } from '../../../static/data/secret-agents.json';

// @Events

export default class Navigation extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onNavClick: React.PropTypes.func
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
    const transitionTime = 0.1;
    let transitionDelay = 0.02;
    return (
      <div className={cx('nav', { active: this.props.active })} >
        <nav>
          {sections.map((item, i) => {
            if (i > 0) {
              transitionDelay += transitionTime;
            }
            return (
              <Link
                key={i}
                to={item.id}
                smooth={scrollSmooth}
                spy={scrollSpy}
                duration={500}
                className={styles['nav-item']}
                onClick={this.props.onNavClick}
                style={{ animationDelay: `${transitionDelay}s` }} >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <a className={styles['nav-close']} onClick={this.props.onNavClick}>
          <i className="fa fa-close fa-2x" />
        </a>
      </div>
    );
  }
}

export default Navigation;
