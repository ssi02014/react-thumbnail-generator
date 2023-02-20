import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';
import image from '../assets/image.png';
import TGIcon from '../components/TGIcon';
import { Position, getIconSize } from '../utils/style';

interface ThumbnailGeneratorProps {
  iconSrc?: string;
  iconSize?: 'small' | 'medium' | 'large';
  position?: Position;
  additionalFontFamily?: string[];
}

const ThumbnailGenerator = ({
  iconSrc = image,
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
    </>
  );
};

export default ThumbnailGenerator;
