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
  min-width: 700px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;
  background-color: #ffffff;
  flex-direction: column;
  overflow: hidden;

  ${({ modalPosition }) => getModalPosition(modalPosition)}
`;

export const TGCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

  &:focus {
    border: 1px solid #0e1b30;
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

export const TGColorPickerWrapper = styled.div`
  position: relative;

  & > div {
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
  }

  .rcp-light {
    --rcp-background: #ffffff;
    --rcp-input-text: #111111;
    --rcp-input-border: rgba(0, 0, 0, 0.1);
    --rcp-input-label: #717171;
  }
  .rcp-dark {
    --rcp-background: #181818;
    --rcp-input-text: #f3f3f3;
    --rcp-input-border: rgba(255, 255, 255, 0.1);
    --rcp-input-label: #999999;
  }
  .rcp {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--rcp-background);
    border-radius: 10px;
  }
  .rcp-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
  .rcp-saturation {
    position: relative;
    width: 100%;
    background-image: linear-gradient(transparent, black),
      linear-gradient(to right, white, transparent);
    border-radius: 10px 10px 0 0;
    user-select: none;
  }
  .rcp-saturation-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transform: translate(-10px, -10px);
  }
  .rcp-hue {
    position: relative;
    width: 100%;
    height: 12px;
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0),
      rgb(255, 255, 0),
      rgb(0, 255, 0),
      rgb(0, 255, 255),
      rgb(0, 0, 255),
      rgb(255, 0, 255),
      rgb(255, 0, 0)
    );
    border-radius: 10px;
    user-select: none;
  }
  .rcp-hue-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
    box-sizing: border-box;
    transform: translate(-10px, -4px);
  }
  .rcp-alpha {
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 10px;
    user-select: none;
  }
  .rcp-alpha-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
    box-sizing: border-box;
    transform: translate(-10px, -4px);
  }
  .rcp-fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    width: 100%;
  }
  .rcp-fields-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
  }
  .hex-element {
    grid-row: 1;
  }
  .hex-element:nth-child(3n) {
    grid-column: 1 / -1;
  }
  .rcp-fields-element-input {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: var(--rcp-input-text);
    text-align: center;
    background: none;
    border: 2px solid;
    border-color: var(--rcp-input-border);
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    padding: 10px;
  }
  .rcp-fields-element-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--rcp-input-label);
    text-transform: uppercase;
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

export const TGIConButton = styled.button<{
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

// TG Select
export const SelectWrapper = styled.div`
  position: relative;
  min-width: 150px;

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
export const TGInputTextContainer = styled.div<{ width?: number }>`
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

    &:focus {
      border: 1px solid #0e1b30;
    }
  }
`;

// TG Icon
export const TGIConImage = styled.img``;

// TG InputFile
export const TGInputFileWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #cccccc;

  label {
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 4px 5px;
    margin: 0;
  }

  input {
    display: none;
  }

  &:hover {
    border: 1px solid #0e1b30;
  }
`;
