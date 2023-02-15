import React from 'react';
import { TGHeaderWrapper, TGIConButton } from './TG.styled';
import { AiOutlineClose } from 'react-icons/ai';

interface TGHeaderProps {
  onToggle: () => void;
}

const TGHeader = ({ onToggle }: TGHeaderProps) => {
  return (
    <TGHeaderWrapper>
      <h5>Simple Thumbnail Generator</h5>
      <TGIConButton onClick={onToggle} isBorder={false}>
        <AiOutlineClose size={18} />
      </TGIConButton>
    </TGHeaderWrapper>
  );
};

export default TGHeader;
