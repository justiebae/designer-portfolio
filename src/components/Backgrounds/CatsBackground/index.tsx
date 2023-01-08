import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import Icon from '../../Icon';

import useGSAPSelector from '../../../hooks/useGSAPSelector';
import './index.scss'


export default function CatsBackground() {
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.cats-background__keyboard'), {
      opacity: 0,
      left: -120,
      bottom: -60
    })

    gsap.from(q('.cats-background__headphones'), {
      opacity: 0,
      bottom: -120
    })

    gsap.from(q('.cats-background__mouse'), {
      opacity: 0,
      right: -120
    })
  }, [])

  return (
    <div className='cats-background' ref={el}>
      <div className="cats-background__device cats-background__keyboard">
        <Icon name="keyboard" />
      </div>
      <div className="cats-background__device cats-background__headphones">
        <Icon name="headphones" />
      </div>
      <div className="cats-background__device cats-background__mouse">
        <Icon name="mouse" />
      </div>
    </div>
  )
}
