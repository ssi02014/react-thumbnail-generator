import React, { ChangeEvent } from 'react';
import { TGInputTextContainer } from './TG.styled';

interface TGInputTextProps {
  name: string;
  value: string | number;
  label: string;
  width?: number;
  maxLength?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TGInputText = ({
  name,
  label,
  value,
  width = 100,
  maxLength = 5,
  onChange,
}: TGInputTextProps) => {
  return (
    <TGInputTextContainer width={width}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={onChange}
      />
    </TGInputTextContainer>
  );
};

export default TGInputText;
