import React, { useState } from 'react';
import TG from 'src/components/TG';
import { TGOpenButton } from 'src/components/TG.styled';

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
