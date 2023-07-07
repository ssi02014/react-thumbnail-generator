import styled from '@emotion/styled';

export const IconButton = styled.button<{
  isOpen?: boolean;
  isBorder?: boolean;
}>`
  padding: 4px 5px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ isBorder, isOpen }) => {
    if (!isBorder) return `border: none;`;
    return `
      border: ${isOpen ? '1px solid #0e1b30;' : '1px solid #cccccc;'};
    `;
  }}

  &:hover {
    border: ${({ isBorder }) => (isBorder ? `1px solid #0e1b30` : 'none')};
  }
`;
