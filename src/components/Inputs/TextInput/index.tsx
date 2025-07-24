import React, { ComponentProps } from 'react';
import {
  TextInputContainer,
  TextInputLabel,
  TextInput as StyledTextInput,
} from './TextInput.styled';

interface TextInputProps extends ComponentProps<'input'> {
  label?: string;
}

const TextInput = ({
  name,
  label,
  value,
  width = 124,
  maxLength = 5,
  disabled = false,
  onChange,
}: TextInputProps) => {
  return (
    <TextInputContainer>
      {label && <TextInputLabel htmlFor={name}>{label}</TextInputLabel>}
      <StyledTextInput
        type="text"
        name={name}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        width={`${width}px`}
      />
    </TextInputContainer>
  );
};

export default TextInput;
