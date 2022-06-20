import React, {useState, useEffect} from 'react';
import { Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import Projects from '../../api/projects';
import 'swiper/css';
import './index.scss';

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(response => setProjects(response))
  }, [])

  const getProjects = async () => {
    const { data } = await Projects.getProjects()
    return data
  }

  const renderProjects = () => {
    return (
      <>
        {projects.map(({id, title, description, year, role, path}) => 
          <SwiperSlide key={id}>
            <ProjectCard 
              title={title}
              desription={description}
              year={year}
              role={role}
              background=""
              path={path}
            />
          </SwiperSlide>
        )}
      </>
    )
  }

  return (
    <div className="ProjectsPage Container Page">
      <div className="ProjectsPage-slider">

        <Swiper
          spaceBetween={100}
          slidesPerView={2.2}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
        >
          {renderProjects()}
          <div className="ProjectsPage-amount">5 проектов</div>
        </Swiper>
      </div>
    </div>
  )
}
