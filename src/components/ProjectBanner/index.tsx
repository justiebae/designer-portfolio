import React from 'react';
import Icon from '../Icon';
import './index.scss';

export default function ProjectBanner() {
  return (
    <div className="ProjectBanner">
      <div className="ProjectBanner-head">
        <div className="ProjectBanner-icons">
          <div className="ProjectBanner-star">
              <Icon name="filledStar" />
          </div>
          <div className="ProjectBanner-curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
      <img className="ProjectBanner-image" src="" alt="" />
      <div className="ProjectBanner-bottom">
        <div className="ProjectBanner-year">2021</div>
        <div className="ProjectBanner-icons">
          <div className="ProjectBanner-star">
              <Icon name="filledStar" />
          </div>
          <div className="ProjectBanner-curves">
            <Icon name="curves" />
          </div>
        </div>
      </div>
    </div>
  )
}
