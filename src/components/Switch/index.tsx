import React, { useState } from 'react';

import classNames from 'classnames';
import './index.scss';

interface ISwitch {
  leftValue: string,
  rightValue: string,
  value: boolean,
  onChange: (value: boolean) => void
}

export default function Switch({ 
  leftValue, rightValue, value, onChange 
}: ISwitch) {
  const [state, setState] = useState<boolean>(value);

  const click = (value: boolean) => {
    setState(value)
    onChange(value)
  }

  const leftLabelClasses = classNames('switch__label switch__label--left', {
    'active': state === false
  });

  const rightLabelClasses = classNames('switch__label switch__label--right', {
    'active': state === true
  });

  const elementClasses = classNames('switch__element', { 'active': state });

  return (
    <div className="switch">
      <div className={leftLabelClasses} onClick={() => click(false)} >
        {leftValue}
      </div>
      <label className={elementClasses} >
        <input 
          type="checkbox" 
          className="switch__input" 
          checked={state} 
          onChange={() => click(!state)} 
        />
      </label>
      <div className={rightLabelClasses} onClick={() => click(true)}>
        {rightValue}
      </div>
    </div>
  )
}
