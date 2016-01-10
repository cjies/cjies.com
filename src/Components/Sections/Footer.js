import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './footer.scss';
import Section from './Section';
import Social from '../Social/Social';

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
        <p styleName="footer-copyright">© {currentYear} Jies Design.</p>
        <div styleName="footer-social">
          <Social />
        </div>
      </Section>
    );
  }
}

export default CSSModules(Footer, styles);
