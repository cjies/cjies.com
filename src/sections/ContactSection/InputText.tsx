import React from 'react';
import styled from 'styled-components';

type InputProps = {
  name: string;
  value: string;
  type?: 'text' | 'email';
  placeholder?: string;
  required?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
};

const Label = styled.label`
  flex-basis: 100%;
  margin-bottom: 10px;

  @media (min-width: 640px) {
    flex-basis: 50%;

    & + & {
      padding-left: 10px;
    }
  }
`;

const Input = styled.input<InputProps>`
  display: block;
  appearance: none;
  border: none;
  outline: 0;
  width: 100%;
  padding: 10px;

  background-color: #f5f5f5;
  transition: box-shadow 0.3s ease-out;

  &:focus {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

function InputText(inputProps: InputProps) {
  return (
    <Label>
      <Input {...inputProps} />
    </Label>
  );
}

export default InputText;
