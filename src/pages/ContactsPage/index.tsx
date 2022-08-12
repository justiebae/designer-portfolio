import React from 'react';

import Icon from '../../components/Icon';

import './index.scss';

export default function ContactsPage(): JSX.Element {
  return (
    <div className="ContactsPage Container Page">
      <div className="ContactsPage-body">
        <div className="ContactsPage-subtitle">Для связи со мной, пожалуйста, используйте</div>
        <div className="ContactsPage-heading">
          <div className="ContactsPage-stars ContactsPage-stars--left">
            <div className="ContactsPage-star ContactsPage-star--filled">
              <Icon name="filledStar" />
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
              <Icon name="filledStar" />
            </div>
          </div>
          <div className="ContactsPage-title Title-second">
            Tele
            <span>g</span>
            ram
          </div>
        </div>
        <a href="#" rel="norefferer" target="_blank" className="ContactsPage-link">
          перейти
          <Icon name="arrowIcon" />
        </a>
      </div>
      <div className="ContactsPage-footer">
        <a href="mailto:alisasidorenkova51@gmail.com" className="ContactsPage-mail">
          <span className="ContactsPage-mailIcon">
            <Icon name="mailIcon" />
          </span>
          alisasidorenkova51@gmail.com
        </a>
      </div>
    </div>
  )
}
