import React from 'react';

import './index.scss';

interface IProjectPages {
  pages: {
    text: string,
    amount: string,
    image: string
  }
}

export default function ProjectPages({ pages }: IProjectPages) {
  return (
    <div className="project-pages project-page__section">
      <div className="project-pages__wrapper container">
        <div className="project-pages__info">
          {pages.text && <div className="project-pages__description">{pages.text}</div>}
          {pages.amount && <div className="project-pages__title">{pages.amount} стр.</div>}
        </div>
        <div className="project-pages__image">
          <img src={pages.image} alt="" />
        </div>
      </div>
    </div>
  )
}
