import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './button.scss';

class Button extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    // Style
    let buttonStyle = '';
    switch (this.props.type) {
      case 'solid':
        buttonStyle = 'solid';
        break;
      case 'ghost':
        buttonStyle = 'ghost';
        break;
      default:
        buttonStyle = 'solid';
        break;
    }

    // Color
    let buttonColor = 'dark';
    if (this.props.color) {
      buttonColor = this.props.color;
    }

    // Size
    let buttonSize = '';
    switch (this.props.size) {
      case 'large':
        buttonSize = 'large';
        break;
      case 'small':
        buttonSize = 'small';
        break;
      default:
        buttonSize = 'base';
        break;
    }


    return (
      <button
        styleName={classNames(buttonStyle, buttonColor, buttonSize)}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default CSSModules(Button, styles, {
  allowMultiple: true
});
