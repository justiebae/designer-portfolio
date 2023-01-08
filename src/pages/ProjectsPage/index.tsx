import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';

import ProjectCard from '../../components/ProjectCard';
import Icon from '../../components/Icon';

import useGSAPSelector from '../../hooks/useGSAPSelector';
import useScreenWidth from '../../hooks/useScreenWidth';
import declineWords from '../../utils/declineWords';
import Projects from '../../api/projects';
import moreBg from '../../assets/images/more.svg';
import 'swiper/css';
import './index.scss';

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState<any>([]);
  const [slides, setSlides] = useState<any>([]);
  const screenWidth = useScreenWidth();
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    Projects.getProjects()
      .then((data) => {
        setProjects(data);
        setSlides([
          ...data,
          {
            id: 23,
            transparent: true,
            cover: moreBg,
            title: 'Дальше больше',
            description: 'В скором времени тут появятся новые проекты',
          }
        ]);

        gsap.from(q('.swiper-slide'), 0.8, {
          delay: 0.5,
          opacity: 0,
          translateY: 140,
          stagger: {
            amount: 0.6
          }
        });

        gsap.from(q('.projects-page__info'), 0.4, {
          delay: 1,
          opacity: 0,
          translateY: 100,
          stagger: {
            amount: 0.4
          }
        });
      })
  }, [])

  const renderProjects = () => {
    return (
      <>
        {slides.map(({id, title, description, year, role, slug, cover, transparent}: any) => 
          <SwiperSlide key={id}>
            <ProjectCard 
              title={title}
              description={description}
              year={year}
              role={role}
              cover={cover}
              slug={slug}
              transparent={transparent}
            />
          </SwiperSlide>
        )}
      </>
    )
  }

  if (screenWidth < 768) {
    return (
      <div className='projects-page page'>
        <div className="projects-page__cards">
          {projects.map(({id, title, description, year, role, slug, cover}: any) => 
            <div className='projects-page__card' key={id}>
              <ProjectCard
                title={title}
                description={description}
                year={year}
                role={role}
                cover={cover}
                slug={slug}
              />
            </div>
          )}
        </div>
        <div className="project-page__more">
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
    <div className="projects-page container page" ref={el}>
      <div className="projects-page__slider">
        <Swiper
          spaceBetween={100}
          slidesPerView={2.2}
        >
          {renderProjects()}
        </Swiper>
      </div>
      <div className="projects-page__footer container">
        <div className="projects-page__info projects-page__amount">
          {projects.length}
          &ensp;
          {declineWords(['проект', 'проекта', 'проектов'], projects.length)}
        </div>
        <a href="/" rel="noreferrer" target="_blank" className=" projects-page__info projects-page__telegram social-link">
          <div className="social-link__text">Для связи со мной</div>
          <div className="social-link__icon">
            <Icon name="telegram" />
          </div>
        </a>
      </div>
    </div>
  )
}
