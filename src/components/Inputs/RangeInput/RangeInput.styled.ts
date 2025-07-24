import styled from '@emotion/styled';

export const RangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LabelRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.7rem;
  color: #969696;
  height: 16px;
`;

interface RangeInputProps {
  backgroundSize?: string;
}

export const RangeInput = styled.input<RangeInputProps>`
  appearance: none;
  width: 150px;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: 0.7;
  background-image: linear-gradient(#3264b5, #3264b5);
  background-size: ${(props) => props.backgroundSize || '0%'};
  background-repeat: no-repeat;
  -webkit-appearance: none;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #275194;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    background: #3264b5;
    cursor: pointer;
  }
`;
