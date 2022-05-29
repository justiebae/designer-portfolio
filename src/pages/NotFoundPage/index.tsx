import React, {useContext, useEffect} from 'react';
import ThemeContext from '../../context/ThemeContext';
import './index.scss';
import CircleButton from '../../components/CircleButton';
import icon404 from '../../assets/icons/404.svg';
import {ReactComponent as SpaceMap} from '../../assets/icons/space-map.svg';

export default function NotFoundPage() {
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
        <object type="image/svg+xml" data={icon404}>
          Your browser does not support SVG
        </object>
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
      <SpaceMap className="NotFoundPage-map" />
    </div>
  )
}
