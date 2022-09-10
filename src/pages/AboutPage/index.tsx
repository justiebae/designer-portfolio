import React, { useRef, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { gsap, Elastic } from 'gsap';

import RoundedImage from '../../components/RoundedPicture';
import Background from '../../components/Background';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';

import ThemeContext from '../../context/ThemeContext';
import useScreenWidth from '../../hooks/useScreenWidth';
import useGSAPSelector from '../../hooks/useGSAPSelector';
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
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.AboutPage-title'), 1.5, {
      y: 500,
      ease: 'power4.out',
      delay: 0.6,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.AboutPage-text'), 1.5, {
      y: 200,
      ease: 'power4.out',
      delay: 1.2,
      skewY: 10,
      stagger: {
        amount: 0.8
      }
    });

    gsap.to(q('.AboutPage-pictureCover'), 1.2, {
      height: 0,
      ease: 'power4.out',
      delay: 1,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.Hint'), 1.3, {
      y: 150,
      ease: 'power4.out',
      delay: 0.8,
      skewY: 10,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.RoundedPicture-star'), 1.7, {
      delay: 1.2,
      scale: 0,
      ease: Elastic.easeOut,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.CircleButton'), 1.7, {
      delay: 1.8,
      scale: 0,
      ease: Elastic.easeOut
    });
  }, [])

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
            <div className="AboutPage-pictureCover"></div>
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
    <div className={`AboutPage AboutPage--current-${currentId} Page`} ref={el}>
      <div className="AboutPage-wrapper Container">
        <div className="AboutPage-head">
          <div className="AboutPage-row">
            <div className="AboutPage-hidden">
              <div
                className="AboutPage-title AboutPage-title--first Title-second"
                ref={FirstHeadingRef}
                data-id="1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Дизайн,
              </div>
            </div>
            <div className="AboutPage-pictures">
              {renderPictures()}
            </div>
            <div className="AboutPage-hidden">
              <div className="AboutPage-hint">
                {renderHint()}
              </div>
            </div>
          </div>
          <div className="AboutPage-row AboutPage-hidden">
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
          <div className="AboutPage-mobileHint AboutPage-hidden">
            {renderHint()}
          </div>
          <div className="AboutPage-hidden">
            <div className="AboutPage-text">
              {renderText()}
            </div>
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
