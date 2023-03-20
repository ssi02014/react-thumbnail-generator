import React, { useState } from 'react';
import TG from '@components/TG';
import { TGOpenButton } from '@components/TG.styled';
import { toggleButton } from '@assets/icons';
import { Position, getIconSize } from '@utils/style';
import TGPortal from '@components/TGPortal';
import Icon from '@components/Icon';

interface ThumbnailGeneratorProps {
  id?: string;
  buttonIcon?: React.ReactNode;
  iconSize?: 'small' | 'medium' | 'large';
  position?: Position;
  iconPosition?: [number, number, number, number];
  modalPosition?: 'left' | 'right' | 'center';
  additionalFontFamily?: string[];
  isFullWidth?: boolean;
}

const ThumbnailGenerator = ({
  id,
  buttonIcon,
  iconSize = 'medium',
  iconPosition = [0, 20, 20, 0],
  modalPosition = 'right',
  isFullWidth = false,
  additionalFontFamily = [],
}: ThumbnailGeneratorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tgIconSize = getIconSize(iconSize);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TGPortal id={id}>
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
      </TGPortal>
    </>
  );
};

export default ThumbnailGenerator;
