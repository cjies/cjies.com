import React from 'react';
import classNames from 'classnames/bind';

import styles from './button.scss';
const cx = classNames.bind(styles);

const DEFAULT_TAG = ['button', 'submit', 'reset', 'link', 'a'];

class Button extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    tag: React.PropTypes.oneOf(DEFAULT_TAG),
    href: React.PropTypes.string,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  };

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

    // TagName
    let ButtonTag = 'button';
    let buttonType = '';
    switch (this.props.tag) {
      case 'submit':
        ButtonTag = 'input';
        buttonType = 'submit';
        break;
      case 'reset':
        ButtonTag = 'input';
        buttonType = 'reset';
        break;
      case 'link':
      case 'a':
        ButtonTag = 'a';
        buttonType = null;
        break;
      default:
        ButtonTag = 'button';
        buttonType = null;
        break;
    }

    // Active
    let buttonActive = '';
    if (this.props.active) {
      buttonActive = 'active';
    }

    return (
      <ButtonTag
        {...this.props}
        type={buttonType}
        href={this.props.href}
        className={cx(buttonStyle, buttonColor, buttonSize, buttonActive)}
        onClick={this.props.onClick}>
        {this.props.children}
      </ButtonTag>
    );
  }
}

export default Button;
