import React from 'react';
import { TGHeaderWrapper, TGIConButton, TGLimitSizeText } from './TG.styled';
import TGIcon from './TGIcon';
import { close } from '../assets/icons';

interface TGHeaderProps {
  onToggle: () => void;
}

const TGHeader = ({ onToggle }: TGHeaderProps) => {
  const LimitWidthSize = window.innerWidth - 70;
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
          <TGIcon src={close} width={20} height={20} />
        </TGIConButton>
      </div>
      <TGLimitSizeText>
        Limit Width Size : <span>{LimitWidthSize}px</span>
      </TGLimitSizeText>
    </TGHeaderWrapper>
  );
};

export default TGHeader;
