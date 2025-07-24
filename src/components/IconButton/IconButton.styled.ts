import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IconButtonProps {
  variant?: 'default' | 'hasBorder' | 'isOpen';
}

const baseStyles = css`
  padding: 4px 5px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconButton = styled.button<IconButtonProps>`
  ${baseStyles}

  ${(props) => {
    switch (props.variant) {
      case 'hasBorder':
        return css`
          border: 1px solid #cccccc;
          &:hover {
            border: 1px solid #0e1b30;
          }
        `;
      case 'isOpen':
        return css`
          border: 1px solid #0e1b30;
          &:hover {
            border: 1px solid #0e1b30;
          }
        `;
      default:
        return css`
          border: none;
          &:hover {
            border: none;
          }
        `;
    }
  }}
`;
