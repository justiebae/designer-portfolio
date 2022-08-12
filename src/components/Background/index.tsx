import React from 'react';

import Icon from '../Icon';

import bubbles from '../../data/bubbles';
import backgroundImg from '../../assets/images/dots.svg';
import './index.scss';

interface IBackgroundProps {
  type: string
}

export default function Background({ type }: IBackgroundProps): JSX.Element {
  const renderCircles = () => {
    return (
      <>
        {bubbles.map(({name, size, icon}) => 
          (
            <div 
              className={[
                'Background-circle', 
                size && `Background-circle--${size}`, 
                `Background-circle--${name}`
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
      <>
        <div className="Background-spaceMap">
          <Icon name="spaceMap" />
        </div>
        <div className="Background-multiStar">
          <Icon name="multiStar" />
        </div>
        <div className="Background-moon">
          <Icon name="moon" />
        </div>
        <div className="Background-saturn">
          <Icon name="saturn" />
        </div>
        <div className="Background-neptun">
          <Icon name="neptun" />
        </div>
        <div className="Background-filledStar Background-filledStar--first">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--second Background-filledStar--white">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--third">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--fourth Background-filledStar--white">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--fifth Background-filledStar--white">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--sixth">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--seventh Background-filledStar--white">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--eihgth">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--ninth Background-filledStar--white">
          <Icon name="angleStar" />
        </div>
        <div className="Background-filledStar Background-filledStar--tenth">
          <Icon name="angleStar" />
        </div>
        <div className="Background-stars">
          <img src={backgroundImg} alt="" />
        </div>
      </>
    )
  }

  const renderDevices = () => {
    return (
      <>
        <div className="Background-device Background-keyboard">
          <Icon name="keyboard" />
        </div>
        <div className="Background-device Background-headphones">
          <Icon name="headphones" />
        </div>
        <div className="Background-device Background-mouse">
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
    <div className="Background">
        {render()}
    </div>
  )
}
