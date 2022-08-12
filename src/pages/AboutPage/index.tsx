import React, { useRef, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';

import RoundedImage from '../../components/RoundedPicture';
import Background from '../../components/Background';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';

import ThemeContext from '../../context/ThemeContext';
import useScreenWidth from '../../hooks/useScreenWidth';
import about from '../../data/about';
import './index.scss';

export default function AboutPage(): JSX.Element {
  const [currentId, setCurrentId] = useState(0);
  const FirstHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const SecondHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ThirdHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const headingRefs = [FirstHeadingRef, SecondHeadingRef, ThirdHeadingRef];
  const { theme, setTheme } = useContext(ThemeContext);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (currentId === 2) {
      setTheme('black')
    }

    return () => {
      setTheme('default')
    }
  }, [currentId])

  const handleMouseEnter = (e: React.MouseEvent<Element, MouseEvent>): void => {
    const target = e.target as HTMLButtonElement;
    if (!target) {
      return;
    }

    setCurrentId(Number(target.dataset['id']));
    setClassHeadings(target, 'disabled');
  }

  const handleMouseLeave = (): void => {
    setCurrentId(0);
    removeClassHeadings('disabled');
  }

  const setClassHeadings = (target: HTMLButtonElement, className: string): void => {
    headingRefs.forEach((heading) => {
      if (target !== heading.current)
        heading.current.classList.add(className);
    })
  }

  const removeClassHeadings = (className: string): void => {
    headingRefs.forEach((heading) => {
      if (heading.current.classList.contains(className))
        heading.current.classList.remove(className)
    })
  }

  const renderHint = (): JSX.Element | boolean => {
    return currentId === 0 && (
      <div className="Hint">
        <div className="Hint-icon">
          <Icon name="handIcon" />
        </div>
        <div className="Hint-message">Наведи на заголовок, чтобы узнать побольше</div>
      </div>
    )
  }

  const renderPictures = (): JSX.Element | boolean => {
    const classes = classNames('AboutPage-picturesWrapper', {
      'AboutPage-picturesWrapper--single': about[currentId]['images']?.length === 1
    });

    if (screenWidth <= 767 && !about[currentId]['images']) {
      return false;
    }

    if (!about[currentId]['images']) {
      return (
        <div className="AboutPage-picture AboutPage-picture--hidden">
          <RoundedImage path={''} stars={false} />
        </div>
      )
    }

    return (
      <div className={classes}>
        {about[currentId]['images']?.map(({id, path, stars}) =>
          <div className='AboutPage-picture' key={id}>
            <RoundedImage path={path} stars={stars} />
          </div>
        )}
      </div>
    )
  }

  const renderText = (): JSX.Element | boolean => {
    if (screenWidth <= 767) {
      return (
        <>
          {about[currentId]['mobileParagraphs']?.map((paragraph, key) => 
            <p className="AboutPage-paragraph" key={key}>{paragraph}</p>
          )}
        </>
      )
    }

    return (
      <>
        {about[currentId]['paragraphs'].map((paragraph, key) => 
          <p className="AboutPage-paragraph" key={key}>{paragraph}</p>
        )}
      </>
    )
  }

  const renderBackground = () => {
    switch(currentId) {
      case 1:
        return (
          <Background type="design" />
        )
      case 2:
        return (
          <Background type="space" />
        )
      case 3:
        return (
          <Background type="cats" />
        )
      default:
        return null
    }
  }

  return (
    <div className={`AboutPage AboutPage--current-${currentId} Page`}>
      <div className="AboutPage-wrapper Container">
        <div className="AboutPage-head">
          <div className="AboutPage-row">
            <div
              className="AboutPage-title AboutPage-title--first Title-second"
              ref={FirstHeadingRef}
              data-id="1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Дизайн,
            </div>
            <div className="AboutPage-pictures">
              {renderPictures()}
            </div>
            <div className="AboutPage-hint">
              {renderHint()}
            </div>
          </div>
          <div className="AboutPage-row">
            <span
              className="AboutPage-title AboutPage-title--second AboutPage-title--black Title-second"
              data-id="2"
              ref={SecondHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Космос&ensp;
            </span>
            <span
              className="AboutPage-title AboutPage-title--third Title-second"
              data-id="3"
              ref={ThirdHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              и Котики
            </span>
          </div>
        </div>
        <div className="AboutPage-body">
          <div className="AboutPage-mobileHint">
            {renderHint()}
          </div>
          <div className="AboutPage-text">
            {renderText()}
          </div>
          <div className="AboutPage-link">
            <CircleButton path="/projects" theme={theme}>Посмотреть портфолио</CircleButton>
          </div>
          <div className="AboutPage-mobilePictures">
            {renderPictures()}
          </div>
        </div>
        {renderBackground()}
      </div>
    </div>
  )
}
