import { Routes, Route, Navigate } from 'react-router';
import Index from './pages/Index';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyWorks from './pages/MyWorks';
import NotFound from './pages/NotFound';

import React from 'react';
function App() {
  return (
    <Routes>
      <Route path={'/'} exact element={<Navigate to={'/index'} replace />} />
      <Route path={'/index'} element={<Index />} />
      <Route path={'/my-works'} element={<MyWorks />} />

      <Route path={'/about-me'} element={<AboutMe />} />

      <Route path={'/contact-me'} element={<ContactMe />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
