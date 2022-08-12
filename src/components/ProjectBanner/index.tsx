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
  const bannerClasses = classNames('ProjectBanner', { 'ProjectBanner--transparent': transparent });

  return (
    <div className={bannerClasses}>
      <div className="ProjectBanner-head">
        <div className="ProjectBanner-icons">
          <div className="ProjectBanner-star">
              <Icon name="filledStar" />
          </div>
          <div className="ProjectBanner-curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
      <div className="ProjectBanner-bottom">
        {year && <div className="ProjectBanner-year">{year}</div>}
        <div className="ProjectBanner-icons">
          <div className="ProjectBanner-star">
              <Icon name="filledStar" />
          </div>
          <div className="ProjectBanner-curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
      <img className="ProjectBanner-image" src={cover} alt="" />
    </div>
  )
}
