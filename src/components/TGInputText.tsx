import React, { ComponentProps } from 'react';
import { TGInputTextContainer } from './TG.styled';

interface TGInputTextProps extends ComponentProps<'input'> {
  label: string;
}

const TGInputText = ({
  name,
  label,
  value,
  width = 100,
  maxLength = 5,
  disabled = false,
  onChange,
}: TGInputTextProps) => {
  return (
    <TGInputTextContainer width={width}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
      />
    </TGInputTextContainer>
  );
};

export default TGInputText;
