import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '../../store/slices/themeSlice';
import classNames from 'classnames';
import { gsap, Elastic } from 'gsap';

import RoundedImage from '../../components/RoundedPicture';
import Background from '../../components/Background';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';

import useScreenWidth from '../../hooks/useScreenWidth';
import useGSAPSelector from '../../hooks/useGSAPSelector';
import about from '../../data/about';
import './index.scss';

export default function AboutPage(): JSX.Element {
  const [currentId, setCurrentId] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);
  const FirstHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const SecondHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ThirdHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const headingRefs = [FirstHeadingRef, SecondHeadingRef, ThirdHeadingRef];
  
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  
  const screenWidth = useScreenWidth();
  const { q, el } = useGSAPSelector();

  useEffect(() => {
    gsap.from(q('.about-page__title'), 1.5, {
      y: 500,
      ease: 'power4.out',
      delay: 0.6,
      skewY: 20,
      stagger: {
        amount: 0.4
      }
    });

    gsap.from(q('.about-page__text'), 1.5, {
      y: 200,
      ease: 'power4.out',
      delay: 1.2,
      skewY: 10,
      stagger: {
        amount: 0.8
      }
    });

    gsap.to(q('.about-page__picture-cover'), 1.2, {
      height: 0,
      ease: 'power4.out',
      delay: 1,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.hint'), 1.3, {
      y: 150,
      ease: 'power4.out',
      delay: 0.8,
      skewY: 10,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.rounded-picture__star'), 1.7, {
      delay: 2.2,
      scale: 0,
      ease: Elastic.easeOut,
      stagger: {
        amount: 0.8
      }
    });

    gsap.from(q('.circle-button'), 1.8, {
      delay: 1.8,
      scale: 0,
      ease: Elastic.easeOut.config(0.3, 0.2),
    });
  }, [])

  useEffect(() => {
    if (currentId === 2) {
      dispatch(setTheme({ theme: 'black' }))
    }

    return () => {
      dispatch(setTheme({ theme: 'default' }))
    }
  }, [currentId])

  const handleMouseEnter = (e: React.MouseEvent<Element, MouseEvent>): void => {
    const target = e.target as HTMLButtonElement;
    if (!target) {
      return;
    }

    setHasHovered(true);
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
      <div className="hint">
        <div className="hint__icon">
          <Icon name="handIcon" />
        </div>
        <div className="hint__message">Наведи на заголовок, чтобы узнать побольше</div>
      </div>
    )
  }

  const renderPictures = (): JSX.Element | boolean => {
    const wrapperClasses = classNames('about-page__pictures-wrapper', {
      'about-page__pictures-wrapper--single': about[currentId]['images']?.length === 1
    });

    const pictureClasses = classNames('about-page__picture', {
      'about-page__picture--changed': hasHovered
    })

    if (screenWidth <= 767 && !about[currentId]['images']) {
      return false;
    }

    if (!about[currentId]['images']) {
      return (
        <div className="about-page__picture about-page__picture--hidden">
          <RoundedImage path={''} stars={false} />
        </div>
      )
    }

    return (
      <div className={wrapperClasses}>
        {about[currentId]['images']?.map(({id, path, stars}) =>
          <div className={pictureClasses} key={id}>
            <div className="about-page__picture-cover"></div>
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
            <p className="about-page__paragraph" key={key}>{paragraph}</p>
          )}
        </>
      )
    }

    return (
      <>
        {about[currentId]['paragraphs'].map((paragraph, key) => 
          <p className="about-page__paragraph" key={key}>{paragraph}</p>
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
    <div className={`about-page about-page--current-${currentId} page`} ref={el}>
      <div className="about-page__wrapper container">
        <div className="about-page__head">
          <div className="about-page__row">
            <div className="about-page__hidden">
              <div
                className="about-page__title about-page__title--first title-second"
                ref={FirstHeadingRef}
                data-id="1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Дизайн,
              </div>
            </div>
            <div className="about-page__pictures">
              {renderPictures()}
            </div>
            <div className="about-page__hidden">
              <div className="about-page__hint">
                {renderHint()}
              </div>
            </div>
          </div>
          <div className="about-page__row about-page__hidden">
            <span
              className="about-page__title about-page__title--second about-page__title--black title-second"
              data-id="2"
              ref={SecondHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Космос&ensp;
            </span>
            <span
              className="about-page__title about-page__title--third title-second"
              data-id="3"
              ref={ThirdHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              и Котики
            </span>
          </div>
        </div>
        <div className="about-page__body">
          <div className="about-page__mobile-hint about-page__hidden">
            {renderHint()}
          </div>
          <div className="about-page__hidden">
            <div className="about-page__text">
              {renderText()}
            </div>
          </div>
          <div className="about-page__link">
            <CircleButton path="/projects" theme={theme}>Посмотреть портфолио</CircleButton>
          </div>
          <div className="about-page__mobile-pictures">
            {renderPictures()}
          </div>
        </div>
        {renderBackground()}
      </div>
    </div>
  )
}
