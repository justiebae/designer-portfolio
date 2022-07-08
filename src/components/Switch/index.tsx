import React from 'react';
import './index.scss';

export default function Switch() {
  return (
    <div className="Switch">
      <div className="Switch-label Switch-label--left">Дизайн</div>
      <label htmlFor="" className="Switch-element active">
        <input type="checkbox" className="Switch-input" />
      </label>
      <div className="Switch-label Switch-label--right active">Прототип</div>
    </div>
  )
}
