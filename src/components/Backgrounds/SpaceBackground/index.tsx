import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import Icon from '../../Icon';

import useGSAPSelector from '../../../hooks/useGSAPSelector';
import background from '../../../assets/images/dots.svg';
import './index.scss'

export default function SpaceBackground() {
  const { q, el } = useGSAPSelector();
  
  useEffect(() => {
    gsap.from(q('.space-background__map g'), 220, {
      rotation: 360,
      transformOrigin: "50%",
      ease: 'linear',
      repeat: -1
    });

    gsap.from(q('.space-background__planets'), 2.2, {
      rotation: 5,
      ease: 'power4.out'
    });
  }, [])

  return (
    <div className="space-background" ref={el}>
      <div className="space-background__map">
        <Icon name="spaceMapTwo" />
      </div>
      <div className="space-background__planets">
        <div className="space-background__moon">
          <Icon name="moon" />
        </div>
        <div className="space-background__saturn">
          <Icon name="saturn" />
        </div>
        <div className="space-background__neptun">
          <Icon name="neptun" />
        </div>
      </div>
      <div className="space-background__filled-star space-background__filledStar--first">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--second space-background__filled-star--white">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--third">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--fourth space-background__filled-star--white">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--fifth space-background__filled-star--white">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--sixth">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--seventh space-background__filled-star--white">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--eihgth">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--ninth space-background__filled-star--white">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__filled-star space-background__filled-star--tenth">
        <Icon name="angleStar" />
      </div>
      <div className="space-background__stars">
        <img src={background} alt="" />
      </div>
    </div>
  )
}
