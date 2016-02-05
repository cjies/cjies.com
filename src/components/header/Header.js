import React from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/modules/navigation';

// Components
import Navigation from './Navigation';
import Sticky from 'react-sticky';
import { Link } from 'react-scroll';

// CSS
import styles from './header.scss';
const cx = classNames.bind(styles);

// Images
import Logo from '../../../static/img/logo.png';

class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  onNavClick(activated) {
    // Only below bp(mobile)
    if (window.innerWidth <= 640) {
      this.props.toggleNav();
      if (activated) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  render() {
    const scrollSmooth = true;
    const activated = this.props.navigation.active;
    return (
      <Sticky
        topOffset={5}
        stickyClass={styles.sticky}
        className={styles.header}
        type={React.DOM.header}>
        <div className={cx('header-container', { active: activated })}>
          <Navigation
            active={activated}
            onNavClick={this.onNavClick.bind(this, !activated)} />
          <a className={cx('header-logo', 'mobile')}
            onClick={this.onNavClick.bind(this, !activated)}>
            <img src={Logo} alt="cjies"/>
          </a>
          <Link
            to="HERO"
            smooth={scrollSmooth}
            duration={500}
            className={cx('header-logo', 'desktop')} >
            <img src={Logo} alt="cjies"/>
          </Link>
        </div>
      </Sticky>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
