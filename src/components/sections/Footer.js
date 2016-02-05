import React from 'react';

import styles from './footer.scss';
import Section from './Section';
import Social from '../button/Social';

// This Year
const currentYear = new Date().getFullYear();

class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        name="FOOTER"
        background="stable"
        styles={styles}>
        <p className={styles['footer-copyright']}>© {currentYear} Jies Design.</p>
        <div className={styles['footer-social']}>
          <Social />
        </div>
      </Section>
    );
  }
}

export default Footer;
