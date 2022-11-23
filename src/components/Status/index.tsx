import React from 'react';

import Icon from '../Icon';

import './index.scss';

export default function Status() {
  return (
    <div className="status">
      <div className="status__icon">
        <Icon name="filledStar" />
      </div>
      <div className="status__text">Проект в разработке</div>
    </div>
  )
}
