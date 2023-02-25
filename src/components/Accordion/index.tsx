import React, { useState } from 'react';
import * as S from './styled';
import { arrowBottom, arrowTop } from '../../assets/icons';
import TGIcon from '../../components/TGIcon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleToggle = () => {
    setIsOpenPanel(!isOpenPanel);
  };

  return (
    <S.AccordionWrapper>
      <S.AccordionTopContainer onClick={handleToggle}>
        <p>{title}</p>
        <span>
          {isOpenPanel ? (
            <TGIcon src={arrowTop} width={14} height={14} />
          ) : (
            <TGIcon src={arrowBottom} width={14} height={14} />
          )}
        </span>
      </S.AccordionTopContainer>
      <S.AccordionPanelContainer className={isOpenPanel ? 'active' : ''}>
        {children}
      </S.AccordionPanelContainer>
    </S.AccordionWrapper>
  );
};

export default Accordion;
