import styled from '@emotion/styled';

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

  &:hover > button {
    color: #3264b5;
  }
`;

export const AccordionTitle = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  text-align: start;
  font-size: 1rem;
  color: #111;
  margin: 0;
`;

interface AccordionPanelContainerProps {
  isOpen: boolean;
}

export const AccordionPanelContainer = styled.div<AccordionPanelContainerProps>`
  background-color: #fff;
  transition: all 0.2s linear;
  max-height: ${(props) => (props.isOpen ? '200px' : '0px')};
  overflow: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
