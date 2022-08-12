import React from 'react';

import './index.scss';

interface IProjectUserflow {
  title: string,
  description: string,
  image: string
}

export default function ProjectUserflow({ title, description, image }: IProjectUserflow) {
  return (
    <div className="ProjectUserflow ProjectPage-section">
      <div className="ProjectUserflow-info Container">
        <div className="ProjectUserflow-title ProjectPage-title">{title}</div>
        <div className="ProjectUserflow-description">{description}</div>
      </div>
      <div className="ProjectUserflow-image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
