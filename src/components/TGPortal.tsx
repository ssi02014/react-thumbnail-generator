import React from 'react';
import ReactDOM from 'react-dom';

interface TGPortalProps {
  id?: string;
  children: React.ReactNode;
}

const TGPortal = ({ id, children }: TGPortalProps) => {
  const modalRoot = document.querySelector(`#${id}`);

  if (!modalRoot) return <>{children}</>;
  return ReactDOM.createPortal(children, modalRoot);
};

export default TGPortal;
