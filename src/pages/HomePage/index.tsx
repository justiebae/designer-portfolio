import React, { useEffect } from 'react';
import { gsap, Elastic } from 'gsap';
import anime from 'animejs/lib/anime.es.js';

import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';

import useGSAPSelector from '../../hooks/useGSAPSelector';
import './index.scss';

export default function HomePage(): JSX.Element {
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.HomePage-title'), 1.5, {
      y: 500,
      ease: 'power4.out',
      delay: 0.6,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.HomePage-desriptionText'), 1, {
      y: 150,
      ease: 'power4.out',
      delay: 1.2,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.HomePage-footer'), 1, {
      opacity: 0,
      y: 60,
      ease: 'power4.out',
      delay: 2
    });

    gsap.from(q('.CircleButton'), 1.7, {
      delay: 2.8,
      scale: 0,
      ease: Elastic.easeOut
    });

    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      duration: 2000,
      autoplay: true,
      opacity: [0, 1],
      delay: 1000
    });
  }, []);

  return (
    <div className="home-page container page" ref={el}>
      <div className="home-page__body">
        <div className="home-page__row">
          <div className="home-page__title title">
            UI/UX Designer
          </div>
        </div>
        <div className="home-page__description">
          <div className="home-page__row">
            <div className="home-page__desription-text">
              Анализирую, проектирую и графически прорабатываю пользовательские
            </div>
          </div>
          <div className="home-page__row">
            <div className="home-page__desription-text">
              интерфейсы различной сложности
            </div>
          </div>
        </div>
        <div className="home-page__signature">
          <Icon name="signature" />   
        </div>
        <div className="home-page__button">
          <CircleButton path="/projects">
            Посмотреть портфолио
          </CircleButton>
        </div>
      </div>
      <div className="home-page__footer">
        <div className="home-page__current-place">
          На данный момент UI/UX Designer в&nbsp;digital-agency Webest
        </div>
        <a href="/" rel="noreferrer" target="_blank" className="home-page__contact social-link">
          <div className="social-link__text">Для связи со мной</div>
          <div className="social-link__icon">
            <Icon name="telegram" />
          </div>
        </a>
      </div>
    </div>
  )
}
