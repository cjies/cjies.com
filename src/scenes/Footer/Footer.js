import React from 'react';

import styles from './footer.scss';
import { Section, SocialButton } from 'components';

// This Year
const currentYear = new Date().getFullYear();

class Footer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <Section
        name="FOOTER"
        background="stable"
        styles={styles}>
        <p className={styles['footer-copyright']}>© {currentYear} Jies Design.</p>
        <div className={styles['footer-social']}>
          <SocialButton />
        </div>
      </Section>
    );
  }
}

export default Footer;
