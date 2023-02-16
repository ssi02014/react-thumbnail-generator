import React from 'react';
import { TGHeaderWrapper, TGIConButton, TGLimitSizeText } from './TG.styled';
import { AiOutlineClose } from 'react-icons/ai';

interface TGHeaderProps {
  onToggle: () => void;
}

const TGHeader = ({ onToggle }: TGHeaderProps) => {
  const LimitWidthSize = window.innerWidth - 100;
  return (
    <TGHeaderWrapper>
      <div>
        <a
          href="https://github.com/ssi02014/react-thumbnail-generator"
          target="_blank"
          rel="noreferrer">
          Simple Thumbnail Generator
        </a>
        <TGIConButton onClick={onToggle} isBorder={false}>
          <AiOutlineClose size={18} />
        </TGIConButton>
      </div>
      <TGLimitSizeText>
        Limit Width Size : <span>{LimitWidthSize}px</span>
      </TGLimitSizeText>
    </TGHeaderWrapper>
  );
};

export default TGHeader;
