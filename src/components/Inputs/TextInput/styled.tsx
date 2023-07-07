import styled from '@emotion/styled';

// TG Input
export const TextInputWrapper = styled.div<{ width: number | string }>`
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
