import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';
import thumbnail from '../assets/thumbnail.png';
import TGIcon from 'components/TGIcon';

interface ThumbnailGeneratorProps {
  themeColor?: string;
  iconShape?: 'rect' | 'round' | 'circle';
}
const ThumbnailGenerator = ({
  themeColor = '#111111',
  iconShape = 'round',
}: ThumbnailGeneratorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <TG onToggle={onToggleGenerator} />
      ) : (
        <TGOpenButton
          onClick={onToggleGenerator}
          bgColor={themeColor}
          shape={iconShape}>
          <TGIcon src={thumbnail} width={35} height={35} />
        </TGOpenButton>
      )}
    </>
  );
};

export default ThumbnailGenerator;
