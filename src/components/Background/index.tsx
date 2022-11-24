import React, { useEffect } from 'react';
import { gsap, Elastic } from 'gsap';

import Icon from '../Icon';

import useGSAPSelector from '../../hooks/useGSAPSelector';
import bubbles from '../../data/bubbles';
import backgroundImg from '../../assets/images/dots.svg';
import './index.scss';

interface IBackgroundProps {
  type: string
}

export default function Background({ type }: IBackgroundProps): JSX.Element {
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    switch (type) {
      case 'space':
        animateSpace();
    }
  }, [type])

  const animateSpace = () => {
    gsap.from(q('.background__space-map g'), 120, {
      rotation: 360,
      transformOrigin: "50%",
      ease: 'linear',
      repeat: -1
    });

    gsap.from(q('.background__planets'), 2.2, {
      rotation: 5,
      ease: 'power4.out'
    });
  }

  const renderCircles = () => {
    return (
      <>
        {bubbles.map(({name, size, icon}) => 
          (
            <div 
              className={[
                'background__circle', 
                size && `background__circle--${size}`, 
                `background__circle--${name}`
              ].join(' ')}
              key={name}
            >
              {icon && <Icon name={icon} />}
            </div>
          )
        )}
      </>
    )
  }

  const renderSpace = () => {
    return (
      <div className="background__wrapper" ref={el}>
        <div className="background__space-map">
          <Icon name="spaceMapTwo" />
        </div>
        <div className="background__planets">
          <div className="background__moon">
            <Icon name="moon" />
          </div>
          <div className="background__saturn">
            <Icon name="saturn" />
          </div>
          <div className="background__neptun">
            <Icon name="neptun" />
          </div>
        </div>
        <div className="background__filled-star background__filledStar--first">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--second background__filled-star--white">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--third">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--fourth background__filled-star--white">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--fifth background__filled-star--white">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--sixth">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--seventh background__filled-star--white">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--eihgth">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--ninth background__filled-star--white">
          <Icon name="angleStar" />
        </div>
        <div className="background__filled-star background__filled-star--tenth">
          <Icon name="angleStar" />
        </div>
        <div className="background__stars">
          <img src={backgroundImg} alt="" />
        </div>
      </div>
    )
  }

  const renderDevices = () => {
    return (
      <>
        <div className="background__device background__keyboard">
          <Icon name="keyboard" />
        </div>
        <div className="background__device background__headphones">
          <Icon name="headphones" />
        </div>
        <div className="background__device background__mouse">
          <Icon name="mouse" />
        </div>
      </>
    )
  }

  const render = () => {
    switch (type) {
      case 'design':
        return renderCircles()
      case 'space':
        return renderSpace()
      case 'cats':
        return renderDevices()
      default:
        return <></>
    }
  }

  return (
    <div className="background">
        {render()}
    </div>
  )
}
