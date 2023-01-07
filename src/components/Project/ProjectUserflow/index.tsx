import React from 'react';

import './index.scss';

interface IProjectUserflow {
  description: string,
  image: string
}

export default function ProjectUserflow({ description, image }: IProjectUserflow) {
  return (
    <div className="project-userflow project-page__section">
      <div className="project-userflow__info container">
        <div className="project-userflow__title project-page__title">User flow</div>
        <div className="project-userflow__description">{description}</div>
      </div>
      <div className="project-userflow__image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
