import React, { ChangeEvent } from 'react';
import { TGInputContainer } from './TG.styled';

interface TGInputProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TGInput = ({ name, label, value, onChange }: TGInputProps) => {
  return (
    <TGInputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </TGInputContainer>
  );
};

export default TGInput;
