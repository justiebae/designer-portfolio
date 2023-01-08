import React from 'react';

import './index.scss';

interface IProjectCoverProps {
  cover: string
}

export default function ProjectCover({ cover }: IProjectCoverProps) {
  return (
    <div className="project-cover">
      <img src={`/images/${cover}`} alt="" />
    </div>
  )
}
