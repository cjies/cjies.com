import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// CSS
import styles from './navigation.scss';

const navList = [
  {
    id: 0,
    name: 'ABOUT'
  },
  {
    id: 1,
    name: 'PORTFOLIO'
  },
  {
    id: 2,
    name: 'SKILLS'
  },
  {
    id: 3,
    name: 'CONTACT'
  },
];


export default class Navigation extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.goAnchor = this.goAnchor.bind(this);
  }

  goAnchor(name) {
    console.log(name);
  }

  render() {
    return (
      <nav styleName={classNames('nav', { 'active': this.props.active })} >
       {navList.map(navItem =>
          <a
            href="#"
            styleName="nav-item"
            key={navItem.id}
            onClick={(e) => {
              e.preventDefault();
              this.goAnchor(navItem.name);
            }}>
            <span>{navItem.name}</span>
          </a>
       )}
      </nav>
    );
  }
}

export default CSSModules(Navigation, styles, {
  allowMultiple: true
});
