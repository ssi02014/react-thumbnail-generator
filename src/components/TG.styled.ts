import styled from 'styled-components';
import { getIconPosition } from '@utils/style';

export const TGOpenButton = styled.button<{
  iconPosition: [number, number, number, number];
}>`
  padding: 0;
  background-color: transparent;
  position: fixed;
  cursor: pointer;
  border: none;
  font-size: 0.5rem;
  color: #ffffff;
  transition: 0.2s;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }

  ${({ iconPosition }) => getIconPosition(iconPosition)}
`;

export const TGTextarea = styled.textarea`
  width: 350px;
  height: auto;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  resize: none;
  outline: none;
  font-size: 1.1rem;

  &::placeholder {
    font-size: 1rem;
    color: #cccccc;
  }

  &:focus,
  &:hover {
    border: 1px solid #0e1b30;
  }
`;

export const TGButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #192841;
    color: #fff;
    width: 300px;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TGControllerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  & > input[type='range'] {
    margin-top: 20px;
  }
`;
