import React from 'react';

import ProjectBanner from '../../../components/ProjectBanner';
import Status from '../../Status';
import UILink from '../../UILink';

import './index.scss';

type status = 'in-work' | 'concept' | 'done';

type link = {
  text: string;
  url: string;
};

interface IHeroProps {
  hero: {
    cover: string;
    title: string;
    description: string;
    year: number;
    status: status;
    roles: string[];
    links?: link[];
  }
}

export default function ProjectHero({ hero }: IHeroProps): JSX.Element {
  return (
    <div className="project-hero container">
      {
        hero.cover &&
        <div className="project-hero__banner">
          <ProjectBanner cover={hero.cover} year={hero.year} />
        </div>
      }
        
      <div className="project-hero__info">
        {hero.title && <div className="project-hero__name">{hero.title}</div>}
        {hero.year && <div className="project-hero__year">{hero.year}</div>}
        {
          hero.status && !hero.links &&
          <div className="project-hero__status">
            <Status status={hero.status} />
          </div>
        }
        {
          hero.links &&
          hero.links.length > 0 &&
          <div className='project-hero__links'>
            {
              hero.links.map((link: any, index: number) => (
                <UILink link={link} key={index} />
              ))
            }
          </div>
        }
        {
          hero.description && 
          <div className="project-hero__description">{hero.description}</div>
        }
        {
          hero.roles?.length > 0 &&
          <div className="project-hero__role ">Роль — {hero.roles.join(', ')}</div>
        }
      </div>
    </div>
  )
}
