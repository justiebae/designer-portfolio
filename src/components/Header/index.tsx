import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Header() {

  return (
    <header className="Header">
      <div className="Header-container Container">
        <div className="Header-links">
          <NavLink to="/" className="Header-link">Алиса С.</NavLink>
        </div>
        <div className="Header-links">
          <NavLink to="/about" className="Header-link">Обо мне</NavLink>
          <NavLink to="/projects" className="Header-link">Проекты</NavLink>
          <NavLink to="/contacts" className="Header-link">Контакты</NavLink>
        </div>
        <div className="Header-links">
          <a href="#" target="_blank">Behance</a>
          <a href="#" target="_blank">Dribbble</a>
        </div>
      </div>
    </header>
  )
}
