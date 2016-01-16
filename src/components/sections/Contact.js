import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/modules/contact';

// Redux Form
import { reduxForm } from 'redux-form';
import { createValidator, required, email } from '../../utils/validation';

import styles from './contact.scss';
import Section from './Section';
import Button from '../button/Button';

import { about } from '../../../static/data/secret-agents.json';

// Serialize Object
const serializeParam = (obj) => {
  return Object.keys(obj).map((k) => {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};

class Contact extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.clearReponseMsg = this.clearReponseMsg.bind(this);
  }

  showResponseMsg(msg, msgType) {
    this.props.setResponseMsg(msg, msgType);
    setTimeout(() => {
      this.clearReponseMsg(this);
    }, 3000);
  }

  clearReponseMsg() {
    this.props.clearResponseMsg();
  }

  submitForm(values) {
    return new Promise((resolve, reject) => {
      // Send Email by Formspree
      fetch('http://formspree.io/' + about.email, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serializeParam({
          name: values.name,
          email: values.mail,
          message: values.message
        })
      }).then((response) => {
        return response.json();
      }).then((result) => {
        if (result.success) {
          this.showResponseMsg.bind(this, 'Thank You  ~ヾ(＾∇＾)', 'success')();
          this.props.resetForm();
          resolve();
        } else {
          this.showResponseMsg.bind(this, 'Something Wrong... (っ- ‸ – ς)', 'error')();
          reject();
        }
      });
    });
  }

  render() {
    const buttonPosition = {
      textAlign: 'right'
    };
    const {
      fields: { name, mail, message },
      handleSubmit,
      submitting,
      sentResponse
    } = this.props;

    return (
      <Section
        name="CONTACT"
        background="light"
        title="Contact Me"
        styles={styles}>
        <form styleName="contact-form" onSubmit={handleSubmit(this.submitForm)}>
          <div styleName="contact-fields">
            <div styleName="contact-fields-half">
              <input
                {...name}
                type="text"
                placeholder="Name"
                styleName={classNames({ 'error': name.touched && name.error })} />
            </div>
            <div styleName="contact-fields-half">
              <input
                {...mail}
                type="email"
                placeholder="Email"
                styleName={classNames({ 'error': mail.touched && mail.error })} />
            </div>
          </div>
          <div styleName="contact-fields">
            <textarea
              {...message}
              placeholder="The person you call is unavailable, please leave down the message I will reply you later :D"
              value={message.value || ''}
              styleName={classNames({ 'error': message.touched && message.error })} />
          </div>
          <div styleName="contact-fields contact-send" style={buttonPosition}>
            <span styleName={classNames('contact-send-response', sentResponse.responseType)}>
              {sentResponse.responseMsg}
            </span>
            <Button
              tag="submit"
              color="primary"
              value={submitting ? 'Sending...' : 'Send Message'}
              disabled={submitting || (name.error || mail.error || message.error)}
              onClick={handleSubmit(this.submitForm)} />
          </div>
        </form>
      </Section>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    sentResponse: state.contact
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'contact',
  fields: ['name', 'mail', 'message'],
  validate: createValidator({
    name: required,
    mail: [required, email],
    message: required
  })
})(CSSModules(Contact, styles, {
  allowMultiple: true
})));
