import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ContactsPage from '../../pages/ContactsPage';
import ProjectsPage from '../../pages/ProjectsPage';
import ProjectPage from '../../pages/ProjectPage';
import NotFoundPage from '../../pages/NotFoundPage';
import './index.scss';

function App() {
  return (
    <div className="App">
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
