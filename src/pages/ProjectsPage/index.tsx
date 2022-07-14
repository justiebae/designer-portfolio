import React, {useState, useEffect} from 'react';
import { Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import Projects from '../../api/projects';
import 'swiper/css';
import './index.scss';
import moreBg from '../../assets/images/more.svg'

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState([]);

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
          <div className="ProjectsPage-amount">{projects.length} {formattedWord(['проект', 'проекта', 'проектов'], projects.length)}</div>
        </Swiper>
      </div>
    </div>
  )
}
