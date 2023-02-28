import styled from 'styled-components';

export const InputRangeWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  gap: 5px;
`;

export const InputLabelRangeContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.7rem;
    color: #969696;
    height: 16px;
  }
`;

export const StyledInputRange = styled.input<{ backgroundSize: string }>`
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: 0.7;
  background-image: linear-gradient(#3264b5, #3264b5);
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-repeat: no-repeat;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #275194;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: #3264b5;
    cursor: pointer;
  }
`;
