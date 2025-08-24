import React, { ComponentProps } from 'react';
import * as S from './TextInput.styled';

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
    <S.TextInputContainer>
      {label && <S.TextInputLabel htmlFor={name}>{label}</S.TextInputLabel>}
      <S.TextInput
        type="text"
        name={name}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        width={`${width}px`}
      />
    </S.TextInputContainer>
  );
};

export default TextInput;
