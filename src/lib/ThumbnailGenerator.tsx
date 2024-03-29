import React, { useState } from 'react';
import { toggleButton } from '@assets/icons';
import { Position, getIconSize } from '@utils/style';
import { Portal } from '@devgrace/react';
import Icon from '@components/Icon';
import { Global } from '@emotion/react';
import reset from '@css/reset';
import TG from '@components/TG';
import { TGOpenButton } from '@components/TG/TG.styled';

interface ThumbnailGeneratorProps {
  isDefaultOpen?: boolean;
  buttonIcon?: React.ReactNode;
  iconSize?: 'small' | 'medium' | 'large';
  position?: Position;
  iconPosition?: [number, number, number, number];
  modalPosition?: 'left' | 'right' | 'center';
  additionalFontFamily?: string[];
  isFullWidth?: boolean;
}

const ThumbnailGenerator = ({
  buttonIcon,
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
          <TG
            isFullWidth={isFullWidth}
            modalPosition={modalPosition}
            additionalFontFamily={additionalFontFamily}
            onToggle={onToggleGenerator}
          />
        ) : (
          <TGOpenButton iconPosition={iconPosition} onClick={onToggleGenerator}>
            {buttonIcon ? (
              buttonIcon
            ) : (
              <Icon src={toggleButton} width={tgIconSize} height={tgIconSize} />
            )}
          </TGOpenButton>
        )}
      </Portal>
    </>
  );
};

export default ThumbnailGenerator;
