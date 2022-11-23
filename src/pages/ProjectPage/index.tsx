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
      .then((response) => {
        setData(response)
      })
      .catch(() => navigate('/projects', { replace: true }))
  }, [])
  
  return (
    <div className="project-page page">
      <div className="project-hero project-page__section container">
        <div className="project-hero__banner">
          <ProjectBanner cover={data.cover} year={data.year} />
        </div>
        <div className="project-hero__info">
          <div className="project-hero__name">{data.title}</div>
          <div className="project-hero__year">{data.year}</div>
          <div className="project-hero__status">
            <Status />
          </div>
          <div className="project-hero__description">{data.description}</div>
          <div className="project-hero__role ">{data.role}</div>
        </div>
      </div>

      {
        data.showcase && 
        <ProjectShowcase 
          variant={data.showcase?.variant}
          designImageURL={data.showcase.designImageURL}
          protoImageURL={data.showcase.protoImageURL}
        />
      }

      {
        data.info &&
        <ProjectInfo 
          goals={data.info.goals}
          tasks={data.info.tasks}
        />
      }

      {
        data.pages &&
        <ProjectPages  
          text={data.pages.text}
          amount={data.pages.amount}
          image={data.pages.image}
        />
      }

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
