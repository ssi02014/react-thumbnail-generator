import React from 'react';
import * as S from '../styled';
import { close } from '@assets/icons';
import { IconButton } from '@components/Icon/styled';
import Icon from '@components/Icon';

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  const LimitWidthSize = window.innerWidth;

  return (
    <S.HeaderWrapper>
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
      <S.LimitSizeText>
        Limit Width: <span>{`${LimitWidthSize}px`}</span>
      </S.LimitSizeText>
    </S.HeaderWrapper>
  );
};

export default Header;
