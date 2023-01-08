import React from 'react';

import './index.scss';

interface IProjectUserflow {
  userflow: {
    description: string,
    image: string
  }
}

export default function ProjectUserflow({ userflow }: IProjectUserflow) {
  return (
    <div className="project-userflow">
      <div className="project-userflow__info container">
        <div className="project-userflow__title title-third">User flow</div>
        {userflow.description && <div className="project-userflow__description">{userflow.description}</div>}
      </div>
      {
        userflow.image &&
        <div className="project-userflow__image">
          <img src={`/images/${userflow.image}`} alt="" />
        </div>
      }
    </div>
  )
}
