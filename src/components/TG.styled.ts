import styled from 'styled-components';

export const TGBodyWrapper = styled.section`
  padding: 0 20px 40px 20px;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  right: 50px;
  bottom: 50px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  z-index: 9999;
`;

export const TGHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: transparent;

  h5 {
    color: #111;
    padding: 0;
    margin: 0;
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

export const TGOpenButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #cccccc;
`;

export const TGTextarea = styled.textarea`
  width: 300px;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  resize: none;
  outline: none;
  font-size: 1.1rem;
  height: 21px;
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

  & > div + div {
    margin-left: 15px;
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
