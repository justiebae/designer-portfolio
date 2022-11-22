import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import './index.scss';

const modalRootElement: any = document.querySelector('#mobile-navigation');

export default function MobileNavigation({ children }: any) {
  const theme = useSelector((state: any) => state.theme.theme);
  const element = useMemo(() => document.createElement('div'), []);
  element.classList.add('MobileNavigation', `MobileNavigation--${theme}`);

  useEffect(() => {
    modalRootElement.appendChild(element)

    return (): void => modalRootElement.removeChild(element)
  }, [])

  return createPortal(children, element);
}
