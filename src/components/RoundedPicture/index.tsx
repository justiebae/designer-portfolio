import React from 'react';

import Icon from '../Icon';

import './index.scss';

interface IRoundedImage {
  path: string,
  stars?: boolean
}

export default function RoundedImage({ path, stars = false }: IRoundedImage): JSX.Element {
  return (
    <div className="RoundedPicture">
      <img className="RoundedPicture-image" src={path} alt="" />
      {stars && 
        <div className="RoundedPicture-stars">
          <div className="RoundedPicture-star RoundedPicture-star--outlined">
            <Icon name="outlinedStar" />
          </div>
          <div className="RoundedPicture-star RoundedPicture-star--filled">
            <Icon name="angleStar" />
          </div>
        </div>
      }
    </div>
  )
}
