import { photo } from '@assets/icons';
import React, { ChangeEvent } from 'react';
import * as styles from './FileInput.css';

interface FileInputProps {
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ onChangeImage }: FileInputProps) => {
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
        id="file"
        type="file"
        onChange={onChangeImage}
        className={styles.fileInput}
      />
    </div>
  );
};

export default FileInput;
