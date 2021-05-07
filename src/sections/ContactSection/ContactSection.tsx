import React from 'react';
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
function serializeParam(obj: { [key: string]: string }): string {
  return Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
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

function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [respondMsg, setRespondMsg] = React.useState('');
  let respondMsgTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const { name: inputName, value: inputValue } = e.currentTarget;

    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  /**
   * Show respond message and clear it with timeout
   */
  const handleRespondMsgShow = (respondMsg: string) => {
    setRespondMsg(respondMsg);

    if (respondMsgTimeout) {
      clearTimeout(respondMsgTimeout);
    }

    respondMsgTimeout = setTimeout(() => {
      setRespondMsg('');
    }, 3000);
  };

  /**
   * Submit form to Formspree
   */
  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set loading
    setIsSubmitting(true);

    // Send Email by Formspree
    fetch(`//formspree.io/${MY_EMAIL}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: serializeParam(formData),
    })
      .then((response) => response.json())
      .then(({ success }) => {
        if (!success) {
          setIsSubmitting(false);
          handleRespondMsgShow('Something Wrong... (っ- ‸ – ς)');
        } else {
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsSubmitting(false);
          handleRespondMsgShow('Thank You  ~ヾ(＾∇＾)');
        }
      });
  };

  return (
    <Section id={CONTACT_SECTION.id} title={CONTACT_SECTION.title}>
      <Form onSubmit={handleFormSubmit}>
        <InputText
          required
          name="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleInputChange}
        />
        <InputText
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <Textarea
          required
          name="message"
          value={formData.message}
          placeholder="The person you call is unavailable now, please leave down the message I will reply you later :D"
          onChange={handleInputChange}
        />

        <FormControl>
          {respondMsg && <RespondMsg>{respondMsg}</RespondMsg>}
          <Button
            solid
            type="submit"
            color="primary"
            disabled={
              isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </FormControl>
      </Form>
    </Section>
  );
}

export default ContactSection;
