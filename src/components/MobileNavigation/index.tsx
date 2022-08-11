import { createPortal } from 'react-dom';
import React, { useEffect, useMemo } from 'react';

import './index.scss';

const modalRootElement: any = document.querySelector('#mobile-navigation');

export default function MobileNavigation({ children }: any) {
  const element = useMemo(() => document.createElement('div'), []);
  element.classList.add('MobileNavigation');

  useEffect(() => {
    modalRootElement.appendChild(element)

    return (): void => modalRootElement.removeChild(element)
  }, [])

  return createPortal(children, element);
}
