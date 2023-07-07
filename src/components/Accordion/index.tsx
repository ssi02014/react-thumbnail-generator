import React, { useRef, useState } from 'react';
import * as S from './styled';
import { arrowBottom, arrowTop } from '@assets/icons';
import Icon from '../../components/Icon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  maxHeight?: number;
}

const Accordion = ({ title, children, maxHeight = 200 }: AccordionProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleToggle = () => {
    setIsOpenPanel(!isOpenPanel);

    if (!panelRef.current) return;
    if (isOpenPanel) {
      panelRef.current.style.overflow = 'hidden';

      return;
    }
    setTimeout(() => {
      if (!panelRef.current) return;
      panelRef.current.style.overflow = 'visible';
    }, 300);
  };

  return (
    <S.AccordionWrapper>
      <S.AccordionTopContainer onClick={handleToggle}>
        <p>{title}</p>
        <span>
          {isOpenPanel ? (
            <Icon src={arrowTop} width={14} height={14} />
          ) : (
            <Icon src={arrowBottom} width={14} height={14} />
          )}
        </span>
      </S.AccordionTopContainer>
      <S.AccordionPanelContainer
        ref={panelRef}
        isOpen={isOpenPanel}
        maxHeight={maxHeight}
        className={isOpenPanel ? 'active' : ''}>
        {children}
      </S.AccordionPanelContainer>
    </S.AccordionWrapper>
  );
};

export default Accordion;