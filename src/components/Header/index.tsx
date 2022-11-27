import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from '../../store/slices/themeSlice'; 
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { gsap } from 'gsap';

import Icon from '../Icon/index';
import MobileNavigation from '../MobileNavigation';

import { links, telegram } from '../../utils/data/links';
import './index.scss';

export default function Header(): JSX.Element {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const location = useLocation();
  const theme = useSelector(getTheme);

  useEffect(() => {
    gsap.from(headerRef.current, 1.2, {
      opacity: 0,
      y: 60,
      ease: 'power4.out',
      delay: 1.8
    });
    
    const cb = () => {
      const positionFromTop = headerRef.current.ownerDocument.defaultView?.pageYOffset || 0;

      if (positionFromTop > 50) setHasScrolled(true);
      else setHasScrolled(false);
    }

    window.addEventListener('scroll', cb, false);

    return () => {
      window.removeEventListener('scroll', cb, false);
    }
  }, []);

  useEffect(() => {
    
    setMobileMenuVisible(false);
  }, [location]);

  useEffect(() => {
    const bodyElement: HTMLBodyElement | null = document.querySelector('body') || null;
    if (mobileMenuVisible && bodyElement) bodyElement.style.overflow = 'hidden';

    return () => {
      if (bodyElement) bodyElement.style.overflow = 'visible';
    }
  }, [mobileMenuVisible])

  const headerClassses = classNames('header', `header--${theme}`, {
    'header--active': hasScrolled
  });

  const headerButtonClasses = classNames('header__button', {
    'header__button--active': mobileMenuVisible
  });

  return (
    <header className={headerClassses} ref={headerRef}>
      <div className="header__container container">
        <div className="header__column">
          <NavLink to="/" className="header__logo">Алиса С.</NavLink>
        </div>
        <div className="header__navigation header__column header__column--center">
          {links.navigation.map(link =>
            <NavLink to={link.path} className="header__link" key={link.path}>
              <div className="header__text">
                {link.name}
                <div className="header__icon">
                  <Icon name="curve" />
                </div>
              </div>
              <div className="header__star">
                <Icon name="filledStar" />
              </div>
            </NavLink>
          )}
        </div>
        <div className="header__socials header__column header__column--end">
          {links.socials.map(({name, path}) => 
            <a 
              href={path} 
              target="_blank" 
              rel="noreferrer" 
              className="header__social" 
              key={name}
            >
              {name}
              <svg className="header__icon" width="74" height="30" viewBox="0 0 74 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0448 24.5919C15.1704 24.5919 2.98098 23.2757 1.21866 18.0107C-0.984243 11.4295 13.7018 4.19023 34.2622 1.88681C43.0738 0.899633 70.8904 -0.806796 72.813 6.82271C75.1643 16.1538 56.3551 28.1838 14.5 29.5" stroke="#222222" strokeLinecap="round"/>
              </svg>
            </a>
          )}
        </div>
        <div className="header__mobile header__column header__column--end">
          <button type="button" className={headerButtonClasses} onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
            <span className="header__button-line"></span>
            <span className="header__button-line"></span>
          </button>
        </div>
      </div>
      {
        mobileMenuVisible && (
          <MobileNavigation>
            <div className="mobile-navigation__wrapper page">
              <div className="mobile-navigation__links">
                {
                  links.navigation.map((link) =>
                    <NavLink 
                      to={link.path} 
                      key={link.path} 
                      className="mobile-navigation__link"
                    >
                      {link.name}
                      <div className="mobile-navigation__link-icon">
                        <Icon name="curve" />
                      </div>
                    </NavLink>
                  )
                }
              </div>
              <div className="mobile-navigation__socials container">
                {
                  links.socials.map((link) =>
                    <a 
                      href={link.path} 
                      key={link.path} 
                      target="_blank" 
                      rel="noreferrer"
                      className="mobile-navigation__social"
                    >
                      {link.name}
                    </a>
                  )
                }
                <a 
                  href={telegram}
                  target="_blank" 
                  rel="noreferrer"
                  className="mobile-navigation__social"
                >
                  Telegram
                </a>
              </div>
            </div>
          </MobileNavigation>
        )
      }
    </header>
  )
}
