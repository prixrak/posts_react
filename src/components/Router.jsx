import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './../routes/index';
import { AuthContext } from './../context/index';
import Posts from './../pages/Posts';
import Login from './../pages/Login';
import Loader from './UI/Loader/Loader';

const Router = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) return <Loader />;
  return (
    isAuth
    ?
    <Routes>
      {
        privateRoutes.map((route) => 
          <Route key={route.path} path={route.path} element={<route.component />} />
        )
      }
      <Route path="*" element={<Navigate to="/posts" />}/>  
    </Routes>
    :
    <Routes>
      {
        publicRoutes.map((route) => 
          <Route key={route.path} path={route.path} element={<route.component />} />
        )
      }
      <Route path="*" element={<Navigate to="/login" />}/>  
    </Routes>
  );
};

export default Router;