import React, { useContext } from 'react';
import { SelectListItem } from './TG.styled';
import { SelectContext } from './TGSelect';

interface TGSelectItemProps {
  children: string;
  value: string | number;
}

interface SelectContextProps {
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

const TGSelectItem = ({ children, value }: TGSelectItemProps) => {
  const { selectValue, onChange } = useContext(
    SelectContext
  ) as SelectContextProps;

  return (
    <SelectListItem
      className={selectValue === value ? 'active' : ''}
      onClick={() => onChange(value)}>
      {children}
    </SelectListItem>
  );
};

export default TGSelectItem;
