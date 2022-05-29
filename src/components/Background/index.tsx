import React, { Component } from 'react';
import {ReactComponent as AeIcon} from '../../assets/icons/ae.svg';
import {ReactComponent as PremierIcon} from '../../assets/icons/premier.svg';
import {ReactComponent as BlenderIcon} from '../../assets/icons/blender.svg';
import {ReactComponent as PsIcon} from '../../assets/icons/ps.svg';
import {ReactComponent as FigmaIcon} from '../../assets/icons/figma.svg';
import {ReactComponent as AiIcon} from '../../assets/icons/ai.svg';
import './index.scss';

interface IBackground {
  type: string
}

const bubbles = [
  {
    name: 'ae',
    size: 'large',
    component: AeIcon
  },
  {
    name: 'premier',
    size: 'medium',
    component: PremierIcon
  },
  {
    name: 'blender',
    size: 'large',
    component: BlenderIcon
  },
  {
    name: 'ps',
    size: 'medium',
    component: PsIcon
  },
  {
    name: 'figma',
    size: 'large',
    component: FigmaIcon
  },
  {
    name: 'ai',
    size: 'medium',
    component: AiIcon
  },
  {
    name: 'top'
  },
  {
    name: 'middle'
  },
  {
    name: 'bottom',
    size: 'large'
  }
];

export default function Background({ type }: IBackground) {
  const renderCircles = () => {
    return (
      <>
        {bubbles.map((bubble) => 
          (
            <div 
              className={[
                'Background-circle', 
                bubble.size && `Background-circle--${bubble.size}`, 
                `Background-circle--${bubble.name}`
              ].join(' ')}
              key={bubble.name}
            >
            </div>
          )
        )}
      </>
    )

    // return (
    //   <>
    //     <div className="Background-circle Background-circle--large Background-circle--ae">
    //       <AeIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--medium Background-circle--premier">
    //       <PremierIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--large Background-circle--blender">
    //       <BlenderIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--medium Background-circle--ps">
    //       <PsIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--large Background-circle--figma">
    //       <FigmaIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--medium Background-circle--ai">
    //       <AiIcon />
    //     </div>
    //     <div className="Background-circle Background-circle--top">
    //     </div>
    //     <div className="Background-circle Background-circle--middle">
    //     </div>
    //     <div className="Background-circle Background-circle--large Background-circle--bottom">
    //     </div>
    //   </>
    // )
  }

  return (
    <div className="Background">
        {renderCircles()}
    </div>
  )
}
