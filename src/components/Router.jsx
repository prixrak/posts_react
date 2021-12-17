import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './../routes/index';

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => 
        <Route key={route.path} path={route.path} element={<route.component />} />
      )}
    </Routes>
  );
};

export default Router;