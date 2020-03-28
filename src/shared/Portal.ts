import * as React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

class Portal extends React.Component<Props> {
  appRoot = document.getElementById('root');
  portalEl = document.createElement('div');

  componentDidMount() {
    if (this.appRoot) {
      this.appRoot.appendChild(this.portalEl);
    }
  }

  componentWillUnmount() {
    if (this.appRoot) {
      this.appRoot.removeChild(this.portalEl);
    }
  }

  render() {
    return createPortal(this.props.children, this.portalEl);
  }
}

export default Portal;
