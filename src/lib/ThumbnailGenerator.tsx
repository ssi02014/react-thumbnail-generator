import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';
import image from '../assets/image.png';
import TGIcon from '../components/TGIcon';

const ThumbnailGenerator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleGenerator = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <TG onToggle={onToggleGenerator} />
      ) : (
        <TGOpenButton onClick={onToggleGenerator}>
          <TGIcon src={image} width={32} height={32} />
        </TGOpenButton>
      )}
    </>
  );
};

export default ThumbnailGenerator;
