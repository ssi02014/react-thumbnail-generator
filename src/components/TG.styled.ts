import styled from 'styled-components';

export const TGBodyWrapper = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  right: 20px;
  bottom: 20px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;
`;

export const TGCanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TGLimitSizeText = styled.div`
  font-size: 1rem;
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
  padding: 10px 0 5px 0;
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

export const TGOpenButton = styled.button<{
  bgColor: string;
  textColor: string;
}>`
  padding: 0;
  width: 60px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  font-size: 0.5rem;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '')};

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TGTextarea = styled.textarea`
  width: 400px;
  height: 24px;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
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
    width: 200px;
    padding: 8px;
    cursor: pointer;
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

export const SelectWrapper = styled.div`
  position: relative;
  width: 150px;

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
  height: 200px;
`;

export const SelectListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 0.9rem;

  &:hover {
    background-color: #ededed;
  }
`;

export const TGInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;

  label {
    font-size: 0.7rem;
    color: #969696;
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
