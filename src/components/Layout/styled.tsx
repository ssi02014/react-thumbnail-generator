import { getModalPosition } from '@utils/style';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 8px;
  border-bottom: 1px solid rgb(243, 243, 243);

  button {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const BodyWrapper = styled.section<{
  modalPosition: 'left' | 'right' | 'center';
  isFullWidth: boolean;
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  min-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '600px')};
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;
  background-color: #ffffff;
  flex-direction: column;
  overflow: hidden;

  font-family: Arial;

  * {
    box-sizing: border-box;
  }

  ${({ modalPosition }) => getModalPosition(modalPosition)}
`;

export const InnerWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 45px);
  overflow-y: scroll;
  overflow-x: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  canvas + textarea {
    margin-top: 10px;
  }
`;
