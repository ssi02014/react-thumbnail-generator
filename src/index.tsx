import React, { useState } from 'react';
import { toggleButton } from '@assets/icons';
import { getIconSize } from '@utils/style';
import Portal from '@components/Portal';
import { Global } from '@emotion/react';
import reset from '@css/reset';
import ThumbnailGeneratorContent from '@components/ThumbnailGeneratorContent';
import { TGOpenButton } from '@components/ThumbnailGeneratorContent/TG.styled';

interface ThumbnailGeneratorProps {
  isDefaultOpen?: boolean;
  iconSize?: 'small' | 'medium' | 'large';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  iconPosition?: [number, number, number, number];
  modalPosition?: 'left' | 'right' | 'center';
  additionalFontFamily?: string[];
  isFullWidth?: boolean;
}

const ThumbnailGenerator = ({
  isDefaultOpen = false,
  iconSize = 'medium',
  iconPosition = [0, 20, 20, 0],
  modalPosition = 'right',
  isFullWidth = false,
  additionalFontFamily = [],
}: ThumbnailGeneratorProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const tgIconSize = getIconSize(iconSize);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Global styles={reset} />
      <Portal>
        {isOpen ? (
          <ThumbnailGeneratorContent
            isFullWidth={isFullWidth}
            modalPosition={modalPosition}
            additionalFontFamily={additionalFontFamily}
            onToggle={onToggleGenerator}
          />
        ) : (
          <TGOpenButton iconPosition={iconPosition} onClick={onToggleGenerator}>
            <img src={toggleButton} width={tgIconSize} height={tgIconSize} />
          </TGOpenButton>
        )}
      </Portal>
    </>
  );
};

export default ThumbnailGenerator;
