import React, { ComponentProps, forwardRef } from 'react';
import * as S from './IconButton.styled';

interface IconButtonProps extends ComponentProps<'button'> {
  hasBorder?: boolean;
  isOpen?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ hasBorder, isOpen, ...props }, ref) => {
  const variant = isOpen ? 'isOpen' : hasBorder ? 'hasBorder' : 'default';

  return <S.IconButton variant={variant} ref={ref} {...props} />;
});

export default IconButton;
