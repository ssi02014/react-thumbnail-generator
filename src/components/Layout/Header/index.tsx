import React from 'react';
import * as S from '../styled';
import { close } from '@assets/icons';
import { IconButton } from '@components/Icon/styled';
import Icon from '@components/Icon';

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <IconButton onClick={onToggle} isBorder={false}>
        <Icon src={close} width={20} height={20} />
      </IconButton>
    </S.HeaderWrapper>
  );
};

export default Header;
