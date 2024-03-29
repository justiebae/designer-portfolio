import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ProjectBanner from '../ProjectBanner';
import Icon from '../Icon';

import './index.scss';

interface IProductCardProps {
  slug?: string,
  cover?: string,
  year?: number,
  title: string,
  description: string,
  role?: string,
  transparent?: boolean
}

export default function ProjectCard(
  { slug, cover, year, title, description, role, transparent }: IProductCardProps
): JSX.Element {

  const cardClasses = classNames('project-card', { 'project-card--transparent': transparent })

  const renderContent = () => {
    return (
      <>
        <div className="project-card__cover">
          <ProjectBanner cover={cover} year={year} transparent={transparent} />
        </div>
        <div className="project-card__content">
          <div className="project-card__head">
            <div className="project-card__title">{title}</div>
            <div className="project-card__arrow">
              <Icon name="arrowIcon" />
            </div>
          </div>
          <div className="project-card__year">{year}</div>
          <div className="project-card__description">{description}</div>
          {role && <div className="project-card__role">{role}</div>}
        </div>
      </>
    )
  }

  if (slug) {
    return (
      <Link to={'/projects/' + slug} className={cardClasses}>
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
