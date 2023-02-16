import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  ComponentProps,
} from 'react';
import { SelectWrapper, SelectInput, SelectItemContainer } from './TG.styled';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type SelectOmitType = 'ref' | 'children';

interface SelectContextProps {
  color?: string;
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

interface SelectProps extends Omit<ComponentProps<'div'>, SelectOmitType> {
  children: React.ReactNode;
  label: string;
  value: string | number;
  onChange: (e: any) => void;
}

export const SelectContext = React.createContext<SelectContextProps | null>(
  null
);

const TGSelect = ({ children, onChange, color, value, label }: SelectProps) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleSelect = useCallback(() => {
    setIsOpenSelect(!isOpenSelect);
  }, [isOpenSelect]);

  const handleChange = useCallback(
    (value: string | number) => {
      if (onChange) {
        onChange(value);
        setIsOpenSelect(false);
      }
    },
    [onChange]
  );

  useEffect(() => {
    const menuClickEvent = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpenSelect(!isOpenSelect);
      }
    };

    if (isOpenSelect) {
      document.addEventListener('click', menuClickEvent);
    }
    return () => document.removeEventListener('click', menuClickEvent);
  }, [isOpenSelect]);

  return (
    <SelectContext.Provider
      value={{ color, selectValue: value, onChange: handleChange }}>
      <SelectWrapper>
        <label>{label}</label>
        <SelectInput ref={inputRef} onClick={handleToggleSelect}>
          <p>{value}</p>
          <p>{isOpenSelect ? <SlArrowUp /> : <SlArrowDown />}</p>
        </SelectInput>
        {isOpenSelect && <SelectItemContainer>{children}</SelectItemContainer>}
      </SelectWrapper>
    </SelectContext.Provider>
  );
};

export default TGSelect;
