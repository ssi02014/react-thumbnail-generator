import { photo } from '@assets/icons';
import React, { ChangeEvent, useRef } from 'react';
import {
  FileInputWrapper,
  FileInput as StyledFileInput,
  FileInputLabel,
  FileInputImg,
} from './FileInput.styled';

interface FileInputProps {
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ onChangeImage }: FileInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeImage(e);
    // 같은 파일을 다시 선택할 수 있도록 value 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <FileInputWrapper>
      <FileInputLabel htmlFor="file">
        <FileInputImg src={photo} width={20} height={20} />
      </FileInputLabel>
      <StyledFileInput
        ref={fileInputRef}
        id="file"
        type="file"
        onChange={handleFileChange}
      />
    </FileInputWrapper>
  );
};

export default FileInput;
