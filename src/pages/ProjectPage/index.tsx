import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProjectHero from '../../components/Project/ProjectHero';
import ProjectShowcase from '../../components/Project/ProjectShowcase';
import ProjectInfo from '../../components/Project/ProjectInfo';
import ProjectPages from '../../components/Project/ProjectPages';
import ProjectUserflow from '../../components/Project/ProjectUserflow';
import ProjectBlocks from '../../components/Project/ProjectBlocks';
import ProjectCover from '../../components/Project/ProjectCover';
import ProjectAdaptive from '../../components/Project/ProjectAdaptive';

import Projects from '../../api/projects';
import './index.scss';

type ShowcaseContent = {
  variant?: string,
  designImageURL: string,
  protoImageURL: string,
}

type InfoContent = {
  goals: string,
  tasks?: Array<string>
}

type Section<T> = {
  type: string,
  content: T
}
type Sections = Section<ShowcaseContent | InfoContent>[]

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

  const renderSection = (section: any) => {
    switch(section.type) {
      case 'showcase':
        return <ProjectShowcase showcase={section.content} />;
      case 'info':
        return <ProjectInfo info={section.content} />;
      case 'pages':
        return <ProjectPages pages={section.content} />;
      case 'userflow':
        return <ProjectUserflow userflow={section.content} />;
      case 'cover':
        return <ProjectCover cover={section.content} />;
      case 'adaptive':
        return <ProjectAdaptive adaptive={section.content} />;
        
      default:
        return;
    }
  }
  
  return (
    <div className="project-page page">
      <div className="project-page__section">
        {data.hero && <ProjectHero hero={data.hero} />}
      </div>

      {
        data.sections && 
        data.sections.map((section: Section<ShowcaseContent | InfoContent>, index: number) => (
          <div className="project-page__section" key={index}>
            { renderSection(section) }
          </div>
        )
        )
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
