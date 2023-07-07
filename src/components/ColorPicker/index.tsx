import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Color, ColorPicker as PaletteColorPicker } from 'react-color-palette';
import { IconButton } from '../Icon/styled';
import './style.css';

interface ColorPickerPickerProps {
  children: React.ReactNode;
  color: Color;
  setColor: (color: Color) => void;
  toggleIsBlockEvent: () => void;
}

const ColorPickerPicker = ({
  children,
  color,
  toggleIsBlockEvent,
  setColor,
}: ColorPickerPickerProps) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const colorRef = useRef<HTMLDivElement>(null);

  const handleCloseColorPicker = useCallback(
    (e: any) => {
      if (isOpenColorPicker) {
        if (colorRef.current) {
          if (!colorRef.current.contains(e.target)) {
            setIsOpenColorPicker(false);
            toggleIsBlockEvent();
          }
        }
      }
    },
    [isOpenColorPicker, toggleIsBlockEvent]
  );

  const handleOpenColorPicker = useCallback(() => {
    setIsOpenColorPicker((prev) => !prev);
    toggleIsBlockEvent();
  }, [toggleIsBlockEvent]);

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseColorPicker);

    return () => {
      document.removeEventListener('mousedown', handleCloseColorPicker);
    };
  }, [handleCloseColorPicker]);

  const wrapperStyle: CSSProperties = useMemo(() => {
    return {
      position: 'relative',
    };
  }, []);

  const colorPickerWrapperStyle: CSSProperties = useMemo(() => {
    return {
      position: 'absolute',
      left: '50%',
      bottom: '40px',
      transform: 'translateX(-50%)',
    };
  }, []);

  return (
    <div style={wrapperStyle}>
      <IconButton
        isOpenColorPicker={isOpenColorPicker}
        onClick={handleOpenColorPicker}
        isBorder={true}>
        {children}
      </IconButton>
      {isOpenColorPicker && (
        <div ref={colorRef} style={colorPickerWrapperStyle}>
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
    </div>
  );
};

export default ColorPickerPicker;
