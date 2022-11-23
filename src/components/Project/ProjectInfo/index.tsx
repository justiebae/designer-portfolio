import React from 'react';

import Icon from '../../Icon';

import './index.scss';

interface IProjectInfo {
  goals: string,
  tasks: Array<string>
}

export default function ProjectInfo({ goals, tasks }: IProjectInfo) {
  return (
    <div className="project-info project-info__section container">
      <div className="project-info__section">
        <div className="project-info__title project-page__title">Цели</div>
        <div className="project-info__description">{goals}</div>
      </div>
      <div className="project-info__section">
        <div className="project-info__title project-page__title">Задачи</div>
        <ul className="project-info__list">
          {
            tasks.map((task, index) => (
              <li className='project-info__list-item' key={index}>
                <Icon name="outlinedStar" /> {task}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
