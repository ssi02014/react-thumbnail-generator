import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface TGPortalProps {
  id?: string;
  children: React.ReactNode;
}

const TGPortal = ({ id, children }: TGPortalProps) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.querySelector(`#${id}`));
  }, [id]);

  if (!portalElement) return <>{children}</>;
  return ReactDOM.createPortal(children, portalElement);
};

export default TGPortal;
