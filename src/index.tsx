'use client';

import React, { useState } from 'react';
import { toggleButton } from '@assets/icons';
import Portal from '@components/Portal';
import ThumbnailGeneratorContent from '@components/ThumbnailGeneratorContent';
import * as styles from '@components/ThumbnailGeneratorContent/ThumbnailGeneratorContent.css';

interface ThumbnailGeneratorProps {
  iconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  modalPosition?: 'left' | 'right' | 'center';
  iconSize?: 'small' | 'medium' | 'large';
  additionalFontFamily?: string[];
  isFullWidth?: boolean;
  isDefaultOpen?: boolean;
}

const getIconSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 24;
    case 'medium':
      return 32;
    default:
      return 40;
  }
};

const ThumbnailGenerator = ({
  isDefaultOpen = false,
  iconSize = 'medium',
  iconPosition = 'bottom-right',
  modalPosition = 'right',
  isFullWidth = false,
  additionalFontFamily,
}: ThumbnailGeneratorProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const tgIconSize = getIconSize(iconSize);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Portal>
      {isOpen ? (
        <ThumbnailGeneratorContent
          isFullWidth={isFullWidth}
          modalPosition={modalPosition}
          additionalFontFamily={additionalFontFamily}
          onToggle={onToggleGenerator}
        />
      ) : (
        <button
          className={styles.thumbnailGeneratorOpenButton({
            iconPosition,
          })}
          onClick={onToggleGenerator}>
          <img src={toggleButton} width={tgIconSize} height={tgIconSize} />
        </button>
      )}
    </Portal>
  );
};

export default ThumbnailGenerator;
