import React, { useRef, useState, useContext } from 'react';
import RoundedImage from '../../components/RoundedPicture';
import Background from '../../components/Background';
import {ReactComponent as HandIcon} from '../../assets/icons/hand.svg'
import CircleButton from '../../components/CircleButton';
import ThemeContext from '../../context/ThemeContext';
import './index.scss';

const data = [
  {
    paragraphs: [
      'Привет, меня зовут Алиса, мне 24 года и я работаю UI/UX дизайнером, имею опыт в разработке интернет магазинов, приложений, сайт-портфолио, лендингов, айдентике и баннеров для рекламы.'
    ]
  },
  {
    paragraphs: [
      'Я работаю UI-UX дизайнером в команде на протяжении двух лет. Я стремлюсь создавать запоминающиеся, креативные и удобные интерфейсы.', 
      'Для работы в основном я использую Figma и Adobe Photoshop, но также изучаю и пользуюсь Adobe After Effects, Adobe Premiere Pro, Blender, Adobe Illustrator.', 
    ]
  },
  {
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ]
  },
  {
    paragraphs: [
      'qeqwe',
    ]
  }
];

export default function AboutPage() {
  const [currentId, setCurrentId] = useState(0);
  const FirstHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const SecondHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ThirdHeadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const headingRefs = [FirstHeadingRef, SecondHeadingRef, ThirdHeadingRef];
  const { theme, setTheme } = useContext(ThemeContext);

  React.useEffect(() => {
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
        heading.current.classList.add(className)
    })
  }

  const removeClassHeadings = (className: string): void => {
    headingRefs.forEach((heading) => {
      if (heading.current.classList.contains(className))
        heading.current.classList.remove(className)
    })
  }

  const renderHint = () => {
    return currentId === 0 && (
      <div className="AboutPage-hint Hint">
        <div className="Hint-icon">
          <HandIcon />
        </div>
        <div className="Hint-message">Наведи на заголовок, чтобы узнать побольше</div>
      </div>
    )
  }

  const renderText = () => {
    return (
      <>
        {data[currentId]['paragraphs'].map((paragraph: string, key) => 
            <p className="AboutPage-paragraph" key={key}>{paragraph}</p>
        )}
      </>
    )
  }

  const renderBackground = () => {
    switch(currentId) {
      case 1:
        return (
          <Background type="circles" />
        )
      case 2:
        return (
          <Background type="circles" />
        )
      case 3:
        return (
          <Background type="circles" />
        )
      default:
        return null
    }
  }

  return (
    <div className="AboutPage Page">
      <div className="AboutPage-wrapper Container">
        <div className="AboutPage-head">
          <div className="AboutPage-row">
            <div
              className="AboutPage-title Title-second"
              ref={FirstHeadingRef}
              data-id="1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Дизайн,
            </div>
            <div className="AboutPage-pictures">
              <div className="AboutPage-picture">
                <RoundedImage path={'/images/photo-1.jpg'} stars />
              </div>
            </div>
            {renderHint()}
          </div>
          <div className="AboutPage-row">
            <span
              className="AboutPage-title AboutPage-title--black Title-second"
              data-id="2"
              ref={SecondHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Космос
            </span>
            <span
              className="AboutPage-title Title-second"
              data-id="3"
              ref={ThirdHeadingRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              &ensp;и Котики
            </span>  
          </div>
        </div>
        <div className="AboutPage-body">
          <div className="AboutPage-text">
            {renderText()}
          </div>
          <div className="AboutPage-link">
            <CircleButton path="/projects" theme={theme}>Посмотреть портфолио</CircleButton>
          </div>
        </div>
        {renderBackground()}
      </div>
    </div>
  )
}
