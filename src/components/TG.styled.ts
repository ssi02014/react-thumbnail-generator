import styled from 'styled-components';
import { getPosition, Position } from '../utils/style';

export const TGOpenButton = styled.button<{ position: Position }>`
  padding: 0;
  background-color: #fff;
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

  ${({ position }) => {
    return getPosition(position);
  }}
`;

export const TGBodyWrapper = styled.section<{ position: Position }>`
  position: fixed;
  display: flex;
  justify-content: center;
  min-width: 700px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;

  ${({ position }) => {
    return getPosition(position);
  }}
`;

export const TGCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TGLimitSizeText = styled.div`
  font-size: 0.85rem;
  margin-top: 5px;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

export const TGInnerWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 40px);
  overflow-y: scroll;
  padding: 0 10px 20px 10px;
`;

export const TGHeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  padding: 10px 0 0 0;
  background-color: #fff;

  & > div:first-child {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  a {
    color: #111;
    padding: 0;
    margin: 0;
    font-size: 0.875rem;
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }
`;

export const TGContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  canvas + textarea {
    margin-top: 10px;
  }
`;

export const TGTextarea = styled.textarea`
  width: 350px;
  height: 24px;
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
`;

export const TGButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #192841;
    color: #fff;
    width: 200px;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TGColorPickerWrapper = styled.div`
  position: relative;

  & > div {
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
  }
`;

export const TGControllerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  & > textarea + div {
    margin-left: 10px;
  }
  & > div + div {
    margin-left: 10px;
  }
`;

export const TGIConButton = styled.button<{ isBorder?: boolean }>`
  padding: 4px 5px;
  background: #fff;
  border: ${({ isBorder }) => (isBorder ? `1px solid #cccccc` : 'none')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// TG Select
export const SelectWrapper = styled.div`
  position: relative;
  min-width: 150px;

  label {
    font-size: 0.7rem;
    color: #969696;
  }
`;

export const SelectInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 6px 12px;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

export const SelectItemContainer = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px 0.5px #afafaf;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  max-height: 200px;
`;

export const SelectListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 0.9rem;

  &:hover {
    background-color: #ededed;
  }
`;

// TG Input
export const TGInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;

  label {
    font-size: 0.7rem;
    color: #969696;
    height: 16px;
    line-height: 16px;
    line-height: 17px;
  }

  input {
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 0.9rem;
    outline: none;
    margin-top: 1px;
  }
`;

// TG Icon
export const TGIConImage = styled.img<{ color?: string }>`
  fill: ${({ color }) => `${color}`};
`;
