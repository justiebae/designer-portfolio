import React, {useContext, useEffect} from 'react';

import Icon from '../../components/Icon';
import CircleButton from '../../components/CircleButton';

import ThemeContext from '../../context/ThemeContext';
import './index.scss';

export default function NotFoundPage(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme('black');

    return () => {
      setTheme('default');
    }
  }, []);

  return (
    <div className="NotFoundPage Page">
      <div className="NotFoundPage-title">
        <Icon name="notFound" />
      </div>
      <div className="NotFoundPage-message">
        Совсем пусто, ничего нет...
        <br />
        такой страницы не существует, вернитесь на главную :)
      </div>
      <div className="NotFoundPage-link">
        <CircleButton theme={theme} path="/">
          вернуться 
          <br />
          на главную
        </CircleButton>
      </div>
      <div className="NotFoundPage-stars">
        <div className="NotFoundPage-star NotFoundPage-star--white NotFoundPage-star--first">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--brown NotFoundPage-star--second">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--white NotFoundPage-star--third">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--white NotFoundPage-star--fourth">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--brown NotFoundPage-star--fifth">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--brown NotFoundPage-star--sixth">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--white NotFoundPage-star--seventh">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-star NotFoundPage-star--brown NotFoundPage-star--eighth">
          <Icon name="angleStar" />
        </div>
        <div className="NotFoundPage-multiStar NotFoundPage-multiStar--first">
          <Icon name="multiStar" />
        </div>
        <div className="NotFoundPage-multiStar NotFoundPage-multiStar--second">
          <Icon name="multiStar" />
        </div>
        <div className="NotFoundPage-multiStar NotFoundPage-multiStar--third">
          <Icon name="multiStar" />
        </div>
      </div>
    </div>
  )
}
