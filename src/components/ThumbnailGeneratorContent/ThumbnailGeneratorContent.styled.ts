import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface OpenButtonProps {
  iconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const ThumbnailGeneratorOpenButton = styled.button<OpenButtonProps>`
  padding: 0;
  background-color: transparent;
  position: fixed;
  cursor: pointer;
  border: none;
  font-size: 0.5rem;
  color: #ffffff;
  transition: 0.2s;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => {
    switch (props.iconPosition) {
      case 'top-left':
        return css`
          top: 20px;
          left: 20px;
        `;
      case 'top-right':
        return css`
          top: 20px;
          right: 20px;
        `;
      case 'bottom-left':
        return css`
          bottom: 20px;
          left: 20px;
        `;
      case 'bottom-right':
        return css`
          bottom: 20px;
          right: 20px;
        `;
      default:
        return css`
          bottom: 20px;
          right: 20px;
        `;
    }
  }}
`;

export const ThumbnailGeneratorTextArea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  resize: none;
  outline: none;
  font-size: 1.1rem;

  &:focus,
  &:hover {
    border: 1px solid #0e1b30;
  }

  &::placeholder {
    font-size: 1rem;
    color: #cccccc;
  }
`;

export const ThumbnailGeneratorButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ThumbnailGeneratorButton = styled.button`
  background-color: #192841;
  color: #fff;
  width: 300px;
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ThumbnailGeneratorControllerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ThumbnailGeneratorTextareaWrapper = styled.div`
  padding: 20px 20px 0px 20px;
`;

export const ThumbnailGeneratorIconControllerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #ebedf2;
  padding: 8px 10px;
  border-radius: 5px;
`;

export const ThumbnailGeneratorMoreOptionsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;
  top: 50px;
  right: 50%;
  transform: translateX(230px);
  background-color: #fcfcfc;
  border: 1px solid #ebedf2;
`;
