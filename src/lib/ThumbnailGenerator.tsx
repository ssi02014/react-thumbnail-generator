import TG from '../components/TG';
import { TGOpenButton } from '../components/TG.styled';
import React, { useState } from 'react';

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
        <TGOpenButton onClick={onToggleGenerator}>open</TGOpenButton>
      )}
    </>
  );
};

export default ThumbnailGenerator;
