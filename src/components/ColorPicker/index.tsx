import React, { useEffect, useRef, useState } from 'react';
import { ColorPickerWrapper } from './styled';
import { Color, ColorPicker as PaletteColorPicker } from 'react-color-palette';
import { IconButton } from '../Icon/styled';

interface ColorPickerPickerProps {
  children: React.ReactNode;
  color: Color;
  setColor: (color: Color) => void;
}
const ColorPickerPicker = ({
  children,
  color,
  setColor,
}: ColorPickerPickerProps) => {
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

  const handleOpenColorPicker = () => {
    setIsOpenColorPicker(!isOpenColorPicker);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseColorPicker);

    return () => {
      document.removeEventListener('mousedown', handleCloseColorPicker);
    };
  }, [handleCloseColorPicker]);

  return (
    <ColorPickerWrapper>
      <IconButton
        isOpenColorPicker={isOpenColorPicker}
        onClick={handleOpenColorPicker}
        isBorder={true}>
        {children}
      </IconButton>
      {isOpenColorPicker && (
        <div ref={colorRef}>
          <PaletteColorPicker
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
    </ColorPickerWrapper>
  );
};

export default ColorPickerPicker;
