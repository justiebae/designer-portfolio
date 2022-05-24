import React from 'react';

export default function HomePage() {
  return (
    <div className="HomePage Container">
      <div className="HomePage-body">
        <div className="HomePage-title">UI/UX Designer</div>
        <div className="HomePage-description">Анализирую, проектирую и графически прорабатываю пользовательские интерфейсы различной сложности</div>
        <div className="HomePage-signature">signature</div>
        <div className="HomePage-button">button</div>
      </div>
      <div className="HomePage-footer">
        <div className="HomePage-currentPlace">
          На данный момент UI/UX Designer в digital-agency Webest
        </div>
        <a href="#" rel="nooffener" target="_blank" className="HomePage-contact TelegramLink">
          <div className="TelegramLink-text">Для связи со мной</div>
          <div className="TelegramLink-icon"></div>
        </a>
      </div>
    </div>
  )
}
