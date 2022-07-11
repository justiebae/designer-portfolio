import React from 'react';
import Icon from '../../components/Icon';
import ProjectBanner from '../../components/ProjectBanner';
import Status from '../../components/Status';
import Switch from '../../components/Switch';
import './index.scss';

export default function ProjectPage(): JSX.Element {
  return (
    <div className="ProjectPage Page">

      <div className="ProjectHero ProjectPage-section Container">
        <div className="ProjectHero-banner">
          <ProjectBanner />
        </div>
        <div className="ProjectHero-info">
          <div className="ProjectHero-name">Маит Академия</div>
          <div className="ProjectHero-status">
            <Status />
          </div>
          <div className="ProjectHero-link ">
            Скачать на Android
          </div>
          <div className="ProjectHero-description">Проектирование и разработка площадки с курсами по повышению квалификации в сфере безопасности</div>
          <div className="ProjectHero-role ">Роль — UI/UX Designer</div>
        </div>
      </div>

      <div className="ProjectShowcase ProjectPage-section">
        {/* <div className="ProjectPage-heading">
          <div className="ProjectPage-headingText">Главная страница</div>
          <div className="ProjectPage-headingAside"></div>
        </div> */}
        <div className="ProjectShowcase-banner">
          <img src="/images/rnb-banner.jpg" alt="" className="ProjectShowcase-image" />
        </div>
        <div className="ProjectShowcase-switch Container">
          <Switch leftValue="Дизайн" rightValue="Прототип" />
        </div>
      </div>

      <div className="ProjectInfo ProjectPage-section Container">
        <div className="ProjectInfo-section">
          <div className="ProjectInfo-title ProjectPage-title">Цели</div>
          <div className="ProjectInfo-description">Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей</div>
        </div>
        <div className="ProjectInfo-section">
          <div className="ProjectInfo-title ProjectPage-title">Задачи</div>
          <ul className="ProjectInfo-list">
            <li className='ProjectInfo-listItem'>
              <Icon name="outlinedStar" /> Идейные соображения высшего порядка;
            </li>
            <li className='ProjectInfo-listItem'>
              <Icon name="outlinedStar" /> Для современного мира начало повседневной работы по формированию позиции прекрасно подходит для реализации поставленных;
            </li>
            <li className='ProjectInfo-listItem'>
              <Icon name="outlinedStar" /> С учётом сложившейся международной обстановки;
            </li>
            <li className='ProjectInfo-listItem'>
              <Icon name="outlinedStar" /> С другой стороны, экономическая повестка сегодняшнего;
            </li>
            <li className='ProjectInfo-listItem'>
              <Icon name="outlinedStar" /> Безусловно, повышение уровня;
            </li>
          </ul>
        </div>
      </div>

      <div className="ProjectPages ProjectPage-section">
        <div className="ProjectPages-wrapper Container">
          <div className="ProjectPages-info">
            <div className="ProjectPages-description">Проект включает в себя разработку более</div>
            <div className="ProjectPages-title">100 стр.</div>
          </div>
          <div className="ProjectPages-image">
            <img src="/images/phones.png" alt="" />
          </div>
        </div>
      </div>

      <div className="ProjectUserflow ProjectPage-section">
        <div className="ProjectUserflow-info Container">
          <div className="ProjectUserflow-title ProjectPage-title">User flow</div>
          <div className="ProjectUserflow-description">Покупка товара</div>
        </div>
        <div className="ProjectUserflow-image">
          <img src="/images/userflow.png" alt="" />
        </div>
      </div>

      <div className="ProjectBlocks Container">
        <div className="ProjectBlocks-info">
          <div className="ProjectBlocks-title ProjectPage-title">UI-Kit</div>
          <div className="ProjectBlocks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className="ProjectBlocks-items">
          <div className="ProjectBlocks-item">
            <div className="ProjectBlocks-itemHead">
              <div className="ProjectBlocks-itemTitle">Принятие доставки курьером</div>
              <div className="ProjectBlocks-itemDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div className="ProjectBlocks-itemBody">
              <img src="" alt="" className='ProjectBlocks-itemImage' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
