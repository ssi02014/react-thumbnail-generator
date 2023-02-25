import styled from 'styled-components';

export const IconButton = styled.button<{
  isOpenColorPicker?: boolean;
  isBorder?: boolean;
}>`
  padding: 4px 5px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ isBorder, isOpenColorPicker }) => {
    if (!isBorder) return `border: none;`;
    return `
      border: ${
        isOpenColorPicker ? '1px solid #0e1b30;' : '1px solid #cccccc;'
      };
    `;
  }}

  &:hover {
    border: ${({ isBorder }) => (isBorder ? `1px solid #0e1b30` : 'none')};
  }
`;
