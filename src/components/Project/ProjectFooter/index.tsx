import React from "react";
import { Link } from 'react-router-dom';

import Icon from "../../Icon";

import './index.scss';

export default function ProjectFooter() {
  return (
    <div className="project-footer">
      <Link to="/projects" className="project-footer__link container">
        <div className="project-footer__title">Вернуться к&nbsp;проектам</div>
        <div className="project-footer__icon">
          <Icon name="thinArrow" />
        </div>
      </Link>
    </div>
  )
}
