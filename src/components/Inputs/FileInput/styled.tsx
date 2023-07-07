import styled from '@emotion/styled';

export const FileInputWrapper = styled.div`
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
