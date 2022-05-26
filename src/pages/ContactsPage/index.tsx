import React from 'react';
import './index.scss';
import arrowIcon from '../../assets/icons/arrow-right.svg';
import mailIcon from '../../assets/icons/mail.svg';
import filledStar from '../../assets/icons/filled-star-2.svg';
import outlineStar from '../../assets/icons/outline-star.svg';

export default function ContactsPage() {
  return (
    <div className="ContactsPage Container">
      <div className="ContactsPage-body">
        <div className="ContactsPage-subtitle">Для связи со мной, пожалуйста, используйте</div>
        <div className="ContactsPage-heading">
          <div className="ContactsPage-stars ContactsPage-stars--left">
            <img src={filledStar} className="" />
            <img src={outlineStar} className="" />
          </div>
          <div className="ContactsPage-stars ContactsPage-stars--right">
            <img src={outlineStar} className="" />
            <img src={filledStar} className="" />
          </div>
          <div className="ContactsPage-title Title-second">
            Tele
            <span>g</span>
            ram
          </div>
        </div>
        <a href="#" rel="norefferer" target="_blank" className="ContactsPage-link">
          перейти
          <img src={arrowIcon} className="ContactsPage-arrowIcon" />
        </a>
      </div>
      <div className="ContactsPage-footer">
        <a href="mailto:alisasidorenkova51@gmail.com" className="ContactsPage-mail">
          <img src={mailIcon} className="ContactsPage-mailIcon" />
          alisasidorenkova51@gmail.com
        </a>
      </div>
    </div>
  )
}
