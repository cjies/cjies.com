import React from 'react';
import classNames from 'classnames';

// CSS
import styles from './social.scss';

// Data
import { socialButton } from '../../../static/data/secret-agents.json';


class Social extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['social-list']}>
        {socialButton.map((item, i) =>
          <a
            key={i}
            href={item.href}
            title={item.name}
            className={styles['social-item']}
            target="_blank" >
            <i className={classNames(item.icon, 'fa-lg')} />
          </a>
        )}
      </div>
    );
  }
}

export default Social;
