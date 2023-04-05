import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  id?: string;
  children: React.ReactNode;
}

const Portal = ({ id, children }: PortalProps) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.querySelector(`#${id}`));
  }, [id]);

  if (!portalElement) return <>{children}</>;
  return ReactDOM.createPortal(children, portalElement);
};

export default Portal;
