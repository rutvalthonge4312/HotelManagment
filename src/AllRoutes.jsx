import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteLogger from './components/RouteLogger';
import HomePage from './screeens/HomePage';

const AllRoutes = () => {
  return (
    <div>
      <RouteLogger />
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
