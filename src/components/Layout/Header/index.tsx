import React from 'react';
import { close } from '@assets/icons';
import IconButton from '@components/IconButton';
import * as styles from './Header.css';

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <IconButton
        className={styles.headerButton}
        onClick={onToggle}
        hasBorder={false}>
        <img src={close} width={20} height={20} />
      </IconButton>
    </header>
  );
};

export default Header;
