import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IProjectBlocks {
  title?: string,
  description?: string,
  centered?: boolean,
  blocks: Array<Block>
}

type Block = {
  id: number,
  title: string,
  description?: string,
  image: string
}

export default function ProjectBlocks({ title, description, centered, blocks }: IProjectBlocks) {
  const itemsClasses = classNames('project-blocks__items', {
    'project-blocks__items--centered': centered,
    'project-blocks__items--two-per-row': blocks.length === 2,
    'project-blocks__items--three-per-row': blocks.length === 3
  });

  return (
    <div className="project-blocks container project-page__section">
      { title && description &&
        <div className="project-blocks__info">
          {title && <div className="project-blocks__title title-third">{title}</div>}
          {description && <div className="project-blocks__description">{description}</div>}
        </div>
      }
      <div className={itemsClasses}>
        {blocks.map((block) => (
          <div className="project-blocks__item" key={block.id}>
            <div className="project-blocks__item-head">
              {
                block.title && 
                <div className="project-blocks__item-title">{block.title}</div>
              }
              {
                block.description && 
                <div className="project-blocks__item-description">
                  {block.description}
                </div>
              }
            </div>
            <div className="project-blocks__item-body">
              <img src={block.image} alt="" className='project-blocks__item-image' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
