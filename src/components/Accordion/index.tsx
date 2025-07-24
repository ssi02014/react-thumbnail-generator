import React, { useCallback } from 'react';
import { arrowBottom, arrowTop } from '@assets/icons';
import { useToggle } from '@modern-kit/react';
import {
  AccordionWrapper,
  AccordionTopContainer,
  AccordionTitle,
  AccordionPanelContainer,
} from './Accordion.styled';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * @deprecated
 */
const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpenPanel, setIsOpenPanel] = useToggle();

  const handleToggle = useCallback(() => {
    setIsOpenPanel();
  }, [isOpenPanel]);

  return (
    <AccordionWrapper>
      <AccordionTopContainer onClick={handleToggle}>
        <AccordionTitle>{title}</AccordionTitle>
        <span>
          <img
            src={isOpenPanel ? arrowTop : arrowBottom}
            width={14}
            height={14}
          />
        </span>
      </AccordionTopContainer>
      <AccordionPanelContainer isOpen={isOpenPanel}>
        {children}
      </AccordionPanelContainer>
    </AccordionWrapper>
  );
};

export default Accordion;
