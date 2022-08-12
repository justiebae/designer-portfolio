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
      <div className="ProjectShowcase ProjectPage-section">
        <div className="ProjectShowcase-banner">
          <img src={currentImage} alt="" className="ProjectShowcase-image" />
        </div>
        <div className="ProjectShowcase-switch Container">
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
    <div className="ProjectShowcase ProjectPage-section Container">
      <div className="ProjectPage-heading">
        <div className="ProjectPage-headingText">Главная страница</div>
        <div className="ProjectPage-headingAside">
          <Switch 
            leftValue="Дизайн"
            rightValue="Прототип"
            value={false}
            onChange={changeImage}
          />
        </div>
      </div>
      <div className="ProjectShowcase-banner">
        <img src={currentImage} alt="" className="ProjectShowcase-image" />
      </div>
    </div>
  )
}
