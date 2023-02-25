import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const AccordionTopContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  padding: 0 20px;
  height: 39px;

  & > p {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: start;
    font-size: 1rem;
    color: #111;
    margin: 0;
  }

  &:hover {
    & > p {
      color: #3264b5;
    }
  }
`;

export const AccordionPanelContainer = styled.div<{ isOpen: boolean }>`
  background-color: #fff;
  transition: max-height 0.2s linear;
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
`;
