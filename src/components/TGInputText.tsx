import React, { ChangeEvent } from 'react';
import { TGInputTextContainer } from './TG.styled';

interface TGInputTextProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TGInputText = ({ name, label, value, onChange }: TGInputTextProps) => {
  return (
    <TGInputTextContainer>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </TGInputTextContainer>
  );
};

export default TGInputText;
