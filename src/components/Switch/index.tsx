import classNames from 'classnames';
import React, { useState } from 'react';
import './index.scss';

interface ISwitch {
  leftValue: string,
  rightValue: string
}

export default function Switch({ leftValue, rightValue }: ISwitch) {
  const [value, setValue] = useState<boolean>(true);

  const click = (value: boolean) => {
    setValue(value)
  }

  const leftLabelClasses = classNames('Switch-label Switch-label--left', {
    'active': value === false
  });

  const rightLabelClasses = classNames('Switch-label Switch-label--right', {
    'active': value === true
  });

  const elementClasses = classNames('Switch-element', { 'active': value });

  return (
    <div className="Switch">
      <div className={leftLabelClasses} onClick={() => click(false)} >
        {leftValue}
      </div>
      <label className={elementClasses} >
        <input 
          type="checkbox" 
          className="Switch-input" 
          checked={value} 
          onChange={() => click(!value)} 
        />
      </label>
      <div className={rightLabelClasses} onClick={() => click(true)}>
        {rightValue}
      </div>
    </div>
  )
}
