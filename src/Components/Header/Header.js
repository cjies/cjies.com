import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../Redux/actions';

// Components
import Navigation from './Navigation';
import Sticky from 'react-sticky';
import { Link } from 'react-scroll';

// CSS
import styles from './header.scss';

// Images
import Logo from '../../../static/img/logo.png';


class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const scrollSmooth = true;
    return (
      <Sticky
        topOffset={5}
        stickyClass={styles.sticky}
        styleName="header"
        type={React.DOM.header}>
        <div styleName={classNames('header-container', { 'active': this.props.active })}>
          <Navigation
            active={this.props.active} />
          <Link
            to="HOME"
            smooth={scrollSmooth}
            duration={500}
            className={styles['header-logo']} >
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
    active: state.navActive
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
  // return {
  //   onToggleClick: () => dispatch({
  //     type: 'TOGGLE_NAV'
  //   })
  // };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Header, styles, {
  allowMultiple: true
}));
