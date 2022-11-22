import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BaseLayout from '../../layouts/BaseLayout';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ContactsPage from '../../pages/ContactsPage';
import ProjectsPage from '../../pages/ProjectsPage';
import ProjectPage from '../../pages/ProjectPage';
import NotFoundPage from '../../pages/NotFoundPage';

import './index.scss';

function App(): JSX.Element {
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <div className={`App App--${theme}`}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":slug" element={<ProjectPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
