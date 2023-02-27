import styled from 'styled-components';
import { getIconPosition, getModalPosition } from 'utils/style';

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

export const TGBodyWrapper = styled.section<{
  modalPosition: 'left' | 'right' | 'center';
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  min-width: 600px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;
  background-color: #ffffff;
  flex-direction: column;
  overflow: hidden;
  font-family: Arial;

  ${({ modalPosition }) => getModalPosition(modalPosition)}
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
  max-height: calc(100vh - 78px);
  overflow-y: scroll;
  overflow-x: auto;
`;

export const TGHeaderWrapper = styled.div`
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

export const TGContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  canvas + textarea {
    margin-top: 10px;
  }
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

// TG Select
export const SelectWrapper = styled.div`
  position: relative;
  min-width: 150px;
  max-width: 150px;

  label {
    font-size: 0.7rem;
    color: #969696;
  }
`;

export const SelectInput = styled.div<{ isOpenSelect: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: ${({ isOpenSelect }) =>
    isOpenSelect ? `1px solid #0e1b30` : `1px solid #cccccc`};
  border-radius: 5px;
  padding: 6px 12px;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }

  &:hover {
    border: 1px solid #0e1b30;
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
export const TGInputTextContainer = styled.div<{ width: number | string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;

  label {
    font-size: 0.7rem;
    color: #969696;
    height: 16px;
    line-height: 17px;
  }

  input {
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 0.9rem;
    outline: none;
    margin-top: 1px;
    width: ${({ width }) => `${width}px`};

    &:focus,
    &:hover {
      border: 1px solid #0e1b30;
    }

    &:disabled {
      color: #cccccc;
      border: 1px solid #cccccc;
    }
  }
`;

// TG InputFile
export const TGInputFileWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #cccccc;
  padding: 4px 5px;

  label {
    cursor: pointer;
    margin: 0;
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  input {
    display: none;
  }

  &:hover {
    border: 1px solid #0e1b30;
  }
`;
