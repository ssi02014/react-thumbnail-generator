import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ColorPicker as PaletteColorPicker } from 'react-color-palette';
import IconButton from '../IconButton';
import * as S from './ColorPicker.styled';
import Portal from '@components/Portal';

interface ColorPickerProps {
  children: React.ReactNode;
  color: ComponentProps<typeof PaletteColorPicker>['color'];
  setColor: (color: ComponentProps<typeof PaletteColorPicker>['color']) => void;
  toggleIsBlockEvent: () => void;
}

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ children, color, toggleIsBlockEvent, setColor }, ref) => {
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
      [isOpenColorPicker, toggleIsBlockEvent],
    );

    const handleOpenColorPicker = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        const { x, y } = e.currentTarget.getBoundingClientRect();

        setCoordinates({ x, y });
        setIsOpenColorPicker((prev) => !prev);
        toggleIsBlockEvent();
      },
      [toggleIsBlockEvent],
    );

    useEffect(() => {
      document.addEventListener('mousedown', handleCloseColorPicker);

      return () => {
        document.removeEventListener('mousedown', handleCloseColorPicker);
      };
    }, [handleCloseColorPicker]);

    return (
      <S.ColorPickerWrapper ref={ref}>
        <IconButton
          isOpen={isOpenColorPicker}
          onClick={handleOpenColorPicker}
          hasBorder>
          {children}
        </IconButton>

        {isOpenColorPicker && (
          <Portal>
            <S.ColorPickerContent
              ref={colorRef}
              left={coordinates.x}
              top={coordinates.y - 360}>
              <PaletteColorPicker
                height={150}
                color={color}
                onChange={setColor}
                hideInput={['hsv']}
              />
            </S.ColorPickerContent>
          </Portal>
        )}
      </S.ColorPickerWrapper>
    );
  },
);

export default ColorPicker;
