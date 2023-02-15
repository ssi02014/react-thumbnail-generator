import React from 'react';
import { TGHeaderWrapper } from './TG.styled';

interface TGHeaderProps {
  onToggle: () => void;
}

const TGHeader = ({ onToggle }: TGHeaderProps) => {
  return (
    <TGHeaderWrapper>
      <h5>Thumbnail Generator</h5>
      <button onClick={onToggle}>X</button>
    </TGHeaderWrapper>
  );
};

export default TGHeader;
