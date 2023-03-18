import { photo } from '@assets/icons';
import React, { ChangeEvent } from 'react';
import * as S from './styled';

interface TGInputFileProps {
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  width: number;
  height: number;
}

const TGInputFile = ({ width, height, onChangeImage }: TGInputFileProps) => {
  return (
    <S.FileInputWrapper>
      <label htmlFor="file">
        <img src={photo} width={width} height={height} />
      </label>
      <input id="file" type="file" onChange={onChangeImage} />
    </S.FileInputWrapper>
  );
};

export default TGInputFile;
