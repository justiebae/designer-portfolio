import React from 'react';

import Icon from '../../Icon';

import './index.scss';

interface IProjectInfo {
  info: {
    goals: string,
    tasks?: Array<string>
  }
}

export default function ProjectInfo({ info }: IProjectInfo) {
  return (
    <div className="project-info container">
      {
        info.goals &&
        <div className="project-info__section">
          <div className="project-info__title title-third">Цели</div>
          <div className="project-info__description">{info.goals}</div>
        </div>
      }
      {
        info.tasks && 
        info.tasks.length > 0 &&
        <div className="project-info__section">
          <div className="project-info__title title-third">Задачи</div>
          <ul className="project-info__list">
            {
              info.tasks.map((task, index) => (
                <li className='project-info__list-item' key={index}>
                  <Icon name="outlinedStar" /> 
                  {task}
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}
