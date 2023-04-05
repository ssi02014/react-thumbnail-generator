import React, { useContext } from 'react';
import * as S from './styled';
import { SelectContext } from './index';

interface SelectItemProps {
  children: string;
  value: string | number;
}

interface SelectContextProps {
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

const SelectItem = ({ children, value }: SelectItemProps) => {
  const { selectValue, onChange } = useContext(
    SelectContext
  ) as SelectContextProps;

  return (
    <S.SelectListItem
      className={selectValue === value ? 'active' : ''}
      onClick={() => onChange(value)}>
      {children}
    </S.SelectListItem>
  );
};

export default SelectItem;
