import React from 'react';

import Icon from '../Icon';

import './index.scss';

export default function Status() {
  return (
    <div className="Status">
      <div className="Status-icon">
        <Icon name="filledStar" />
      </div>
      <div className="Status-text">Проект в разработке</div>
    </div>
  )
}
