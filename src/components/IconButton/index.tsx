import React, { ComponentProps } from 'react';
import { IconButton as StyledIconButton } from './IconButton.styled';

interface IconButtonProps extends ComponentProps<'button'> {
  hasBorder?: boolean;
  isOpen?: boolean;
}

const IconButton = ({ hasBorder, isOpen, ...props }: IconButtonProps) => {
  const variant = isOpen ? 'isOpen' : hasBorder ? 'hasBorder' : 'default';

  return <StyledIconButton variant={variant} {...props} />;
};

export default IconButton;
