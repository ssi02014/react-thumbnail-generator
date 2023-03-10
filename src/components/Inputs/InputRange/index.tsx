import TGInputText from '../../TGInputText';
import React, { ComponentProps, useMemo } from 'react';
import * as S from './styled';

interface InputRangeProps extends ComponentProps<'input'> {
  value: string;
  min: number;
  max: number;
  label: string;
}

const InputRange = ({
  label,
  name,
  min,
  max,
  value,
  onChange,
}: InputRangeProps) => {
  const backgroundSize = useMemo(() => {
    if (value === '-') return '50% 100%';
    return ((+value - min) * 100) / (max - min) + '% 100%';
  }, [min, max, value]);

  return (
    <S.InputRangeWrapper>
      <S.InputLabelRangeContainer>
        <label htmlFor={name}>{label}</label>
        <S.StyledInputRange
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          backgroundSize={backgroundSize}
        />
      </S.InputLabelRangeContainer>
      <TGInputText width={60} name={name} value={value} onChange={onChange} />
    </S.InputRangeWrapper>
  );
};

export default InputRange;
