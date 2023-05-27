import React, { ComponentProps } from 'react';
import * as S from './styled';

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
    <S.TextInputWrapper width={width}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
      />
    </S.TextInputWrapper>
  );
};

export default TextInput;
