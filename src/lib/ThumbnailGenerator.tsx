import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';
import { toggleButton } from '../assets/icons';
import TGIcon from '../components/TGIcon';
import { Position, getIconSize } from '../utils/style';
import TGPortal from '../components/TGPortal';

interface ThumbnailGeneratorProps {
  id?: string;
  iconSrc?: string;
  iconSize?: 'small' | 'medium' | 'large';
  position?: Position;
  iconPosition?: [number, number, number, number];
  modalPosition?: 'left' | 'right' | 'center';
  additionalFontFamily?: string[];
}

const ThumbnailGenerator = ({
  id,
  iconSrc = toggleButton,
  iconSize = 'medium',
  iconPosition = [0, 20, 20, 0],
  modalPosition = 'right',
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
            modalPosition={modalPosition}
            additionalFontFamily={additionalFontFamily}
            onToggle={onToggleGenerator}
          />
        ) : (
          <TGOpenButton iconPosition={iconPosition} onClick={onToggleGenerator}>
            <TGIcon src={iconSrc} width={tgIconSize} height={tgIconSize} />
          </TGOpenButton>
        )}
      </TGPortal>
    </>
  );
};

export default ThumbnailGenerator;
