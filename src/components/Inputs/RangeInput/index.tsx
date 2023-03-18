import React, { ComponentProps, useMemo } from 'react';
import TextInput from '../TextInput';
import * as S from './styled';

interface RangeInputProps extends ComponentProps<'input'> {
  value: string;
  min: number;
  max: number;
  label: string;
}

const RangeInput = ({
  label,
  name,
  min,
  max,
  value,
  onChange,
}: RangeInputProps) => {
  const backgroundSize = useMemo(() => {
    if (value === '-') return '50% 100%';
    return ((+value - min) * 100) / (max - min) + '% 100%';
  }, [min, max, value]);

  return (
    <S.RangeInputWrapper>
      <S.InputLabelRangeContainer>
        <label htmlFor={name}>{label}</label>
        <S.StyledRangeInput
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          backgroundSize={backgroundSize}
        />
      </S.InputLabelRangeContainer>
      <TextInput width={60} name={name} value={value} onChange={onChange} />
    </S.RangeInputWrapper>
  );
};

export default RangeInput;
