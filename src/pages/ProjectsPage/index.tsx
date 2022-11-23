import React, {useState, useEffect} from 'react';
import { Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import ProjectCard from '../../components/ProjectCard';
import Icon from '../../components/Icon';

import useScreenWidth from '../../hooks/useScreenWidth';
import Projects from '../../api/projects';
import moreBg from '../../assets/images/more.svg';
import 'swiper/css';
import './index.scss';

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState([]);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    Projects.getProjects()
      .then(data => setProjects(data))
      .catch(error => alert(error))
  }, [])

  const formattedWord = (forms: Array<String>, val: number) => {
    const cases = [ 2, 0, 1, 1, 1, 2 ];
    return forms[(val % 100 > 4 && val % 100 < 20) ? 2 : cases[(val % 10 < 5) ? val % 10 : 5]];
  }

  const renderProjects = () => {
    return (
      <>
        {projects.map(({id, title, description, year, role, path, cover}) => 
          <SwiperSlide key={id}>
            <ProjectCard 
              title={title}
              desription={description}
              year={year}
              role={role}
              cover={cover}
              path={path}
            />
          </SwiperSlide>
        )}
        <SwiperSlide key={Date.now()}>
            <ProjectCard
              title="Дальше больше"
              desription="В скором времени тут появятся новые проекты"
              cover={moreBg}
              transparent={true}
            />
          </SwiperSlide>
      </>
    )
  }

  if (screenWidth < 768) {
    return (
      <div className='project-page page'>
        <div className="project-page__cards">
          {projects.map(({id, title, description, year, role, path, cover}) => 
            <div className='project-pagecard' key={id}>
              <ProjectCard
                title={title}
                desription={description}
                year={year}
                role={role}
                cover={cover}
                path={path}
              />
            </div>
          )}
        </div>
        <div className="project-pagemore">
          <div className="project-more">
            <div className="project-more__icon">
              <Icon name="penIcon" />
            </div>
            <div className="project-more__title">Дальше больше</div>
            <div className="project-more__description">В скором времени тут появятся новые проекты</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-page container page">
      <div className="projects-page__slider">
        <Swiper
          spaceBetween={100}
          slidesPerView={2.2}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
        >
          {renderProjects()}
          <div className="projects-page__amount">
            {projects.length}
            &ensp;
            {formattedWord(['проект', 'проекта', 'проектов'], projects.length)}
          </div>
        </Swiper>
      </div>
    </div>
  )
}
