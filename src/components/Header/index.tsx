import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import './index.scss';

const links = {
  navigation: [
    { name: 'Обо мне', path: '/about' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Контакты', path: '/contacts' },
  ],
  socials: [
    { name: 'Behance', path: '#' },
    { name: 'Dribbble', path: '#' },
  ]
};

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`Header Header--${theme}`}>
      <div className="Header-container Container">
        <div className="Header-links">
          <NavLink to="/" className="Header-logo">Алиса С.</NavLink>
        </div>
        <div className="Header-links Header-links--center">
          {links.navigation.map(link =>
            <NavLink to={link.path} className="Header-link" key={link.path}>
              <div className="Header-text">
                {link.name}
                <svg className="Header-icon" width="74" height="30" viewBox="0 0 74 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0448 24.5919C15.1704 24.5919 2.98098 23.2757 1.21866 18.0107C-0.984243 11.4295 13.7018 4.19023 34.2622 1.88681C43.0738 0.899633 70.8904 -0.806796 72.813 6.82271C75.1643 16.1538 56.3551 28.1838 14.5 29.5" stroke="#222222" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="Header-star">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0.5C8.20254 4.31355 11.1865 7.29746 15 8C11.1865 8.70254 8.20254 11.6865 7.5 15.5C6.79746 11.6865 3.81355 8.70254 0 8C3.81355 7.29746 6.79746 4.31355 7.5 0.5Z" fill="#222222"/>
                </svg>
              </div>
            </NavLink>
          )}
        </div>
        <div className="Header-links Header-links--end">
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
      </div>
    </header>
  )
}
