import React from "react";
import { Link } from 'react-router-dom';

import Icon from "../../Icon";

import './index.scss';

export default function ProjectFooter() {
  return (
    <div className="ProjectFooter">
      <Link to="/projects" className="ProjectFooter-link Container">
        <div className="ProjectFooter-title">Вернуться к&nbsp;проектам</div>
        <div className="ProjectFooter-icon">
          <Icon name="thinArrow" />
        </div>
      </Link>
    </div>
  )
}
