import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProjectBanner from '../../components/ProjectBanner';
import ProjectShowcase from '../../components/Project/ProjectShowcase';
import ProjectInfo from '../../components/Project/ProjectInfo';
import ProjectPages from '../../components/Project/ProjectPages';
import ProjectUserflow from '../../components/Project/ProjectUserflow';
import ProjectBlocks from '../../components/Project/ProjectBlocks';
import ProjectFooter from '../../components/Project/ProjectFooter';
import Status from '../../components/Status';

import Projects from '../../api/projects';
import './index.scss';

export default function ProjectPage(): JSX.Element {
  const { slug } = useParams();
  const navigate = useNavigate();
  // todo: add type for data object
  const [data, setData] = useState<any>({})

  useEffect(() => {
    Projects
      .getProject(slug)
      .then((response) => setData(response))
      .catch(() => navigate('/projects', { replace: true }))
  }, [])
  
  return (
    <div className="project-page page">
      <div className="project-hero project-page__section container">
        {
          data.cover &&
          <div className="project-hero__banner">
            <ProjectBanner cover={data.cover} year={data.year} />
          </div>
        }
        
        <div className="project-hero__info">
          {data.title && <div className="project-hero__name">{data.title}</div>}
          {data.year && <div className="project-hero__year">{data.year}</div>}
          <div className="project-hero__status">
            {/* TODO: Додедлать статусы */}
            <Status />
          </div>
          {
            data.description && 
            <div className="project-hero__description">{data.description}</div>
          }
          {data.role && <div className="project-hero__role ">Роль — {data.role}</div>}
        </div>
      </div>

      {data.showcase && <ProjectShowcase showcase={data.showcase} />}

      {data.info && <ProjectInfo info={data.info} />}

      {data.pages && <ProjectPages pages={data.pages} />}

      {
        data.userflow &&
        <ProjectUserflow 
          title={data.userflow.title}
          description={data.userflow.description}
          image={data.userflow.image}
        />
      }

      {
        data.sections &&
        data.sections.map((section: any) => (
          <ProjectBlocks
            key={section.id}
            title={section.title}  
            description={section.description}
            centered={section.centered}
            blocks={section.blocks}
          />
        ))
      }

      <ProjectFooter />
    </div>
  )
}
