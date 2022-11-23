import React from 'react';

import Icon from '../../components/Icon';

import { telegram, mail } from '../../data/links';
import './index.scss';

export default function ContactsPage(): JSX.Element {
  return (
    <div className="contacts-page container page">
      <div className="contacts-page__body">
        <div className="contacts-page__subtitle">Для связи со мной, пожалуйста, используйте</div>
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
          <div className="contacts-page__title title-second">
            Tele
            <span>g</span>
            ram
          </div>
        </div>
        <a href={telegram} rel="norefferer noreferrer" target="_blank" className="contacts-page__link">
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
