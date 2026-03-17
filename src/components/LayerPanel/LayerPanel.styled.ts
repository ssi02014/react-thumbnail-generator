import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LayerPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 20px;
  max-height: 150px;
  overflow-y: auto;
`;

export const LayerPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 0;
`;

export const LayerPanelTitle = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
`;

export const LayerPanelActions = styled.div`
  display: flex;
  gap: 4px;
`;

export const LayerItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.15s;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: #e8edf4;
          border: 1px solid #192841;
        `
      : css`
          background-color: #f8f8f8;
          border: 1px solid transparent;
          &:hover {
            background-color: #f0f0f0;
          }
        `}
`;

export const LayerItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`;

export const LayerTypeBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: #666;
  background-color: #e0e0e0;
  padding: 1px 6px;
  border-radius: 3px;
  flex-shrink: 0;
`;

export const LayerName = styled.span`
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  opacity: 0.6;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }
`;
