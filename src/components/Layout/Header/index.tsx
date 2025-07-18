import React from 'react';
import * as S from '../styled';
import { close } from '@assets/icons';
import IconButton from '@components/IconButton';

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <IconButton onClick={onToggle} hasBorder={false}>
        <img src={close} width={20} height={20} />
      </IconButton>
    </S.HeaderWrapper>
  );
};

export default Header;
