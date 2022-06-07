import React from 'react';
import filledStarIcon from '../../assets/icons/filled-star-2.svg';
import outlinedStarIcon from '../../assets/icons/outline-star.svg';
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
          <img className="RoundedPicture-star RoundedPicture-star--outlined" src={outlinedStarIcon} alt="" />
          <img className="RoundedPicture-star RoundedPicture-star--filled" src={filledStarIcon} alt="" />
        </div>
      }
    </div>
  )
}
