import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../redux/actions';

// Components
import Navigation from './Navigation';
import Sticky from 'react-sticky';

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
    return (
      <Sticky
        topOffset={5}
        stickyClass={styles.sticky}
        styleName="header"
        type={React.DOM.header}>
        <div styleName={classNames('header-container', { 'active': this.props.active })}>
          <Navigation
            active={this.props.active} />
          <a styleName="header-logo"
            onClick={this.props.onNavToggle}>
            <img src={Logo} alt="cjies"/>
          </a>
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
