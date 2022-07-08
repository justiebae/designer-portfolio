import React from 'react';
import ProjectBanner from '../../components/ProjectBanner';
import Status from '../../components/Status';
import Switch from '../../components/Switch';
import './index.scss';

export default function ProjectPage(): JSX.Element {
  return (
    <div className="ProjectPage Page">
      <div className="ProjectPage-hero Container">
        <div className="ProjectPage-banner">
          <ProjectBanner />
        </div>
        <div className="ProjectPage-info">
          <div className="ProjectPage-name">Маит Академия</div>
          <div className="ProjectPage-status">
            <Status />
          </div>
          <div className="ProjectPage-link ">
            Скачать на Android
          </div>
          <div className="ProjectPage-description">Проектирование и разработка площадки с курсами по повышению квалификации в сфере безопасности</div>
          <div className="ProjectPage-role ">Роль — UI/UX Designer</div>
        </div>
      </div>
      <div className="ProjectPage-showcase">
        {/* <div className="ProjectPage-heading">
          <div className="ProjectPage-headingText">Главная страница</div>
          <div className="ProjectPage-headingAside"></div>
        </div> */}
        <div className="ProjectPage-showcaseBanner">
          <img src="/images/rnb-banner.jpg" alt="" className="ProjectPage-showcaseImage" />
        </div>
        <div className="ProjectPage-showcaseSwitch">
          <Switch />
        </div>
      </div>
    </div>
  )
}
