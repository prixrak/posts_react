import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';

const Router = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='*' to="/posts" element={<Posts />}/>
  </Routes>
  );
};

export default Router;