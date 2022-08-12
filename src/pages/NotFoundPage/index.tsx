import React, {useContext, useEffect} from 'react';

import Icon from '../../components/Icon';
import CircleButton from '../../components/CircleButton';

import ThemeContext from '../../context/ThemeContext';
import './index.scss';

export default function NotFoundPage(): JSX.Element {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme('black');

    return () => {
      setTheme('default');
    }
  }, []);

  return (
    <div className="NotFoundPage Container Page">
      <div className="NotFoundPage-title">
        <Icon name="notFound" />
      </div>
      <div className="NotFoundPage-message">
        Совсем пусто, ничего нет...
        <br />
        такой страницы не существует, вернитесь на главную :)
      </div>
      <div className="NotFoundPage-link">
        <CircleButton theme="white" path="/">
          вернуться 
          <br />
          на главную
        </CircleButton>
      </div>
      <Icon name="spaceMap" />
    </div>
  )
}
