import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  ComponentProps,
} from 'react';
import { SelectWrapper, SelectInput, SelectItemContainer } from './TG.styled';
import arrowBottom from '../assets/arrow-bottom.png';
import arrowTop from '../assets/arrow-top.png';
import TGIcon from './TGIcon';

interface SelectContextProps {
  color?: string;
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

interface SelectProps extends Omit<ComponentProps<'div'>, 'ref' | 'children'> {
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
          <p>
            {isOpenSelect ? (
              <TGIcon src={arrowTop} width={12} height={12} />
            ) : (
              <TGIcon src={arrowBottom} width={12} height={12} />
            )}
          </p>
        </SelectInput>
        {isOpenSelect && <SelectItemContainer>{children}</SelectItemContainer>}
      </SelectWrapper>
    </SelectContext.Provider>
  );
};

export default TGSelect;
