import styled from 'styled-components';

export const TGBodyWrapper = styled.section`
  padding: 20px;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  right: 0;
  bottom: 0;
`;

export const TGHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #fff;

  h5 {
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
  height: 40px;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  resize: none;
  outline: none;
`;

export const TGButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  button {
    width: 120px;
    padding: 8px;
    cursor: pointer;
  }
`;
