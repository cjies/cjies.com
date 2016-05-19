import React from 'react';
import classNames from 'classnames/bind';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'reducers/modules/contact';

// Redux Form
import { reduxForm } from 'redux-form';
import { createValidator, required, email } from 'utils/validation';

import styles from './contact.scss';
const cx = classNames.bind(styles);

import { Button, Section } from 'components';

import { about } from 'static/data/secret-agents.json';

// Serialize Object
const serializeParam = (obj) =>
  Object.keys(obj).map((k) =>
    `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
  ).join('&')
;

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
      fetch(`//formspree.io/${about.email}`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serializeParam({
          name: values.name,
          email: values.mail,
          message: values.message
        })
      })
      .then((response) => response.json())
      .then((result) => {
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
        <form className={styles['contact-form']} onSubmit={handleSubmit(this.submitForm)}>
          <div className={styles['contact-fields']}>
            <div className={styles['contact-fields-half']}>
              <input
                {...name}
                type="text"
                placeholder="Name"
                className={cx({ error: name.touched && name.error })} />
            </div>
            <div className={styles['contact-fields-half']}>
              <input
                {...mail}
                type="email"
                placeholder="Email"
                className={cx({ error: mail.touched && mail.error })} />
            </div>
          </div>
          <div className={styles['contact-fields']}>
            <textarea
              {...message}
              placeholder="The person you call is unavailable, please leave down the message I will reply you later :D"
              value={message.value || ''}
              className={cx({ error: message.touched && message.error })} />
          </div>
          <div className={cx('contact-fields', 'contact-send')} style={buttonPosition}>
            <span className={cx('contact-send-response', sentResponse.responseType)}>
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
})(Contact));
