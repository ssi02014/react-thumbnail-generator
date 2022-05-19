import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  size?: 'medium' | 'large';
}

const Button = ({ children, size = 'medium' }: Props) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

const StyledButton = styled.button<{ size: 'medium' | 'large' }>`
  background-color: #fa9696;
  border: none;
  ${({ size }) => {
    if (size === 'medium') {
      return `padding: 10px 15px`;
    } else {
      return `padding: 15px 25px`;
    }
  }}
`;

export default Button;
