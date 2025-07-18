import React, { ComponentProps, useMemo } from 'react';
import TextInput from '../TextInput';
import * as styles from './RangeInput.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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

  const rangeInputStyle = useMemo(() => {
    return {
      ...assignInlineVars({
        [styles.backgroundSizeVar]: backgroundSize,
      }),
    };
  }, [backgroundSize]);

  return (
    <div className={styles.rangeInputWrapper}>
      <div className={styles.labelRangeContainer}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={styles.rangeInput}
          style={rangeInputStyle}
        />
      </div>
      <TextInput width={80} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default RangeInput;
