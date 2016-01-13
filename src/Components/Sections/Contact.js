import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './contact.scss';
import Section from './Section';
import Button from '../button/Button';

import CoverBackground from '../../../static/img/intersection-bg.jpg';

class Contact extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    console.log('');
  }


  render() {
    const buttonPosition = {
      textAlign: 'right'
    };

    return (
      <Section
        name="CONTACT"
        background="light"
        title="Contact Me"
        styles={styles}>
        <form name="contactForm" styleName="contact-form">
          <div styleName="contact-fields">
            <div styleName="contact-fields-half">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div styleName="contact-fields-half">
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div styleName="contact-fields">
            <textarea name="message" placeholder="The person you call is unavailable, please leave down the message I will reply you later :D" />
          </div>
          <div styleName="contact-fields" style={buttonPosition}>
            <Button
              tag="submit"
              color="primary"
              value="Send Message"
              onClick={this.onSubmitForm} />
          </div>
        </form>
      </Section>
    );
  }
}

export default CSSModules(Contact, styles, {
  allowMultiple: true
});
