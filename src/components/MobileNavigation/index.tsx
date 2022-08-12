import React, { useEffect, useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';

import ThemeContext from '../../context/ThemeContext';
import './index.scss';

const modalRootElement: any = document.querySelector('#mobile-navigation');

export default function MobileNavigation({ children }: any) {
  const { theme } = useContext(ThemeContext);
  const element = useMemo(() => document.createElement('div'), []);
  element.classList.add('MobileNavigation', `MobileNavigation--${theme}`);

  useEffect(() => {
    modalRootElement.appendChild(element)

    return (): void => modalRootElement.removeChild(element)
  }, [])

  return createPortal(children, element);
}
