import React from 'react';
import Icon from '../Icon';
import bubbles from '../../data/bubbles';
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
        return renderCircles()
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
