import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  flex-basis: 100%;
  margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
  display: block;
  appearance: none;
  border: none;
  outline: 0;
  width: 100%;
  padding: 10px;
  resize: none;
  height: 150px;
  line-height: 1.5;

  background-color: #f5f5f5;
  transition: box-shadow 0.3s ease-out;

  &:focus {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  }
`;

function Textarea({ ...textareaProps }) {
  return (
    <Label>
      <StyledTextarea {...textareaProps} />
    </Label>
  );
}

export default Textarea;
