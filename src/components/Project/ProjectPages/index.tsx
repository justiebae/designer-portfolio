import React from 'react';
import './index.scss';

interface IProjectPages {
  text: string,
  amount: string,
  image: string
}

export default function ProjectPages({ text, amount, image }: IProjectPages) {
  return (
    <div className="ProjectPages ProjectPage-section">
      <div className="ProjectPages-wrapper Container">
        <div className="ProjectPages-info">
          <div className="ProjectPages-description">{text}</div>
          <div className="ProjectPages-title">{amount}</div>
        </div>
        <div className="ProjectPages-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}
