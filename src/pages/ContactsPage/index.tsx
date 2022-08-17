import React from 'react';

import Icon from '../../components/Icon';

import { telegram, mail } from '../../data/links';
import './index.scss';

export default function ContactsPage(): JSX.Element {
  return (
    <div className="ContactsPage Container Page">
      <div className="ContactsPage-body">
        <div className="ContactsPage-subtitle">Для связи со мной, пожалуйста, используйте</div>
        <div className="ContactsPage-heading">
          <div className="ContactsPage-stars ContactsPage-stars--left">
            <div className="ContactsPage-star ContactsPage-star--filled">
              <Icon name="angleStar" />
            </div>
            <div className="ContactsPage-star ContactsPage-star--outlined">
              <Icon name="outlinedStar" />
            </div>
          </div>
          <div className="ContactsPage-stars ContactsPage-stars--right">
            <div className="ContactsPage-star ContactsPage-star--outlined">
              <Icon name="outlinedStar" />
            </div>
            <div className="ContactsPage-star ContactsPage-star--filled">
              <Icon name="angleStar" />
            </div>
          </div>
          <div className="ContactsPage-title Title-second">
            Tele
            <span>g</span>
            ram
          </div>
        </div>
        <a href={telegram} rel="norefferer noreferrer" target="_blank" className="ContactsPage-link">
          перейти
          <Icon name="arrowIcon" />
        </a>
      </div>
      <div className="ContactsPage-footer">
        <a href={`mailto:${mail}`} className="ContactsPage-mail">
          <span className="ContactsPage-mailIcon">
            <Icon name="mailIcon" />
          </span>
          {mail}
        </a>
      </div>
    </div>
  )
}
