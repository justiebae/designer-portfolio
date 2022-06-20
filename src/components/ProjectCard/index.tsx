import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface IProductCardProps {
  path?: string,
  background: string,
  year: number,
  title: string,
  desription: string,
  role: string
}

export default function ProjectCard(
  { path, background, year, title, desription, role  }: IProductCardProps
): JSX.Element {

  const renderContent = () => {
    return (
      <>
        <div className="ProjectCard-cover">
          <img className="ProjectCard-background" src={background} alt={title + ' cover'} />
        </div>
        <div className="ProjectCard-content">
          <div className="ProjectCard-title">{title}</div>
          <div className="ProjectCard-description">{desription}</div>
          <div className="ProjectCard-role">{role}</div>
        </div>
      </>
    )
  }

  if (path) {
    return (
      <Link to={path} className="ProjectCard">
        {renderContent()}
      </Link>
    )
  }

  return (
    <div className="ProjectCard">
      {renderContent()}
    </div>
  )
}
