import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ProjectBanner from '../ProjectBanner';

import './index.scss';

interface IProductCardProps {
  path?: string,
  cover?: string,
  year?: number,
  title: string,
  desription: string,
  role?: string,
  transparent?: boolean
}

export default function ProjectCard(
  { path, cover, year, title, desription, role, transparent  }: IProductCardProps
): JSX.Element {

  const cardClasses = classNames('ProjectCard', { 'ProjectCard--transparent': transparent })

  const renderContent = () => {
    return (
      <>
        <div className="ProjectCard-cover">
          <ProjectBanner cover={cover} year={year} transparent={transparent} />
        </div>
        <div className="ProjectCard-content">
          <div className="ProjectCard-title">{title}</div>
          <div className="ProjectCard-description">{desription}</div>
          {role && <div className="ProjectCard-role">{role}</div>}
        </div>
      </>
    )
  }

  if (path) {
    return (
      <Link to={path} className={cardClasses}>
        {renderContent()}
      </Link>
    )
  }

  return (
    <div className={cardClasses}>
      {renderContent()}
    </div>
  )
}
