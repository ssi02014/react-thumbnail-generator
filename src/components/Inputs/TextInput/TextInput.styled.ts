import styled from '@emotion/styled';

interface TextInputProps {
  width?: string;
}

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
`;

export const TextInputLabel = styled.label`
  font-size: 0.7rem;
  color: #969696;
  height: 16px;
  line-height: 17px;
`;

export const TextInput = styled.input<TextInputProps>`
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 0.9rem;
  outline: none;
  margin-top: 1px;
  width: ${(props) => props.width || 'auto'};

  &:disabled {
    background-color: #f3f3f3;
  }
`;
