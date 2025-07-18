import styled from '@emotion/styled';

// TG Select
export const SelectWrapper = styled.div`
  position: relative;
  min-width: 150px;
  max-width: 150px;

  label {
    font-size: 0.7rem;
    color: #969696;
  }
`;

export const SelectInput = styled.div<{ isOpenSelect: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: ${({ isOpenSelect }) =>
    isOpenSelect ? `1px solid #0e1b30` : `1px solid #cccccc`};
  border-radius: 5px;
  padding: 6px 12px;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }

  &:hover {
    border: 1px solid #0e1b30;
  }
`;

export const SelectItemContainer = styled.ul`
  position: absolute;
  bottom: 35px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px 0.5px #afafaf;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  max-height: 200px;
  z-index: 1000;
`;

export const SelectListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 0.9rem;

  &:hover {
    background-color: #ededed;
  }
`;
