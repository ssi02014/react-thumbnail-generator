import React from 'react';
import { close } from '@assets/icons';
import IconButton from '@components/IconButton';
import { HeaderWrapper, HeaderButton } from './Header.styled';

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderButton>
        <IconButton onClick={onToggle} hasBorder={false}>
          <img src={close} width={20} height={20} />
        </IconButton>
      </HeaderButton>
    </HeaderWrapper>
  );
};

export default Header;
