import React from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'reduxs/modules/navigation';

// Components
import { Navigation } from 'components';
import { Link } from 'react-scroll';

// CSS
import styles from './header.scss';
const cx = classNames.bind(styles);

// Images
import Logo from 'static/img/logo.png';

class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      sticky: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const TOP_OFFSET = 15;
    const scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > TOP_OFFSET) {
      this.props.stickyHeader();
    } else {
      this.props.unstickyHeader();
    }
  }

  handleNavClick(activated) {
    // Only below bp(mobile)
    if (window.innerWidth <= 640) {
      if (activated) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      this.props.toggleNav();
    }
  }

  render() {
    const scrollSmooth = true;
    const activated = this.props.navigation.active;
    return (
      <header className={cx('header', { sticky: this.props.navigation.sticky })}>
        <div className={cx('header-container', { active: activated })}>
          <Navigation
            active={activated}
            onNavClick={this.handleNavClick.bind(this, !activated)} />
          <a
            className={cx('header-logo', 'mobile')}
            onClick={this.handleNavClick.bind(this, !activated)} >
            <img src={Logo} alt="cjies" />
          </a>
          <Link
            to="HERO"
            smooth={scrollSmooth}
            duration={500}
            className={cx('header-logo', 'desktop')} >
            <img src={Logo} alt="cjies" />
          </Link>
        </div>
      </header>
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
