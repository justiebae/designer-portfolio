import React, { useEffect } from 'react';
import { gsap, Elastic } from 'gsap';

import Icon from '../../components/Icon';

import { telegram, mail } from '../../utils/data/links';
import './index.scss';
import useGSAPSelector from '../../hooks/useGSAPSelector';

export default function ContactsPage(): JSX.Element {
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.contacts-page__subtitle'), 1.6, {
      y: 150,
      ease: 'power4.out',
      opacity: 0,
      delay: 0.6,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.contacts-page__title'), 1.8, {
      y: 250,
      ease: 'power4.out',
      delay: 0.8,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.contacts-page__underline'), 1, {
      ease: 'power4.out',
      delay: 1.7,
      width: 0
    });

    gsap.from(q('.contacts-page__star'), 1.7, {
      delay: 2.2,
      scale: 0,
      ease: Elastic.easeOut,
      stagger: {
        amount: 0.6
      }
    });

    gsap.from(q('.contacts-page__link'), 0.6, {
      delay: 2.2,
      opacity: 0,
      translateY: 60,
      ease: 'easeIn',
    });

    gsap.from(q('.contacts-page__footer'), 0.5, {
      delay: 2.4,
      opacity: 0,
      translateY: 60,
      ease: 'easeIn',
    });
  }, [])
  
  return (
    <div className="contacts-page container page" ref={el}>
      <div className="contacts-page__body">
        <div className="contacts-page__row">
          <div className="contacts-page__subtitle">Для связи со мной, пожалуйста, используйте</div>
        </div>
        <div className="contacts-page__heading">
          <div className="contacts-page__stars contacts-page__stars--left">
            <div className="contacts-page__star contacts-page__star--filled">
              <Icon name="angleStar" />
            </div>
            <div className="contacts-page__star contacts-page__star--outlined">
              <Icon name="outlinedStar" />
            </div>
          </div>
          <div className="contacts-page__stars contacts-page__stars--right">
            <div className="contacts-page__star contacts-page__star--outlined">
              <Icon name="outlinedStar" />
            </div>
            <div className="contacts-page__star contacts-page__star--filled">
              <Icon name="angleStar" />
            </div>
          </div>
          <div className="contacts-page__row">
            <div className="contacts-page__title title-second">
              Tele
              <span className="contacts-page__letter">g</span>
              ram
              <span className="contacts-page__underline"></span>
            </div>
          </div>
        </div>
        <a href={telegram} rel="noreferrer" target="_blank" className="contacts-page__link">
          перейти
          <Icon name="arrowIcon" />
        </a>
      </div>
      <div className="contacts-page__footer">
        <a href={`mailto:${mail}`} className="contacts-page__mail">
          <span className="contacts-page__mail-icon">
            <Icon name="mailIcon" />
          </span>
          {mail}
        </a>
      </div>
    </div>
  )
}
