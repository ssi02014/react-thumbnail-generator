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

export const AccordionPanelContainer = styled.div`
  background-color: #fff;
  overflow: hidden;
  transition: max-height 0.3s linear;
  max-height: 0;

  & > p {
    padding: 20px 40px;
    font-size: 1.15rem;
  }

  &.active {
    max-height: 200px;
  }
`;
