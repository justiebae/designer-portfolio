import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

interface ICircleButtonProps {
  theme?: String,
  path?: Object,
  children: React.ReactNode
}

export default function CircleButton({ theme, path, children }: ICircleButtonProps): JSX.Element {
  const classes = theme ? `CircleButton CircleButton--${theme}` : 'CircleButton'

  if (path) {
    return (
      <Link to={path}>
        <div className={classes}>
          <span className="CircleButton-text">
            {children}
          </span>
        </div>
      </Link>
    )
  }

  return (
    <button type="button" className={classes}>
      <span className="CircleButton-text">
        {children}
      </span>
    </button>
  )
}
