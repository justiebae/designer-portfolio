import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Icon from '../Icon/index';
import MobileNavigation from '../MobileNavigation';

import ThemeContext from '../../context/ThemeContext';
import { links, telegram } from '../../data/links';
import './index.scss';

export default function Header(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const location = useLocation();

  useEffect(() => {
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

  const headerClassses = classNames('Header', `Header--${theme}`, {
    'Header--active': hasScrolled
  });

  const headerButtonClasses = classNames('Header-button', {
    'Header-button--active': mobileMenuVisible
  });

  return (
    <header className={headerClassses} ref={headerRef}>
      <div className="Header-container Container">
        <div className="Header-column">
          <NavLink to="/" className="Header-logo">Алиса С.</NavLink>
        </div>
        <div className="Header-navigation Header-column Header-column--center">
          {links.navigation.map(link =>
            <NavLink to={link.path} className="Header-link" key={link.path}>
              <div className="Header-text">
                {link.name}
                <div className="Header-icon">
                  <Icon name="curve" />
                </div>
              </div>
              <div className="Header-star">
                <Icon name="filledStar" />
              </div>
            </NavLink>
          )}
        </div>
        <div className="Header-socials Header-column Header-column--end">
          {links.socials.map(({name, path}) => 
            <a 
              href={path} 
              target="_blank" 
              rel="noreferrer" 
              className="Header-social" 
              key={name}
            >
              {name}
              <svg className="Header-icon" width="74" height="30" viewBox="0 0 74 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0448 24.5919C15.1704 24.5919 2.98098 23.2757 1.21866 18.0107C-0.984243 11.4295 13.7018 4.19023 34.2622 1.88681C43.0738 0.899633 70.8904 -0.806796 72.813 6.82271C75.1643 16.1538 56.3551 28.1838 14.5 29.5" stroke="#222222" strokeLinecap="round"/>
              </svg>
            </a>
          )}
        </div>
        <div className="Header-mobile Header-column Header-column--end">
          <button type="button" className={headerButtonClasses} onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
            <span className="Header-buttonLine"></span>
            <span className="Header-buttonLine"></span>
          </button>
        </div>
      </div>
      {
        mobileMenuVisible && (
          <MobileNavigation>
            <div className="MobileNavigation-wrapper Page">
              <div className="MobileNavigation-links">
                {
                  links.navigation.map((link) =>
                    <NavLink 
                      to={link.path} 
                      key={link.path} 
                      className="MobileNavigation-link"
                    >
                      {link.name}
                      <div className="MobileNavigation-linkIcon">
                        <Icon name="curve" />
                      </div>
                    </NavLink>
                  )
                }
              </div>
              <div className="MobileNavigation-socials Container">
                {
                  links.socials.map((link) =>
                    <a 
                      href={link.path} 
                      key={link.path} 
                      target="_blank" 
                      rel="noreferrer"
                      className="MobileNavigation-social"
                    >
                      {link.name}
                    </a>
                  )
                }
                <a 
                  href={telegram}
                  target="_blank" 
                  rel="noreferrer"
                  className="MobileNavigation-social"
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
