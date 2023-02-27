import React, { ComponentProps, useMemo } from 'react';
import styled from 'styled-components';

interface InputRangeProps extends ComponentProps<'input'> {
  value: number;
  min: number;
  max: number;
}

const InputRange = ({ min, max, value, onChange }: InputRangeProps) => {
  const backgroundSize = useMemo(() => {
    return ((value - min) * 100) / (max - min) + '% 100%';
  }, [min, max, value]);

  return (
    <StyledInputRange
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      backgroundSize={backgroundSize}
    />
  );
};

const StyledInputRange = styled.input<{ backgroundSize: string }>`
  & {
    -webkit-appearance: none;
    appearance: none;
    margin-top: 20px;
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
  }
`;

export default InputRange;
