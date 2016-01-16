import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// CSS
import styles from './social.scss';

// Data
import { socialButton } from '../../../static/data/secret-agents.json';


export default class Social extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="social-list">
        {socialButton.map((item, i) =>
          <a
            key={i}
            href={item.href}
            title={item.name}
            styleName="social-item"
            target="_blank" >
            <i className={classNames(item.icon, 'fa-lg')} />
          </a>
        )}
      </div>
    );
  }
}

export default CSSModules(Social, styles);
