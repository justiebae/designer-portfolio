import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

import './index.scss';

interface IStatusProps {
  status: string
}

export default function Status({ status }: IStatusProps) {
  const statusClasses = classNames('status', `status--${status}`)

  const renderText = () => {
    switch(status) {
      case 'in-work':
        return 'Проект в разработке'
      case 'concept':
        return 'Творческая концепция'
      default:
        return 'Проект завершён'
    }
  }

  return (
    <div className={statusClasses}>
      <div className="status__icon">
        <Icon name="filledStar" />
      </div>
      <div className="status__text">{renderText()}</div>
    </div>
  )
}
