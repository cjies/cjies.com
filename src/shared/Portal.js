import { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  appRoot = document.getElementById('root');
  portalEl = document.createElement('div');

  componentDidMount() {
    this.appRoot.appendChild(this.portalEl);
  }

  componentWillUnmount() {
    this.appRoot.removeChild(this.portalEl);
  }

  render() {
    return createPortal(this.props.children, this.portalEl);
  }
}

export default Portal;
