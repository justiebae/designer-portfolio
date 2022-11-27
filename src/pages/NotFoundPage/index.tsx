import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '../../store/slices/themeSlice';
import { gsap, Elastic } from 'gsap';

import SpaceBackground from '../../components/Backgrounds/SpaceBackground';
import Icon from '../../components/Icon';
import CircleButton from '../../components/CircleButton';

import useGSAPSelector from '../../hooks/useGSAPSelector';
import './index.scss';

export default function NotFoundPage(): JSX.Element {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  const { q, el } = useGSAPSelector();
  
  useEffect(() => {
    dispatch(setTheme({ theme: 'black' }));

    gsap.from(q('.not-found-page__title'), 0.6, {
      delay: 1,
      opacity: 0,
      translateY: 70
    });

    gsap.from(q('.not-found-page__message'), 0.6, {
      delay: 1.1,
      opacity: 0,
      translateY: 70
    });

    gsap.from(q('.circle-button'), 1.8, {
      delay: 1.2,
      scale: 0,
      ease: Elastic.easeOut.config(0.3, 0.2),
    });

    return () => {
      dispatch(setTheme({ theme: 'default' }));
    }
  }, []);

  return (
    <div className="not-found-page page" ref={el}>
      <div className="not-found-page__title">
        <Icon name="notFound" />
      </div>
      <div className="not-found-page__message">
        Совсем пусто, ничего нет...
        <br />
        такой страницы не существует, вернитесь на главную :)
      </div>
      <div className="not-found-page__link">
        <CircleButton theme={theme} path="/">
          вернуться 
          <br />
          на главную
        </CircleButton>
      </div>
      <SpaceBackground />
    </div>
  )
}
