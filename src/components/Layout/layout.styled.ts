import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface BodyWrapperProps {
  isFullWidth?: boolean;
  modalPosition?: 'left' | 'right' | 'center';
}

export const BodyWrapper = styled.div<BodyWrapperProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #cccccc;
  background-color: #ffffff;
  flex-direction: column;
  font-family: Arial;
  z-index: 9999;
  min-width: ${(props) => (props.isFullWidth ? '100%' : '600px')};

  ${(props) => {
    switch (props.modalPosition) {
      case 'left':
        return css`
          bottom: 0;
          left: 0;
        `;
      case 'right':
        return css`
          bottom: 0;
          right: 0;
        `;
      case 'center':
        return css`
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        `;
      default:
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  * {
    box-sizing: border-box;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 45px);
  overflow-y: scroll;
  overflow-x: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
