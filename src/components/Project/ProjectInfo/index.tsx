import React from 'react';

import Icon from '../../Icon';

import './index.scss';

interface IProjectInfo {
  goals: string,
  tasks: Array<string>
}

export default function ProjectInfo({ goals, tasks }: IProjectInfo) {
  return (
    <div className="ProjectInfo ProjectPage-section Container">
      <div className="ProjectInfo-section">
        <div className="ProjectInfo-title ProjectPage-title">Цели</div>
        <div className="ProjectInfo-description">{goals}</div>
      </div>
      <div className="ProjectInfo-section">
        <div className="ProjectInfo-title ProjectPage-title">Задачи</div>
        <ul className="ProjectInfo-list">
          {
            tasks.map((task, index) => (
              <li className='ProjectInfo-listItem' key={index}>
                <Icon name="outlinedStar" /> {task}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
