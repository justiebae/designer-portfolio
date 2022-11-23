import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '../../store/slices/themeSlice';

import Icon from '../../components/Icon';
import CircleButton from '../../components/CircleButton';

import './index.scss';

export default function NotFoundPage(): JSX.Element {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setTheme({ theme: 'black' }))
    return () => {
      dispatch(setTheme({ theme: 'default' }))
    }
  }, []);

  return (
    <div className="not-found-page page">
      <div className="not-found-page__title">
        <Icon name="notFound" />
      </div>
      <div className="not-found-page__message">
        Совсем пусто, ничего нет...
        <br />
        такой страницы не существует, вернитесь на главную :)
      </div>
      <div className="not-found-page__link">
        <CircleButton theme={theme} path="/">
          вернуться 
          <br />
          на главную
        </CircleButton>
      </div>
      <div className="not-found-page__stars">
        <div className="not-found-page__star not-found-page__star--white not-found-page__star--first">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--brown not-found-page__star--second">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--white not-found-page__star--third">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--white not-found-page__star--fourth">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--brown not-found-page__star--fifth">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--brown not-found-page__star--sixth">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--white not-found-page__star--seventh">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__star not-found-page__star--brown not-found-page__star--eighth">
          <Icon name="angleStar" />
        </div>
        <div className="not-found-page__multi-star not-found-page__multi-star--first">
          <Icon name="multiStar" />
        </div>
        <div className="not-found-page__multi-star not-found-page__multi-star--second">
          <Icon name="multiStar" />
        </div>
        <div className="not-found-page__multi-star not-found-page__multi-star--third">
          <Icon name="multiStar" />
        </div>
      </div>
    </div>
  )
}
