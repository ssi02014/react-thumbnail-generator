import styled from '@emotion/styled';

export const ColorPickerWrapper = styled.div`
  position: relative;
`;

export const ColorPickerContent = styled.div<{ left: number; top: number }>`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  transform: translateX(-50%);
  z-index: 9999;
`;
