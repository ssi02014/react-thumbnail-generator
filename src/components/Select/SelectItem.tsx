import React, { useContext } from 'react';
import { SelectContext } from './index';
import * as styles from './Select.css';

interface SelectItemProps {
  children: React.ReactNode;
  value: string | number;
}

interface SelectContextProps {
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

const SelectItem = ({ children, value }: SelectItemProps) => {
  const { selectValue, onChange } = useContext(
    SelectContext,
  ) as SelectContextProps;

  return (
    <li
      className={
        styles.selectListItem[
          String(selectValue).toLowerCase() === String(value).toLowerCase()
            ? 'active'
            : 'default'
        ]
      }
      onClick={() => onChange(value)}>
      {children}
    </li>
  );
};

export default SelectItem;
