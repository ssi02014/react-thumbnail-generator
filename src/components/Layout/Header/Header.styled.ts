import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: end;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 8px;
  border-bottom: 1px solid rgb(243, 243, 243);
`;

export const HeaderButton = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(90deg);
  }
`;
