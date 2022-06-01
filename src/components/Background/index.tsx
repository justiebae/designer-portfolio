import React from 'react';
import Icon from '../Icon';
import bubbles from '../../data/bubbles';
import './index.scss';

interface IBackground {
  type: string
}

export default function Background({ type }: IBackground) {
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

  return (
    <div className="Background">
        {renderCircles()}
    </div>
  )
}
