import React, { ComponentProps } from 'react';
import * as styles from './IconButton.css';
import clsx from 'clsx';

interface IconButtonProps extends ComponentProps<'button'> {
  hasBorder?: boolean;
  isOpen?: boolean;
}

const IconButton = ({ hasBorder, isOpen, ...props }: IconButtonProps) => {
  const { className, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        styles.iconButton[
          isOpen ? 'isOpen' : hasBorder ? 'hasBorder' : 'default'
        ],
        className,
      )}
    />
  );
};

export default IconButton;
