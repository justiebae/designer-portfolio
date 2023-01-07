import React from 'react';

import Icon from '../Icon';

import './index.scss';

interface IRoundedImage {
  path: string,
  stars?: boolean
}

export default function RoundedImage({ path, stars = false }: IRoundedImage): JSX.Element {
  return (
    <div className="rounded-picture">
      <img className="rounded-picture__image" src={path} alt="" />
      {
        stars && 
        <div className="rounded-picture__stars">
          <div className="rounded-picture__star rounded-picture__star--outlined">
            <Icon name="outlinedStar" />
          </div>
          <div className="rounded-picture__star rounded-picture__star--filled">
            <Icon name="angleStar" />
          </div>
        </div>
      }
    </div>
  )
}
