import React, { ChangeEvent } from 'react';
import { TGInputFileWrapper } from './TG.styled';
import { photo } from '../assets/icons';

interface TGInputFileProps {
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  width: number;
  height: number;
}

const TGInputFile = ({ width, height, onChangeImage }: TGInputFileProps) => {
  return (
    <TGInputFileWrapper>
      <label htmlFor="file">
        <img src={photo} width={width} height={height} />
      </label>
      <input id="file" type="file" onChange={onChangeImage} />
    </TGInputFileWrapper>
  );
};

export default TGInputFile;
