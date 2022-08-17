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
  const itemsClasses = classNames('ProjectBlocks-items', {
    'ProjectBlocks-items--centered': centered,
    'ProjectBlocks-items--two-per-row': blocks.length === 2,
    'ProjectBlocks-items--three-per-row': blocks.length === 3
  });

  return (
    <div className="ProjectBlocks Container ProjectPage-section">
      { title && description &&
        <div className="ProjectBlocks-info">
          {title && <div className="ProjectBlocks-title ProjectPage-title">{title}</div>}
          {description && <div className="ProjectBlocks-description">{description}</div>}
        </div>
      }
      <div className={itemsClasses}>
        {blocks.map((block) => (
          <div className="ProjectBlocks-item" key={block.id}>
            <div className="ProjectBlocks-itemHead">
              {
                block.title && 
                <div className="ProjectBlocks-itemTitle">{block.title}</div>
              }
              {
                block.description && 
                <div className="ProjectBlocks-itemDescription">
                  {block.description}
                </div>
              }
            </div>
            <div className="ProjectBlocks-itemBody">
              <img src={block.image} alt="" className='ProjectBlocks-itemImage' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
