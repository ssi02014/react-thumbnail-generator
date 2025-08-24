import React, { ComponentProps, useMemo } from 'react';
import * as S from './RangeInput.styled';

interface RangeInputProps extends ComponentProps<'input'> {
  label?: string;
}

const RangeInput = ({
  name,
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}: RangeInputProps) => {
  const backgroundSize = useMemo(() => {
    const numericValue = Number(value);
    const numericMin = Number(min);
    const numericMax = Number(max);
    const percentage =
      ((numericValue - numericMin) / (numericMax - numericMin)) * 100;
    return `${percentage}%`;
  }, [value, min, max]);

  return (
    <S.RangeInputWrapper>
      <S.LabelRangeContainer>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.RangeInput
          type="range"
          name={name}
          id={name}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          backgroundSize={backgroundSize}
        />
      </S.LabelRangeContainer>
    </S.RangeInputWrapper>
  );
};

export default RangeInput;
