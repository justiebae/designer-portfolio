import React from 'react';

import SpaceBackground from '../SpaceBackground'
import DesignBackground from '../DesignBackground'
import CatsBackground from '../CatsBackground';

interface IBackgroundProps {
  type: string
}

export default function Background({ type }: IBackgroundProps): JSX.Element {
  const render = () => {
    switch (type) {
      case 'design':
        return <DesignBackground />
      case 'space':
        return <SpaceBackground />
      case 'cats':
        return <CatsBackground />
      default:
        return <></>
    }
  }

  return (
    render()
  )
}
