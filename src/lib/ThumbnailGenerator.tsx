import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';
import { RxImage } from 'react-icons/rx';

interface ThumbnailGeneratorProps {
  themeBgColor?: string;
  themeTextColor?: string;
}
const ThumbnailGenerator = ({
  themeBgColor = '#111111',
  themeTextColor = '#ffffff',
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
          textColor={themeTextColor}
          bgColor={themeBgColor}>
          <RxImage size={24} color={themeTextColor} />
          Thumbnail
        </TGOpenButton>
      )}
    </>
  );
};

export default ThumbnailGenerator;
