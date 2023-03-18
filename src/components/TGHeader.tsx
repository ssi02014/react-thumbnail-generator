import React from 'react';
import { TGHeaderWrapper, TGLimitSizeText } from './TG.styled';
import { close } from '@assets/icons';
import { IconButton } from './Icon/styled';
import Icon from './Icon';

interface TGHeaderProps {
  onToggle: () => void;
}

const TGHeader = ({ onToggle }: TGHeaderProps) => {
  const LimitWidthSize = window.innerWidth;

  return (
    <TGHeaderWrapper>
      <div>
        <a
          href="https://github.com/ssi02014/react-thumbnail-generator"
          target="_blank"
          rel="noreferrer">
          Thumbnail Generator
        </a>
        <IconButton onClick={onToggle} isBorder={false}>
          <Icon src={close} width={20} height={20} />
        </IconButton>
      </div>
      <TGLimitSizeText>
        Limit Width: <span>{`${LimitWidthSize}px`}</span>
      </TGLimitSizeText>
    </TGHeaderWrapper>
  );
};

export default TGHeader;
