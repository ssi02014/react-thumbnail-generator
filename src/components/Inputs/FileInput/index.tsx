import { photo } from '@assets/icons';
import React, { ChangeEvent, useRef } from 'react';
import * as styles from './FileInput.css';

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
    <div className={styles.fileInputWrapper}>
      <label htmlFor="file" className={styles.fileInputLabel}>
        <img
          src={photo}
          width={20}
          height={20}
          className={styles.fileInputImg}
        />
      </label>
      <input
        ref={fileInputRef}
        id="file"
        type="file"
        onChange={handleFileChange}
        className={styles.fileInput}
      />
    </div>
  );
};

export default FileInput;
