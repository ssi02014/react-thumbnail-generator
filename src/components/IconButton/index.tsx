import React, { ComponentProps } from 'react';
import * as styles from './IconButton.css';
import clsx from 'clsx';

interface IconButtonProps extends ComponentProps<'button'> {
  isBorderHighlight?: boolean;
  isOpen?: boolean;
}

const IconButton = ({
  isBorderHighlight,
  isOpen,
  ...props
}: IconButtonProps) => {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        styles.iconButton[isOpen ? 'isOpen' : 'default'],
        className,
      )}
    />
  );
};

export default IconButton;
