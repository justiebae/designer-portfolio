import React, { useEffect } from 'react';
import { gsap, Elastic } from 'gsap';

import Icon from '../../Icon';

import useGSAPSelector from '../../../hooks/useGSAPSelector';
import bubbles from '../../../utils/data/bubbles';
import './index.scss'

export default function DesignBackground() {
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.design-background__circle'), 1.6, {
      scale: 0,
      opacity: 0,
      ease: Elastic.easeOut.config(0.3, 0.2),
      stagger: {
        amount: 0.4
      }
    });
  }, [])
  
  return (
    <div className='design-background' ref={el}>
      {bubbles.map(({name, size, icon}) => 
        (
          <div 
            className={[
              'design-background__circle', 
              size && `design-background__circle--${size}`, 
              `design-background__${name}`
            ].join(' ')}
            key={name}
          >
            {icon && <Icon name={icon} />}
          </div>
        )
      )}
    </div>
  )
}
