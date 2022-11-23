import React from 'react';

import './index.scss';

interface IProjectPages {
  text: string,
  amount: string,
  image: string
}

export default function ProjectPages({ text, amount, image }: IProjectPages) {
  return (
    <div className="project-pages project-page__section">
      <div className="project-pages__wrapper container">
        <div className="project-pages__info">
          <div className="project-pages__description">{text}</div>
          <div className="project-pages__title">{amount}</div>
        </div>
        <div className="project-pages__image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}
