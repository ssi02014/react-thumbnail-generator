import React, { ComponentProps, useMemo } from 'react';
import * as styles from './TextInput.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface TextInputProps extends ComponentProps<'input'> {
  label?: string;
}

const TextInput = ({
  name,
  label,
  value,
  width = 124,
  maxLength = 5,
  disabled = false,
  onChange,
}: TextInputProps) => {
  const inputStyle = useMemo(() => {
    return {
      ...assignInlineVars({
        [styles.widthVar]: `${width}px`,
      }),
    };
  }, [width]);

  return (
    <div className={styles.textInputContainer}>
      {label && (
        <label htmlFor={name} className={styles.textInputLabel}>
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        className={styles.textInput}
        style={inputStyle}
      />
    </div>
  );
};

export default TextInput;
