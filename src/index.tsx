'use client';

import React, { useState } from 'react';
import { toggleButton } from '@assets/icons';
import Portal from '@components/Portal';
import ThumbnailGeneratorContent from '@components/ThumbnailGeneratorContent';
import { ThumbnailGeneratorOpenButton } from '@components/ThumbnailGeneratorContent/ThumbnailGeneratorContent.styled';

import { Global } from '@emotion/react';
import colorPickerStyles from './styles/global.styled';

interface ThumbnailGeneratorProps {
  iconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  modalPosition?: 'left' | 'right' | 'center';
  additionalFontFamily?: string[];
  isFullWidth?: boolean;
  isDefaultOpen?: boolean;
}

const ICON_SIZE = 32;

const ThumbnailGenerator = ({
  isDefaultOpen = false,
  iconPosition = 'bottom-right',
  modalPosition = 'right',
  isFullWidth = false,
  additionalFontFamily,
}: ThumbnailGeneratorProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Global styles={colorPickerStyles} />
      <Portal>
        {isOpen ? (
          <ThumbnailGeneratorContent
            isFullWidth={isFullWidth}
            modalPosition={modalPosition}
            additionalFontFamily={additionalFontFamily}
            onToggle={onToggleGenerator}
          />
        ) : (
          <ThumbnailGeneratorOpenButton
            iconPosition={iconPosition}
            onClick={onToggleGenerator}>
            <img src={toggleButton} width={ICON_SIZE} height={ICON_SIZE} />
          </ThumbnailGeneratorOpenButton>
        )}
      </Portal>
    </>
  );
};

export default ThumbnailGenerator;
