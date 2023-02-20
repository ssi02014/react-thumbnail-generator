import React, { ChangeEvent } from 'react';
import { TGInputFileWrapper } from './TG.styled';
import image from '../assets/photo.png';

interface TGInputFileProps {
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TGInputFile = ({ onChangeImage }: TGInputFileProps) => {
  return (
    <TGInputFileWrapper>
      <label htmlFor="file">
        <img src={image} />
      </label>
      <input id="file" type="file" onChange={onChangeImage} />
    </TGInputFileWrapper>
  );
};

export default TGInputFile;
