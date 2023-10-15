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
import { Portal } from '@devgrace/react';

interface ColorPickerProps {
  children: React.ReactNode;
  color: Color;
  setColor: (color: Color) => void;
  toggleIsBlockEvent: () => void;
}

const ColorPicker = ({
  children,
  color,
  toggleIsBlockEvent,
  setColor,
}: ColorPickerProps) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const colorRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

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

  const handleOpenColorPicker = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { x, y } = e.currentTarget.getBoundingClientRect();

      setCoordinates({ x, y });
      setIsOpenColorPicker((prev) => !prev);
      toggleIsBlockEvent();
    },
    [toggleIsBlockEvent]
  );

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
      left: `${coordinates.x}px`,
      top: `${coordinates.y - 300}px`,
      transform: 'translateX(-50%)',
      zIndex: '9999',
    };
  }, [coordinates]);

  return (
    <div style={wrapperStyle}>
      <IconButton
        isOpen={isOpenColorPicker}
        onClick={handleOpenColorPicker}
        isBorder={true}>
        {children}
      </IconButton>

      {isOpenColorPicker && (
        <Portal>
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
        </Portal>
      )}
    </div>
  );
};

export default ColorPicker;
