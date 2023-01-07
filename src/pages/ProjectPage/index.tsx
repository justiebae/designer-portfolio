import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProjectHero from '../../components/Project/ProjectHero';
import ProjectShowcase from '../../components/Project/ProjectShowcase';
import ProjectInfo from '../../components/Project/ProjectInfo';
import ProjectPages from '../../components/Project/ProjectPages';
import ProjectUserflow from '../../components/Project/ProjectUserflow';
import ProjectBlocks from '../../components/Project/ProjectBlocks';

import Projects from '../../api/projects';
import './index.scss';

type ShowcaseContent = {
  variant?: string,
  designImageURL: string,
  protoImageURL: string,
}

type Section<T> = {
  type: string,
  content: T
}
type Sections = Section<ShowcaseContent>[]

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

  const renderSections = (section: Section<ShowcaseContent>) => {
    switch(section.type) {
      case 'showcase':
        return <ProjectShowcase showcase={section.content} />;
    }
  }
  
  return (
    <div className="project-page page">
      <div className="project-page__section">
        {data.hero && <ProjectHero hero={data.hero} />}
      </div>


      {data.info && <ProjectInfo info={data.info} />}

      {data.pages && <ProjectPages pages={data.pages} />}

      {
        data.userflow &&
        <ProjectUserflow 
          description={data.userflow.description}
          image={data.userflow.image}
        />
      }

      {/* {
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
      } */}
    </div>
  )
}
