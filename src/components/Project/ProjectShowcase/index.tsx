import React, { useState } from 'react';

import Switch from '../../Switch';

import './index.scss';

interface IProjectShowcase {
  variant?: string,
  designImageURL: string,
  protoImageURL: string,
}

export default function ProjectShowcase(
  { variant, designImageURL, protoImageURL }: IProjectShowcase
) {
  const [currentImage, setCurrentImage] = useState(designImageURL);

  const changeImage = (value: boolean) => {
    if (value) setCurrentImage(protoImageURL)
    else setCurrentImage(designImageURL)
  }

  if (variant === 'full')
    return (
      <div className="project-showcase project-page__section">
        <div className="project-showcase__banner">
          <img src={currentImage} alt="" className="project-showcase__image" />
        </div>
        <div className="project-showcase__switch container">
          <Switch 
            leftValue="Дизайн"
            rightValue="Прототип"
            value={false}
            onChange={changeImage}
          />
        </div>
      </div>
    )

  return (
    <div className="project-showcase project-page__section container">
      <div className="project-page__heading">
        <div className="project-page__heading-text">Главная страница</div>
        <div className="project-page__heading-aside">
          <Switch 
            leftValue="Дизайн"
            rightValue="Прототип"
            value={false}
            onChange={changeImage}
          />
        </div>
      </div>
      <div className="project-showcase__banner">
        <img src={currentImage} alt="" className="project-showcase__image" />
      </div>
    </div>
  )
}
