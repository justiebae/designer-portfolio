import React from 'react';

import Icon from '../Icon';

import './index.scss';

interface ILinkProps {
  link: {
    text: string
    url: string
  }
}

export default function UILink({ link }: ILinkProps) {
  return (
    <a
      className='ui-link'
      href={link.url} 
      target="_blank" 
      rel="noreferrer"
    >
      <div className="ui-link__text">{link.text}</div>
      <div className="ui-link__icon">
        <Icon name="arrowIcon" />
      </div>
    </a>
  )
}
