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
    <div className="HomePage Container Page" ref={el}>
      <div className="HomePage-body">
        <div className="HomePage-row">
          <div className="HomePage-title Title">
            UI/UX Designer
          </div>
        </div>
        <div className="HomePage-description">
          <div className="HomePage-row">
            <div className="HomePage-desriptionText">
              Анализирую, проектирую и графически прорабатываю пользовательские
            </div>
          </div>
          <div className="HomePage-row">
            <div className="HomePage-desriptionText">
              интерфейсы различной сложности
            </div>
          </div>
        </div>
        <div className="HomePage-signature">
          <Icon name="signature" />   
        </div>
        <div className="HomePage-button">
          <CircleButton path="/projects">
            Посмотреть портфолио
          </CircleButton>
        </div>
      </div>
      <div className="HomePage-footer">
        <div className="HomePage-currentPlace">
          На данный момент UI/UX Designer в&nbsp;digital-agency Webest
        </div>
        <a href="/" rel="noreferrer" target="_blank" className="HomePage-contact SocialLink">
          <div className="SocialLink-text">Для связи со мной</div>
          <div className="SocialLink-icon">
            <Icon name="telegram" />
          </div>
        </a>
      </div>
    </div>
  )
}
