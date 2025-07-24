import React, { useContext } from 'react';
import { SelectContext } from './index';
import { SelectListItem } from './Select.styled';

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

  const isActive =
    String(selectValue).toLowerCase() === String(value).toLowerCase();

  return (
    <SelectListItem active={isActive} onClick={() => onChange(value)}>
      {children}
    </SelectListItem>
  );
};

export default SelectItem;
