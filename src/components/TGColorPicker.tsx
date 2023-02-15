import React, { useEffect, useRef, useState } from 'react';
import { TGColorPickerWrapper, TGIConButton } from './TG.styled';
import { Color, ColorPicker } from 'react-color-palette';

interface TGColorPickerProps {
  children: React.ReactNode;
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
}
const TGColorPicker = ({ children, color, setColor }: TGColorPickerProps) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const colorRef = useRef<HTMLDivElement>(null);

  const handleCloseColorPicker = (e: any) => {
    if (isOpenColorPicker) {
      if (colorRef && colorRef.current) {
        if (!colorRef.current.contains(e.target)) {
          setIsOpenColorPicker(false);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseColorPicker);

    return () => {
      document.removeEventListener('mousedown', handleCloseColorPicker);
    };
  }, [handleCloseColorPicker]);

  return (
    <TGColorPickerWrapper>
      <TGIConButton
        onClick={() => setIsOpenColorPicker(!isOpenColorPicker)}
        isBorder={true}>
        {children}
      </TGIConButton>
      {isOpenColorPicker && (
        <div ref={colorRef}>
          <ColorPicker
            width={250}
            height={150}
            color={color}
            onChange={setColor}
            hideHSV
            hideRGB
            dark
          />
        </div>
      )}
    </TGColorPickerWrapper>
  );
};

export default TGColorPicker;
