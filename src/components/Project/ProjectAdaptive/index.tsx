import React from 'react';

import './index.scss';

interface IAdaptiveDesignProps {
  adaptive: {
    description?: string;
    image?: string;
  }
}

export default function ProjectAdaptive({ adaptive }: IAdaptiveDesignProps) {
  return (
    <div className='project-adaptive container'>
      <div className="project-adaptive__title title-third">Адаптивный дизайн</div>
      {adaptive.description && <div className="project-adaptive__description">{adaptive.description}</div>}
      {adaptive.image && <img className="project-adaptive__image" src={`/images/${adaptive.image}`} />}
    </div>
  )
}
