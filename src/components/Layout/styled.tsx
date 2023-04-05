import { getModalPosition } from '@utils/style';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
  background-color: #fff;

  & > div:first-child {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  a {
    color: #111111;
    padding: 0;
    margin: 0;
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #3264b5;
    }
  }

  button {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const LimitSizeText = styled.div`
  font-size: 0.85rem;
  margin-top: 5px;
  text-align: center;

  span {
    font-weight: bold;
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
  max-height: calc(100vh - 78px);
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
