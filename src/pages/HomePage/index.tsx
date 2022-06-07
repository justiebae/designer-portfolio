import React from 'react';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';
import './index.scss';

export default function HomePage(): JSX.Element {
  return (
    <div className="HomePage Container Page">
      <div className="HomePage-body">
        <div className="HomePage-title Title">UI/UX Designer</div>
        <div className="HomePage-description">Анализирую, проектирую и графически прорабатываю пользовательские интерфейсы различной сложности</div>
        <div className="HomePage-signature">
          <Icon name="signature" />
          
        </div>
        <div className="HomePage-button">
          <CircleButton
            path="/projects"
          >
            Посмотреть портфолио
          </CircleButton>
        </div>
      </div>
      <div className="HomePage-footer">
        <div className="HomePage-currentPlace">
          На данный момент UI/UX Designer в digital-agency Webest
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
