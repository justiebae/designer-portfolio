import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

import './index.scss';

interface IBanner {
  cover?: string,
  year?: number,
  transparent?: boolean
}

export default function ProjectBanner({ cover, year, transparent }: IBanner) {
  const bannerClasses = classNames('project-banner', { 'project-banner--transparent': transparent });

  return (
    <div className={bannerClasses}>
      <div className="project-banner__head">
        <div className="project-banner__icons">
          <div className="project-banner__star">
              <Icon name="filledStar" />
          </div>
          <div className="project-banner__curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
      <div className="project-banner__bottom">
        {year && <div className="project-banner__year">{year}</div>}
        <div className="project-banner__icons">
          <div className="project-banner__star">
              <Icon name="filledStar" />
          </div>
          <div className="project-banner__curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
      <img className="project-banner__image" src={cover} alt="" />
    </div>
  )
}
