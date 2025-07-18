import React, { useCallback } from 'react';
import { arrowBottom, arrowTop } from '@assets/icons';
import Icon from '../Icon';
import { useToggle } from '@modern-kit/react';
import * as styles from './Accordion.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpenPanel, setIsOpenPanel] = useToggle();

  const handleToggle = useCallback(() => {
    setIsOpenPanel();
  }, [isOpenPanel]);

  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordionTopContainer} onClick={handleToggle}>
        <p className={styles.accordionTitle}>{title}</p>
        <span>
          {isOpenPanel ? (
            <Icon src={arrowTop} width={14} height={14} />
          ) : (
            <Icon src={arrowBottom} width={14} height={14} />
          )}
        </span>
      </div>
      <div className={styles.accordionPanelContainer({ isOpen: isOpenPanel })}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
