import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 120px;
  max-width: 120px;
`;

export const SelectLabel = styled.label`
  font-size: 0.7rem;
  color: #969696;
`;

interface SelectInputProps {
  isOpen?: boolean;
}

export const SelectInput = styled.div<SelectInputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => (props.isOpen ? '#0e1b30' : '#cccccc')};
  border-radius: 5px;
  padding: 6px 12px;

  &:hover {
    border: 1px solid #0e1b30;
  }
`;

export const SelectInputText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectItemContainer = styled.ul`
  position: absolute;
  bottom: 25px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px 0.5px #afafaf;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  max-height: 200px;
  z-index: 1000;
`;

interface SelectListItemProps {
  active?: boolean;
}

export const SelectListItem = styled.li<SelectListItemProps>`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 0.9rem;
  background-color: ${(props) => (props.active ? '#ededed' : '#fff')};

  &:hover {
    background-color: #ededed;
  }
`;
