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
  additionalFontFamily?: string[];
}

const ThumbnailGenerator = ({
  id,
  iconSrc = toggleButton,
  iconSize = 'medium',
  position = 'bottom-right',
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
            position={position}
            additionalFontFamily={additionalFontFamily}
            onToggle={onToggleGenerator}
          />
        ) : (
          <TGOpenButton position={position} onClick={onToggleGenerator}>
            <TGIcon src={iconSrc} width={tgIconSize} height={tgIconSize} />
          </TGOpenButton>
        )}
      </TGPortal>
    </>
  );
};

export default ThumbnailGenerator;
