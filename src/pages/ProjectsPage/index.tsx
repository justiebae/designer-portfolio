import React from 'react';
import { Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import 'swiper/css';
import './index.scss';

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="ProjectsPage Container Page">
      <Swiper
        spaceBetween={100}
        slidesPerView={2.2}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
      >
        <SwiperSlide>
          <ProjectCard 
            background=""
            year={2021}
            title="КингСуши"
            desription="Проектирование и разработка приложения под iOS и Android для курьеров по доставке азиатской еды в г. Череповце, Вологодская обл."
            role="UI/UX Design"
            path="/projects/1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard 
            background=""
            year={2021}
            title="КингСуши"
            desription="Проектирование и разработка приложения под iOS и Android для курьеров по доставке азиатской еды в г. Череповце, Вологодская обл."
            role="UI/UX Design"
            path="/projects/1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard 
            background=""
            year={2021}
            title="КингСуши"
            desription="Проектирование и разработка приложения под iOS и Android для курьеров по доставке азиатской еды в г. Череповце, Вологодская обл."
            role="UI/UX Design"
            path="/projects/1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
