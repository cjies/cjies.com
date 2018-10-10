// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Section from 'shared/Section';
import Button from 'shared/Button';
import InputText from './InputText';
import Textarea from './Textarea';

import { CONTACT_SECTION } from 'data/sections';
import { MY_EMAIL } from 'data/about_me';

/**
 * Serialize object into URI string
 */
function serializeParam(obj) {
  return Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const RespondMsg = styled.span`
  margin-right: 10px;
  font-style: italic;
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type State = {
  name: string,
  email: string,
  message: string,
  // Form submission
  isSubmitting: boolean,
  respondMsg?: string,
};

class ContactSection extends PureComponent<{}, State> {
  state = {
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    respondMsg: undefined,
  };

  respondMsgTimeout: TimeoutID | null = null;

  handleInputChange = (
    e: SyntheticKeyboardEvent<HTMLInputElement | HTMLAreaElement>
  ) => {
    const eventTarget: any = e.currentTarget;
    const { name: inputName, value: inputValue } = eventTarget;

    this.setState({ [inputName]: inputValue });
  };

  /**
   * Show respond message and clear it with timeout
   */
  handleRespondMsgShow = (respondMsg: string) => {
    this.setState({ respondMsg }, () => {
      if (this.respondMsgTimeout) {
        clearTimeout(this.respondMsgTimeout);
      }

      this.respondMsgTimeout = setTimeout(() => {
        this.setState({ respondMsg: '' });
      }, 3000);
    });
  };

  handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    // Set loading
    this.setState({ isSubmitting: true });

    // Send Email by Formspree
    fetch(`//formspree.io/${MY_EMAIL}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: serializeParam({
        name,
        email,
        message,
      }),
    })
      .then(response => response.json())
      .then(({ success }) => {
        if (!success) {
          this.setState({ isSubmitting: false });
          this.handleRespondMsgShow('Something Wrong... (っ- ‸ – ς)');
        } else {
          this.setState({
            name: '',
            email: '',
            message: '',
            isSubmitting: false,
          });
          this.handleRespondMsgShow('Thank You  ~ヾ(＾∇＾)');
        }
      });
  };

  render() {
    const { name, email, message, isSubmitting, respondMsg } = this.state;
    const isFormInvalid = !name || !email || !message;

    return (
      <Section id={CONTACT_SECTION.id} title={CONTACT_SECTION.title}>
        <Form onSubmit={this.handleFormSubmit}>
          <InputText
            required
            name="name"
            value={name}
            placeholder="Your name"
            onChange={this.handleInputChange}
          />
          <InputText
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleInputChange}
          />
          <Textarea
            required
            name="message"
            value={message}
            placeholder="The person you call is unavailable now, please leave down the message I will reply you later :D"
            onChange={this.handleInputChange}
          />

          <FormControl>
            {respondMsg && <RespondMsg>{respondMsg}</RespondMsg>}
            <Button
              solid
              type="submit"
              color="primary"
              disabled={isFormInvalid || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </FormControl>
        </Form>
      </Section>
    );
  }
}

export default ContactSection;
